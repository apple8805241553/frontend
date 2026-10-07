#  KrisWu Portfolio

## 使用方式

建議使用 Node.js 24 LTS；專案設定至少需要 Node.js 22.12.0。`frontend` 是純前端專案，資料由本地 Model 提供，不串接 API，也不包含聯絡表單、後端或資料庫。

在這個資料夾開啟 terminal，依需要自行執行：

```powershell
npm install
npm run dev
```

開啟 terminal 顯示的網址，通常為 `http://localhost:5173`。不要直接以瀏覽器開啟原始 `index.html`，它需要 Vite 處理 TSX 與套件 import。

需要驗證或產生部署檔案時：

```powershell
npm run typecheck
npm run build
npm run preview
```

`build` 會先執行 TypeScript 檢查，再產生 `dist`。專案已包含 `package-lock.json`，可使用 `npm ci` 安裝鎖定版本。本次樣式整理只更新 Sass、Bootstrap 的套件設定與 lockfile，沒有安裝套件或執行上述驗證指令。

## 已完成的功能

- 首頁主視覺、React 90%／Angular 70%／Node.js 75% 圓形儀錶板、技能進度條、兩張作品預覽、四段個人經歷時間軸、聯絡資訊與社群頁尾。圓環與長條圖完全離開畫面後重設，重新進入時播放填入動畫，支援 reduced motion。
- 首頁導覽是本地錨點。固定導覽列保留捲動定位空間；手機可展開選單，選取項目、按 Escape 或切回桌面寬度時收合。
- 桌面作品兩欄、交錯時間軸；手機版時間軸與窄螢幕作品改為單欄。聯絡卡片使用置中單欄，保留 Email、電話及社群連結。
- 鍵盤 focus 樣式、Skip link、技能 meter 及 reduced motion 支援。
- 作品列表／詳情保留範本原連結，在新分頁開啟，不代表本專案有這些頁面。
- Email 與電話透過 `mailto:`、`tel:` 連結交由裝置處理，社群連結於新分頁開啟。
- 按鈕操作透過共用 loading 管理；操作超過 0.5 秒才顯示處理提示，成功或失敗後關閉。站內錨點導覽會追蹤平滑捲動的完成時間，外部新分頁的載入進度由瀏覽器處理。

## 修改內容

- `src/models/ResumeModel.ts`：首頁資料型別、姓名、介紹、聯絡資訊、履歷／作品連結、技能比例、經歷、社群目的地及示範年份。共用資料型別、下拉選項與業務常數放在 `models/*Model.ts`，本專案不串接 API。
- `src/modules/Home/`：首頁功能模組。`Home.tsx` 組合首頁，各區塊的 TSX 與同名 `module.scss` 放在同一目錄。
- `src/components/`：共用 Header、Footer、標題與圖示；有自訂樣式的元件搭配同名 `module.scss`。
- `src/styles/global.scss`：全域 SCSS 入口，透過 `@use` 載入下列 partials，僅在 `main.tsx` 引入一次。區塊樣式放在各自的 `module.scss`；目前的斷點是 1000、760、440px。
- `src/styles/_variables.scss`：共用色彩、字體、版面尺寸與導覽高度的 CSS variables。
- `src/styles/_base.scss`：元素預設、全站字體、focus、捲動與 reduced motion。
- `src/styles/_layout.scss`：共用容器與響應式版面。
- `src/styles/_utilities.scss`：輔助 class，例如隱藏的無障礙文字與強調色。
- `src/styles/_components.scss`：共用按鈕與品牌連結樣式。
- `src/styles/_bootstrap.scss`：Bootstrap 的 grid 與 utilities 載入入口。
- 新模組需要頁面路由時，在該模組目錄加入 `<模組名稱>Router.tsx`；目前首頁使用單頁錨點導覽。
- 共用業務函式放在 `src/utils/`；目前沒有需抽出的共用業務函式。元件自己的 Props 與暫時 UI 狀態留在元件內。
- `src/assets/`：本地山景與作品圖。替換圖檔時同步更新 `ResumeModel.ts` 的 imageAlt。

文案刻意保留原範本的英文示範內容。Email、電話、社群網址與 2035 年份也都是示範資料，上線前應改成自己的內容。

## 與範本的差異及未查證部分


- 社群圖示使用本地 SVG 重建。
- 聯絡區塊移除原表單，僅呈現聯絡資訊與社群連結。
- 依已觀察的灰藍底、亮綠強調色、英文標題重建主要風格；區塊尺寸、字型和手機斷點是實作估值，**未查證為原站精確規格，也未做像素級比對**。
- 頁面透過 Google Fonts 載入 Montserrat／Open Sans，這是外部字型請求；無網路時使用 Arial／系統 fallback。背景與作品圖均為本地檔案。
- 範本外部連結沿用前一輪讀取結果，本輪沒有再次確認是否可正常開啟。

生成素材的來源、完整 prompt 與工具模式見 `ASSETS.md`。

## 驗證狀態

本次樣式整理只做原始碼靜態檢查：SCSS 巢狀整理前後的 selector 與宣告、CSS Module 引用、相對 import／圖片路徑、區塊 id 與錨點對應，以及 UTF-8 編碼與套件設定。這些檢查沒有執行 React、Sass 或 TypeScript compiler。

**未執行**套件安裝、專案啟動、TypeScript compiler、build、test 或 lint；桌面／手機實際渲染、互動及外部連結仍需啟動後驗收。不能將此狀態視為已通過 build 或瀏覽器測試。

SCSS Module 與預處理器支援參考 [Vite 官方文件](https://vite.dev/guide/features.html#css-pre-processors)，Bootstrap 的選擇性載入方式參考 [Bootstrap Sass 文件](https://getbootstrap.com/docs/5.3/customize/sass/)。


## 靜態網站部署

本專案僅部署前端。執行 `npm run build` 後，將 `dist` 目錄交由靜態網站服務託管即可，不需要 API 服務或資料庫。

部署目標為 [GitHub Pages](https://apple8805241553.github.io/frontend/)，由 `.github/workflows/deploy-pages.yml` 在 `main` 分支收到 push 時自動執行 `npm ci`、`npm run build`，再發布 `dist`。Repository 的 Settings → Pages → Source 使用 GitHub Actions。

`vite.config.ts` 的 `base` 設為 `/frontend/`，對應 repository 網址的子路徑。頭貼保留在 `src/assets/avatar.webp`，透過一般 import 載入，部署後會使用打包產生的圖片 URL。

2026-10-07 已執行 `npm.cmd run build` 並成功產生 `dist`，包含 TypeScript 檢查。Bootstrap 的 Sass deprecation warnings 仍會顯示，但本次沒有造成建置失敗；未另外執行 test 或 lint。

工具版本參考：[React 19.2](https://react.dev/blog/2025/10/01/react-19-2)、[TypeScript 5.9](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-9.html)、[Vite Node.js 要求](https://vite.dev/guide/)。套件版本使用相容範圍，實際解析版本以首次安裝產生的 lockfile 為準。
