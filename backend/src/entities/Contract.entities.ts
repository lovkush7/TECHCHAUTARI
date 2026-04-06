import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import Commonentities from "./Common.entities.ts";
import { User } from "./User.entities.ts";
import Job from "./job.entities.ts";
import Milestone from "./Milestone.entities.ts";
import { contractStatus, type milestoneStauts } from "../enums/projectstatus.enums.ts";

@Entity()
class Contract extends Commonentities {

    @ManyToOne(()=>User, (user)=>user.contracts)
    freelancer: User;

    @ManyToOne(()=>Job,(job)=>job.contracts)
    jobs: Job;

    @Column({type: "int"})
    agreedPrice: number;

    @Column({type: "text"})
    terms: string;

    @Column({type: "enum" ,enum:contractStatus, default:contractStatus.PENDING})
    isCompleted: contractStatus;

    @OneToMany(()=>Milestone, (milestone)=>milestone.contract)
    milestones: Milestone[]



}
export default Contract;