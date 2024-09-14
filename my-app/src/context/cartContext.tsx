"use client";
import { Decimal } from "@prisma/client/runtime/library";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

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
  clearCart: () => void;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  saveCart: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  const saveCart = (newCart: CartItemType[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeItem = (id: string) => {
    const newCart = cart.filter((item) => item.id !== id);
    saveCart(newCart);
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, saveCart, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export type { CartItemType };
