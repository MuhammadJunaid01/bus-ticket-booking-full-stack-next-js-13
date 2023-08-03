/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Divider, ScrollArea, Text } from "@mantine/core";
import React from "react";
import BusImage from "@/public/bus.png";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { CollapseMenuSidebar } from "@/ui/Dashboard";
import {
  IconHome,
  IconArrowBadgeRight,
  IconArrowBadgeDown,
} from "@tabler/icons-react";
import { NavDataTypes } from "../CollapseMenu";
import { useCustomHover } from "@/redux/features/dashboard";
import { useRouter } from "next/navigation";

export const siderbarDahboardData: NavDataTypes[] = [
  {
    label: "Add Bus",
    href: "add-bus",
  },
  {
    label: "Schedule Bus",
    href: "schedule-bus",
  },
];
const SideBar = () => {
  const { open, isHover } = useAppSelector((state) => state.dashboard);
  const [isCollapse, setIsCollapse] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleCollapse = () => {
    console.log("clicked");
    setIsCollapse((prev) => !prev);
  };
  const { push } = useRouter();
  return (
    <Box style={{ width: "100%", overflow: "hidden" }}>
      <ScrollArea
        sx={(theme) => ({
          height: "100vh",
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.gray[9]
              : theme.colors.gray[3],
          padding: "0px 5px",
        })}
      >
        {open && isHover === false ? (
          <Box>
            <Text
              onClick={() => push("/dashboard")}
              style={{ fontWeight: "800" }}
              sx={(theme) => ({
                fontSize: "45px",
                // fontWeight:theme.fontSizes.xl
                cursor: "pointer",
              })}
            >
              AR
            </Text>
          </Box>
        ) : (
          <Box style={{ cursor: "pointer" }}>
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
          </Box>
        )}
        {isHover && open ? null : <Divider mb={16} />}

        <CollapseMenuSidebar
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
      </ScrollArea>
    </Box>
  );
};

export default SideBar;
