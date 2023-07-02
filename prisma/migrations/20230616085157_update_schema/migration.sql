/*
  Warnings:

  - The required column `uuid` was added to the `tasks` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `updatedAt` to the `timeboxs` table without a default value. This is not possible if the table is not empty.
  - The required column `uuid` was added to the `timeboxs` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `updatedAt` to the `timeslots` table without a default value. This is not possible if the table is not empty.
  - The required column `uuid` was added to the `timeslots` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `uuid` was added to the `users` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "uuid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "timeboxs" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "uuid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "timeslots" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "uuid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "uuid" TEXT NOT NULL;
