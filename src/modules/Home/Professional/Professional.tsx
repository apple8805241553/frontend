import { skills, technologySkills } from "../../../models/ResumeModel";
import useInView from "../../../hooks/useInView";
import CircularGauge from "../../../components/CircularGauge/CircularGauge";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import styles from "./Professional.module.scss";

/** 呈現技術圓形儀錶板與技能進度條，重新進入畫面時重播填入動畫。 */
export default function Professional() {
  const { elementRef, isVisible } = useInView<HTMLUListElement>();

  return (
    <section id="professional" className={styles.professional} aria-labelledby="professional-title" tabIndex={-1}>
      <div className="page-container">
        <div className={styles.skillsContent}>
          <SectionHeading id="professional-title" number="01" title="PROFESSIONAL" subtitle="MY KNOWLEDGE LEVEL IN SOFTWARE" />
          <ul className={styles.technologyDashboard} aria-label="Development technology proficiency">
            {technologySkills.map((skill) => (
              <li key={skill.name}>
                <CircularGauge label={skill.name} percent={skill.percent} />
              </li>
            ))}
          </ul>
          <ul
            ref={elementRef}
            className={`${styles.skillsList} ${isVisible ? styles.isVisible : ""}`}
            aria-label="Software proficiency"
          >
            {skills.map((skill) => (
              <li className={styles.skillRow} key={skill.name}>
                <span className={styles.skillName}>{skill.name}</span>
                <div
                  className={styles.skillTrack}
                  role="meter"
                  aria-label={skill.name}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={skill.percent}
                  aria-valuetext={`${skill.percent}%`}
                >
                  <span className={styles.skillFill} style={{ width: `${skill.percent}%` }} />
                </div>
                <span className={styles.skillPercent} aria-hidden="true">{skill.percent}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
