import { AvailableBussProps } from "@/libs/interfaces";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

const OurBusses: React.FC<AvailableBussProps> = ({ title }) => {
  // console.log(data);
  const { data } = useAppSelector((state) => state.bussData);

  return (
    <div>
      <h1>AVAILABLE BUS</h1>
    </div>
  );
};

export default OurBusses;
