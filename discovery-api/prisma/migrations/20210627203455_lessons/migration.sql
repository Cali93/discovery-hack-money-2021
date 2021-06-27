/*
  Warnings:

  - You are about to drop the column `avatar` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `firstname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `demoVideo` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `introduction` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectCreationDate` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticker` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whitePaper` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nickname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ResourceEnum" AS ENUM ('WORKSHOP', 'CONFTALK', 'TUTORIAL', 'ARTICLE', 'REVIEW', 'INTERVIEW', 'PODCAST');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "avatar",
ADD COLUMN     "demoVideo" TEXT NOT NULL,
ADD COLUMN     "developmentActivity" TEXT[],
ADD COLUMN     "discord" TEXT,
ADD COLUMN     "introduction" TEXT NOT NULL,
ADD COLUMN     "logo" TEXT,
ADD COLUMN     "parentProjectId" TEXT,
ADD COLUMN     "price" TEXT NOT NULL,
ADD COLUMN     "projectCompetitorId" TEXT,
ADD COLUMN     "projectCreationDate" TEXT NOT NULL,
ADD COLUMN     "technologies" TEXT[],
ADD COLUMN     "ticker" TEXT NOT NULL,
ADD COLUMN     "whitePaper" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstname",
DROP COLUMN "lastname",
ADD COLUMN     "ens" TEXT,
ADD COLUMN     "ethAddress" TEXT,
ADD COLUMN     "nickname" TEXT NOT NULL,
ADD COLUMN     "personId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nickname" TEXT,
    "firstname" TEXT,
    "lastname" TEXT,
    "title" TEXT,
    "twitter" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "published" BOOLEAN NOT NULL,
    "type" "ResourceEnum" NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "fileUrl" TEXT,
    "authorId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Risk" (
    "id" TEXT NOT NULL,
    "projectId" TEXT,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feature" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "introduction" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "projectId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeveloperDoc" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "official" BOOLEAN NOT NULL,
    "url" TEXT NOT NULL,
    "projectId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lesson" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "introduction" TEXT NOT NULL,
    "useCases" TEXT[],
    "mechanisms" TEXT NOT NULL,
    "tokenomics" TEXT NOT NULL,
    "strengths" TEXT[],
    "weaknesses" TEXT[],
    "quests" TEXT[],
    "challenges" TEXT[],
    "bounties" TEXT[],
    "projectId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PersonToProject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProjectToResource" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_LessonToResource" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PersonToProject_AB_unique" ON "_PersonToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_PersonToProject_B_index" ON "_PersonToProject"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToResource_AB_unique" ON "_ProjectToResource"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToResource_B_index" ON "_ProjectToResource"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_LessonToResource_AB_unique" ON "_LessonToResource"("A", "B");

-- CreateIndex
CREATE INDEX "_LessonToResource_B_index" ON "_LessonToResource"("B");

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Risk" ADD FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD FOREIGN KEY ("parentProjectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD FOREIGN KEY ("projectCompetitorId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeveloperDoc" ADD FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonToProject" ADD FOREIGN KEY ("A") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonToProject" ADD FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToResource" ADD FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToResource" ADD FOREIGN KEY ("B") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LessonToResource" ADD FOREIGN KEY ("A") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LessonToResource" ADD FOREIGN KEY ("B") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;
