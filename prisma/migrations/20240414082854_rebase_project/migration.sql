/*
  Warnings:

  - You are about to drop the column `risk` on the `result` table. All the data in the column will be lost.
  - Added the required column `vulnerability` to the `Result` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `result` DROP COLUMN `risk`,
    ADD COLUMN `vulnerability` ENUM('LOW', 'MODERATE', 'HIGH') NOT NULL;
