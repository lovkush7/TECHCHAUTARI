import Job from "../../entities/job.entities.ts";
import proposal from "../../entities/Proposal.entities.ts";
// import proposal from "../../entities/Proposal.entities.ts";
import { User } from "../../entities/User.entities.ts";
import type { ProjectStatus } from "../../enums/projectstatus.enums.ts";
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

    
}
export default new ProposalSercice()