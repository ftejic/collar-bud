import { Decimal } from "@prisma/client/runtime/library";

export default function formatPrice(price: Decimal) {
  return parseFloat(price.toString()).toFixed(2);
}
