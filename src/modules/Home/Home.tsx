import Header from "../../components/Header/Header";
import Introduction from "./Introduction/Introduction";
import Hero from "./Hero/Hero";
import Professional from "./Professional/Professional";
import Portfolio from "./Portfolio/Portfolio";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.scss";

/** 組合首頁區塊與共用 UI，維持單頁錨點導覽。 */
const Home = () => {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Introduction />
        <Professional />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
