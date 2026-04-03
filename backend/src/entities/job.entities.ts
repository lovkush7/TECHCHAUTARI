import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import Commonentities from "./Common.entities.ts";
import { ProjectStatus } from "../enums/projectstatus.enums.ts";
import { User } from "./User.entities.ts";
import proposal from "./Proposal.entities.ts";
import Contract from "./Contract.entities.ts";
import Rating from "./Review.entities.ts";
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

    @OneToMany(()=>proposal, (p)=>p.jobs)
    proposals: proposal[]

    @OneToMany(()=>Contract, (contract)=>contract.user)
    contracts: Contract[]

    @OneToMany(()=>Rating, (rating)=>rating.project)
    ratings: Rating[]

}
export default Job;