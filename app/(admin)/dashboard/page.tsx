import { DashboardHome } from "@/ui/Dashboard";
import React from "react";

const AdminPage = () => {
  return (
    <div
      style={{
        height: "220vh",
        // height:""
        width: "100%",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
    >
      <DashboardHome />
    </div>
  );
};

export default AdminPage;
