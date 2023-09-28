import { Sequelize } from "sequelize-typescript";
import * as dotenv from 'dotenv';
import { Pessoa } from "../models/Pessoas";

dotenv.config();

class Database {
    public sequelize: Sequelize | undefined;

    constructor () {
        this.connect();
    }

    private async connect(){
        this.sequelize = new Sequelize({
            database: process.env.DB_NAME,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST, 
            port:process.env.DB_PORT as unknown as number,
            dialect: "postgres",
            models:[Pessoa]
        });

        await this.sequelize.authenticate().then( () => {
            console.log('Database connected');
        }).catch( (err) => {
            console.log('Database not connected', err)
        })
    }
}

export default Database;