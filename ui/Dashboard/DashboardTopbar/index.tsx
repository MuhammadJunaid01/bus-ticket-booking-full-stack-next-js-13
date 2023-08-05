import React from "react";
import { Header, Container, Group, Burger, Text, Box } from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import {
  IconSearch,
  IconAlignJustified,
  IconBell,
  IconX,
} from "@tabler/icons-react";
import { navbarStyles } from "@/lib/styles";
import Profile from "@/ui/Profile";
import DarkAndLightMode from "@/ui/Navbar/DarkAndLightMode";
import NavbarSmallDevices from "@/ui/Navbar/NavbarSmallDevices";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { openDahboardDrawer } from "@/redux/features/dashboard";
import { siderbarDahboardData } from "@/lib/data/dashboard-data";
import { SideBarSmallDevice } from "../Sidebar";
import { useRouter } from "next/navigation";

const DashboardTopbar = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { open, isHover } = useAppSelector((state) => state.dashboard);

  const dispatch = useAppDispatch();
  const { classes } = navbarStyles();
  const [scroll, scrollTo] = useWindowScroll();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { push } = useRouter();

  return (
    <div>
      <Box style={{ width: "100%" }}>
        <Header
          // style={{ width: "100%" }}

          height={70}
          px="md"
        >
          <Group
            position="apart"
            sx={(theme) => ({
              height: "100%",
            })}
          >
            <Box
              sx={(theme) => ({
                [theme.fn.largerThan("sm")]: {
                  display: "none",
                },
              })}
            >
              <Text
                onClick={() => push("/dashboard")}
                size={26}
                fw={900}
                color="white"
              >
                AR Poribohon
              </Text>
            </Box>
            <Group
              style={{ width: "100%" }}
              sx={(theme) => ({
                [theme.fn.smallerThan("sm")]: {
                  display: "none",
                },
              })}
              spacing={0}
              // className={classes.hiddenMobile}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: "19px",
                }}
              >
                <Box>
                  {open ? (
                    <IconX
                      onClick={() => dispatch(openDahboardDrawer())}
                      cursor="pointer"
                    />
                  ) : (
                    <IconAlignJustified
                      onClick={() => dispatch(openDahboardDrawer())}
                      cursor="pointer"
                    />
                  )}
                </Box>
                <Box>
                  <IconSearch cursor="pointer" />
                </Box>
                <Box
                  style={{ display: "flex", alignItems: "center", gap: "9px" }}
                >
                  <IconBell cursor="pointer" />
                  <Profile />
                  <DarkAndLightMode />
                </Box>
              </Box>
            </Group>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className={classes.hiddenDesktop}
            />
            {/* <IconBell cursor="pointer" />
            <Profile /> */}
          </Group>
        </Header>

        {/* /* The code is rendering the `NavbarSmallDevices` component, which is responsible for displaying the
   navigation links in a collapsible menu for small devices. */}

        <SideBarSmallDevice
          drawerOpened={drawerOpened}
          closeDrawer={closeDrawer}
          data={siderbarDahboardData}
        />
      </Box>
    </div>
  );
};

export default DashboardTopbar;
