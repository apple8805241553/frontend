import styles from "./BrandMark.module.scss";
interface BrandMarkProps {
  className?: string;
}

/** 以本地 SVG 重建範本的 R 標記，不依賴外部圖示資源。 */
export default function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <svg className={`${styles.brandMark} ${className}`} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" strokeWidth="1.8" strokeDasharray="136 34" transform="rotate(-48 32 32)" />
      <path d="M24 46V18h10c6 0 10 3 10 8 0 4-2 7-6 8l7 12h-7l-6-11h-2v11zm6-17h4c3 0 4-1 4-3s-1-3-4-3h-4z" fill="currentColor" />
    </svg>
  );
}
