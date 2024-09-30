"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { CartItemType } from "../../types/types";
import { useSession } from "next-auth/react";

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

  const { status } = useSession();

  useEffect(() => {
    const loadCart = async () => {
      try {
        const response = await fetch("/api/cart");
        if (response.ok) {
          const data = await response.json();
          setCart(data.items);
        } else {
          console.error("Failed to fetch cart. Status:", response.status);
        }
      } catch (error) {
        console.error("Failed to load cart", error);
      }
    };

    if (status === "authenticated") {
      loadCart();
    }
  }, [status]);

  const saveCart = async (newCart: CartItemType[]) => {
    setCart(newCart);

    if (status === "authenticated") {
      try {
        await fetch("/api/cart/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCart),
        });
      } catch (error) {
        console.error("Failed to save cart", error);
      }
    }
  };

  const removeItem = async (id: string) => {
    const newCart = cart.filter((item) => item.id !== id);
    await saveCart(newCart);

    if (status === "authenticated") {
      try {
        await fetch("/api/cart/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCart),
        });
      } catch (error) {
        console.error("Failed to update cart in backend", error);
      }
    }
  };

  const clearCart = async () => {
    setCart([]);

    if (status === "authenticated") {
      try {
        await fetch("/api/cart/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([]),
        });
      } catch (error) {
        console.error("Failed to update cart in backend", error);
      }
    }
  };

  return (
    <CartContext.Provider value={{ cart, saveCart, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
