/*
  Warnings:

  - You are about to drop the column `description` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the column `introduction` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the column `mechanisms` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the column `strengths` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the column `tokenomics` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the column `useCases` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the column `weaknesses` on the `Lesson` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "description",
DROP COLUMN "introduction",
DROP COLUMN "mechanisms",
DROP COLUMN "strengths",
DROP COLUMN "tokenomics",
DROP COLUMN "useCases",
DROP COLUMN "weaknesses";

-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "lessonId" TEXT,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Section" ADD FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;
