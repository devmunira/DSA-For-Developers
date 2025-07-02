"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import menuItems from "@/data/menu.json";

export function Navbar() {
  return (
    <div className="p-4">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link href="/">Home</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-amber-900">
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                      href="/">
                      <div className="mt-4 mb-2 text-lg font-medium">
                        DSA Developers Playground
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        I try to give a overview how we can use data structures
                        and algorithms to solve problems in our real world
                        problems.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Code">
                  Github Repository
                </ListItem>
                <ListItem href="/docs/installation" title="Mind Maps">
                  Diagrams and Visualizations
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Developers Guide">
                  Documentation and Guides
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {menuItems?.map((menu, index) => (
            <NavigationMenuItem key={index}>
              {menu?.children && menu?.children?.length > 0 ? (
                <>
                  <NavigationMenuTrigger key={index}>
                    <Link href={menu.url}> {menu.name}</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-amber-900" key={index}>
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {menu?.children?.map((child, index) => (
                        <ListItem
                          key={index}
                          title={child.name}
                          href={child.url}>
                          {child.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}>
                  <Link href={menu.url}>{menu.name}</Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-bold">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
