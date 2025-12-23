import { ToastContext } from "@/components/Toast";
import { useContext } from "react";

export function useToast() {
  const { toasts, addToast } = useContext(ToastContext);

  return { toasts, addToast };
}
