/*
  Warnings:

  - You are about to drop the column `userId` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the `Timebox` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Timeslot` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_timeboxId_fkey";

-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_timeslotId_fkey";

-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_userId_fkey";

-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "userId";

-- DropTable
DROP TABLE "Timebox";

-- DropTable
DROP TABLE "Timeslot";

-- CreateTable
CREATE TABLE "timeboxs" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "timeboxs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "timeslots" (
    "id" SERIAL NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL,
    "duration" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "timeslots_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_timeboxId_fkey" FOREIGN KEY ("timeboxId") REFERENCES "timeboxs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_timeslotId_fkey" FOREIGN KEY ("timeslotId") REFERENCES "timeslots"("id") ON DELETE SET NULL ON UPDATE CASCADE;
