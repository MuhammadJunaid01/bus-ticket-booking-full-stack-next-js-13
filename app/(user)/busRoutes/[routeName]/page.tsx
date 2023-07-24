import { BusRouteParams } from "@/lib/interfaces";
import queryString from "query-string";
import React from "react";

const BusRoute: React.FC<BusRouteParams> = ({ params }) => {
  const { routeName } = params;

  const parsed = queryString.parse("");

  return (
    <div>
      <h1>BusRoute {routeName}</h1>
    </div>
  );
};

export default BusRoute;
