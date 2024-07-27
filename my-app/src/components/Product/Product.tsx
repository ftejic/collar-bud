import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface ProductInterface {
  name: string;
  price: number;
  image: string;
}

function Product({ name, price, image }: ProductInterface) {
  return (
    <div className="space-y-5">
      <Image
        src={image}
        alt=""
        width={600}
        height={600}
        className="rounded-md"
      />
      <p className="font-unbounded font-bold text-2xl">{name}</p>
      <p className="font-unbounded font-bold text-4xl">{price}.00&#8364;</p>
      <Link href={`/product/${name}`} >
        <Button size={"lg"} className="font-unbounded font-bold uppercase mt-5">
          Customize Now
        </Button>
      </Link>
    </div>
  );
}

export default Product;
