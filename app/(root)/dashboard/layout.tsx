import DashBoardNav from "@/components/ui/DashBoardNav";

import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex">
      <DashBoardNav />
      {children}
    </div>
  );
};

export default DashboardLayout;
