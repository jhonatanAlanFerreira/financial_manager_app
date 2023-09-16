import { prisma } from "../../db";
import { Seeder } from "./Seeder";

export class DatabaseSeeder {
  public static run(seeders: Seeder[]) {
    seeders.forEach((seeder: Seeder) => {
      seeder
        .seed()
        .catch((error) => {
          throw error;
        })
        .finally(async () => {
          await prisma.$disconnect();
        });
    });
  }
}
