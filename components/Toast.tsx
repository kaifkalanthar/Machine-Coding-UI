import { createContext, ReactNode, useState } from "react";

export type ToastType = {
  id: number;
  title: string;
  description: string;
  variant: "success" | "error";
};

export const ToastContext = createContext<{
  toasts: ToastType[];
  addToast: (toast: ToastType) => void;
}>({ toasts: [], addToast: () => {} });

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = (toast: ToastType) => {
    console.log("🚀 ~ addToast ~ toast:", toast);
    setToasts((prevToasts) => [...prevToasts, toast]);

    const timer = setTimeout(() => {
      setToasts(toasts.filter((curToast) => curToast.id !== toast.id));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast }}>
      {children}
    </ToastContext.Provider>
  );
};

const Toast = (props: ToastType) => {
  const { title, description, variant } = props;

  return (
    <div
      className={
        variant === "success"
          ? "bg-green-300 rounded-md w-[420px] h-fit px-2 py-4 relative"
          : "bg-red-300 rounded-md w-[420px] h-fit px-2 py-4 relative"
      }
    >
      <button className="top-2 right-2">X</button>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Toast;
