/*
  Warnings:

  - You are about to drop the column `ethAddress` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ethAddresses]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "ethAddress",
ADD COLUMN     "ethAddresses" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "User.ethAddresses_unique" ON "User"("ethAddresses");
