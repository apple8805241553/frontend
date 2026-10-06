// #region React Core
import { useEffect, useRef, useState } from "react";
// #endregion

// #region 資料與元件
import { navigation, profile } from "../../models/ResumeModel";
import type { SectionId } from "../../models/ResumeModel";
import BrandMark from "../BrandMark/BrandMark";
import LoadingButton from "../LoadingButton/LoadingButton";
import styles from "./Header.module.scss";
// #endregion

/** 提供區塊導覽、目前閱讀位置與可用鍵盤操作的手機選單。 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    let observer: IntersectionObserver | undefined;

    function observeSections() {
      observer?.disconnect();
      const headerHeight = window.matchMedia("(min-width: 761px)").matches ? 88 : 72;
      const bottomMargin = Math.max(0, window.innerHeight - headerHeight - 120);

      // 用 px 設定頁面上方的閱讀區域；rootMargin 的百分比依寬度計算，寬螢幕可能造成區域消失。
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) setActiveSection(entry.target.id as SectionId);
          }
        },
        { rootMargin: `-${headerHeight}px 0px -${bottomMargin}px 0px`, threshold: 0 },
      );

      for (const item of navigation) {
        const section = document.getElementById(item.id);
        if (section) observer.observe(section);
      }
    }

    observeSections();
    window.addEventListener("resize", observeSections);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", observeSections);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    // 切回桌面寬度時收合選單，避免之後回到手機版仍維持展開。
    const desktopQuery = window.matchMedia("(min-width: 761px)");
    function handleDesktopChange(event: MediaQueryListEvent) {
      if (event.matches) setIsMenuOpen(false);
    }

    document.addEventListener("keydown", handleEscape);
    desktopQuery.addEventListener("change", handleDesktopChange);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.headerInner} page-container`}>
        <a className="brand-link" href="#home" aria-label={`${profile.name} — home`} onClick={() => setIsMenuOpen(false)}>
          <BrandMark />
        </a>
        <LoadingButton
          className={`${styles.menuToggle} ${isMenuOpen ? styles.isOpen : ""}`}
          type="button"
          ref={menuButtonRef}
          aria-controls="site-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsMenuOpen((previous) => !previous)}
        >
          <span />
          <span />
          <span />
        </LoadingButton>
        <nav id="site-navigation" className={`${styles.siteNavigation} ${isMenuOpen ? styles.isOpen : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? "location" : undefined}
              onClick={() => {
                setActiveSection(item.id);
                setIsMenuOpen(false);
                // 選單收合後把焦點移到目標區塊，避免鍵盤焦點停在隱藏的連結。
                document.getElementById(item.id)?.focus({ preventScroll: true });
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
