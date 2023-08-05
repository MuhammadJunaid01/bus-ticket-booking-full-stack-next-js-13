import { Box, Button, Highlight, Text, UnstyledButton } from "@mantine/core";
import React from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { DashboardCardProps } from "@/lib/interfaces";
import { dashboardCardStyle } from "@/lib/styles";
const DashboardCard: React.FC<DashboardCardProps> = ({
  isHighlighted,
  info,
  btnText,
  percentage,
  chart,
  title,
  icon,
  iconBoxClor,
}) => {
  const { classes } = dashboardCardStyle({
    isHighlighted,
    iconBoxClor,
    btnText,
  });
  return (
    <Box className={classes.container}>
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
          <UnstyledButton className={classes.btn}>{btnText}</UnstyledButton>
        </Box>
      ) : (
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "19px",
          }}
        >
          <Box className={classes.iconBox} sx={(theme) => ({})}>
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
                  color: iconBoxClor,
                  fontSize: "13px",
                })}
              >
                {btnText}
              </UnstyledButton>
              <IconArrowNarrowRight
                style={{ marginTop: "19px" }}
                cursor="pointer"
                color={iconBoxClor}
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
