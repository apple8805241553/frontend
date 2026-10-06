import { profile } from "../../../models/ResumeModel";
import styles from "./Hero.module.scss";

/** 呈現範本的三行姓名主視覺與職稱；背景由 SCSS 使用本地素材。 */
export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title" tabIndex={-1}>
      <div className={`page-container ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <h1 id="hero-title">
            <span>I<span className="accent">’</span>M</span>
            <span>{profile.firstName}</span>
            <span>{profile.lastName}<span className="accent">.</span></span>
          </h1>
          <p className={styles.heroProfession}>{profile.profession}</p>
        </div>
      </div>
      <a className={styles.scrollCue} href="#professional" aria-label="Scroll to professional skills">
        <span className={styles.scrollCueLine} />
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </a>
    </section>
  );
}
