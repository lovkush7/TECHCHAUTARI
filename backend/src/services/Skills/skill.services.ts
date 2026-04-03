import Skill from "../../entities/Skill.entities.ts"
import { User } from "../../entities/User.entities.ts"

class SkillService{
    async addSkills(
        skills: string,
        userId: string
    ){
        try{

            const user = await User.findOne({
                where: {
                    id: userId
                }
            })
            if(!user){
                return "User not found"
            }

             const newSkills = new Skill()
             newSkills.skillname = skills
             await newSkills.save()

                return newSkills;

        }catch(err){
            console.log(err)
        }

    }
    async getSkills(
        userId: string
    ){
        try{
            const user = await User.findOne({
                where:{
                    id: userId
                },
                relations:{
                    skills: true
                }
            })
            if(!user){
                return "User not found"
            }
            return user.skills

        }catch(err){
            console.log(err)
        }
    }

}


export default new SkillService()