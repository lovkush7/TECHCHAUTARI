import type { Request, Response } from "express";
import { User } from "../entities/User.entities.ts";
// import type { Request } from "express-serve-static-core";
import bcrypt from "bcrypt"
import generateToken from "../utils/jwt.token.ts";

class Loginservice {
    async login(
        req: Request,
        res: Response
    ){

        try{
            const {email,password} =req.body;

            if(!email || !password){
                return {status:301,
                    success: false,
                    message: "please provide the necessary alice"
                }
            }

            const user = await User.findOne({
                where:{
                    email
                }
            });
            if(!user){
                return {success: false, message:"user dosent exist please register"}
            }

            const ispasscheck = bcrypt.compareSync(password,user.password);
            if(!ispasscheck){
                return {success:false,message:"invalid password"}
            }

            generateToken(res,user.id);

            return {
                success: true,
                message: "user login successfully",
                email: user.email,
                fullname: user.Fullname
            }

        }catch(err){
            console.log("the error is "+err);
        }
        
    }
}

export default new Loginservice();