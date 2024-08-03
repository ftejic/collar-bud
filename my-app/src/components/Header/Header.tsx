import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import TopMenu from "./TopMenu";
import Link from "next/link";
import Cart from "../Cart/Cart";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background z-50 shadow-md">
      <div className="container mx-auto py-5 lg:pt-6 lg:pb-10">
        <TopMenu />
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <p className="gradientText lg:text-2xl font-unbounded font-bold tracking-tighter cursor-pointer">
              CollarBud
            </p>
          </Link>

          <div className="flex space-x-5 md:space-x-10">
            <DesktopMenu />
            <MobileMenu />
            <div>
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
