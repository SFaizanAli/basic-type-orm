import { User } from "./entities/User";
import { AppDataSource } from "./data-source"
import { Course } from "./entities/Course";

AppDataSource.initialize()
    .then(() => {

        console.log("Data Source has been initialized!")

        const userRepo  = AppDataSource.getRepository(User);
        const courseRepo = AppDataSource.getRepository(Course);

        for (let i = 0; i < 10; i++) {
            const user = new User();
            user.firstName = "Raza "+ i;
            user.lastName = "Malik";
            user.age = Math.round(Math.random() * 30);
            userRepo.save(user);

            const course = new Course();
            course.title = "Course " + i;
            course.url = "about";
            course.description = "A Course description "
            courseRepo.save(course);

            //AppDataSource.manager.save(user);            


        }

        console.log('10 Users have beeb saved!')


    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })