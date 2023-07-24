import { busRouteData } from "@/lib/data";
import MakeBooking from "@/ui/MakeBooking";
import React from "react";

const MakeBookPage = () => {
  return (
    <div>
      <MakeBooking data={busRouteData} />
    </div>
  );
};

export default MakeBookPage;
