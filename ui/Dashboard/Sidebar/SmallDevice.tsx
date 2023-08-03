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
        style={{ fontSize: "32px" }}
        classNames={{ title: "title" }}
      >
        {/* <Box style={{ cursor: "pointer" }}>
          <Text
            onClick={() => push("/dashboard")}
            size={26}
            fw={900}
            color="white"
          >
            AR Poribohon
          </Text>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ marginTop: "3px", letterSpacing: "2px" }}
              ff={"cursive"}
              size={12}
              color="white"
            >
              SAFE JOURNY
            </Text>
            <Image
              style={{ cursor: "pointer", marginTop: "-8px" }}
              src={BusImage}
              width={70}
              height={44}
              alt="main-logo"
            />
          </Box>
        </Box> */}
        <CollapseMenuSidebar
          isMobile={false}
          subTitle={12}
          title="Dashboard"
          icon={<IconHome cursor="pointer" size={open ? 35 : 26} />}
          navData={siderbarDahboardData}
          collapseIcon={
            isCollapse ? (
              <IconArrowBadgeDown cursor="pointer" />
            ) : (
              <IconArrowBadgeRight cursor="pointer" />
            )
          }
          isCollapse={isCollapse}
          handleCollapse={handleCollapse}
          isopenSidebar={open}
          isHover={isHover}
        />
      </Drawer>
    </div>
  );
};

export default SideBarSmallDevice;
