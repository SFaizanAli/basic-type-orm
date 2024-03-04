import { User } from "./entities/User";
import { AppDataSource } from "./data-source";

const userRepo = AppDataSource.getRepository(User);
