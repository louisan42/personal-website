import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Toaster } from "sonner";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

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
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased bg-noise-dark",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {/* Background decorative elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 shape-blob opacity-20" />
            <div
              className="absolute top-1/2 right-10 w-64 h-64 shape-blob opacity-20"
              style={{ animationDelay: "-3s" }}
            />
            <div
              className="absolute bottom-20 left-1/3 w-80 h-80 shape-blob opacity-20"
              style={{ animationDelay: "-5s" }}
            />
          </div>

          <div className="relative flex flex-col h-screen">
            {/* <Navbar /> */}
            <main className="w-full mx-auto flex-grow">{children}</main>
          </div>
          <Toaster closeButton richColors position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
