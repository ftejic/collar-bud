import formatPrice from "@/lib/formatPrice";
import { XIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { CartItemType } from "../../../types/types";

interface CartItemProps extends CartItemType {
  removeItemFromCart: (id: string) => void;
}

function CartItem({
  id,
  image,
  name,
  size,
  price,
  quantity,
  petName,
  removeItemFromCart,
}: CartItemProps) {
  return (
    <div className="text-sm pb-5 border-b">
      <div className="flex justify-between space-x-2">
        <div className="flex space-x-2">
          <Image
            src={image}
            width={55}
            height={55}
            alt=""
            className="w-14 h-14 rounded-md"
          />
          <div className="flex flex-col">
            <p>{name}</p>
            <p>Size {size}</p>
            <p>{petName}</p>
          </div>
        </div>
        <XIcon
          className="w-4 h-4 cursor-pointer"
          onClick={async () => await removeItemFromCart(id)}
        />
      </div>
      <p className="text-center mt-1">
        {quantity} x {formatPrice(price)}&#8364;
      </p>
    </div>
  );
}

export default CartItem;
