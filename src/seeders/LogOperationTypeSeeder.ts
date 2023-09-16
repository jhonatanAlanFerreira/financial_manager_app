import { prisma } from "../db";
import { LogOperationType } from "@prisma/client";
import { Seeder } from "./database_seeder/Seeder";

export class LogOperationTypeSeeder implements Seeder {
  private logOperationTypes: LogOperationType[] = [
    { id: 1, name: "Create" },
    { id: 2, name: "Update" },
    { id: 3, name: "Delete" },
  ];

  public async seed(): Promise<void> {
    for (const logOperationType of this.logOperationTypes) {
      await prisma.logOperationType.upsert({
        where: { id: logOperationType.id },
        update: logOperationType,
        create: logOperationType,
      });
    }
  }
}
