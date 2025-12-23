"use client";

import { ToastContext } from "@/components/Toast";
import { useContext } from "react";

export default function ToastPage() {
  const { addToast } = useContext(ToastContext);

  const handle = () => {
    addToast({
      id: Date.now(),
      description: "hey there",
      title: "Hey Kaif",
      variant: "error",
    });
  };
  return (
    <div className="w-full p-4">
      <button className="px-2 py-2 rounded-md bg-blue-400" onClick={handle}>
        add toast
      </button>
    </div>
  );
}
