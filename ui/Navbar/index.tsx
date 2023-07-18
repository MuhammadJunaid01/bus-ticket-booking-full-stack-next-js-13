import { mockdata, navlinkData } from "@/libs/data";
import { navbarStyles } from "@/libs/styles";
import { useRouter } from "next/navigation";
import {
  Header,
  Group,
  UnstyledButton,
  Text,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
} from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import Links from "./Links";
import DarkAndLightMode from "./DarkAndLightMode";
import NavLinks from "../Navlinks";
import NavbarSmallDevices from "./NavbarSmallDevices";

export function Navbar({ isHomePage }: { isHomePage: boolean }) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = navbarStyles();
  const router = useRouter();
  const links = Links({ data: mockdata });
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Box>
      <Header
        style={
          scroll.y >= 120
            ? { position: "fixed", top: "0px", backgroundColor: "#5B2192" }
            : {}
        }
        sx={(theme) => ({
          // border: `2px solid red`,
          position: scroll.y >= 120 ? "fixed" : "relative",
          backgroundColor: `${isHomePage && "transparent"}`,
          borderBottom: `${isHomePage && "none"}`,
        })}
        // style={{ backgroundColor:  }}
        height={80}
        px="md"
      >
        <Group position="apart" sx={{ height: "100%" }}>
          <Text
            color="#ffffff"
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
            size={30}
          >
            AR poribohon
          </Text>

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            {navlinkData.map((data, index) => {
              return (
                <NavLinks key={index} href={data.href} label={data.label} />
              );
            })}

            <DarkAndLightMode />
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      {/* Navbar For Small Devices */}
      <NavbarSmallDevices
        drawerOpened={drawerOpened}
        closeDrawer={closeDrawer}
        data={navlinkData}
      />
    </Box>
  );
}
