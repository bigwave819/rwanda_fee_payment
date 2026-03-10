/*
  Warnings:

  - You are about to drop the column `phoneVerified` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `devices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `otp` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "devices" DROP CONSTRAINT "devices_userId_fkey";

-- DropForeignKey
ALTER TABLE "otp" DROP CONSTRAINT "otp_userId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "phoneVerified",
ADD COLUMN     "email" TEXT NOT NULL;

-- DropTable
DROP TABLE "devices";

-- DropTable
DROP TABLE "otp";

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
