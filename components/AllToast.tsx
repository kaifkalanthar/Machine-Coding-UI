import React, { useContext, useEffect } from "react";
import Toast, { ToastContext, ToastType } from "./Toast";
import { useToast } from "@/libs/hooks/useToast";

const mockToasts: ToastType[] = [
  {
    id: 1,
    title: "Success",
    description: "Your changes have been saved successfully.",
    variant: "success",
  },
  {
    id: 2,

    title: "Error",
    description: "Something went wrong. Please try again.",
    variant: "error",
  },
  {
    id: 3,

    title: "Account Created",
    description: "Your account has been created. Welcome aboard!",
    variant: "success",
  },
  {
    id: 4,
    title: "Failed to Save",
    description: "We couldn't save your changes. Check your connection.",
    variant: "error",
  },
];

const AllToast = () => {
  // const { toasts } = useToast();

  const { toasts, addToast } = useContext(ToastContext);

  useEffect(() => {
    console.log("🚀 ~ AllToast ~ toasts:", toasts);
  }, [toasts]);

  return (
    <div className="fixed top-4 right-4 space-y-4 bg-red-500">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          title={toast.title}
          description={toast.description}
          variant={toast.variant}
        />
      ))}
    </div>
  );
};

export default AllToast;
