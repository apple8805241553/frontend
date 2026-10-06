/** 使用者操作持續超過此毫秒數時，才顯示共用 loading。 */
export const visualLoadingDelayMs = 500;

/** 管理同時進行的操作；每個操作皆可個別完成，避免互相提前關閉 loading。 */
export interface LoadingContextModel {
  /** 至少有一個操作已超過延遲門檻時為 true。 */
  isLoading: boolean;
  /** 啟動操作追蹤，回傳可重複呼叫的完成函式。 */
  startLoading: () => () => void;
  /** 追蹤同步或 Promise 操作；成功與失敗皆清理，保留原始回傳值或錯誤。 */
  runWithLoading: <T>(action: () => T | Promise<T>) => Promise<T>;
}
