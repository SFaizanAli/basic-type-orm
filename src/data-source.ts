import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Course } from "./entities/Course";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "typeorm",
    synchronize: true,
    logging: true,
    entities: [User,Course],
    subscribers: [],
    migrations: [],
})

