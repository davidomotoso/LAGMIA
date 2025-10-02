"use client";

import Navbar from "@/components/Navbar";
import Alert from "@/components/Alert";
import useCart from "@/Utils/useCart";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { alert } = useCart();
  return (
    <>
      <Navbar />
      {children}
      {alert && <Alert />}
    </>
  );
};
export default MainLayout;
