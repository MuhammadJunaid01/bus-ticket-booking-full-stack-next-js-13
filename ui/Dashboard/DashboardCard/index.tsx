import { Box, Button, Highlight, Text, UnstyledButton } from "@mantine/core";
import React from "react";
import PercentageBox from "../percentageBox";
import { IconArrowNarrowRight } from "@tabler/icons-react";
export interface DashboardCardProps {
  icon?: React.ReactNode;
  title: string;
  chart: React.ReactNode;
  btnText: "Click here" | "View All";
  percentage: number;
  info: number | string;
  isHighlighted: boolean;
}
const DashboardCard: React.FC<DashboardCardProps> = ({
  isHighlighted,
  info,
  btnText,
  percentage,
  chart,
  title,
  icon,
}) => {
  const check = typeof info === "string";
  console.log("CHECK", check);
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: isHighlighted
          ? "#7092D8"
          : theme.colorScheme === "dark"
          ? theme.colors.gray[9]
          : theme.colors.gray[1],
        [theme.fn.largerThan("sm")]: {
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        },
        borderRadius: "6px",
        padding: "10px",
        marginTop: "12px",
      })}
      style={{ position: "relative" }}
    >
      {isHighlighted ? (
        <Box sx={{ padding: "4px 11px" }}>
          <Text size={21} color="white">
            {title}
          </Text>
          <Text mt={5} size={14} color="white">
            {typeof info === "string" ? (
              <Highlight highlight="48%">{info}</Highlight>
            ) : (
              <Text>{info}</Text>
            )}
          </Text>
          <UnstyledButton
            style={
              btnText === "Click here"
                ? {
                    textDecoration: "underline",
                    marginTop: "11px",
                    color: "white",
                  }
                : {}
            }
          >
            {btnText}
          </UnstyledButton>
        </Box>
      ) : (
        <Box
          style={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "space-between",
            gap: "19px",
          }}
        >
          <Box
            sx={(theme) => ({
              height: "40px",
              width: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#845ADF",
              borderRadius: "50%",
            })}
          >
            {icon}
          </Box>
          <Box>
            <Text>{title}</Text>
            <Text
              size={19}
              fw={600}
              sx={(theme) => ({
                color: theme.colors.gray[7],
              })}
            >
              {typeof info === "number" && info.toLocaleString()}
            </Text>
            <Box style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <UnstyledButton
                sx={(theme) => ({
                  marginTop: "19px",
                  color: "#845ADF",
                  fontSize: "13px",
                })}
              >
                {btnText}
              </UnstyledButton>
              <IconArrowNarrowRight
                style={{ marginTop: "19px" }}
                cursor="pointer"
                color="#845ADF"
                size={15}
              />
            </Box>
          </Box>
        </Box>
      )}
      <Box>
        {chart}

        {isHighlighted ? null : (
          <Box>
            <Text fw={600} color="#24BF94">
              +{percentage}%
            </Text>
            <Text
              sx={(theme) => ({
                color: theme.colors.gray[7],
              })}
              size={14}
            >
              this month
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DashboardCard;
