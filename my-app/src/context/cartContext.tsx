"use client";
import { Decimal } from "@prisma/client/runtime/library";
import React, { createContext, useState, useContext, ReactNode } from "react";

type CartItemType = {
  id: string;
  name: string;
  quantity: number;
  size: string;
  petName: string;
  image: string;
  price: Decimal;
};

type CartContextType = {
  cart: CartItemType[];
  saveCart: (newCart: CartItemType[]) => void;
  removeItem: (id: string) => void;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  saveCart: () => {},
  removeItem: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItemType[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const saveCart = (newCart: CartItemType[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeItem = (id: string) => {
    const newCart = cart.filter((item) => item.id !== id);
    saveCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, saveCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export type { CartItemType };
