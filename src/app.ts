import "reflect-metadata";
import express from 'express'
import { AppDataSource } from "./db/data-source.js";
import {  configEnvironmentData } from "./config/config.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { indexRouter } from "./routes/index-router.route.js";
const app = express();

app.use(express.json());
app.use("/api", indexRouter)

const PORT = configEnvironmentData.port ;

AppDataSource.initialize()
.then(async()=> {
  console.log("Database connected successfully!");
}).catch((err : Error)=>{
  console.log("Error on Database initializtion: ", err);
  
});
app.listen(PORT, ()=> {
  console.log(`server running on port ${PORT}`);
})


