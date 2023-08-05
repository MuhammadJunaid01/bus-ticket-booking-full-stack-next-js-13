import { getBusByID } from "@/lib/api";
import { BusRouteParams } from "@/lib/interfaces";
import { BusApiResponseType } from "@/lib/types";
import { Bus } from "@/ui";
import { notFound } from "next/navigation";
import React from "react";

const BusRoute: React.FC<BusRouteParams> = async ({ params }) => {
  const { routeName } = params;

  const actualData = decodeURIComponent(routeName);
  const busData: Promise<BusApiResponseType> = getBusByID(
    `/api/buses/${actualData}`
  );
  const bus = await busData;
  // console.log(bu);
  if (!bus.data) {
    return notFound();
  }
  return (
    <div>
      <Bus bus={bus.data} />
    </div>
  );
};

export default BusRoute;
