/* eslint-disable react/jsx-no-undef */
import {
  Box,
  Button,
  Group,
  Indicator,
  Input,
  UnstyledButton,
} from "@mantine/core";
import React from "react";
import { IconArrowsExchange2, IconMapPin } from "@tabler/icons-react";

import CustomCalendar from "./Calendar";
import { seacrhBoxStyles } from "@/lib/styles";
const SearchBox = () => {
  const { classes } = seacrhBoxStyles();
  const { container, inputBox, input, changeValueBtn, searchBtn } = classes;
  return (
    <>
      <Box className={container}>
        <Box style={{ position: "relative" }}>
          <Box className={inputBox}>
            <Input
              variant="unstyled"
              className={input}
              icon={<IconMapPin size={14} />}
              placeholder="FROM"
            />
            <Input
              variant="unstyled"
              className={input}
              icon={<IconMapPin size={14} />}
              placeholder="TO"
            />
          </Box>

          <UnstyledButton className={changeValueBtn}>
            <IconArrowsExchange2 size={20} color="#62E882" />
          </UnstyledButton>
        </Box>
        <CustomCalendar />
        <Input
          variant="unstyled"
          className={input}
          style={{ cursor: "not-allowed" }}
          icon={<IconMapPin size={14} />}
          placeholder="RETURN "
          readOnly
        />

        <UnstyledButton className={searchBtn}>SEARCH</UnstyledButton>
      </Box>
    </>
  );
};
export default SearchBox;
