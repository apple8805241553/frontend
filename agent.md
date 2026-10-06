# codex-generic

# codex.md

## 本專案的檔案與樣式規範

- 本專案原始碼、註解與文件不使用 Emoji。
- 資料型別、共用固定資料、下拉選項與業務常數放在 `src/models/*Model.ts`；資料 interface 使用 `Model` 後綴。
- API 呼叫與相關處理集中在 `src/services/*Service.ts`，request／response 型別放在 Model。
- 樣式以 SCSS 為主、Bootstrap 為輔，使用巢狀結構整理子元素、狀態與偽元素，避免不必要的深層巢狀。
- 功能模組放在 `src/modules/<模組名稱>/`，TSX 與對應的 `<名稱>.module.scss` 放在同一個目錄。
- 模組需要頁面路由時，將路由設定放在同目錄的 `<模組名稱>Router.tsx`。目前首頁使用單頁錨點導覽，尚未加入 Router。
- 共用 UI 元件放在 `src/components/<元件名稱>/`，需要自訂樣式時搭配同名 `module.scss`。
- 具有業務邏輯且會被重用的函式放在 `src/utils/`；只服務單一功能的函式留在該模組。
- 全域變數、基礎樣式與共用樣式放在 `src/styles/`。Bootstrap 目前只載入 grid 與 utilities，按需求擴充。
- 全域 SCSS 統一由 `src/styles/global.scss` 透過 `@use` 載入，僅在 `main.tsx` 引入一次。
- `_variables.scss` 管理共用 CSS variables；`_base.scss` 管理元素預設、字體、focus 與 reduced motion；`_layout.scss` 管理共用版面；`_utilities.scss` 管理輔助 class；`_components.scss` 管理共用 UI 樣式；`_bootstrap.scss` 管理 Bootstrap 載入。
- 各功能模組的樣式留在同名 `module.scss`；有實際共用需求才移入全域 SCSS，避免全域樣式耦合到特定模組。
- 元件自己的 Props 型別與暫時 UI 狀態留在元件內；不要為分類而建立空目錄或空檔案。
- 按鈕使用共用 `LoadingButton`；表單與非同步操作以 `useLoading().runWithLoading` 包覆，等待超過 500ms 時顯示 `VisualLoading`，操作成功或失敗後自動關閉。站內錨點導覽追蹤捲動完成時間；外部新分頁的載入進度無法由本站追蹤。

## 專案定位

本文件為 **通用型前端專案協作準則**，適用於 React、Vue、Angular、TypeScript、JavaScript 等前端專案。進行分析、修改、除錯、重構、Figma 對應實作與 API 串接時，應優先遵守本文件。

## 一、溝通與回覆規則

- 始終使用繁體中文（台灣）回覆。
- 技術名詞、套件名稱、API 名稱、Class、Interface、Hook 等保留英文，不強行翻譯。
- 所有新增或修改的文字檔，預設使用 **UTF-8 without BOM**。
- 不要將檔案轉成 Big5、ANSI、系統預設編碼或其他非 UTF-8 編碼。
- 回覆應簡潔、有條理；在提供程式碼前，先說明核心邏輯。
- 問題資訊不足時，應明確指出缺少的資訊；若不影響主要實作，可採合理假設並清楚註明。
- 不要虛構需求、資料結構、API 行為、設計稿規格或既有專案規則。

## 二、通用程式碼規則

- 前端專案（Angular、React、Vue、TypeScript、JavaScript）的變數與函式命名使用 `camelCase`。
- Component、Class、Interface、Type、Enum 使用 `PascalCase`。
- 常數可依專案既有規範使用 `camelCase` 或 `UPPER_SNAKE_CASE`，不要為統一格式任意修改既有命名。
- 修改程式碼時，應優先沿用專案現有架構、命名、排版與套件用法。
- 不要為了重構、補註解或格式統一，修改與目前任務無關的程式碼。
- 優先採用清楚、簡單、容易維護的做法，避免不必要的抽象化與過度工程。
- 若專案已有共用元件、共用 Hook、共用型別、共用 Service、共用常數或共用樣式，應優先重用。

## 三、React / TypeScript 檔案結構

新增 React Component 時，預設依照以下區塊順序整理；既有檔案則優先維持原本結構，不要為了套用模板而大幅重排。

```tsx
//* =========================================================================
//* Component: Template
//* Description: 元件用途說明
//* =========================================================================

// #region React Core
import { useEffect, useMemo, useState } from "react";
// #endregion

// #region Third-party
// #endregion

// #region Local Assets & Components
// #endregion

const Template = () => {
  // #region Local State
  // #endregion

  // #region Hooks
  // #endregion

  // #region API Services
  // #endregion

  // #region Logic / Handlers
  // #endregion

  // #region Render UI
  return <div id="template-root">Template</div>;
  // #endregion
};

export default Template;
```

### 區塊規則

- 沒有內容的區塊可以省略，不要保留大量空白區塊。
- import 應依 React Core、Third-party、Local modules 的順序整理。
- 不要只為符合模板而新增未使用的 import。
- 頁面邏輯較少時，可適度簡化區塊，避免形式大於實質。

## 四、註解規則

### 4.1 註解語言與原則

- 所有新增註解使用繁體中文。
- 技術名詞與程式識別名稱保留英文。
- 註解應說明業務目的、設計原因、限制條件、副作用或不直觀行為。
- 不要只把程式碼逐字翻譯成中文。
- 不要加入無法由目前程式碼或需求確認的推測性註解。
- 修改既有行為時，應同步更新相關註解；過時或與實作矛盾的註解應移除。
- 不要為了新增註解而改變既有邏輯。

### 4.2 需要 JSDoc 的項目

新增或實質修改以下項目時，應補上繁體中文 JSDoc：

- 匯出的 Component
- 自訂 Hook
- 匯出的工具函式
- 公開的 Service 方法
- 可重複使用的共用函式
- 與業務規則相關的輔助函式
- 參數、回傳值或副作用不容易直接理解的函式
- 匯出的 interface / type（若其欄位意義不直觀）

JSDoc 應視情況包含：

- 用途
- 重要參數
- 回傳值
- 副作用
- 例外或限制條件

### 4.3 需要行內註解的情況

對不容易直接理解的邏輯加上行內註解，尤其是：

- 權限檢查
- 路由與頁面導向判斷
- 表單驗證規則
- API 請求條件與錯誤處理
- 時區與日期轉換
- fallback 或相容性處理
- 複雜的資料轉換
- props、URL query、localStorage、全域狀態與 API 資料同步
- `useEffect` 中的重要副作用
- `useMemo`、`useCallback` 的必要性或效能考量
- 不直觀的 RxJS operator 選擇與流程控制

### 4.4 不需要註解的情況

不要替明顯易懂的程式碼加註解，例如：

- 簡單的 `useState` 宣告
- 一般 JSX 結構
- 單純的 props 傳遞
- 明確的變數指定
- 名稱已能清楚表達用途的函式或條件
- import、return、迴圈遞增等語法本身

## 五、React 開發規則

- Component 應維持單一責任，過大的頁面邏輯應適度拆分。
- 不要在 JSX 中放置過長或重複的商業邏輯。
- 自訂 Hook 應封裝可重複使用的狀態或副作用，不要只為拆檔而建立。
- `useEffect` dependency 應完整且符合實際依賴。
- 除非有明確理由，否則不要停用 `react-hooks/exhaustive-deps`。
- 若必須停用規則，需加註解說明原因。
- 不要無條件使用 `useMemo` 或 `useCallback`；只有在確實有穩定引用或效能需求時使用。
- API 呼叫原則上放在頁面、Feature Hook 或 Service 層；通用 UI Component 不應直接綁定特定業務 API。
- 通用 Modal 只負責可重用的 UI 與互動流程；僅當該 Modal 在所有使用場景都執行同一個完整業務行為時，才可內聚對應 API。

## 六、執行與驗證規則

- 除非使用者明確要求，否則不要主動執行 `build`、`test`、`lint`、啟動專案或安裝套件。
- 完成修改前，至少進行靜態檢查：
  - 確認語法與型別合理
  - 確認 import 與變數沒有明顯未使用
  - 確認修改範圍沒有影響無關功能
  - 確認註解與實作一致
- 若使用者要求執行驗證，應回報實際執行的命令與結果。
- 不得聲稱已通過尚未執行的測試、建置或檢查。
- 若任務牽涉設計稿、API schema、商業規則或權限邏輯，未實際查證之處應明確標示為「未查證」或「推測」。

## 七、任務執行方式

- 非瑣碎任務應先整理實作方向，再開始修改。
- 遇到需求與現有架構衝突時，應優先說明風險並採用影響範圍較小的方案。
- Bug 修復應先找出根因，不要只掩蓋錯誤現象。
- 修復時可根據錯誤訊息、日誌與現有程式碼自主分析，不需等待逐步指示。
- 不要建立 `tasks/lessons.md`、額外規則檔或追蹤文件，除非使用者明確要求。
- 不要假設一定能使用 Subagent、Plan Mode 或其他特定工具；應依目前環境可用能力完成任務。
- 若使用者提供 Figma URL、Node 或設計稿，應優先透過可用的 Figma MCP 或專案脈絡進行分析；若無法取得結構化資訊，不得把視覺猜測說成已確認規格。

## 八、完成前檢查

提交結果前確認：

1. 修改內容符合目前需求，沒有擴大範圍。
2. 新增或實質修改的共用函式、Hook、公開方法已補上必要 JSDoc。
3. 非直觀的業務邏輯已補上繁體中文註解。
4. 沒有替明顯程式碼加入冗餘註解。
5. 沒有改動無關邏輯或建立不必要抽象。
6. 沒有執行使用者未要求的 build、test、lint 或安裝指令。
7. 未執行的驗證不應被描述為已完成。
8. 若涉及設計稿、API 契約或商業規則，已明確區分已確認、推測與未查證內容。
