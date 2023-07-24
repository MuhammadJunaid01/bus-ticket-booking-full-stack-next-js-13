import dayjs from "dayjs";
import { BussesTypes } from "../types";

export type DateType = Date | string; // Customize this based on your date representation

export const parseToDate = (date: DateType): Date => {
  return typeof date === "string" ? new Date(date) : date;
};

export const formatToDateString = (date: DateType): string => {
  const parsedDate = parseToDate(date);
  return parsedDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const selectDate = (
  date: DateType,
  selected: DateType[],
  maxSelection: number
): DateType[] => {
  const isSelected = selected.some((s) =>
    dayjs(parseToDate(date)).isSame(parseToDate(s), "date")
  );

  if (isSelected) {
    // Remove the selected date from the array
    return selected.filter(
      (d) => !dayjs(parseToDate(date)).isSame(parseToDate(d), "date")
    );
  } else if (selected.length < maxSelection) {
    // Add the selected date to the array if the maximum selection is not reached
    return [...selected, date];
  }

  // If the maximum selection is reached, return the original array
  return selected;
};
export const searchBus = (
  data: BussesTypes[],
  road: string
): BussesTypes | null => {
  const result = data.find((bus) => bus.roadName === road);
  // If there's a matching result, return it
  if (result) {
    return result;
  }

  // If there's no matching result, return null
  return null;
};
