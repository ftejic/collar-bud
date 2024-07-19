"use client";
import { AlignRightIcon, CircleHelpIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignRightIcon className="text-foreground md:hidden" />
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader>
          <SheetTitle>CollarBud</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <nav className="mt-10">
          <ul className="flex flex-col space-y-5 text-left">
            <li>
              <Link href={`/create-collar`}>
                <SheetClose className="outline-none">Create Collar</SheetClose>
              </Link>
            </li>
            <li>
              <Link href={"/#gallery"}>
                <SheetClose className="outline-none">Gallery</SheetClose>
              </Link>
            </li>
            <li>
              <Link href={"/#faqs"}>
                <SheetClose className="outline-none">FAQs</SheetClose>
              </Link>
            </li>
          </ul>
          <Link
            href={"/login"}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-full px-4 py-2 my-10"
          >
            <SheetClose className="w-full outline-none">
              Sign in
            </SheetClose>
          </Link>
          <Link href={"/help"}>
            <SheetClose className="flex items-center outline-none">
              <CircleHelpIcon className="mr-2" />
              Help
            </SheetClose>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
