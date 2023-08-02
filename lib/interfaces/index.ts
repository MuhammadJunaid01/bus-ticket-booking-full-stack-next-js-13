import mongoose, { Date } from "mongoose";
import {
  BusMockDataType,
  BusesTypes,
  FactsDataTypes,
  PopularBusRouteDataType,
  StoriesTypes,
} from "../types";

export interface LinksProps {
  data: BusMockDataType[];
}

export interface ProvidersProps {
  children: React.ReactNode;
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
}

// Define the SeatMap type
export interface SeatMap {
  [group: string]: Seat[];
}
export interface BusPageProps {
  params: {
    busID: string;
  };
}
export interface MakeBookUiPropsTypes {
  data: string[];
  buses: BusesTypes[];
}
export interface RoadsPropsType {
  title: string;
  data: string[];
  onClick: (page: number) => void;
  totalPage: number;
}

//MODELS INTERFACES
export interface ITicket extends Document {
  seatNumber: number[];
  user: mongoose.Types.ObjectId;
  boardingPlace: string;
  destination: string;
  purchaseDate: Date;
  isPayment: boolean;
  busNumber: number;
  date: string;
  // New field for payment status with default value false
  // Add other relevant ticket information here, such as payment status, transaction ID, etc.
}
export interface TicketData {
  boardingPlace: string;
  busNumber: number;
  date: string;
  destination: string;
  isPayment: boolean;
  purchaseDate: string;
  seatNumber: number[];
  user: string;
  __v: number;
  _id: string;
}
