import React from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

function Hero() {
  return (
    <section
      id="hero"
      className="container mx-auto mt-[68px] md:mt-[100px] lg:mt-32 py-10 md:py-16 text-center"
    >
      <h1 className="font-unbounded font-bold text-2xl min-[375px]:text-4xl sm:text-6xl md:text-7xl tracking-tight drop-shadow-lg">
        CRAFTED FOR
        <span className="block gradientText">COMFORT.</span>
        DESIGNED BY
        <span className="block gradientText">YOU.</span>
      </h1>
      <p className="font-unbounded mt-5">
        Design unique, personalized collars for your beloved pets.
      </p>
      <Link href={"/create-collar"}>
        <Button
          size={"lg"}
          className="sm:w-96 h-12 sm:h-[62px] sm:text-2xl font-unbounded uppercase mt-5"
        >
          Design Now
          <ArrowRightIcon className="sm:h-10 sm:w-10" />
        </Button>
      </Link>
    </section>
  );
}

export default Hero;
