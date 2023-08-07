import { mockdata, navlinkData } from "@/lib/data";
import { navbarStyles } from "@/lib/styles";
import { useRouter } from "next/navigation";
import {
  Header,
  Group,
  Text,
  Box,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { useColorScheme, useDisclosure, useWindowScroll } from "@mantine/hooks";
import Links from "./Links";
import DarkAndLightMode from "./DarkAndLightMode";
import NavLinks from "../Navlinks";
import NavbarSmallDevices from "./NavbarSmallDevices";
import { Profile } from "@/ui";
import Logo1 from "@/public/logo-3-r-bg.png";
import Image from "next/image";
import React from "react";
import BusImage from "@/public/bus.png";
export interface NavbarProps {
  isHomePage: boolean;
}
const Navbar: React.FC<NavbarProps> = ({ isHomePage }) => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes } = navbarStyles();
  const router = useRouter();

  const [themeMode, settThemeMode] = React.useState<string | null>();
  const links = Links({ data: mockdata });
  const [scroll, scrollTo] = useWindowScroll();
  const theme = useMantineTheme();
  const isDarkMode = theme.colorScheme === "dark";

  return (
    <Box>
      <Header
        style={
          /* The code `scroll.y >= 120 ? { position: "fixed", top: "0px", backgroundColor: "#5B2192" } :
         {}` is conditionally setting the CSS styles for the `Header` component based on the value
         of `scroll.y`. */
          scroll.y >= 120
            ? { position: "fixed", top: "0px", backgroundColor: "#5B2192" }
            : {}
        }
        sx={(theme) => ({
          position: scroll.y >= 120 ? "fixed" : "relative",
          backgroundColor: `${isHomePage && "transparent"}`,
          borderBottom: `${isHomePage && "none"}`,
        })}
        height={80}
        px="md"
      >
        <Group position="apart" sx={{ height: "100%" }}>
          {isDarkMode && isHomePage === false ? (
            <Box style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
              <Text
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
          ) : (
            <Box style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
              <Text
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

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            {/* /* The code is mapping over the `navlinkData` array and rendering a `NavLinks` component
            for each item in the array. The `NavLinks` component is passed two props: `href` and
            `label`, which are extracted from each item in the `navlinkData` array. The `key` prop
            is set to the `index` of each item in the array to ensure uniqueness. */}
            {navlinkData.map((data, index) => {
              return (
                <NavLinks key={index} href={data.href} label={data.label} />
              );
            })}

            {/* /* The `<Profile />` component is responsible for displaying the user's profile information
           in the navbar. It could include the user's profile picture, name, and any other relevant
           details. */}

            <Profile />

            {/* /* The `<DarkAndLightMode />` component is responsible for displaying an indicator or toggle
           button for switching between dark mode and light mode in the navbar. It allows the user
           to change the theme of the application based on their preference. */}

            <DarkAndLightMode />
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      {/* /* The code is rendering the `NavbarSmallDevices` component, which is responsible for displaying the
   navigation links in a collapsible menu for small devices. */}

      <NavbarSmallDevices
        drawerOpened={drawerOpened}
        closeDrawer={closeDrawer}
        data={navlinkData}
      />
    </Box>
  );
};
export default Navbar;
