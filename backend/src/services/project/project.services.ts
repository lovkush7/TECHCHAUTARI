import Job from "../../entities/job.entities.ts";
import { User } from "../../entities/User.entities.ts";

class ProjectService {
    async project(
        title: string,
        description: string,
        requirements: string,
        budget: string,
        userId: string
    ){
        try{
            const user = await User.findOne({
                where:{
                    id: userId,
                },
                relations:{
                    jobs: true
                }
            })
            if(!user){
                return "User not found"
            }
             
            const project = new Job()
            project.title = title;
            project.description= description;
            project.requirements = requirements;
            project.budget = budget;
            project.user = user;

            await project.save()

            return project;

        }catch(err){
            console.log(err)
        }

    }

    async getproject(
        page:any,
        limit:any,
        search:  any,
        status:  any,
        minbudget:  any,
        maxbudget:  any,
        userId:  string,    ){
        const project = await Job.createQueryBuilder("p")
        .leftJoinAndSelect("p.user", "user")
        .leftJoinAndSelect("p.proposals", "proposals")

        
       

    }
}
export default new ProjectService();