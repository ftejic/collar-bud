-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('cat', 'dog');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "type" "ProductType" NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(5,2) NOT NULL,
    "itemsLeft" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
