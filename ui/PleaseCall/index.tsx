import { Box, SimpleGrid, Text } from "@mantine/core";
import React from "react";
export interface PleaseCallProps {
  title: string;
  sub_title: string;
  number: number;
}
import { IconPhoneCall } from "@tabler/icons-react";
import { pleaseCallStyles } from "@/lib/styles";
const PleaseCall: React.FC<PleaseCallProps> = ({
  title,
  sub_title,
  number,
}) => {
  const { classes } = pleaseCallStyles();
  const { container, title: titleStyl, numberBox } = classes;
  return (
    <Box className={container}>
      <Box pl={11}>
        <Text size={12}>{sub_title}</Text>
        <Text className={titleStyl}>{title}</Text>
      </Box>
      <Box className={numberBox}>
        <Text
          sx={(theme) => ({
            marginRight: "11px",
            color: theme.colorScheme === "dark" ? "unset" : "#5B21A9",
          })}
        >
          <IconPhoneCall />
        </Text>
        <Text
          sx={(theme) => ({
            color: theme.colorScheme === "dark" ? "unset" : "#5B21A9",
          })}
        >
          {number}
        </Text>
      </Box>
    </Box>
  );
};

export default PleaseCall;
