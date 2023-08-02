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
import { usePathname, useRouter } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import React from "react";
import { Provider } from "react-redux";
import { ProvidersProps } from "../interfaces";
import { isTokenExpired } from "../utils/isTokenExpired";
import { domain } from "../api";
import { getReshToken } from "../utils/getRefreshToken";

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  // const dispatch = useAppDispatch();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });
  const { push } = useRouter();
  const path = usePathname();
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const isHomePage = "/" === path ? true : false;
  const isSlashHomePage = "/home" === path ? true : false;

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken") ?? "";
      const refreshToken = localStorage.getItem("refreshToken") ?? "";
      const isVaildAccess = isTokenExpired(accessToken);
      if (!isTokenExpired(accessToken)) {
        if (isTokenExpired(refreshToken)) {
          const parsRefresh = JSON.parse(refreshToken);
          getReshToken(parsRefresh);
        } else {
          push("/auth");
        }
      }
      // console.log(isVaildAccess);
    }
  }, []);
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
            {children}
          </Provider>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
};

export default Providers;
