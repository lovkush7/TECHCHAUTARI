import Contract from "../../entities/Contract.entities.ts";
import proposal from "../../entities/Proposal.entities.ts";
import { ProposalStatus } from "../../enums/projectstatus.enums.ts";

class ContractService {
  async createContract(
    proposalId: string,
    terms: string,
    userId: string
  ){
        try{
            const proposals  = await proposal.findOne({
                where:{
                    id: proposalId,
                },
                relations:{
                    jobs:{
                        user: true
                    }
                    
                }
            })
            if(!proposals){
                return "Proposal not found";
            }
           if(proposals.jobs.user.id !== userId){
            return "Unauthorized";
           }

           if(proposals.status !== ProposalStatus.ACCEPTED){
            return "Proposal is not accepted";
           }

           const existance = await Contract.findOne({
            where:{
                jobs:{
                    id: proposals.jobs.id
                }
            }
           })
              if(existance){
                return "Contract already exists";
              }

              const contract = new Contract()
               contract.jobs =  proposals.jobs;
               contract.user = proposals.user;
               contract.agreedPrice =  proposals.price;
               contract.terms = terms;
               await contract.save()

               return contract;

        }catch(err){
            console.log(err);
        }
  }

  async getContract(){
    
  }
}

export default new ContractService();
