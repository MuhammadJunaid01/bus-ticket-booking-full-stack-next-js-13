import {
  BusApiResponseType,
  BusesApiResponseType,
  busCHairDataypes,
} from "@/lib/types";
import React from "react";

import styles from "@/app/(user)/bus.module.css";
import { getAllBus, getBusByID } from "@/lib/api";
import { BusPageProps } from "@/lib/interfaces";
import BusChairMenubar from "@/ui/busChairMenubar";
import Image from "next/image";
import { notFound } from "next/navigation";

const busSeatChairData: busCHairDataypes[] = [
  { type: "BOOKED", gender: "M" },
  { type: "BOOKED", gender: "F" },
  { type: "BLOCKED", gender: "" },
  { type: "AVAILABLE", gender: "" },
  { type: "SELECTED", gender: "" },
  { type: "SOLD", gender: "M" },
  { type: "SOLD", gender: "F" },
];
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
    title: `This is Bus No: ${data.bussNumber}`,
    description: `the bus drive ${data.roadName}`,
  };
}
console.log("");
const Product: React.FC<BusPageProps> = async ({ params }) => {
  const { busID } = params;

  const busData: Promise<BusApiResponseType> = getBusByID(
    `/api/buses/${busID}`
  );
  const bus = await busData;
  const { data } = bus;

  if (!data._id) {
    return notFound();
  }

  return (
    <div className={styles.container}>
      <div>
        <Image
          className={styles.busImage}
          style={{ borderRadius: "10px" }}
          src={data.img}
          height={250}
          width={600}
          alt=""
        />
      </div>
      <h4>Bus type: {data.category}</h4>
      <div>
        <BusChairMenubar data={busSeatChairData} />
      </div>
      <div>
        {/* {A.map((seat, index) => {
          let data: SeatDataAG1[] = [];
          if (index <= 15) {
            data.push(seat);
          }
          return (
            <div key={index}>
              {index}
              <Set15 data={data} />
              <IconArmchair />
            </div>
          );
        })} */}
      </div>
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
