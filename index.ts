import express, { Application, Request, Response, urlencoded } from "express";
import Database from "./src/config/database";
import PessoaRouter from "./src/router/PessoaRouter";

class APP {
    public app: Application;

    constructor() {
        this.app = express();
        this.databaseSync();
        this.routes();
    }

    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(express,urlencoded({ extended: true }));
    }

    protected databaseSync() {
        const db = new Database();
        db.sequelize?.sync();
    }
    protected routes(): void {
        this.app.route("/").get( (req: Request, res: Response) => {
            res.send('Hello World');
        });
        this.app.use("/api/v1/users", PessoaRouter);
    }
}

const port = 3000;
const app = new APP().app;

app.listen(port, () => {
    console.log('Server Running');
})