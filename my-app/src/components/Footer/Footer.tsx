"use client";
import { scrollIntoView } from "@/utils/scrollIntoView";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-10 md:py-16 bg-gradient-to-r from-gradient-start to-gradient-end">
      <div className="container mx-auto space-y-2 flex flex-col items-center">
        <p
          onClick={() => scrollIntoView("hero")}
          className="lg:text-2xl font-unbounded font-bold tracking-tighter cursor-pointer"
        >
          CollarBud
        </p>
        <p>Made by Filip Tejic</p>
        <Link href={"https://github.com/ftejic"} target="_blank" className="block w-fit">
          <GithubIcon />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
