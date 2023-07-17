"use client";
import {
  ColorScheme,
  MantineProvider,
  ColorSchemeProvider,
} from "@mantine/core";
import React from "react";
import { ProvidersProps } from "../interfaces";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { useLocalStorage } from "@mantine/hooks";
import { AffixScroll, Navbar } from "@/ui";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const path = usePathname();
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const isHomePage = "/" === path ? true : false;

  return (
    <div>
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
            {isHomePage ? null : <Navbar isHomePage={false} />}
            {children}
          </Provider>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
};

export default Providers;
