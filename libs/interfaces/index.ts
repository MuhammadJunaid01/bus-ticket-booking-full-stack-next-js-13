import { StaticImageData } from "next/image";
import {
  AvailableBussDataTypes,
  BusMockDataType,
  BussesTypes,
  FactsDataTypes,
  MockDataType,
  PopularBusRouteDataType,
  StoriesTypes,
} from "../types";

export interface LinksProps {
  data: BusMockDataType[];
}

export interface ProvidersProps {
  children: React.ReactNode;
  data: BussesTypes[];
}

export interface PopularBusRouteProps {
  title: string;
  data: PopularBusRouteDataType[];
}
export interface SomeFactsProps {
  title: string;
  data: FactsDataTypes[];
}
export interface BusRoutesProps {
  title: string;
  data: string[];
}
export interface BusRouteParams {
  params: {
    routeName: string;
  };
}
export interface StoriesProps {
  title: string;
  data: StoriesTypes[];
}
export interface AvailableBussProps {
  title: string;
}
export interface Seat {
  seat: string;
  passengerName: string;
  passengerId: number | null;
  isBooked: boolean;
  route: string;
  startTime: string;
  reachedTime: string;
}

// Define the SeatMap type
export interface SeatMap {
  [group: string]: Seat[];
}
