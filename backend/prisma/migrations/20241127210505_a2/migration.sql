/*
  Warnings:

  - Added the required column `username` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Users` ADD COLUMN `username` VARCHAR(191) NOT NULL,
    MODIFY `types` VARCHAR(191) NOT NULL DEFAULT 'user';