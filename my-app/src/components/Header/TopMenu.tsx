import React from "react";
import { Separator } from "../ui/separator";
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

function TopMenu() {
  return (
    <div className="hidden md:flex justify-end mb-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link href={"/help"}>Help</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
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
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/login" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Sign in
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default TopMenu;
