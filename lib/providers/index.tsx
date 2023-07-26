"use client";
import { store } from "@/redux/store";
import { AffixScroll, Navbar } from "@/ui";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { Notifications } from "@mantine/notifications";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import React from "react";
import { Provider } from "react-redux";
import { ProvidersProps } from "../interfaces";

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  // const dispatch = useAppDispatch();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });
  const path = usePathname();
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const isHomePage = "/" === path ? true : false;
  // console.log(data);

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
            <Notifications position="top-right" />
            {children}
          </Provider>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
};

export default Providers;
