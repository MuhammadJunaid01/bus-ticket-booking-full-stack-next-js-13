import React from "react";
import {
  IconEye,
  IconCode,
  IconCoin,
  IconBook,
  IconFingerprint,
  IconChartPie3,
  IconNotification,
} from "@tabler/icons-react";
import { Types } from "mongoose";
type IconType =
  | typeof IconEye
  | typeof IconCode
  | typeof IconCoin
  | typeof IconBook
  | typeof IconFingerprint
  | typeof IconChartPie3
  | typeof IconNotification;

export type MockDataType = {
  icon: IconType;
  title: string;
  description?: string;
};

// MODEL TYPES

export type PaginatePropsTypes = {
  data: PaginateDataTypes[];
  itemsPerPage: number;
};
export type PaginateReturnType = {
  paginateData: PaginateDataTypes[];
  totalPage: number;
  handlePageChange: (page: number) => void;
};
export type PaginateDataTypes = {
  name: string;
};
//BUS
export type BusMockDataType = {
  logo: string;
  name: string;
  description: string;
};
export type navlinkDataType = {
  href: string;
  label: string;
  icon: "BusIcon" | "LaunchIcon" | "AirIcon" | "EventIcon" | "TourIcon";
};
export type PopularBusRouteDataType = {
  name: string;
};
