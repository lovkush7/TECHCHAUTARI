import type { Request, Response } from "express";
import type { AuthenticateRequest } from "../../Type/Authenticatereq.ts";
import { User } from "../../entities/User.entities.ts";

class GetUsersServices {
    async getusers(
        req: Request,
        res: Response
    ){
        try{
            const logedinuser = req.user?.id;
            console.log(logedinuser);
            if(!logedinuser){
                return {status:401, success:false, messages:"unauthorized"}
            }
            const filteruser = await User.createQueryBuilder("user")
            .leftJoin("user.profile", "profile")
            .where("user.id != :id",{id: String(logedinuser)})
            .select([
                "user.id",
                "user.Fullname",
                "user.email",
                "profile.profilepic"
            ]).getMany();

            if(!filteruser){
                return {status:301, success: false, messages:"no user found"}
            }
            return {success: true, data:filteruser}

        }catch(err){
            console.log("the error is "+err);
            return {status:200,success: false, messages: "internal server error "}
        }

    }
}
export default new GetUsersServices();