import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

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
      <p className="font-unbounded font-bold text-4xl">{price}.00&#36;</p>
      <Button size={"lg"} className="font-unbounded font-bold uppercase">Customize Now</Button>
    </div>
  );
}

export default Product;
