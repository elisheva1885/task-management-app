import "reflect-metadata";
import express, { type Request, type Response } from "express";
import { AppDataSource } from "./db/data-source.js";
import { configData } from "./config/config.js";
const app = express();

app.use(express.json());
const PORT = configData.port ;
console.log("the data: ", configData);



async function main() {
    console.log();
    
    try {
        await AppDataSource.initialize();
        console.log("Data Source has been initialized!");
        app.listen(PORT, () => {
            console.log("Server is running on http://localhost:" + PORT);
        });
    } catch (err) {
        console.error(err);
    }
}

main();