/*
  Warnings:

  - You are about to drop the column `athleteId` on the `Notes` table. All the data in the column will be lost.
  - You are about to drop the column `doctorId` on the `Notes` table. All the data in the column will be lost.
  - Added the required column `appointmentId` to the `Notes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Notes" DROP CONSTRAINT "Notes_athleteId_fkey";

-- DropForeignKey
ALTER TABLE "Notes" DROP CONSTRAINT "Notes_doctorId_fkey";

-- AlterTable
ALTER TABLE "Notes" DROP COLUMN "athleteId",
DROP COLUMN "doctorId",
ADD COLUMN     "appointmentId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
