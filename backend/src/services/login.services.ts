import type { Request, Response } from "express";
import { User } from "../entities/User.entities.ts";
// import type { Request } from "express-serve-static-core";
import bcrypt from "bcrypt"
import generateToken from "../utils/jwt.token.ts";
import { profile } from "console";

class Loginservice {
    async login(
        req: Request,
        res: Response
    ){

        try{
            const {email,password} =req.body;

            if(!email || !password){
                return res.status(301).json({success: false,
                    message: "please provide the necessary alice"})
                        
            }

            const user = await User.findOne({
                where:{
                    email
                },
                relations:{
                    profile: true

                }
            });
            if(!user){
                return res.status(401).json({success: false, message:"user dosent exist please register"})
            }

            const ispasscheck = await bcrypt.compare(password,user.password);

            if(!ispasscheck){
                return res.status(401).json({success:false,message:"invalid password"})
            }

            generateToken(res,user.id);

            return res.status(200).json({
                success: true,
                message: "user login successfully",
                email: user.email,
                fullname: user.Fullname,
                profile: user.profile
                
            })

        }catch(err){
            console.log("the error is "+err);
        }
        
    }
}

export default new Loginservice();