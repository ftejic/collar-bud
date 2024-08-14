import { Decimal } from "@prisma/client/runtime/library";


export default function formatPrice(price: Decimal | number) {
  return parseFloat(price.toString()).toFixed(2);
}
