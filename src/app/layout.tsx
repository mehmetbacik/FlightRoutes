import type { Metadata } from "next";
import ProviderWrapper from "@/components/Provider/ProviderWrapper";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "@/styles/styles.scss";

export const metadata: Metadata = {
  title: "Flight Routes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProviderWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </ProviderWrapper>
      </body>
    </html>
  );
}
