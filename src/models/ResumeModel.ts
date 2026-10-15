import project01Image from "../assets/project-01.png";
import project02Image from "../assets/project-02.png";
import avatarImage from "../assets/avatar.webp";
/** 首頁錨點；每個值對應一個區塊的 id。 */
export type SectionId = "home" | "professional" | "portfolio" | "experience" | "contact";

export interface NavigationItemModel {
  id: SectionId;
  label: string;
}

export interface IntroductionGroupModel {
  id: string;
  title: string;
  points: readonly { label?: string; text: string }[];
}

/** 技能進度資料；percent 使用 0～100 的百分比。 */
export interface SkillModel {
  name: string;
  percent: number;
}

export interface ProjectModel {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageBackground: string;
  videoUrl: string;
}

export interface ExperienceModel {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string;
}

/** 對應首頁使用的社群圖示名稱。 */
export type SocialPlatform = "linkedin" | "github" | "facebook";

export interface SocialLinkModel {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export const profile = {
  name: " KrisWu",
  firstName: "吳Wu",
  lastName: "宗翰",
  initials: "K",
  profession: "Frond-End DEVELOPER",
  //未使用about
  about:
    "感謝你瀏覽我的作品集！我目前專注於 Web 前端開發與數位產品設計。無論你是尋找專案合作、技術交流，或是招募相關合作機會，都歡迎透過電話或Email與我聯繫。我會在收到訊息後的24～48小時內 回覆。",
  contactIntroduction:
    "感謝你瀏覽我的個人網站！我目前專注於 Web 前端開發與數位產品設計。無論你是尋找專案合作、技術交流，或是招募相關合作機會，都歡迎透過下方表單或Email與我聯繫。我會在收到訊息後的24～48小時內回覆。",
  email: "apple8805241553@gmail.com",
  phone: "0983-829-798",
  resumeUrl:
    "https://65c9126c-4af6-4899-b621-554d1fad7a0c.filesusr.com/ugd/84770f_a594f88e0dd34b7ca253388dd6f4c9bb.pdf",
  copyrightYear: 2026,
  avatarSrc: avatarImage,
};

export const navigation: readonly NavigationItemModel[] = [
  { id: "home", label: "HOME" },
  { id: "professional", label: "PROFESSIONAL" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "portfolio", label: "PORTFOLIO" },
  { id: "contact", label: "CONTACT" },
];

export const introduction = {
  title: "個人簡介",
  quote: "提高效率，就是增加自己的價值",
  facts: [
    { label: "目前職務", value: "前端工程師", detail: "" },
    { label: "所在地", value: "高雄市前鎮區", detail: "" },
    { label: "希望職稱", value: "前端工程師", detail: "" },
  ],
  paragraphs: [
    "我是一名以前端為核心、以全端開發能力為目標的工程師，也能與 PM、後端工程師協作推進專案。主要使用 React，擁有 ERP 系統維護、管理與新專案開發經驗。",
    "自我作品能獨立完成小型前後端整合與部署（GitHub Pages、Vercel、Render）。",
  ],
};

export const introductionGroups: readonly IntroductionGroupModel[] = [
  {
    id: "technical-skills",
    title: "技術能力",
    points: [
      { label: "前端開發", text: "React、HTML、CSS、JavaScript、SCSS、Bootstrap。" },
      { label: "後端與資料庫", text: "Node.js、MySQL。" },
      { label: "功能整合", text: "RESTful API、WebSocket 串接及編輯器功能開發。" },
      { label: "版本控制", text: "Git 基本指令、分支操作與 Git Flow 觀念。" },
      { label: "設計與安全", text: "Design Pattern、職責分離、模組化與基本前端資安觀念。" },
    ],
  },
  {
    id: "development-quality",
    title: "開發流程與品質",
    points: [
      { text: "先撰寫規格書，釐清業務邏輯、功能邊界與程式結構，再進入實作。" },
      { text: "重視程式碼的可讀性與可維護性，透過 Code Review 與必要的重構改善品質。" },
      { text: "依專案情境進行 Trade-off，衡量時程、實作複雜度、修改風險與維護成本。" },
      { text: "評估設計模式與抽象化的適用性，避免過度設計。" },
    ],
  },
  {
    id: "ai-collaboration",
    title: "AI 協作能力",
    points: [
      { text: "使用過 Codex、Claude Code，協助分析問題、比較方案與開發功能。" },
      { text: "透過 AGENTS.md 建立開發規範，明確定義架構限制與修改原則。" },
      { text: "撰寫 Skill，整理工作流程、程式碼規範與檢查重點。" },
      { text: "提供明確需求、上下文與錯誤回報，引導 AI 修正產出。" },
      { text: "檢視程式邏輯與影響範圍，理解執行流程後再採用，保留技術判斷與品質控管。" },
    ],
  },
  {
    id: "teamwork",
    title: "團隊溝通與問題解決",
    points: [
      { text: "與 PM 釐清核心需求、優先順序及交付範圍。" },
      { text: "與後端工程師確認 API 規格、資料流程與錯誤處理方式。" },
      { text: "遇到 Bug 時，整理重現步驟，依專案結構追查原因，區分已知資訊與待驗證假設。" },
    ],
  },
];

/** 新增技術的 percent 為暫定展示值，既有技術沿用原本分數。 */
export const technologyGroups = {
  frontend: [
    { name: "HTML5", percent: 80 },
    { name: "CSS3", percent: 80 },
    { name: "JavaScript (ES6+)", percent: 85 },
    { name: "React", percent: 90 },
    { name: "Bootstrap", percent: 78 },
    { name: "Angular", percent: 70 },
  ],
  backend: [
    { name: "Node.js", percent: 75 },
    { name: "MySQL", percent: 72 },
    { name: "RESTful API", percent: 80 },
  ],
  tools: [
    { name: "Git/GitHub", percent: 82 },
    { name: "Figma", percent: 78 },
    { name: "Postman", percent: 80 },
    { name: "Claude Code", percent: 83 },
    { name: "Cursor", percent: 76 },
    { name: "Codex", percent: 88 },
  ],
} satisfies Record<string, readonly SkillModel[]>;

export const projects: readonly ProjectModel[] = [
  {
    id: "project-01",
    title: "Food",
    image: project01Image,
    imageAlt: "Food 美食網站首頁，展示料理分類與推薦餐點",
    imageWidth: 1863,
    imageHeight: 850,
    imageBackground: "#fffaf1",
    videoUrl: "https://www.youtube.com/watch?v=tZQFh2Nknjw",
  },
  {
    id: "project-02",
    title: "TWSE Dashboard",
    image: project02Image,
    imageAlt: "TWSE Dashboard 個人市場觀測站入口畫面",
    imageWidth: 1910,
    imageHeight: 877,
    imageBackground: "#101615",
    videoUrl: "https://www.youtube.com/watch?v=JggkWjDMgIY",
  },
];

export const experiences: readonly ExperienceModel[] = [
  {
    id: "sushi-work",
    period: "2022–2024",
    company: "亞洲藏壽司",
    role: "小主管",
    description: "升任小主管，帶領五至十人團隊，累積管理與臨場應變的經驗。",
  },
  {
    id: "tsmc-operator",
    period: "2024–2025 期間",
    company: "台積電（外包）",
    role: "作業員",
    description: "以外包作業員身分於台積電工作，負責天車調整作業，累積現場設備操作與調整的相關實務經驗。",
  },
  {
    id: "military-iii-training",
    period: "2024–2025 期間",
    company: "兵役與資策會",
    role: "服役與前端技術進修",
    description: "完成為期四個月的兵役後，進入資策會學習前端技術，建立網頁開發與介面實作基礎，逐步培養前端工程所需的應用能力。",
  },
  {
    id: "frontend-rd-engineer",
    period: "2026 ~",
    company: "前端 RD 工程師",
    role: "ERP 專案維護與開發",
    description: "擔任前端 RD 工程師，參與 ERP 專案維護與開發，透過功能調整及新增功能實作，累積系統開發與維護的相關實務經驗。",
  },
];

export const socialLinks: readonly SocialLinkModel[] = [
  { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/%E5%AE%97%E7%BF%B0-%E5%90%B3-9aa1a6360/" },
  { platform: "github", label: "GitHub", href: "https://github.com/apple8805241553" },
  { platform: "facebook", label: "Facebook", href: "https://www.facebook.com/profile.php?viewas=100000686899395&id=100003902187438" },
];
