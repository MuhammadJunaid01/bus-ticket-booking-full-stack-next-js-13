import mongoose, { Date } from "mongoose";
import {
  BusMockDataType,
  BusesTypes,
  ChartDataTypes,
  FactsDataTypes,
  FaqDataTypes,
  NavDataTypes,
  PopularBusRouteDataType,
  StoriesTypes,
  User,
  btnText,
  navlinkDataType,
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

// Dashboard
export interface CollapseMenuSidebarProps {
  icon: React.ReactNode;
  navData: NavDataTypes[];
  title: string;
  subTitle: number | "New" | "Hot";
  collapseIcon: React.ReactNode;
  handleCollapse: () => void;
  isCollapse: boolean;
  isopenSidebar: boolean;
  isHover: boolean;
  isMobile: boolean;
}
export interface NavbarSmallDevicesProps {
  drawerOpened: boolean;
  closeDrawer: () => void;
  toggleLinks?: () => void;
  data?: navlinkDataType[];
}
export interface SidebarSmallDeviceProps extends NavbarSmallDevicesProps {}
export interface HandleStateToggleProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface DashboardCardProps {
  icon?: React.ReactNode;
  title: string;
  chart: React.ReactNode;
  btnText: btnText;
  percentage: number;
  info: number | string;
  isHighlighted: boolean;
  iconBoxClor?: string;
}
export interface CustomLineChartProps {
  data: ChartDataTypes[];
  color: string;
}
export interface FaqPropsTypes {
  title: string;
  data: FaqDataTypes[];
}
export interface BusProps {
  bus: BusesTypes;
}
export interface UsersPageProps {
  users: User[];
  title: string;
  loading: boolean;
}
