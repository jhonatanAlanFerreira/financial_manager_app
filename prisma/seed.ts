import { DatabaseSeeder } from "../src/seeders/database_seeder/DatabaseSeeder";
import { LogOperationTypeSeeder } from "../src/seeders/LogOperationTypeSeeder";

DatabaseSeeder.run([new LogOperationTypeSeeder()]);
