import { profile } from "../../models/ResumeModel";
import BrandMark from "../BrandMark/BrandMark";
import styles from "./Footer.module.scss";

/** 顯示範本示範年份與回到首頁的連結，註明這是 React 重建版本。 */
export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={`page-container ${styles.footerInner}`}>
        <a className="brand-link" href="#home" aria-label="Back to top"><BrandMark /></a>
        <p>© {profile.copyrightYear} by {profile.name}. <span className={styles.footerCredit}>React template recreation.</span></p>
        <a className={styles.backToTop} href="#home" aria-label="Back to top">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 14 6-6 6 6" /></svg>
        </a>
      </div>
    </footer>
  );
}
