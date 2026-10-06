import { useEffect, useRef, useState } from "react";

/**
 * 觀察元素是否進入畫面，以便重播捲動動畫。
 * @returns 元素 ref 與可見狀態；露出至少 20% 時啟用，完全離開畫面後重設。
 * 不支援 IntersectionObserver 時直接顯示，元件卸載時解除觀察。
 */
export default function useInView<T extends HTMLElement>() {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // 完全離開後才重設，避免在啟動門檻附近捲動時反覆中斷動畫。
          if (!entry.isIntersecting) {
            setIsVisible(false);
          } else if (entry.intersectionRatio >= 0.2) {
            setIsVisible(true);
          }
        }
      },
      { threshold: [0, 0.2] },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { elementRef, isVisible };
}
