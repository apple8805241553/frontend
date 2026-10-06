import { profile, projects } from "../../../models/ResumeModel";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import styles from "./Portfolio.module.scss";

/** 呈現兩張作品預覽；完整作品內容目前連至 Wix 範本的對應頁面。 */
export default function Portfolio() {
  return (
    <section id="portfolio" className={`${styles.portfolio} page-container`} aria-labelledby="portfolio-title" tabIndex={-1}>
      <SectionHeading id="portfolio-title" number="02" title="PORTFOLIO" />
      <p className={styles.portfolioSubtitle}>
        MY LATEST WORK. <a href={profile.portfolioUrl} target="_blank" rel="noopener noreferrer">SEE MORE &gt;<span className="sr-only"> (opens template portfolio in a new tab)</span></a>
      </p>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <a className={styles.projectCard} key={project.id} href={project.href} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.imageAlt} width={1254} height={1254} loading="lazy" decoding="async" />
            <div className={styles.projectOverlay}>
              <h3>{project.title}</h3>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </div>
            <span className="sr-only">Open {project.title} on the template site in a new tab</span>
          </a>
        ))}
      </div>
    </section>
  );
}
