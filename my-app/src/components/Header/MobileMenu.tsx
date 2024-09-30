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
import { Button } from "../ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

function MobileMenu() {
  const { data: session } = useSession();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignRightIcon className="text-foreground md:hidden" />
      </SheetTrigger>
      <SheetContent side={"right"}>
        <SheetHeader>
          <SheetTitle className="font-unbounded">CollarBud</SheetTitle>
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
          {session ? (
            <Button
              size={"lg"}
              variant={"outline"}
              className="w-full my-10"
              onClick={() => signOut()}
              asChild
            >
              <SheetClose className="w-full outline-none">Sign out</SheetClose>
            </Button>
          ) : (
            <Button
              size={"lg"}
              className="w-full my-10"
              onClick={() => signIn("google")}
              asChild
            >
              <SheetClose className="w-full outline-none">Sign in</SheetClose>
            </Button>
          )}

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
