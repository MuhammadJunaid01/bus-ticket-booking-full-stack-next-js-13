import { seacrhBoxStyles } from "@/lib/styles";
import { Select } from "@mantine/core";
import React, { SetStateAction } from "react";
export interface CustomSelectPropsTypes<T> {
  data: T[];
  label: string;
  width?: string;
  pl: string;
  setState: React.Dispatch<SetStateAction<string>>;
  value: string;
  isHomePage: boolean;
}
const CustomSelect: React.FC<CustomSelectPropsTypes<string>> = ({
  data,
  label,
  width,
  pl,
  setState,
  value,
  isHomePage,
}) => {
  //   const [searchValue, onSearchChange] = React.useState("");
  const { classes } = seacrhBoxStyles();
  const { input } = classes;
  return (
    <Select
      className={isHomePage ? input : ""}
      style={{ width }}
      label={label}
      placeholder={pl}
      searchable
      onSearchChange={setState}
      searchValue={value}
      nothingFound="No options"
      data={data}
      clearable
      variant={isHomePage ? "unstyled" : "default"}
      // sx={(theme) => ({
      //   backgroundColor: "red",
      // })}
    />
  );
};

export default CustomSelect;
