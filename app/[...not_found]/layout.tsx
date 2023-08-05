import Providers from "@/lib/providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AR poribohon | under maintenance  Page",
  description: "AR poribohon | under maintenance  Page description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
