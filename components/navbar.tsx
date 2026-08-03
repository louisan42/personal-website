import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  items: { label: string; href: string }[];
  logo: React.ReactNode;
  rightContent?: React.ReactNode;
}

export const Navbar = ({ items, logo, rightContent }: NavbarProps) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <HeroUINavbar
      className="fixed top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md"
      classNames={{
        wrapper: "px-6 md:px-12 max-w-none",
      }}
      height="4rem"
      maxWidth="full"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink className="flex items-center" href="/">
            {logo}
          </NextLink>
        </NavbarBrand>
        <ul className="ml-10 hidden justify-start gap-7 md:flex">
          {items.map((item) => {
            const isActive = mounted && pathname === item.href;

            return (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx("nav-link", isActive && "active-nav-link")}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent className="basis-1/5 sm:basis-auto" justify="end">
        {rightContent}
        <NavbarMenuToggle className="ml-2 text-ink md:hidden" />
      </NavbarContent>

      <NavbarMenu className="bg-paper pt-8">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {items.map((item, index) => {
            const isActive = mounted && pathname === item.href;

            return (
              <NavbarMenuItem key={`${item.label}-${index}`}>
                <Link
                  className={clsx(
                    "block py-3 text-lg",
                    isActive ? "text-ink font-medium" : "text-muted",
                  )}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
