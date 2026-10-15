import styles from "./BrandMark.module.scss";
interface BrandMarkProps {
  className?: string;
}

const BrandMark = ({ className = "" }: BrandMarkProps) => {
  return (
    <svg className={`${styles.brandMark} ${className}`} viewBox="0 0 512 512" aria-hidden="true" focusable="false">
      <rect width="512" height="512" rx="112" fill="#10243F" />
      <path d="M 140 112 A 184 184 0 1 0 372 112" fill="none" stroke="#35A5DB" strokeWidth="15" />
      <g fill="none" stroke="#57B9E7" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M 173 194 V 318" strokeWidth="28" />
        <path d="M 253 194 L 180 258 L 254 318" strokeWidth="28" />
        <path d="M 274 253 L 293 318 L 318 273 L 341 318 L 361 253" strokeWidth="24" />
      </g>
    </svg>
  );
};

export default BrandMark;
