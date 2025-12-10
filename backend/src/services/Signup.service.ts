import type { Request, Response } from "express";
import { User } from "../entities/User.entities.ts";
import generateToken from "../utils/jwt.token.ts";

// import  { Role } from "../enums/Role.enums.ts";

class SignupService {
    async signup(
        req: Request,
        res: Response,
    ){
        try{
            const {Fullname,email, password} = req.body;

            if(!Fullname || !email || !password){
                return {
                    success: false, 
                    status: 400,
                     message: "please provide the necessary alice"}
            }

            const user = await User.findOne({
                where:{
                    email
                }
            });
            if(user){
                return {
                    status: 401,
                    success: false,
                    message: "user already exists please login"
                }
            };

            // const userole: Role = Object.values(Role).includes(role) ? role : Role.USER;

            const newuser = new User();
            newuser.Fullname = Fullname;
            newuser.email= email;
            newuser.password = password;
            // newuser.Role = role;
            await newuser.save();

      generateToken(res, newuser.id)

      return {
        newuser
      }

        }catch(err){
            console.log("the error is "+err);
        }

    }
}

export default new SignupService();