import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import Commonentities from "./Common.entities.ts";
import { User } from "./User.entities.ts";
import Job from "./job.entities.ts";
import Milestone from "./Milestone.entities.ts";
import type { milestoneStauts } from "../enums/projectstatus.enums.ts";

@Entity()
class Contract extends Commonentities {

    @ManyToOne(()=>User, (user)=>user.contracts)
    user: User;

    @ManyToOne(()=>Job,(job)=>job.contracts)
    jobs: Job;

    @Column({type: "int"})
    agreedPrice: number;

    @Column({type: "text"})
    terms: string;

    @OneToMany(()=>Milestone, (milestone)=>milestone.contract)
    milestones: Milestone[]

}
export default Contract;