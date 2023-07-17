import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import React from "react";
interface SearchInputProps {
  isMobile: boolean;
}
const SearchInput: React.FC<SearchInputProps> = ({ isMobile }) => {
  return (
    <>
      {isMobile ? (
        <Input
          size="lg"
          radius="xl"
          sx={(theme) => ({
            [theme.fn.smallerThan("sm")]: {
              width: "95%",
              margin: "0 auto",
            },
          })}
          rightSection={<IconSearch />}
          placeholder="Your email"
        />
      ) : (
        <Input
          size="lg"
          radius="xl"
          sx={(theme) => ({
            width: "35%",

            [theme.fn.smallerThan("sm")]: {
              display: "none",
            },
          })}
          rightSection={<IconSearch cursor="pointer" />}
          placeholder="Your email"
        />
      )}
    </>
  );
};

export default SearchInput;
