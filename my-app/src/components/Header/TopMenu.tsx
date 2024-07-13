import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function TopMenu() {
  return (
    <nav className="hidden md:flex justify-end mb-4">
      <ul className="flex space-x-2 text-xs font-bold">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="outline-none">
            <li>Help</li>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Help</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Size Charts</DropdownMenuItem>
            <DropdownMenuItem>Privacy Policy</DropdownMenuItem>
            <DropdownMenuItem>Terms of Sale</DropdownMenuItem>
            <DropdownMenuItem>Terms of Use</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Separator orientation="vertical" />
        <li>
          <Link href={"/login"}>Sign in</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopMenu;
