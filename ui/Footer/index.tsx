import { footerStyles } from "@/lib/styles";
import { Box, Divider, Grid, Text } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BusImage from "@/public/bus.png";
import PlayStoreIcon from "@/public/play-store.svg";
import AppStoreIcon from "@/public/app-store.svg";

import React from "react";
import FooterLogo from "./FooterLogo";
import {
  companyInfo,
  footerHelpCenterData,
  socialLinkData,
} from "@/lib/data/footer-data";
import NavLinks from "../Navlinks";
import Link from "next/link";
import FooterLink from "./FooterLink";

const Footer = () => {
  const router = useRouter();
  const { classes } = footerStyles();
  return (
    <Box className={classes.container}>
      <Grid align="center" mb={20}>
        <Grid.Col span={12} md={3}>
          <FooterLogo />
          <Text mt={11}>
            etickets bd is premium online booking portal which allows you to
            purchase ticket for various bus services.
          </Text>
        </Grid.Col>
        <Grid.Col span={12} md={1}></Grid.Col>
        <Grid.Col span={12} md={4}>
          <Box>
            <Text size={22} fw={600}>
              Company Info
            </Text>
            {companyInfo.map(({ name, href }, index) => {
              return (
                <Box key={index}>
                  <FooterLink name={name} href={href} />
                </Box>
              );
            })}
          </Box>
        </Grid.Col>
        <Grid.Col span={12} md={4}>
          <Box>
            <Text size={22} fw={600}>
              Customer Services
            </Text>
            {footerHelpCenterData.map(({ name, href }, index) => {
              return (
                <Box key={index}>
                  <FooterLink name={name} href={href} />
                </Box>
              );
            })}
          </Box>
        </Grid.Col>
      </Grid>
      <Divider my="xs" label="" labelPosition="center" />
      <Box className={classes.icon_and_social}>
        <Box>
          <Text ml={35}>Download Our App Now!</Text>
          <Box style={{ display: "flex", gap: "11px" }}>
            <Image
              src={PlayStoreIcon}
              className={classes.appIcon}
              alt="PlayStoreIcon"
            />
            <Image
              src={AppStoreIcon}
              className={classes.appIcon}
              alt="PlayStoreIcon"
            />
          </Box>
        </Box>
        <Box style={{ display: "flex", gap: "22px" }}>
          {socialLinkData.map(({ link, Icon }, index) => {
            return (
              <Box className={classes.socialIcon} key={index}>
                <Link target="_blank" href={link}>
                  <Icon className={classes.icon} />
                </Link>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Text className={classes.copyRight} align="center">
        Copyright © 2023 etickets bd. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
