import {  profile } from "../../../models/ResumeModel";
import styles from "./Hero.module.scss";

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
        <div className={styles.heroPortrait}>
          {profile.avatarSrc ? (
            <img
              className={styles.portraitImage}
              src={profile.avatarSrc}
              alt={`${profile.name.trim()} 的個人頭貼`}
              width={320}
              height={320}
            />
          ) : (
            <div className={styles.portraitPlaceholder}>
              <svg viewBox="0 0 96 96" aria-hidden="true">
                <circle cx="48" cy="32" r="15" />
                <path d="M20 80v-7a28 28 0 0 1 56 0v7" />
              </svg>
              <span>個人頭貼</span>
            </div>
          )}
        </div>
      </div>
      <a className={styles.scrollCue} href="#professional" aria-label="Scroll down">
        <span className={styles.scrollCueLine} />
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </a>
    </section>
  );
}
