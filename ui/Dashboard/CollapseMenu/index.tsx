import { CollapseMenuSidebarProps } from "@/lib/interfaces";
import NavLinks from "@/ui/Navlinks";
import { Box, Drawer, Text, Transition } from "@mantine/core";
import Link from "next/link";
import React from "react";

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
  isMobile,
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
                      style={{
                        textDecoration: "none",
                        color: "unset",
                        display: "block",
                        marginLeft: "19px",
                      }}
                      href={`/dashboard/${href}`}
                      key={index}
                    >
                      <Text size={19} key={index}>
                        {label}
                      </Text>
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
