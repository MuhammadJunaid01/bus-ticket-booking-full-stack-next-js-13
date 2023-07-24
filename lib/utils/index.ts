import dayjs from "dayjs";

export type DateType = Date | string; // Customize this based on your date representation

const parseToDate = (date: DateType): Date => {
  return typeof date === "string" ? new Date(date) : date;
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
