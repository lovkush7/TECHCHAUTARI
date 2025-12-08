import "reflect-metadata";
import AppDataSource from "./config/database.config.js";
import express from "express";
import Envconfig from "./config/Envconfig.ts";

const app = express();

AppDataSource.initialize().then(()=>{
    console.log("AppDataSource has been initialized");
    app.listen(Envconfig.SERVER_PORT || 8000,()=>{
       console.log("server is running on port"+Envconfig.SERVER_PORT)
    })
})
.catch((err)=>{
    console.error("Error during Data Source initialization", err);
})
