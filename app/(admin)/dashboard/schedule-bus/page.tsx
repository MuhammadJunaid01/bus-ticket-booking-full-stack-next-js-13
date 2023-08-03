import React from "react";
import MaintenanceImage from "@/public/under-maintenance.svg";
import Image from "next/image";
const ScheduleBusPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1> under maintenance page</h1>
      <Image
        style={{ width: "100%", height: "45vh" }}
        src={MaintenanceImage}
        alt="MaintenanceImage"
      />
    </div>
  );
};

export default ScheduleBusPage;
