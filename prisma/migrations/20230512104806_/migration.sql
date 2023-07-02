-- CreateEnum
CREATE TYPE "State" AS ENUM ('NOT_ASSIGNED', 'SUCCESS', 'FAILED');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateTable
CREATE TABLE "Timebox" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Timebox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "state" "State" NOT NULL DEFAULT 'NOT_ASSIGNED',
    "priority" "Priority",
    "timeboxId" INTEGER,
    "timeslotId" INTEGER,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Timeslot" (
    "id" SERIAL NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL,
    "duration" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Timeslot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Task_timeslotId_key" ON "Task"("timeslotId");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_timeboxId_fkey" FOREIGN KEY ("timeboxId") REFERENCES "Timebox"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_timeslotId_fkey" FOREIGN KEY ("timeslotId") REFERENCES "Timeslot"("id") ON DELETE SET NULL ON UPDATE CASCADE;
