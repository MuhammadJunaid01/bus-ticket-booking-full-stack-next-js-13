import { StaticImageData } from "next/image";
import {
  BusMockDataType,
  FactsDataTypes,
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
export interface SomeFactsProps {
  title: string;
  data: FactsDataTypes[];
}
