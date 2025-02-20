import express, { Request, Response } from 'express';
import UserRoutes from './routes/userRoutes';
import { Container } from 'inversify';
import { userService } from './services/userService';
import IUserInterface from './interface/IuserService';
import UserController from './controller/userController';


const app = express();
const port = 8081;
app.use(express.json());

// Setting up Inversify Container
const container = new Container();


// container.bind<IUserInterface>("IUserInterface").to(userService);
// const conversationService = container.get<IUserInterface>("IUserInterface");
// const conversationController = new UserController(conversationService);
// const userRoute = new UserRoutes(conversationController);

const userRoutes = new UserRoutes(new UserController(new userService()));
app.use("/api/users", userRoutes.getRouter());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello From Server");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
