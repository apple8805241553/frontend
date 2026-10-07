import project01Image from "../assets/project-01.png";
import project02Image from "../assets/project-02.png";
import avatarImage from "../assets/avatar.webp";
/** 首頁錨點；每個值對應一個區塊的 id。 */
export type SectionId = "home" | "professional" | "portfolio" | "experience" | "contact";

export interface NavigationItemModel {
  id: SectionId;
  label: string;
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
  href: string;
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
  portfolioUrl: "https://www.wix.com/demone2/ux-ui-designer-resum/portfolio",
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

export const technologySkills: readonly SkillModel[] = [
  { name: "React", percent: 90 },
  { name: "Angular", percent: 70 },
  { name: "Node.js", percent: 75 },
];

export const skills: readonly SkillModel[] = [
  { name: "JAVASCRIPT", percent: 85 },
  { name: "HTML ", percent: 80 },
  { name: "CSS && SCSS", percent: 80 },
];

export const projects: readonly ProjectModel[] = [
  {
    id: "project-01",
    title: "PROJECT 01",
    image: project01Image,
    imageAlt: "Black headphones on a grey studio surface — replacement project artwork",
    href: "https://www.wix.com/demone2/ux-ui-designer-resum/portfolio-collections/my-portfolio/project-01",
  },
  {
    id: "project-02",
    title: "PROJECT 02",
    image: project02Image,
    imageAlt: "Modern concrete museum facade — replacement project artwork",
    href: "https://www.wix.com/demone2/ux-ui-designer-resum/portfolio-collections/my-portfolio/project-02",
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
  { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/wix-com" },
  { platform: "github", label: "GitHub", href: "https://github.com/apple8805241553" },
  { platform: "facebook", label: "Facebook", href: "https://www.facebook.com/profile.php?viewas=100000686899395&id=100003902187438" },
];
