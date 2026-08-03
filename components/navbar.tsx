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

  // After mounting, we can access the pathname
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <HeroUINavbar className="h-16" maxWidth="xl">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            {logo}
          </NextLink>
        </NavbarBrand>
        <ul className="hidden md:flex gap-6 justify-start ml-8">
          {items.map((item) => {
            const isActive = mounted && pathname === item.href;

            return (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    "nav-link text-sm tracking-wide",
                    isActive && "active-nav-link",
                  )}
                  color="foreground"
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
        <NavbarMenuToggle className="md:hidden ml-2" />
      </NavbarContent>

      <NavbarMenu className="pt-8 bg-white/95 dark:bg-dark/95 backdrop-blur-md">
        <div className="mx-4 mt-2 flex flex-col gap-4">
          {items.map((item, index) => {
            const isActive = mounted && pathname === item.href;

            return (
              <NavbarMenuItem key={`${item.label}-${index}`}>
                <Link
                  className={clsx(
                    "block py-2 text-lg",
                    isActive
                      ? "text-primary font-medium"
                      : "text-text-dark dark:text-text-light hover:text-primary dark:hover:text-primary",
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
