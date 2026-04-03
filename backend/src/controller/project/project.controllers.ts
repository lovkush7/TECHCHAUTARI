import type { Request, Response } from "express";
import projectServices from "../../services/project/project.services.ts";

class ProjectController {
    async project(
        req: Request,
        res:Response
    ){
        try{
            const {title,description,requirements,budget } = req.body;

            const userId = req.user?.id;

            if(!userId){
                return "User not found"
            }
            if(!title || !description || !requirements || !budget){
                return "All fields are required in project creation"
            }

            return await projectServices.project(title,description,requirements,budget,userId)

            

        }catch(err)
        {
            console.log(err)
        }
    
    }

    async getproject(
        req: Request,
        res: Response,
    ){
        try{
            const {page=1, limit=10, search, status, minbudget, maxbudget } = req.query;
        
            const userId = req.user?.id;
            if(!userId){
                return "User not found"
            }

            return await projectServices.getproject(page,limit,search,status,minbudget,maxbudget,userId)
  

        }catch(err){
            console.log(err)
        }

    }
}
export default new ProjectController();