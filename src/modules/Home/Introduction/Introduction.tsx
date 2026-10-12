import { introduction, introductionGroups } from "../../../models/ResumeModel";
import styles from "./Introduction.module.scss";

const Introduction = () => {


  return (
    <section id="home" className={styles.introduction} aria-labelledby="introduction-title" tabIndex={-1}>
      <div className={`${styles.introductionContent} page-container`}>
        <p className={styles.eyebrow}>ABOUT ME</p>
        <h1 id="introduction-title" className={styles.title}>{introduction.title}</h1>
        <blockquote className={styles.quote}>
          <p>“{introduction.quote}”</p>
        </blockquote>
        <dl className={styles.facts}>
          {introduction.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>
                <strong>{fact.value}</strong>
                {fact.detail && <span>{fact.detail}</span>}
              </dd>
            </div>
          ))}
        </dl>
        <div className={styles.summary}>
          {introduction.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className={styles.capabilityGrid}>
          {introductionGroups.map((group) => (
            <article className={styles.capabilityCard} key={group.id} aria-labelledby={`${group.id}-title`}>
              <h2 id={`${group.id}-title`}>{group.title}</h2>
              <ul>
                {group.points.map((point) => (
                  <li key={point.text}>
                    {point.label && <strong>{point.label}：</strong>}
                    {point.text}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Introduction;
