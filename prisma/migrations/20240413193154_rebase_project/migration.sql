/*
  Warnings:

  - Added the required column `rating` to the `Result` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `result` ADD COLUMN `fileUrl` TEXT NULL,
    ADD COLUMN `rating` INTEGER NOT NULL;
