import { Decimal } from "@prisma/client/runtime/library";

export type CartItemType = {
    id: string;
    name: string;
    quantity: number;
    size: string;
    petName: string;
    image: string;
    price: Decimal;
  };