import { PrismaClient, Product, Size } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;

type ProductType = Product & {sizes: Size[]}

export type { ProductType };
