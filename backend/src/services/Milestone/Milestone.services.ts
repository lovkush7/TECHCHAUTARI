import Milestone from "../../entities/Milestone.entities.ts";

class MilestoneService {
    async Getmilestone(
        contractId: string,
        userId: string
    ){
        try{
            const milestones = await Milestone.findOne({
                where:{
                    contract:{
                        id: contractId,
                    }
                },
                relations:{
                    contract:{
                        jobs:{
                            user: true
                        }
                    }
                },
                order:{
                    createdat: "ASC"
                }
            })
            if(!milestones){
                return "Milestones not found";
            }
                  
            return milestones;

        }catch(err){
            console.log("the error is "+err)
        }

    }
    async submitMilestone (
        milestoneId: string,
        userId: string
    ){

        const milestones = await Milestone.findOne({
            where:{
                id: milestoneId
            },
            relations:{
                contract:{
                    jobs:{
                        user: true
                    }
                }
            }
        })

    }
}
export default new MilestoneService();