import "reflect-metadata";
import express, { type Request, type Response } from "express";
import { AppDataSource } from "./db/data-source.js";
import { configData } from "./config/config.js";
const app = express();

app.use(express.json());
const PORT = configData.port ;
console.log("the data: ", configData);



AppDataSource.initialize()
  .then(() => {
    console.log("✅ DB connected");
    // כאן מפעילים את השרת
  })
  .catch((error) => {
    console.error("❌ DB connection failed:", error);
    process.exit(1);
  });


