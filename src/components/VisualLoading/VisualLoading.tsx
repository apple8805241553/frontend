import styles from "./VisualLoading.module.scss";

interface VisualLoadingProps {
  isVisible: boolean;
}

/** 顯示共用的非阻擋式處理提示，並提供螢幕閱讀器可讀的狀態文字。 */
export default function VisualLoading({ isVisible }: VisualLoadingProps) {
  return (
    <div className={isVisible ? styles.notice : "sr-only"} role="status" aria-live="polite" aria-atomic="true">
      {isVisible && (
        <>
          <span className={styles.spinner} aria-hidden="true" />
          <span>處理中…</span>
        </>
      )}
    </div>
  );
}
