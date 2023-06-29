-- CreateEnum
CREATE TYPE "State" AS ENUM ('NOT_ASSIGNED', 'SUCCESS', 'FAILED');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateTable
CREATE TABLE "timeboxs" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "title" TEXT,
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "timeboxs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "title" TEXT,
    "state" "State" NOT NULL DEFAULT 'NOT_ASSIGNED',
    "priority" "Priority",
    "timeboxId" INTEGER,
    "timeslotId" INTEGER,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "timeslots" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL,
    "duration" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "timeslots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "timeboxs_uuid_key" ON "timeboxs"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "tasks_uuid_key" ON "tasks"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "tasks_timeslotId_key" ON "tasks"("timeslotId");

-- CreateIndex
CREATE UNIQUE INDEX "timeslots_uuid_key" ON "timeslots"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "users_uuid_key" ON "users"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_timeboxId_fkey" FOREIGN KEY ("timeboxId") REFERENCES "timeboxs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_timeslotId_fkey" FOREIGN KEY ("timeslotId") REFERENCES "timeslots"("id") ON DELETE SET NULL ON UPDATE CASCADE;
