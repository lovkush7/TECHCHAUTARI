import type { Response } from "express";
import type { AuthenticateRequest } from "../../Type/Authenticatereq.ts";
import cloudinary from "../../config/Cloudnary.config.ts";
import { User } from "../../entities/User.entities.ts";
import { UserProfile } from "../../entities/Userprofile.entities.ts";
// import { UserProfile } from "../../entities/Userprofile.entities.ts";

class UserProfileServices {
    async Profile(
        req: AuthenticateRequest,
        res: Response
    ){
        try{
            const {profilepic} = req.body;

             const userid = req.user?.id;

             if(!profilepic){
                return {success:false, message: "please provide the profile pics"}
             }
             if(!userid){
                return {success: false, message: "user not found "}
             }

             const uploadresponse = await cloudinary.uploader.upload(profilepic);

             const user = await User.findOne({
                where:{
                    id: userid
                }
             });
             if(!user){
                return {success:false, message: " user not found "}
             };

             if(user.profile){
                user.profile.profilepic = uploadresponse.secure_url;
                await user.profile.save();
                return {success: true ,  data: user.profile}
             }else{
             const newprofile = new UserProfile();
             newprofile.profilepic = uploadresponse.secure_url;
             newprofile.user = user;
             await newprofile.save();
           
             }
             return {success: true, data: user.profile}
           
             

        }catch(err){
            console.log("the error is "+err);
            return {success: false , message: "internal server error"}
        }
        
    }
}
export default new  UserProfileServices();