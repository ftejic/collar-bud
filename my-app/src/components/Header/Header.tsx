"use client"
import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import TopMenu from "./TopMenu";
import { scrollIntoView } from "@/utils/scrollIntoView";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background ">
      <div className="container mx-auto py-5 lg:pt-6 lg:pb-10">
        <TopMenu />
        <div className="flex justify-between items-center">
          <p
            onClick={() => scrollIntoView("hero")}
            className="logoText lg:text-2xl font-unbounded font-bold tracking-tighter cursor-pointer"
          >
            CollarBud
          </p>
          <div className="flex space-x-5 md:space-x-10">
            <DesktopMenu />
            <MobileMenu />
            <div>
              <div className="relative cursor-pointer">
                <ShoppingCartIcon className="text-foreground" />
                <Badge className="bg-gradient-to-t from-gradient-start to-gradient-end absolute flex -top-2 -right-2 w-4 h-4 rounded-full text-xs p-0 items-center justify-center">
                  0
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
