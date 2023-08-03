/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useCustomHover } from "@/redux/features/dashboard";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { AffixScroll } from "@/ui";
import { DashboardTopbar } from "@/ui/Dashboard";
import { SidebarLargeDevice } from "@/ui/Dashboard/Sidebar";
import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  Grid,
  MantineProvider,
} from "@mantine/core";
import { useLocalStorage, useMediaQuery } from "@mantine/hooks";
import { Notifications } from "@mantine/notifications";
import NextTopLoader from "nextjs-toploader";
import React from "react";
export interface ProvidersProps {
  children: React.ReactNode;
}
const DashboardProvider = ({ children }: ProvidersProps) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const { open, isHover } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();

  const isDesktop = useMediaQuery("(min-width:768px)");
  return (
    <>
      <AffixScroll />
      <NextTopLoader height={3} showSpinner={false} />
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme }}
        >
          <Notifications position="top-center" zIndex={2077} />

          <Grid>
            {isDesktop ? (
              <Grid.Col span={12} md={open ? 0.8 : 2}>
                <Box
                  sx={(theme) => ({
                    position: open && isHover ? "absolute" : "relative",
                    width: open && isHover ? "300px" : "100%",
                  })}
                  onMouseEnter={() => dispatch(useCustomHover(true))}
                  onMouseLeave={() => dispatch(useCustomHover(false))}
                  style={{ position: "relative" }}
                >
                  <SidebarLargeDevice />
                </Box>
              </Grid.Col>
            ) : null}
            <Grid.Col span={12} md={open ? 11.2 : 10}>
              <DashboardTopbar />
              {children}
            </Grid.Col>
          </Grid>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default DashboardProvider;
