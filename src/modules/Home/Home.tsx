import Header from "../../components/Header/Header";
import Hero from "./Hero/Hero";
import Professional from "./Professional/Professional";
import Portfolio from "./Portfolio/Portfolio";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.scss";

/** 組合首頁模組的區塊與共用 UI，維持原本的單頁錨點導覽。 */
export default function Home() {
  return (
    <>
      <a className={styles.skipLink} href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Professional />
        <div className={styles.workBackground}>
          <Portfolio />
          <Experience />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
