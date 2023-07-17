import {
  BusMockDataType,
  MockDataType,
  PopularBusRouteDataType,
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
