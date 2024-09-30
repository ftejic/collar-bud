"use client";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";

function TopMenu() {
  const { data: session } = useSession();

  return (
    <div className="hidden md:flex justify-end mb-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link href={"/help"}>Help</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul>
                <li>
                  <Link href="/help/size-charts" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Size Charts
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/help/privacy-policy" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Privacy Policy
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/help/terms-of-sale" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Terms of Sale
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/help/terms-of-use" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Terms of Use
                    </NavigationMenuLink>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {session ? (
              <Button
                className={`${navigationMenuTriggerStyle()} text-foreground`}
                onClick={() => signOut()}
              >
                Sign out
              </Button>
            ) : (
              <Button
                className={`${navigationMenuTriggerStyle()} text-foreground`}
                onClick={() => signIn("google")}
              >
                Sign in
              </Button>
            )}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default TopMenu;
