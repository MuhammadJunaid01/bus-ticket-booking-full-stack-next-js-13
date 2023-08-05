import Link from "next/link";
import React from "react";
import { Text } from "@mantine/core";
interface FooterLinkProps {
  name: string;
  href: string;
}
const FooterLink: React.FC<FooterLinkProps> = ({ name, href }) => {
  return (
    <Link style={{ textDecoration: "none", color: "unset" }} href={href}>
      <Text mt={4}>{name}</Text>
    </Link>
  );
};

export default FooterLink;
