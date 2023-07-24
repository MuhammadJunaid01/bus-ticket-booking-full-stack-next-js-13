import { getAllBus } from "@/lib/api";
import { busRouteData } from "@/lib/data";
import { BusesApiResponseType } from "@/lib/types";
import MakeBooking from "@/ui/MakeBooking";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Make  Booking page",
  description: "this is make booking page of AR Poribohon",
};
const MakeBookPage = async () => {
  const busData: Promise<BusesApiResponseType> = getAllBus();
  const buses = await busData;

  return (
    <div>
      <MakeBooking data={busRouteData} buses={buses.data} />
    </div>
  );
};

export default MakeBookPage;
