"use client";
import { useCart } from "@/context/cartContext";
import { ScrollArea } from "../ui/scroll-area";
import CartItem from "./CartItem";

interface CartItemListProps {
  fullHeight?: boolean;
}

function CartItemList({ fullHeight }: CartItemListProps) {
  const { cart, removeItem } = useCart();

  const removeItemFromCart = async (id: string) => {
    await removeItem(id);
  };

  const content = (
    <div className="space-y-5">
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
  );

  return fullHeight ? (
    content
  ) : (
    <ScrollArea className="h-[calc(100dvh-230px)] px-5">{content}</ScrollArea>
  );
}

export default CartItemList;
