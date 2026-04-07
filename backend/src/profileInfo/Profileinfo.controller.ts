import type { Request, Response } from "express";
import ProfileInfoServices from "../services/ProfileInfo/ProfileInfo.services.ts";

class ProfileInfoController {
    async createProfile (
        req: Request,
        res: Response
    ){
        try{
            const {profilepic , bio, hourlyRate, location, About} = req.body;
            const userid = req.user?.id;
            console.log( "the userid ",userid);

             if(!userid){
                return {success: false, message: "user not found "}
             }
             return await ProfileInfoServices.createProfile(profilepic , bio, hourlyRate, location, About, userid)
        }catch(err){

        }

    }
}
export default new ProfileInfoController();