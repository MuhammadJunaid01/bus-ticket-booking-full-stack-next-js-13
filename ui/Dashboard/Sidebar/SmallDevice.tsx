import { Box, Drawer, Text } from "@mantine/core";
import React from "react";
import BusImage from "@/public/bus.png";
import Image from "next/image";
import { SidebarSmallDeviceProps } from "@/lib/interfaces";
import { navbarStyles } from "@/lib/styles";
import { useRouter } from "next/navigation";
import CollapseMenuSidebar from "../CollapseMenu";
import {
  IconArrowBadgeDown,
  IconArrowBadgeRight,
  IconHome,
} from "@tabler/icons-react";
import { siderbarDahboardData } from "@/lib/data/dashboard-data";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import SideBarMenu from "./SideBarMenu";
const SideBarSmallDevice: React.FC<SidebarSmallDeviceProps> = ({
  drawerOpened,
  closeDrawer,
}) => {
  const { push } = useRouter();
  const { classes, theme } = navbarStyles();
  const { open, isHover } = useAppSelector((state) => state.dashboard);
  const [isCollapse, setIsCollapse] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleCollapse = () => {
    console.log("clicked");
    setIsCollapse((prev) => !prev);
  };
  return (
    <div>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="AR Poribohon"
        className={classes.hiddenDesktop}
        zIndex={1000000}
        style={{ fontSize: "22px" }}
        classNames={{ title: "title" }}
      >
        <SideBarMenu />
      </Drawer>
    </div>
  );
};

export default SideBarSmallDevice;
