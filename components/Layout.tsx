"use client";
import { ReactNode } from "react";
import AllToast from "./AllToast";
import { ToastProvider } from "./Toast";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ToastProvider>
      <AllToast />
      {children}
    </ToastProvider>
  );
};

export default Layout;
