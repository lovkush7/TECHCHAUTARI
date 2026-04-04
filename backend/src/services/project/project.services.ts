import Job from "../../entities/job.entities.ts";
import { User } from "../../entities/User.entities.ts";
import { ProjectStatus } from "../../enums/projectstatus.enums.ts";

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

        if(search){
            project.andWhere("p.title ILIKE : search", {
                search: `%${search}%`
            })
        }

        if(status){
            project.andWhere("p.projectStatus = : projectStatus", {
                status
            })
        }
         if(minbudget && maxbudget){
            project.andWhere("p.budget BETWEEN :min AND : max",{
                min: minbudget,
                max: maxbudget
            })
         }

         project.orderBy("p.createdAt", "DESC")

         const [projects, total]  = await project.getManyAndCount()

         return {
            projects,
            total,
         }
      
}

async getSingleproject(
    projectID: string,
    userId: string
){
    try{
       const project = await Job.findOne({
        where:{
            id: projectID,
        },
        relations:{
            user: true,
            proposals: {
                user: true,
            },

            
        }
       })
       if(!project){
        return "Project not found"
       }

       return project;

    }catch(err){
        console.log(err)
    }

}
async updateProject (
    projectId: string,
    userId: string,
    title: string ,
     description: string ,
      requirements: string ,
       budget: string
){
    try{
        const project = await Job.findOne({
            where:{
                id: projectId
            },
            relations:{
                user: true
            }
        })
        if(!project){
            return "project not found "
        }
        if(project.user.id !== userId){
            return "You are not authorized to update this project"

        }

        project.title = title;
        project.description = description;
        project.requirements = requirements;
        project.budget= budget;

        await project.save();

        return project;



    }catch(err){
        console.log(err)
    }

}

async DeleteProject(
    projectId: string,
    userId: string
){
    try{
        const project = await Job.findOne({
            where:{
                id: projectId
            },
            relations:{
                user: true
            }
        })
        if(!project){
            return "project not found "
        }
        await project.remove()

        return "Project deleted successfully"


    }catch(err){
        console.log(err)
    }

}
async changestatus(
    status: string,
    projectId: string,
    userId : string
){
    try{
        const project = await Job.findOne({
            where:{
                id: projectId
            },
            relations:{
                user: true
            }
        })
        if(!project){
            return "project not found "

        }

        if(project.user.id !== userId){
            return "You are not authorized to update this project"

        }

        if(!Object.values(ProjectStatus).includes(status as ProjectStatus)){
           return "Invalid status"

        }

        project.projectStatus = status as ProjectStatus;
        await project.save();
  
         return project;
         
    }catch(err){
        console.log(err)
    }

}

}
export default new ProjectService();