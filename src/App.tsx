import Home from "./modules/Home/Home";
import LoadingProvider from "./components/LoadingProvider/LoadingProvider";
import PageParticles from "./components/PageParticles/PageParticles";
import styles from "./App.module.scss";

/** 在 App 層提供全域粒子背景與 loading，再載入頁面模組。 */
const App = () => {
  return (
    <LoadingProvider>
      <div className={styles.app}>
        <PageParticles />
        <Home />
      </div>
    </LoadingProvider>
  );
};

export default App;
