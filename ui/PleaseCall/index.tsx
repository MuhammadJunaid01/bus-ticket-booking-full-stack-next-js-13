import { Box, SimpleGrid, Text } from "@mantine/core";
import React from "react";
export interface PleaseCallProps {
  title: string;
  sub_title: string;
  number: number;
}
import { IconPhoneCall } from "@tabler/icons-react";
const PleaseCall: React.FC<PleaseCallProps> = ({
  title,
  sub_title,
  number,
}) => {
  return (
    <Box
      sx={(theme) => ({
        [theme.fn.largerThan("sm")]: {
          height: "110px",
          width: "45%",
          margin: "0 auto",
          marginTop: "17px",
          overflow: "hidden",
        },
        backgroundColor: theme.colorScheme === "dark" ? "white" : "#DEE2E6",
        boxShadow: theme.shadows.xl,
        borderRadius: theme.radius.sm,
        display: "flex",
        alignItems: "center",
        // justifyContent: "space-around",
        justifyContent: "space-between",
      })}
    >
      <Box pl={11}>
        <Text size={12}>{sub_title}</Text>
        <Text
          sx={(theme) => ({
            color:
              theme.colorScheme === "dark" ? "black" : theme.colors.gray[8],
            fontSize: "35px",
            fontWeight: "bold",
          })}
        >
          {title}
        </Text>
      </Box>
      <Box
        sx={(theme) => ({
          //   color: theme.colorScheme === "dark" ? "black" : "",
          fontSize: "35px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "11px",
          width: "50%",
          backgroundColor: theme.colorScheme === "dark" ? "#72BF44" : "#F1F3F5",
          height: "130px",
          color: theme.colorScheme === "dark" ? "white" : "black",
        })}
      >
        <Text
          sx={(theme) => ({
            marginRight: "11px",
          })}
        >
          <IconPhoneCall />
        </Text>
        <Text>{number}</Text>
      </Box>
    </Box>
  );
};

export default PleaseCall;
