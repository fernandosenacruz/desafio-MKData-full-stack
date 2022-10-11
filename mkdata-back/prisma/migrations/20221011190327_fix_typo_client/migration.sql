/*
  Warnings:

  - You are about to drop the column `restriction` on the `Client` table. All the data in the column will be lost.
  - Added the required column `registration` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Client` DROP COLUMN `restriction`,
    ADD COLUMN `registration` VARCHAR(50) NOT NULL;
