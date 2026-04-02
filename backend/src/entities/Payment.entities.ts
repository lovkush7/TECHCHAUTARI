import { Column, Entity, ManyToOne } from "typeorm";
import Commonentities from "./Common.entities.ts";
import Milestone from "./Milestone.entities.ts";

@Entity()
class Payment extends Commonentities{

    @ManyToOne(()=>Milestone, (milestone)=> milestone.payments)
    milestone: Milestone;
     
    @Column({type: "number"})
    amount: number;

    @Column({type:"text"})
    paymentMethod: string;

    @Column({type: "boolean", default: false})
    isReleased: boolean;


}
export default Payment;