/*
  Warnings:

  - Added the required column `completed` to the `ConsultancyBooking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `ConsultancyBooking` table without a default value. This is not possible if the table is not empty.
  - Made the column `organization` on table `ConsultancyBooking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `organizationType` on table `ConsultancyBooking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `requirement` on table `ConsultancyBooking` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ConsultancyBooking" ADD COLUMN     "completed" BOOLEAN NOT NULL,
ADD COLUMN     "message" TEXT NOT NULL,
ALTER COLUMN "organization" SET NOT NULL,
ALTER COLUMN "organizationType" SET NOT NULL,
ALTER COLUMN "requirement" SET NOT NULL;
