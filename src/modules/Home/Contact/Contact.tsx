// #region 資料與元件
import { profile, socialLinks } from "../../../models/ResumeModel";
import SocialIcon from "../../../components/SocialIcon/SocialIcon";
import styles from "./Contact.module.scss";
// #endregion

/** 呈現聯絡資訊與社群連結，讓訪客透過外部管道聯繫。 */
export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection} aria-labelledby="contact-title" tabIndex={-1}>
      <div className={styles.contactCard}>
        <div className={styles.contactCopy}>
          <h2 id="contact-title">CONTACT</h2>
          <p>{profile.contactIntroduction}</p>
          <a className={styles.contactEmail} href={`mailto:${profile.email}`}>{profile.email}</a>
          <p className={styles.contactPhone}>Tel: <a href={`tel:${profile.phone.replace(/-/g, "")}`}>{profile.phone}</a></p>
        </div>
        <ul className={styles.socialLinks} aria-label="Social links">
          {socialLinks.map((link) => (
            <li key={link.platform}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${link.label} (opens in a new tab)`}>
                <SocialIcon platform={link.platform} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
