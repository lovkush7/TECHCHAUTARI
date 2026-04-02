import { Column, Entity, ManyToOne } from "typeorm";
import Commonentities from "./Common.entities.ts";
import { ProjectStatus } from "../enums/projectstatus.enums.ts";
import { User } from "./User.entities.ts";
@Entity()
class Job extends Commonentities{

    @Column({type:"text"})
    title: string;

    @Column({type:"text"})
    description: string;

    @Column({type:"text"})
    requirements: string;

    @Column({type: "text"})
    budget: string;

    @Column({type: "enum", enum: ProjectStatus, default: ProjectStatus.OPEN})
    projectStatus: ProjectStatus;

    @ManyToOne(()=>User, (user)=>user.jobs)
    user: User;

}
export default Job;