import "reflect-metadata";
import express from 'express'
import { AppDataSource } from "./db/data-source.js";
import { configData } from "./config/config.js";
import { errorHandler } from "./middlewares/error.middleware.js";
const app = express();

app.use(express.json());


const PORT = configData.port ;
console.log(configData);

AppDataSource.initialize()
.then(async()=> {
  console.log("Database connected successfully!");
}).catch((err : Error)=>{
  console.log("Error on Database initializtion: ", err);
  
});
app.listen(PORT, ()=> {
  console.log(`server running on port ${PORT}`);
})


