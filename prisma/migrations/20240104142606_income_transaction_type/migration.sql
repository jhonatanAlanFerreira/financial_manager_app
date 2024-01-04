-- AlterTable
ALTER TABLE `transaction` ADD COLUMN `income` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `transactiontype` ADD COLUMN `income` BOOLEAN NOT NULL DEFAULT false;
