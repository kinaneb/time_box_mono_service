/*
  Warnings:

  - A unique constraint covering the columns `[uuid]` on the table `tasks` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uuid]` on the table `timeboxs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uuid]` on the table `timeslots` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uuid]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tasks_uuid_key" ON "tasks"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "timeboxs_uuid_key" ON "timeboxs"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "timeslots_uuid_key" ON "timeslots"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "users_uuid_key" ON "users"("uuid");
