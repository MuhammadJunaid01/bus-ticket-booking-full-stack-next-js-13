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
import { CookiesProvider, useCookies } from "react-cookie";

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
  const isSlashHomePage = "/home" === path ? true : false;
  console.log("isSlashHomePage", isSlashHomePage);
  // console.log(data);
  // const [cookies] = useCookies(["jwt"]); //
  // console.log("JWT COKC FROM Providers cookies.jwt", cookies);
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
            {isHomePage || isSlashHomePage ? null : (
              <Navbar isHomePage={false} />
            )}
            <Notifications position="top-center" zIndex={2077} />
            <CookiesProvider>{children}</CookiesProvider>
          </Provider>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
};

export default Providers;
