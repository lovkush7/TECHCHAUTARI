import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import Commonentities from "./Common.entities.ts";
import { milestoneStauts } from "../enums/projectstatus.enums.ts";
import Contract from "./Contract.entities.ts";
import Payment from "./Payment.entities.ts";

@Entity()
class Milestone extends Commonentities{
    @Column({type: "text"})
    title: string;

    @Column({type:"number"})
    amoung: number;

    @Column({type: "enum", enum:milestoneStauts, default:milestoneStauts.PENDING})
    status: milestoneStauts;

    @Column({type:"text",nullable: true})
    description: string;

    @Column({type:"date", nullable: true})
    dateLine: Date

    @Column({type: "text", nullable: true})
    submission: string;

    @Column({type: "boolean",default: false})
    ispaid: boolean;

    @ManyToOne(()=>Contract, (contract)=>contract.milestones)
   contract: Contract;

   @OneToMany(()=>Payment, (Payment)=> Payment.milestone)
   payments: Payment[]
}
export default Milestone;