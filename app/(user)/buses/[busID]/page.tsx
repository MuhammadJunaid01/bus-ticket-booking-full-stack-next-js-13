import { BusApiResponseType, BusesApiResponseType } from "@/libs/types";
import React from "react";
export interface BusPageProps {
  params: {
    busID: string;
  };
}

// export const dynamicParams = true;
// export const revalidate = 0; // revalidate this page every 60 seconds
import { notFound } from "next/navigation";
import { getBusByID, getAllBus } from "@/libs/api";

export async function generateMetadata({ params }: BusPageProps) {
  const { busID } = params;
  const busData: Promise<BusApiResponseType> = getBusByID(
    `/api/buses/${busID}`
  );
  const bus = await busData;
  const { data } = bus;
  if (!data._id) {
    return {
      title: "product not found",
    };
  }
  return {
    title: `bus ttitile is ${data.bussNumber}`,
    description: `bus decription is ${data.road}`,
  };
}

const Product: React.FC<BusPageProps> = async ({ params }) => {
  const { busID } = params;
  const busData: Promise<BusApiResponseType> = getBusByID(
    `/api/buses/${busID}`
  );
  const bus = await busData;
  const { bussNumber, _id } = bus.data;

  if (!_id) {
    return notFound();
  }
  return (
    <div>
      <h1>
        hello {busID} {bussNumber}
      </h1>
    </div>
  );
};

export const generateStaticParams = async () => {
  const busData: Promise<BusesApiResponseType> = getAllBus();
  const buses = await busData;
  return buses.data.map((bus) => {
    busID: bus._id;
  });
};

export default Product;
