import styles from "./SectionHeading.module.scss";
interface SectionHeadingProps {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
}

/** 呈現首頁共用的編號標題及副標題，保留可供區塊引用的 heading id。 */
export default function SectionHeading({ id, number, title, subtitle }: SectionHeadingProps) {
  return (
    <div className={styles.sectionHeading}>
      <h2 id={id}><span className={styles.sectionNumber}>{number}</span> {title}</h2>
      {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
    </div>
  );
}
