import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

function ProductCategories() {
  return (
    <section className="container mx-auto py-10 md:py-16 grid md:grid-cols-2 gap-5">
      <Card className="bg-[url('/images/dog1.png')] h-60 bg-cover relative">
        <CardHeader className="relative z-10">
          <CardTitle className="text-background drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] w-fit h-7 relative cursor-pointer">
            <Link href={"/create-collar/for-dogs"}>Dog Collars</Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="absolute w-full h-full backdrop-blur-[2px] top-0 left-0 z-0"></div>
        </CardContent>
      </Card>
      <Card className="bg-[url('/images/cat1.jpeg')] h-60 bg-cover relative">
        <CardHeader className="relative z-10">
          <CardTitle className="text-background drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] w-fit h-7 relative cursor-pointer">
            <Link href={"/create-collar/for-cats"}>Cat Collars</Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="absolute w-full h-full backdrop-blur-[2px] top-0 left-0 z-0"></div>
        </CardContent>
      </Card>
    </section>
  );
}

export default ProductCategories;
