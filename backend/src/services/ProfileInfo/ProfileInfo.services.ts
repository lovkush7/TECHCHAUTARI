import { User } from "../../entities/User.entities.ts";
import { UserProfile } from "../../entities/Userprofile.entities.ts";

class ProfileInfoService {
    async createProfile(
        profilepic: string ,
         bio: string,
          hourlyRate: string,
           location: string,
            About: string,
             userid: string
    ){
        try{
            const user = await User.findOne({
                where:{
                    id: userid
                },
                relations:{
                    profile: true
                }
            })
            if(!user){
                return {success: false, message: "user not found "}
             }

             const newProfile = new UserProfile();
                newProfile.profilepic = profilepic;
                newProfile.bio = bio;
                newProfile.hourlyRate = hourlyRate;
                newProfile.location = location;
                newProfile.About = About;
             newProfile.user = user;
             await newProfile.save();
   
              return newProfile;

        }catch(err){
                console.log("the error is "+err);
        }

    }
}
export default new  ProfileInfoService();