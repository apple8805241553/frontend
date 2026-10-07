import { useEffect } from "react";

/** 追蹤本站錨點及自訂 px 捲動的完成時間；捲動停止、頁面離開或卸載時關閉對應 loading。 */
export default function useNavigationLoading(startLoading: () => () => void) {
  useEffect(() => {
    let frameId = 0;
    let finishLoading: (() => void) | undefined;

    function finishNavigation() {
      window.cancelAnimationFrame(frameId);
      finishLoading?.();
      finishLoading = undefined;
    }

    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.hasAttribute("download") || (anchor.target && anchor.target !== "_self")) return;

      const destination = new URL(anchor.href);
      if (destination.origin !== window.location.origin || destination.pathname !== window.location.pathname || destination.search !== window.location.search || !destination.hash) return;

      let targetId: string;
      try {
        targetId = decodeURIComponent(destination.hash.slice(1));
      } catch {
        return;
      }
      if (!document.getElementById(targetId)) return;

      finishNavigation();
      finishLoading = startLoading();
      let lastX = window.scrollX;
      let lastY = window.scrollY;
      let lastMovement = performance.now();

      const scrollDistancePx = Number(anchor.dataset.scrollDistancePx);
      if (Number.isFinite(scrollDistancePx) && scrollDistancePx >= 0) {
        // 自訂距離以目前位置為起點，攔截原生錨點跳轉，避免兩次捲動互相覆蓋。
        event.preventDefault();
        window.scrollBy({
          top: scrollDistancePx,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        });
      }

      function observeScroll(timestamp: number) {
        if (window.scrollX !== lastX || window.scrollY !== lastY) {
          lastX = window.scrollX;
          lastY = window.scrollY;
          lastMovement = timestamp;
        }

        // 原生平滑捲動不會回傳 Promise，以短暫停止移動判斷完成，也涵蓋停留在原位置的導覽。
        if (timestamp - lastMovement >= 120) {
          finishNavigation();
        } else {
          frameId = window.requestAnimationFrame(observeScroll);
        }
      }

      frameId = window.requestAnimationFrame(observeScroll);
    }

    document.addEventListener("click", handleClick);
    window.addEventListener("pagehide", finishNavigation);
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("pagehide", finishNavigation);
      finishNavigation();
    };
  }, [startLoading]);
}
