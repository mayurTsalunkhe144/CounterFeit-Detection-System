import React from "react";
import HomeNav from "@/components/ui/HomeNav";
const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <HomeNav />

      {children}
    </div>
  );
};

export default HomeLayout;
