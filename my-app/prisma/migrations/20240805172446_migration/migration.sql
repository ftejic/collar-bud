/*
  Warnings:

  - A unique constraint covering the columns `[productId,size]` on the table `Size` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Size_productId_size_key" ON "Size"("productId", "size");
