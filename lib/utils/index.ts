import dayjs from "dayjs";
import { AuthTypes, BussesTypes } from "../types";

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
export const loadUi = (num: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, num);
  });
};

const handleAuth = async ({ name, email, password, endPoint }: AuthTypes) => {
  const BASEURL =
    process.env.NODE_ENV === "production"
      ? "https://multishop-ecommerce.vercel.app"
      : "http://localhost:3000";
  let data: any = {};
  if (name === undefined) {
    if (password === undefined) {
      data.email = email;
    } else {
      data.email = email;
      data.password = password;
    }
  } else if (password === undefined) {
    data.name = name;
    data.email = email;
  } else {
    data.name = name;
    data.email = email;
    data.password = password;
  }

  try {
    const response = await fetch(`${BASEURL}/api/auth/${endPoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Sign up failed");
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error("Error:", error);
  }
};
export default handleAuth;
