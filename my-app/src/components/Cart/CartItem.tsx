import { XIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function CartItem() {
  return (
    <div className="text-sm">
      <div className="flex justify-between space-x-2">
        <div className="flex space-x-2">
          <Image
            src={"/images/dog1.png"}
            width={55}
            height={55}
            alt=""
            className="w-14 h-14 rounded-md"
          />
          <div className="flex flex-col">
            <p>Dog Collar Model 1</p>
            <p>Size M</p>
          </div>
        </div>
        <XIcon className="w-4 h-4 cursor-pointer"/>
      </div>
      <p className="text-center">1 x 50.00&#8364;</p>
    </div>
  );
}

export default CartItem;
