import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/libs/providers";

const inter = Inter({ subsets: ["latin"] });
/* The code block `export const metadata: Metadata = { ... }` is defining an object named `metadata`
with the type `Metadata`. */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.e-ticket-web.com"),
  title: {
    default: "AR poribohon | Home Page",
    template: `%s | E-TICKET`,
  },
  description: "This is the description of  E Shop Web",
  verification: {
    google: "google-site-verification=878787878",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
