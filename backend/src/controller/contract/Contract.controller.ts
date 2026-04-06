import type { Request, Response } from "express";
import ContractServices from "../../services/contract/Contract.services.ts";

class ContractController {
    async createContract(
        req: Request,
        res: Response
    ){
       try{
        const {proposalId, terms} = req.body;

        const userId = req.user?.id;

        if(!proposalId){
            return "Proposal Id is required";
        }
        if(!userId){
            return "User Id is required";
        }

        return await ContractServices.createContract(proposalId, userId, terms);

       }catch(err){
        console.log(err);
       }
    }
    async getContract(
        req: Request,
        res: Response
    ){
        try{
          const userId = req.user?.id;
          const role = req.user?.Role;
          if(!userId){
            return "User Id is required";
          }
        if(!role){
            return "Role is required";
        }
         return await ContractServices.getContract(userId, role)
        }catch(err){
            console.log(err);
        }

    }
    async createmilestone(
        req: Request,
        res: Response
    ){
        try{
            const {title,   amount, status,deadline, submition, ispaid, contractId } =  req.body;
            const userId = req.user?.id;

            if(!userId){
                return "User Id is required";
            }
            
            if(!contractId || !title || !amount){
                return "Contract Id, title and amount are required";
            }

            return await ContractServices.createmilestone(title, amount, status, deadline, submition, ispaid, contractId, userId)

        }catch(err){
            throw new Error("Error creating milestone",{cause: err});
        }

    }
    async completecontract(
        req: Request,
        res: Response
    ){
        try{
            const {contractId} =  req.params;
            const userId = req.user?.id;

            if(!userId){
                return "User Id is required";
            }

            if(!contractId){
                return "Contract Id is required";
            }

            return await ContractServices.completecontract(contractId, userId);

        }catch(err){
            throw new Error("Error completing contract",{cause: err});
        }

    }
}
export default new ContractController();