import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { navbarStyles } from "@/lib/styles";
import Link from "next/link";
import { Box } from "@mantine/core";

export interface NavLinksProps {
  href: string;
  label: string;
}
const NavLinks: React.FC<NavLinksProps> = ({ href, label }) => {
  const segment = useSelectedLayoutSegment();
  const { classes, theme } = navbarStyles();

  const active = href === segment;

  return (
    <Link className={classes.link} href={href}>
      <Box style={{ display: "flex", alignItems: "center", gap: "7px" }}>
        {label}
      </Box>
    </Link>
  );
};

export default NavLinks;
