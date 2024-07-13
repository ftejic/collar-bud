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
import { scrollIntoView } from "@/utils/scrollIntoView";

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
              <SheetClose className="outline-none">
                <Link href={`/create-collar`}>Create Collar</Link>
              </SheetClose>
            </li>
            <li>
              <SheetClose
                onClick={() => scrollIntoView("gallery")}
                className="outline-none"
              >
                Gallery
              </SheetClose>
            </li>
            <li>
              <SheetClose
                onClick={() => scrollIntoView("faqs")}
                className="outline-none"
              >
                FAQs
              </SheetClose>
            </li>
          </ul>
          <SheetClose className="mt-10 w-full outline-none">
            <Link
              href={"/login"}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-full px-4 py-2"
            >
              Sign in
            </Link>
          </SheetClose>
          <SheetClose className="mt-10 outline-none flex items-center space-x-2">
            <CircleHelpIcon />
            <Link href={"/help"}>Help</Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
