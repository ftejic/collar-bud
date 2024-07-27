import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import CartItem from "./CartItem";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";

function Cart() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative cursor-pointer">
          <ShoppingCartIcon className="text-foreground" />
          <Badge className="bg-gradient-to-t from-gradient-start to-gradient-end absolute flex -top-2 -right-2 w-4 h-4 rounded-full text-xs p-0 items-center justify-center">
            3
          </Badge>
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col justify-between h-full">
          <div className="mt-10 space-y-5">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="space-y-5">
            <Separator />
            <div className="flex justify-between">
              <p>Total:</p>
              <p>150.00&#8364;</p>
            </div>
            <SheetClose asChild>
              <Button className="w-full">Complete Purchase</Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Cart;
