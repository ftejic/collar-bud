"use client";
import { scrollIntoView } from "@/utils/scrollIntoView";
import Link from "next/link";

function DesktopMenu() {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-10">
        <li className="navbarItem relative">
          <Link href={`/create-collar`}>Create Collar</Link>
        </li>
        <li
          onClick={() => scrollIntoView("gallery")}
          className="navbarItem relative cursor-pointer"
        >
          Gallery
        </li>
        <li
          onClick={() => scrollIntoView("faqs")}
          className="navbarItem relative cursor-pointer"
        >
          FAQs
        </li>
      </ul>
    </nav>
  );
}

export default DesktopMenu;
