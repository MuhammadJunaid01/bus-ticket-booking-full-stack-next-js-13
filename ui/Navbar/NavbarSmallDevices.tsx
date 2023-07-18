import React from "react";
import DarkAndLightMode from "./DarkAndLightMode";
import {
  Box,
  Center,
  Divider,
  Drawer,
  ScrollArea,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { navbarStyles } from "@/libs/styles";
import { navlinkDataType } from "@/libs/types";
import NavLinks from "../Navlinks";
export interface NavbarSmallDevicesProps {
  drawerOpened: boolean;
  closeDrawer: () => void;
  toggleLinks?: () => void;
  data: navlinkDataType[];
}
const NavbarSmallDevices: React.FC<NavbarSmallDevicesProps> = ({
  drawerOpened,
  closeDrawer,
  toggleLinks,
  data,
}) => {
  const { classes, theme } = navbarStyles();

  return (
    <Box>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="E SHOP"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          {data.map(({ href, label }, index) => {
            return <NavLinks key={index} href={href} label={label} />;
          })}

          <DarkAndLightMode />
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default NavbarSmallDevices;
