"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./entities/User");
const data_source_1 = require("./data-source");
const Course_1 = require("./entities/Course");
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
    const userRepo = data_source_1.AppDataSource.getRepository(User_1.User);
    const courseRepo = data_source_1.AppDataSource.getRepository(Course_1.Course);
    for (let i = 0; i < 10; i++) {
        const user = new User_1.User();
        user.firstName = "Raza " + i;
        user.lastName = "Malik";
        user.age = Math.round(Math.random() * 30);
        userRepo.save(user);
        const course = new Course_1.Course();
        course.title = "Course " + i;
        course.url = "about";
        course.description = "A Course description ";
        courseRepo.save(course);
        //AppDataSource.manager.save(user);            
    }
    console.log('10 Users have beeb saved!');
})
    .catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
