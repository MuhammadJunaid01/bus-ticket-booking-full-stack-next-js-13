import { busRouteData } from "@/lib/data";
import MakeBooking from "@/ui/MakeBooking";

const MakeBookPage = () => {
  return (
    <div>
      <MakeBooking data={busRouteData} />
    </div>
  );
};

export default MakeBookPage;
