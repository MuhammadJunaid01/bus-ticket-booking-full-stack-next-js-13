import { Select } from "@mantine/core";
import React, { SetStateAction } from "react";
export interface CustomSelectPropsTypes<T> {
  data: T[];
  label: string;
  width?: string;
  pl: string;
  setState: React.Dispatch<SetStateAction<string>>;
  value: string;
}
const CustomSelect: React.FC<CustomSelectPropsTypes<string>> = ({
  data,
  label,
  width,
  pl,
  setState,
  value,
}) => {
  //   const [searchValue, onSearchChange] = React.useState("");

  return (
    <Select
      style={{ width }}
      label={label}
      placeholder={pl}
      searchable
      onSearchChange={setState}
      searchValue={value}
      nothingFound="No options"
      data={data}
      clearable
    />
  );
};

export default CustomSelect;
