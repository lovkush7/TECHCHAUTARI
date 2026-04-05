import type { Request, Response } from "express";
import proposalServices from "../../services/proposal/proposal.services.ts";

class ProposalController{
async submitProposal (
    req: Request,
    res: Response
){
    try{

    const {price,coverLetter,status} =  req.body;
     
    const userId = req.user?.id;

    const {projectId} = req.params;

    if(!price || !coverLetter || !status){
        return "All fields are required";
    }

    if(!userId){
        return "Unauthorized user"; ;
    }
    if(!projectId){
        return  "Project ID is required";
    }
    return await proposalServices.submitProposal(price,coverLetter,status,userId,projectId);



    }catch(err){
        console.log(err);
    }

}

 async getproposal(
    req: Request,
    res: Response
){
    try{
      const {projectId } =req.params;
        if(!projectId){
            return "Project ID is required";
        }
        const userId = req.user?.id;
        
        if(!userId){
            return "Unauthorized user";
        }
        return await proposalServices.getproposal(projectId, userId);

    }catch(err){
        console.log(err);
    }

}

}
export default new ProposalController();