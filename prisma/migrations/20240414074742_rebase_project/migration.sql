/*
  Warnings:

  - You are about to drop the `file` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `risk` to the `Result` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `file` DROP FOREIGN KEY `File_profileId_fkey`;

-- AlterTable
ALTER TABLE `result` ADD COLUMN `risk` ENUM('LOW', 'MODERATE', 'HIGH') NOT NULL;

-- DropTable
DROP TABLE `file`;

-- CreateTable
CREATE TABLE `Contract` (
    `id` VARCHAR(191) NOT NULL,
    `contractFileUrl` TEXT NOT NULL,
    `description` TEXT NULL,
    `profileId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Contract_profileId_idx`(`profileId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Contract` ADD CONSTRAINT `Contract_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profile`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
