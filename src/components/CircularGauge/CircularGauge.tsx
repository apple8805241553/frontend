// #region Hooks 與樣式
import useInView from "../../hooks/useInView";
import styles from "./CircularGauge.module.scss";
// #endregion

interface CircularGaugeProps {
  label: string;
  percent: number;
}

/** 顯示 0～100 的圓形比例；每次重新進入畫面時播放填入動畫，減少動態效果時直接呈現結果。 */
export default function CircularGauge({ label, percent }: CircularGaugeProps) {
  // #region Hooks
  const { elementRef, isVisible } = useInView<HTMLElement>();
  // #endregion

  // #region Logic
  // 共用元件接受外部資料，將無效數值與超出範圍的比例限制在可呈現範圍內。
  const value = Number.isFinite(percent) ? Math.min(100, Math.max(0, percent)) : 0;
  // #endregion

  // #region Render UI
  return (
    <figure
      ref={elementRef}
      className={`${styles.gauge} ${isVisible ? styles.isVisible : ""}`}
      role="meter"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      aria-valuetext={`${value}%`}
    >
      <div className={styles.dial} aria-hidden="true">
        <svg className={styles.chart} viewBox="0 0 120 120" focusable="false">
          <circle className={styles.track} cx="60" cy="60" r="50" />
          <circle
            className={styles.progress}
            cx="60"
            cy="60"
            r="50"
            pathLength={100}
            strokeDasharray="100 100"
            style={{ strokeDashoffset: 100 - value }}
          />
        </svg>
        <span className={styles.value}>{value}<span className={styles.unit}>%</span></span>
      </div>
      <figcaption className={styles.label}>{label}</figcaption>
    </figure>
  );
  // #endregion
}
