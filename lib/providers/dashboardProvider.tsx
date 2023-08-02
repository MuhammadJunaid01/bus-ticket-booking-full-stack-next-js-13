"use client";
import { store } from "@/redux/store";
import { AffixScroll } from "@/ui";
import {
  ColorScheme,
  ColorSchemeProvider,
  Grid,
  MantineProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { Notifications } from "@mantine/notifications";
import NextTopLoader from "nextjs-toploader";
import React from "react";
import { Provider } from "react-redux";
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
          <Provider store={store}>
            <Notifications position="top-center" zIndex={2077} />
            {/* <h1>navbar</h1> */}
            {children}
          </Provider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default DashboardProvider;
