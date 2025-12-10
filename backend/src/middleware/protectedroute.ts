import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import Envconfig from "../config/Envconfig.ts";
import { User } from "../entities/User.entities.ts";

declare module "express-serve-static-core"{
    interface Request{
        user?: Omit<User, "password">;
    }
}
 

const protectedroute =async (
    req: Request,
    res: Response,
    next: NextFunction,
)=>{

    try{
        const token = req.cookies.jwt;

        if(!token){
            return res.status(301).json({success: false,status: 301, message: "token not provided "})
        }
        
         const decode = jwt.verify(token,Envconfig.JWT_SECRET!);

           if(!decode){
            return res.json({success: false, message: "token expired"})

        }
        const {userid} = decode as {userid: string}

          const user = await User.findOne({
        where: {
            id: userid
        },
        select: ["id","email","Fullname"]
    })

    if(!user){
        return res.json({success: false , message: "user not found "})
    }
    req.user = user;

    return next();
  
      
    }catch(err){
        console.log("the error is"+err);
        return res.json({success: false , messages: 'intrnal server error'})
    }

  

}

export default protectedroute;