/* eslint-disable react/jsx-no-undef */
import { Box, Button, Group, Indicator, Input } from "@mantine/core";
import React from "react";
import {
  IconArrowsExchange2,
  IconMapPin,
  IconCalendar,
} from "@tabler/icons-react";

import CustomCalendar from "./Calendar";
export default function SearchBox() {
  return (
    <Box>
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? "white" : theme.colors.gray[3],
          width: "100%",
          borderRadius: theme.radius.sm,
          [theme.fn.largerThan("sm")]: {
            height: "140px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "6px",
            marginTop: "25px",
          },
        })}
      >
        <Box style={{ position: "relative" }}>
          <Box
            sx={(theme) => ({
              position: "relative",
              display: "flex",
              gap: "10px",
            })}
          >
            <Input
              variant="unstyled"
              sx={(theme) => ({
                width: "",
                padding: "6px 0px",
                border: `1px solid ${
                  theme.colorScheme === "dark"
                    ? theme.colors.gray[3]
                    : theme.colors.gray[3]
                }`,
                borderRadius: theme.radius.md,
                ...theme.fn.focusStyles(""),
                backgroundColor:
                  theme.colorScheme === "dark" ? "white" : theme.colors.gray[1],
              })}
              icon={<IconMapPin size={14} />}
              placeholder="FROM"
            />
            <Input
              variant="unstyled"
              sx={(theme) => ({
                width: "",
                padding: "6px 0px",
                border: `1px solid ${
                  theme.colorScheme === "dark"
                    ? theme.colors.gray[3]
                    : theme.colors.gray[3]
                }`,
                borderRadius: theme.radius.md,
                ...theme.fn.focusStyles(""),
                backgroundColor:
                  theme.colorScheme === "dark" ? "white" : theme.colors.gray[1],
              })}
              icon={<IconMapPin size={14} />}
              placeholder="TO"
            />
          </Box>

          <Button
            variant="white"
            sx={(theme) => ({
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              position: "absolute",
              top: "11px",
              left: "45%",
              boxShadow: theme.shadows.xl,
            })}
          >
            <IconArrowsExchange2 size={20} color="#62E882" />
          </Button>
        </Box>
        <CustomCalendar />
        <Input
          variant="unstyled"
          sx={(theme) => ({
            width: "",
            cursor: "not-allowed",
            padding: "6px 0px",
            border: `1px solid ${
              theme.colorScheme === "dark"
                ? theme.colors.gray[3]
                : theme.colors.gray[3]
            }`,
            borderRadius: theme.radius.md,
            ...theme.fn.focusStyles(""),
            backgroundColor:
              theme.colorScheme === "dark" ? "white" : theme.colors.gray[1],
          })}
          icon={<IconMapPin size={14} />}
          placeholder="RETURN "
          readOnly
        />

        <Button
          variant="white"
          sx={(theme) => ({
            height: "50px",
            width: "17%",
            backgroundColor:
              theme.colorScheme === "dark" ? "#72bf44" : theme.colors.gray[1],
            color: theme.colorScheme === "dark" ? "white" : "black",
          })}
        >
          SEARCH
        </Button>
      </Box>
    </Box>
  );
}
// [theme.fn.largerThan("sm")]: {
//   backgroundColor: "#FFFFFF",
//   height: "100px",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// },
