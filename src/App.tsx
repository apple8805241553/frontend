import Home from "./modules/Home/Home";
import LoadingProvider from "./components/LoadingProvider/LoadingProvider";

/** 載入首頁模組；新增頁面路由時由對應模組的 Router 負責設定。 */
export default function App() {
  return (
    <LoadingProvider>
      <Home />
    </LoadingProvider>
  );
}
