import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { AuroraBackground } from "@/components/aurora-background";
import { Vortex } from "@/components/vortex";
import { ScrollShadow } from "@nextui-org/react";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative min-h-screen">
            <AuroraBackground className="fixed h-screen inset-0 z-0">
              <ScrollShadow hideScrollBar size={50}>
                <div className="relative z-10 overflow-y-scroll">
                  <Navbar />
                  <main className="container mx-auto max-w-7xl flex-grow">
                    {children}
                  </main>
                </div>
              </ScrollShadow>
            </AuroraBackground>
          </div>
        </Providers>
      </body>
    </html>
  );
}
