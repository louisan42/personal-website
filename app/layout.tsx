import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Toaster } from "sonner";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontMono, fontSans } from "@/config/fonts";

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
    { media: "(prefers-color-scheme: light)", color: "#F4F5F7" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
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
          "min-h-screen bg-background font-sans text-foreground antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
            storageKey: "portfolio-theme",
          }}
        >
          <div className="relative flex min-h-screen flex-col">
            <main className="w-full flex-grow">{children}</main>
          </div>
          <Toaster closeButton richColors position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
