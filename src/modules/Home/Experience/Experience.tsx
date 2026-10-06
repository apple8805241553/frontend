import { experiences } from "../../../models/ResumeModel";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import styles from "./Experience.module.scss";

/** 依資料順序呈現個人經歷時間軸；沒有提供描述時省略段落，手機版改為單欄。 */
export default function Experience() {
  return (
    <section id="experience" className={`${styles.experience} page-container`} aria-labelledby="experience-title" tabIndex={-1}>
      <SectionHeading id="experience-title" number="03" title="EXPERIENCE" />
      <ol className={styles.timeline}>
        {experiences.map((experience) => (
          <li className={styles.timelineItem} key={experience.id}>
            <span className={styles.timelineDot} aria-hidden="true" />
            <div className={styles.timelineContent}>
              <p className={styles.timelinePeriod}>{experience.period}</p>
              <h3>{experience.company}</h3>
              <p className={styles.timelineRole}>{experience.role}</p>
              {experience.description && <p className={styles.timelineDescription}>{experience.description}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
