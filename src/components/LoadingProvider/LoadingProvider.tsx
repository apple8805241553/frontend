// #region React Core
import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
// #endregion

// #region 共用狀態、Hooks 與元件
import { LoadingContext } from "../../contexts/LoadingContext";
import { visualLoadingDelayMs } from "../../models/LoadingModel";
import useNavigationLoading from "../../hooks/useNavigationLoading";
import VisualLoading from "../VisualLoading/VisualLoading";
// #endregion

interface LoadingProviderProps {
  children: ReactNode;
}

interface LoadingTask {
  timerId: number;
  isVisible: boolean;
}

/** 統一管理操作的延遲 loading；同步完成與失敗均會清理，也支援多個並行操作。 */
export default function LoadingProvider({ children }: LoadingProviderProps) {
  const tasksRef = useRef(new Map<symbol, LoadingTask>());
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = useCallback(() => {
    const taskId = Symbol("loading-task");
    const task: LoadingTask = {
      isVisible: false,
      timerId: window.setTimeout(() => {
        if (!tasksRef.current.has(taskId)) return;
        task.isVisible = true;
        setIsLoading(true);
      }, visualLoadingDelayMs),
    };
    tasksRef.current.set(taskId, task);

    return () => {
      // 完成函式可重複呼叫；個別操作結束時仍保留其他慢操作的提示。
      if (!tasksRef.current.delete(taskId)) return;
      window.clearTimeout(task.timerId);
      setIsLoading([...tasksRef.current.values()].some((pending) => pending.isVisible));
    };
  }, []);

  const runWithLoading = useCallback(async <T,>(action: () => T | Promise<T>): Promise<T> => {
    const finishLoading = startLoading();
    try {
      return await action();
    } finally {
      finishLoading();
    }
  }, [startLoading]);

  useNavigationLoading(startLoading);

  useEffect(() => {
    const tasks = tasksRef.current;
    return () => {
      for (const task of tasks.values()) window.clearTimeout(task.timerId);
      tasks.clear();
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, runWithLoading }}>
      {children}
      <VisualLoading isVisible={isLoading} />
    </LoadingContext.Provider>
  );
}
