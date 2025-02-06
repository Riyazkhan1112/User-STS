import express, {Request, Response} from 'express';
import userRoutes from './routes/userRoutes'


const app = express();
const port = 8081;
app.use(express.json())


app.use("/api/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello From Server");
})
app.listen(port, () => {
    console.log(`server is running  http://localhost:8081`)
})  