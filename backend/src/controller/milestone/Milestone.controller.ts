import type { Request, Response } from "express";
import MilestoneServices from "../../services/Milestone/Milestone.services.ts";

class MilestonesController {
    async getMilestone(
        req: Request,
        res: Response
    ){
        try{
            const {contractId } =  req.params;

            const userId = req.user?.id;

            if(!userId){
                return "User Id is required";
            }
            if(!contractId){
                return "Contract Id is required";
            }

          return await MilestoneServices.Getmilestone(contractId, userId)

        }catch(err){
            console.log("the error is "+err)
        }


    }
    async submitMilestone (
        req: Request,
        res: Response
    ){
        try{
            const {milestoneId} = req.params;
            const userId = req.user?.id;

            if(!userId){
                return "User Id is required";
            }
            if(!milestoneId){
                return "Milestone Id is required";
            }

            return await MilestoneServices.submitMilestone(milestoneId, userId)


        }catch(err){
            console.log("the error is "+err)
        }
    }
}
export default new MilestonesController();