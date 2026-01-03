import "reflect-metadata";
import AppDataSource from "./config/database.config.js";
import express from "express";
import Envconfig from "./config/Envconfig.ts";
import cors from "cors"
import cookieparser from "cookie-parser"
import router from "./route/User.routes.ts";
import { app , server} from "./config/socket.config.ts";


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
));
app.use(cookieparser())

AppDataSource.initialize().then(()=>{
    console.log("AppDataSource has been initialized");
    app.use("/auth",router)
    server.listen(Envconfig.SERVER_PORT || 8000,()=>{
       console.log("server is running on port"+Envconfig.SERVER_PORT)
    })
})
.catch((err)=>{
    console.error("Error during Data Source initialization", err);
})
