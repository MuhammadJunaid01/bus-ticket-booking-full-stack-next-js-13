/* eslint-disable @next/next/no-async-client-component */
// import "./globals.css";
"use client";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DashboardProvider from "@/lib/providers/dashboardProvider";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
const inter = Inter({ subsets: ["latin"] });

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider store={store}>
          <DashboardProvider>
            <main>{children}</main>
          </DashboardProvider>
        </Provider>
      </body>
    </html>
  );
};
export default RootLayout;
