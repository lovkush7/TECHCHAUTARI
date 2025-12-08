import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
// import { Role } from "../enums/Role.enums.ts";
import Envconfig from "../config/Envconfig.ts";
const generateToken =(
    res: Response,
    userid: string

)=>{
    try{

        const token = jwt.sign({
            userid,
            
        },
       Envconfig.JWT_SECRET!,
       {
        expiresIn: "7d"
       }
    )
    res.cookie("jwt",token,{
        maxAge: 7*24*60*60*1000,
        httpOnly: true,
        secure: true,
        sameSite: "none",
        


    })
    return token;

    }catch(err){
        console.log("the error is "+err)
        return {success: false,message: "token is not created"}
    }

}

export default generateToken;