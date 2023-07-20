import { BusRouteParams } from "@/libs/interfaces";
import React from "react";
import queryString from "query-string";
import { useSearchParams } from "next/navigation";

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
