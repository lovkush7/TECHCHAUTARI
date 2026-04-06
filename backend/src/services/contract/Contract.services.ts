import Contract from "../../entities/Contract.entities.ts";
import Milestone from "../../entities/Milestone.entities.ts";
import proposal from "../../entities/Proposal.entities.ts";
import { contractStatus, ProposalStatus } from "../../enums/projectstatus.enums.ts";
import { Role } from "../../enums/Role.enums.ts";

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

  async getContract(
    userId: string,
    role: string
  ){
    try{
        let contracts;

        if(role === Role.CLIENT ){
            contracts =  await Contract.find({
                where:{
                    jobs:{ user: {id: userId}}
                },
                relations:{
                    jobs: true,
                    user: true
                }
            })
        }else {
                contracts =  await Contract.find({
                 where:{
                    user: {id: userId}
                 },
                 relations:{
                    jobs:true,
                 }
                })
            }

            return contracts;

    }catch(err){
        throw new Error("Error fetching contracts",{cause: err});
    }
  }

  async createmilestone(
    title: string,
     amount: number,
      status: string,
       deadline: Date,
     submition: string,
      ispaid: boolean,
       contractId: string,
        userId: string,
  ){

    const contracts = await Contract.findOne({
        where:{
            id: contractId
        },
        relations:{
            jobs:{
                user: true
            }

            
        }
    })
    if(!contracts){
        return "Contract not found";
    }
    if(contracts.jobs.user.id !== userId){
        return "Unauthorized";
    
    }

    const newmilestone = new Milestone()
    newmilestone.title = title;
    newmilestone.amount = amount;
    newmilestone.status = status as any;
    newmilestone.dateLine = deadline;
    newmilestone.submission = submition;
    newmilestone.ispaid = ispaid;
    newmilestone.contract = contracts;
    await newmilestone.save();

    return newmilestone;

  }

  async completecontract(
    contractId: string,
    userId: string
  ){
    try{
        const contracts = await Contract.findOne({
            where:{
                id: contractId
            },
            relations:{
                jobs:{
                    user: true
                }
            
            }
        })
        if(!contracts){
            return "Contract not found";
        }
     
     contracts.isCompleted = contractStatus.COMPLETED;
     await contracts.save();

     return contracts;

         


    }catch(err){
        console.log(err);
    }

  }
}

export default new ContractService();
