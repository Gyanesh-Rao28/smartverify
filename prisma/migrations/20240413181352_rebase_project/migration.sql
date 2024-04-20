/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `file` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `file` DROP COLUMN `imageUrl`,
    ADD COLUMN `fileUrl` TEXT NULL;
