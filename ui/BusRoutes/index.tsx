import { BusRoutesProps } from "@/lib/interfaces";
import { busRoutesStyles } from "@/lib/styles";
import { Box, Indicator, Text } from "@mantine/core";
import { IconRoute } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
const BusRoutes: React.FC<BusRoutesProps> = ({ title, data }) => {
  const { classes } = busRoutesStyles();
  const {
    container,
    title: titleStyl,
    busRouteBox,
    route: routeStyl,
  } = classes;
  return (
    <Box className={container}>
      <Indicator mt={11} offset={6} color="#72BF44" inline processing size={12}>
        <Text className={titleStyl}>{title}</Text>
      </Indicator>
      <Box className={busRouteBox}>
        {data.map((route, index) => {
          return (
            <Box key={index}>
              <Link className={routeStyl} href={`/busRoutes/${route}`}>
                <IconRoute />
                <Text>{route}</Text>
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default BusRoutes;
