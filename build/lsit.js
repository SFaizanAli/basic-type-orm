"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./entities/User");
const data_source_1 = require("./data-source");
const userRepo = data_source_1.AppDataSource.getRepository(User_1.User);
