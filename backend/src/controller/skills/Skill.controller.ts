import type { Request, Response } from "express";
import skillServices from "../../services/Skills/skill.services.ts";

class SkillsController {
    async addSkills(
        req: Request,
        res: Response
    ){
        try{
            const {skills} =req.body;
            const userId = req.user?.id;

            if(!skills){
                return "Please provide skills"
            }
                if(!userId){
                    return "User not found"
                }

                return await skillServices.addSkills(skills, userId)

        }catch(err){
            console.log(err)
        }

    }

    async getSkills(
        req: Request,
        res: Response
    ){
        try{
            const userid = req.user?.id;
            if(!userid){
                return "User not found"
            }
            return await skillServices.getSkills(userid)
        }catch(err){
            console.log(err)
        }

    }
}
export default new SkillsController();