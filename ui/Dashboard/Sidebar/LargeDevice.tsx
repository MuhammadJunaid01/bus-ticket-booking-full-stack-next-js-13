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
import { useRouter, usePathname } from "next/navigation";

import SideBarMenu from "./SideBarMenu";

const SidebarLargeDevice = () => {
  const { open, isHover } = useAppSelector((state) => state.dashboard);
  const pathName = usePathname();
  const { push } = useRouter();
  console.log("pathName", pathName);
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
              sx={(theme) => ({
                color: theme.colorScheme === "dark" ? "white" : "black",
              })}
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
                sx={(theme) => ({
                  color: theme.colorScheme === "dark" ? "white" : "black",
                })}
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

        <SideBarMenu />
      </ScrollArea>
    </Box>
  );
};

export default SidebarLargeDevice;
