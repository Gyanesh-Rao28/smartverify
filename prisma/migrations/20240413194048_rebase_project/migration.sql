/*
  Warnings:

  - Made the column `fileUrl` on table `file` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `file` ADD COLUMN `description` TEXT NULL,
    MODIFY `fileUrl` TEXT NOT NULL;
