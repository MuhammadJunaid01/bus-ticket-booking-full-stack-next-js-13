import { CollapseMenuSidebarProps } from "@/lib/interfaces";
import NavLinks from "@/ui/Navlinks";
import { Box, Drawer, Text, Transition } from "@mantine/core";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import React from "react";
import SidebarNavLink from "../Sidebar/SidebarNavLink";
type MyLinkType = {
  href: string;
  label: string;
};
const MyLink = ({ href, label }: MyLinkType) => {
  const pathName = usePathname();
  const segment = useSelectedLayoutSegment();
  const isActive = `/${segment}/${href}` === pathName;
  console.log("isActivePath", isActive);
  console.log("segment", segment);
  console.log("pathName", pathName);
  return <div style={{}}>{label}</div>;
};
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
    <Box style={{ width: "100%", marginBottom: "19px" }}>
      {isopenSidebar && isHover === false ? (
        <Box style={{ cursor: "pointer", textAlign: "center" }}>{icon}</Box>
      ) : (
        <Box>
          <Box
            sx={(theme) => ({
              display: "flex",
              justifyContent: "space-between",
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
                    <SidebarNavLink key={index} label={label} href={href} />
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
