import express, { type Request, type Response } from "express";
import dotenv from 'dotenv';
import "reflect-metadata";

dotenv.config()
const app = express()
app.use(express.json())
const {PORT=3000} = process.env;


app.get("*", (req: Request, res: Response) => {
  res.status(505).json({ message: "Bad Request" });
});