/*
  Warnings:

  - Made the column `authorId` on table `Resource` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Resource" ALTER COLUMN "authorId" SET NOT NULL;
