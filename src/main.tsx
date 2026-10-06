import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.scss";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("找不到 React 根元素，請排查main.tsx");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
