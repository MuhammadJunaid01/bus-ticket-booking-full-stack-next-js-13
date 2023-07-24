"use client";
import { busCHairDataypes } from "@/lib/types";
import { Box } from "@mantine/core";
import { IconArmchair } from "@tabler/icons-react";
import React from "react";
interface BusChairMenubarProps {
  data: busCHairDataypes[];
}
const BusChairMenubar: React.FC<BusChairMenubarProps> = ({ data }) => {
  return (
    <Box
      sx={(theme) => ({
        [theme.fn.largerThan("sm")]: {
          display: "flex",
          justifyContent: "space-around",
        },
      })}
    >
      {data.map((bus, index) => {
        return (
          <div key={index}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <IconArmchair
                color={
                  bus.type === "BOOKED" && bus.gender === "M"
                    ? "#C7A6E6"
                    : bus.type === "BOOKED" && bus.gender === "F"
                    ? "#F04DF0"
                    : bus.type === "BLOCKED"
                    ? "#A9A9A9"
                    : bus.type === "AVAILABLE"
                    ? "white"
                    : bus.type === "SELECTED"
                    ? "#9CD27C"
                    : bus.type === "SOLD" && bus.gender === "M"
                    ? "#FF9090"
                    : bus.type === "SOLD" && bus.gender === "F"
                    ? "#FF99CC"
                    : "red"
                }
                size={27}
              />
              <h5>
                {bus.type} {bus.gender ? `(${bus.gender})` : null}
              </h5>
            </div>
          </div>
        );
      })}
    </Box>
  );
};

export default BusChairMenubar;
