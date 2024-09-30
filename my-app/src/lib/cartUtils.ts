import { CartItemType } from "../../types/types";

export const calculateTotalPrice = (cart: CartItemType[]): number => {
  return cart.reduce(
    (total, item) => total + parseFloat(item.price.toString()) * item.quantity,
    0
  );
};
