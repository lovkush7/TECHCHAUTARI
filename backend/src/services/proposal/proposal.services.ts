import Contract from "../../entities/Contract.entities.ts";
import Job from "../../entities/job.entities.ts";
import proposal from "../../entities/Proposal.entities.ts";
import { User } from "../../entities/User.entities.ts";
import { ProposalStatus, type ProjectStatus } from "../../enums/projectstatus.enums.ts";
import { Role } from "../../enums/Role.enums.ts";

class ProposalSercice {
    async submitProposal(
        
            price: number,
            coverLetter: string,
            status: string,
            userId: string,
            projectId: string
        
    ){
        try{
            const user = await User.findOne({
                where:{
                    id: userId
                }
               
            })

            if(!user || user.Role !== Role.USER ){
                return "Unauthorized user";
            }

            const project = await Job.findOne({
                where:{
                    id: projectId
                },
                relations:{
                    proposals: true,
                    user: true
                
                }
            })
            if(!project){
                return "Project not found";
            }

            const existingproposal = await proposal.findOne({
                where:{
                    user:{
                        id: userId
                    },
                    jobs:{
                        id: projectId
                    }
                }
            })
            if(existingproposal){
                return "Proposal already submitted";
            }

            const newporposal = new proposal()
            newporposal.price = price;
            newporposal.coverLetter = coverLetter;
            newporposal.status = status as any;
            newporposal.user = user;
            newporposal.jobs = project;
             
            await newporposal.save()

            return newporposal;



        }catch(err){
            console.log(err);
        }

    } 

    async getproposal (
    projectId: string,
    userId: string
){
 try{
  const getproposals = await proposal.find({
    where:{
        jobs:{
            id: projectId
        },
        user:{
            id: userId
        }
        
    },
    relations:{
        user: true,
        jobs: true
    },
    order:{
        createdat: "desc"
    }
  })

  return getproposals;
  
 }catch(err){
    console.log(err);
 }

}

async AcceptProposal (
    proposalId: string,
    userId: string
){
    try{
      const proposals = await proposal.findOne({
        where:{
            id: proposalId
        },
        relations:{
            user: true,
            jobs:{
                user: true
            }
        }
      })
      if(!proposals){
        return "Proposal not found";
      }

    if(proposals.jobs.user.id !== userId){
        return "Unauthorized user";
    }

    if(proposals.status === ProposalStatus.ACCEPTED){
        return "Proposal already accepted";
    }

    if(proposals.status === ProposalStatus.REJECTED){
        return "Proposal already rejected";
     
    }

    proposals.status = ProposalStatus.ACCEPTED;
    await proposals.save();

      await proposal.createQueryBuilder()
      .update(proposal)
      .set({status: ProposalStatus.REJECTED})
      .where("jobsId  = : jobsId",{projectId: proposals.jobs.id})
      .andWhere("id != :id", {id: proposals.id})
      .execute();

      const contract = new Contract();
      contract.freelancer = proposals.user;
      contract.jobs = proposals.jobs;
      contract.agreedPrice = proposals.price;
        // contract.terms = proposals.coverLetter;
        await contract.save();

        return {contract,proposals}


        
    }catch(err){
        console.log(err);
    }
  
}

async rejectProposal (
    proposalId: string,
    userId: string
){
    const proposals = await proposal.findOne({
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
        return "unauthorized user";
    }

    if(proposals.status === ProposalStatus.ACCEPTED){
        return "Proposal already accepted";
    }

     proposals.status = ProposalStatus.REJECTED;
     await proposals.save();

     return proposals;

}

    
}
export default new ProposalSercice()