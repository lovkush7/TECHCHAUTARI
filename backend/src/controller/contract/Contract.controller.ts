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
}
export default new ContractController();