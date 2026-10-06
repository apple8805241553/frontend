import { useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext";

/**
 * 取得共用 loading 管理功能，非同步操作以 runWithLoading 包覆。
 * @returns 延遲顯示狀態、手動啟動／結束操作的方法，以及會自動完成清理的操作包裝函式。
 * @throws 在 LoadingProvider 外使用時拋出錯誤。
 */
export default function useLoading() {
  const loading = useContext(LoadingContext);
  if (!loading) {
    throw new Error("useLoading 必須在 LoadingProvider 內使用。");
  }
  return loading;
}
