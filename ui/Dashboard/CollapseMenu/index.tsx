import { Box, Drawer, Text, Transition } from "@mantine/core";
import Link from "next/link";
import React from "react";
export type NavDataTypes = {
  label: string;
  href: string;
};

export interface CollapseMenuSidebarProps {
  icon: React.ReactNode;
  navData: NavDataTypes[];
  title: string;
  subTitle: number | "New" | "Hot";
  collapseIcon: React.ReactNode;
  handleCollapse: () => void;
  isCollapse: boolean;
  isopenSidebar: boolean;
  isHover: boolean;
}

const CollapseMenuSidebar: React.FC<CollapseMenuSidebarProps> = ({
  icon,
  navData,
  title,
  subTitle,
  collapseIcon,
  isCollapse,
  handleCollapse,
  isopenSidebar,
  isHover,
}) => {
  return (
    <Box style={{ width: "100%" }}>
      {isopenSidebar && isHover === false ? (
        <Box style={{ cursor: "pointer", textAlign: "center" }}>{icon}</Box>
      ) : (
        <Box>
          <Box
            sx={(theme) => ({
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              position: "relative",
            })}
          >
            {icon}
            <Text>{title}</Text>
            <Text>{subTitle}</Text>
            <Text onClick={handleCollapse}>{collapseIcon}</Text>
          </Box>
          <Transition
            mounted={isCollapse}
            transition="slide-up"
            duration={400}
            timingFunction="ease"
          >
            {(styles) => (
              <div style={styles}>
                {navData.map(({ href, label }, index) => {
                  return (
                    <Link
                      style={{ textDecoration: "none", color: "unset" }}
                      href={`/dashboard/${href}`}
                      key={index}
                    >
                      <Text key={index}>{label}</Text>
                    </Link>
                  );
                })}
              </div>
            )}
          </Transition>
        </Box>
      )}
    </Box>
  );
};

export default CollapseMenuSidebar;
