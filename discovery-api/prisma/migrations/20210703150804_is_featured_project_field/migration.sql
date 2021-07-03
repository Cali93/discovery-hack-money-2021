/*
  Warnings:

  - Added the required column `type` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LessonEnum" AS ENUM ('BRANCHED', 'DECRYPTED');

-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "type" "LessonEnum" NOT NULL;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false;
