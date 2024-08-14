"use client";
import { useCart } from "@/context/cartContext";
import { ScrollArea } from "../ui/scroll-area";
import CartItem from "./CartItem";

function CartItemList() {
  const { cart, removeItem } = useCart();

  const removeItemFromCart = (id: string) => {
    removeItem(id);
  }

  return (
    <ScrollArea className="h-[calc(100dvh-185px)] px-5">
      <div className="mt-10 space-y-5">
        {cart.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              size={item.size}
              price={item.price}
              quantity={item.quantity}
              petName={item.petName}
              removeItemFromCart={removeItemFromCart}
            />
          );
        })}
      </div>
    </ScrollArea>
  );
}

export default CartItemList;
