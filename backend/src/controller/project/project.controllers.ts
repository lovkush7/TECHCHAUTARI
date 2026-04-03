import type { Request, Response } from "express";

class ProjectController {
    async project(
        req: Request,
        res:Response
    ){
        try{
            const {title} = req.body;

            const userId = req.user?.id;

            if(!userId){
                return "User not found"
            }

        }catch(err)
        {
            console.log(err)
        }
    
    }
}
export default new ProjectController();