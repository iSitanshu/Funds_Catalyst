/*
  Warnings:

  - You are about to drop the column `answer1` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `answer2` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `longDescription` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `question1` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `question2` on the `Blog` table. All the data in the column will be lost.
  - Added the required column `content` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "answer1",
DROP COLUMN "answer2",
DROP COLUMN "longDescription",
DROP COLUMN "question1",
DROP COLUMN "question2",
ADD COLUMN     "content" TEXT NOT NULL;
