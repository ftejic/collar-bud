"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { useCart } from "@/context/cartContext";
import formatPrice from "@/lib/formatPrice";
import { calculateTotalPrice } from "@/lib/cartUtils";
import CartItemList from "./CartItemList";

function Cart() {
  const { cart } = useCart();

  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative cursor-pointer">
          <ShoppingCartIcon className="text-foreground" />
          <Badge className="bg-gradient-to-t from-gradient-start to-gradient-end absolute flex -top-2 -right-2 w-4 h-4 rounded-full text-xs p-0 items-center justify-center">
            {cart.length}
          </Badge>
        </div>
      </SheetTrigger>
      <SheetContent className="h-full px-0">
        <SheetHeader className="px-6">
          <SheetTitle className="text-left">Cart</SheetTitle>
        </SheetHeader>
        {cart.length > 0 ? (
          <div className="flex flex-col justify-between px-1">
            <CartItemList />
            <div className="space-y-5 px-5">
              <Separator />
              <div className="flex justify-between">
                <p>Total:</p>
                <p>{formatPrice(calculateTotalPrice(cart))}&#8364;</p>
              </div>
              <SheetClose asChild>
                <Button className="w-full">Complete Purchase</Button>
              </SheetClose>
            </div>
          </div>
        ) : (
          <p className="p-6">Cart is empty</p>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default Cart;
