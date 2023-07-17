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
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import Links from "./Links";
import DarkAndLightMode from "./DarkAndLightMode";
import NavLinks from "../Navlinks";

export function Navbar({ isHomePage }: { isHomePage: boolean }) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = navbarStyles();
  const router = useRouter();
  const links = Links({ data: mockdata });
  return (
    <Box>
      <Header
        sx={(theme) => ({
          // border: `2px solid red`,
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
            E-TICKET
          </Text>

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            {navlinkData.map((data, index) => {
              return (
                <NavLinks
                  key={index}
                  href={data.href}
                  label={data.label}
                  icon={data.icon}
                />
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

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="E SHOP"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                busses
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>
          <DarkAndLightMode />
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
