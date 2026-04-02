import { Column, Entity, ManyToOne } from "typeorm";
import Commonentities from "./Common.entities.ts";
import { ProposalStatus } from "../enums/projectstatus.enums.ts";
import { User } from "./User.entities.ts";
import Job from "./job.entities.ts";

@Entity()
class proposal extends Commonentities{
    
@Column({type:"int"})
price: number;

@Column({type:"text"})
coverLetter: string;

@Column({type: "enum", enum:ProposalStatus, default: ProposalStatus.PENDING})
status: ProposalStatus;

@ManyToOne(()=>User, (user)=>user.proposals)
user: User;

@ManyToOne(()=>Job, (job)=>job.proposals)
jobs: Job;

}
export default proposal;