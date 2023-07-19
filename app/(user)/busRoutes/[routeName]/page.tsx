import { BusRouteParams } from "@/libs/interfaces";
import React from "react";

const BusRoute: React.FC<BusRouteParams> = ({ params }) => {
  const { routeName } = params;

  return (
    <div>
      <h1>BusRoute {routeName}</h1>
    </div>
  );
};

export default BusRoute;
