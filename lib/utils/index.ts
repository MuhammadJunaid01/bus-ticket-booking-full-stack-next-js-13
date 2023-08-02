import dayjs from "dayjs";
import { BusesTypes } from "../types";

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
const areStringArraysEqual = (arr1: string[], arr2: string[]): boolean => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((element, index) => element === arr2[index]);
};

export const searchBus = (
  data: BusesTypes[],
  road: string
): BusesTypes | null => {
  const result = data.find((bus) => {
    const busRoadNameArray = bus.roadName.split("-");
    const dataRoadArray = road.split("-");
    if (areStringArraysEqual(busRoadNameArray, dataRoadArray)) {
      return bus;
    }
  });

  if (result) {
    return result;
  }

  return null;
};

export const loadUi = (num: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, num);
  });
};

/**
 * The function `isValidID` checks if a given ID is valid by checking its length.
 * @param {string} id - The `id` parameter is a string representing an ID.
 * @returns a boolean value indicating whether the provided ID is valid or not.
 */
export const isValidID = (id: string): boolean => {
  let validId: boolean;
  if (id.length < 24) {
    validId = false;
  } else {
    validId = true;
  }
  return validId;
};
