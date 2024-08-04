import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

interface ProductInterface {
  name: string;
  price: number;
  images: string[];
}

function Product({ name, price, images }: ProductInterface) {
  return (
    <div className="space-y-5">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Image
                src={image}
                alt=""
                width={600}
                height={600}
                className="rounded-md"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="font-unbounded font-bold text-2xl">{name}</p>
      <p className="font-unbounded font-bold text-4xl">{price}.00&#8364;</p>
      <Link href={`/product/${name}`}>
        <Button size={"lg"} className="font-unbounded font-bold uppercase mt-5">
          Customize Now
        </Button>
      </Link>
    </div>
  );
}

export default Product;
