"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const Course_1 = require("./entities/Course");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "typeorm",
    synchronize: true,
    logging: true,
    entities: [User_1.User, Course_1.Course],
    subscribers: [],
    migrations: [],
});
