/*
  Warnings:

  - A unique constraint covering the columns `[deviceIp,userId]` on the table `RefreshToken` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX "RefreshToken_deviceIp_userId_idx" ON "RefreshToken"("deviceIp", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_deviceIp_userId_key" ON "RefreshToken"("deviceIp", "userId");
