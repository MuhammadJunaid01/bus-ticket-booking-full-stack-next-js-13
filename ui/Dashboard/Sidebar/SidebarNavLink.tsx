import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import React from "react";
type SidebarNavLinkType = {
  href: string;
  label: string;
};
import { Box, Text } from "@mantine/core";
const SidebarNavLink = ({ label, href }: SidebarNavLinkType) => {
  const pathName = usePathname();
  const segment = useSelectedLayoutSegment();
  const isActive = `/${segment}/${href}` === pathName;

  return (
    <Box
      sx={(theme) => ({
        borderLeft: isActive
          ? `1px solid ${
              theme.colorScheme === "dark" ? theme.colors.blue[6] : "black"
            }`
          : "none",
      })}
      //   style={isActive ? { borderLeft: "2px solid red" } : {}}
    >
      <Link
        style={{
          textDecoration: "none",
          color: "unset",
          display: "block",
          // marginLeft: "19px",
        }}
        href={`/dashboard/${href}`}
      >
        <Text
          sx={(theme) => ({
            marginTop: "6px",
            padding: "0px 12px",
            borderRadius: "5px",
            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.gray[7]
                  : theme.colors.gray[4],
              // padding: "0px 6px",
            },
          })}
          size={19}
        >
          {label}
        </Text>
      </Link>
    </Box>
  );
};

export default SidebarNavLink;
