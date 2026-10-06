// #region React Core
import { useRef, useState } from "react";
import type { ComponentProps, MouseEvent } from "react";
// #endregion

// #region Hooks
import useLoading from "../../hooks/useLoading";
// #endregion

interface LoadingButtonProps extends Omit<ComponentProps<"button">, "onClick"> {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
}

/**
 * 包覆按鈕操作，等待超過 0.5 秒時顯示共用 loading，處理期間避免重複點擊。
 * submit 按鈕未提供 onClick 時維持原生送出，由表單以 runWithLoading 追蹤實際處理。
 */
export default function LoadingButton({ onClick, disabled, type = "button", ...buttonProps }: LoadingButtonProps) {
  const { runWithLoading } = useLoading();
  const [isPending, setIsPending] = useState(false);
  const pendingRef = useRef(false);

  async function handleClick(event: MouseEvent<HTMLButtonElement>) {
    if (pendingRef.current) return;
    pendingRef.current = true;
    setIsPending(true);
    try {
      await runWithLoading(() => onClick?.(event));
    } finally {
      pendingRef.current = false;
      setIsPending(false);
    }
  }

  return (
    <button
      {...buttonProps}
      type={type}
      disabled={disabled || isPending}
      aria-busy={isPending || buttonProps["aria-busy"]}
      onClick={onClick ? handleClick : undefined}
    />
  );
}
