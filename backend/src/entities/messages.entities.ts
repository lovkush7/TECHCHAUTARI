import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import Commonentities from "./Common.entities.ts";
import { User } from "./User.entities.ts";

@Entity()
export class Messages extends Commonentities{

    @ManyToOne(()=>User,(user)=>user.sendMessages)
    @JoinColumn({name:"senderId"})
    sender: User;

    @ManyToOne(()=>User,(user)=>user.recivedMessages)
    @JoinColumn({name:"reciverId"})
    reciver: User;

    @Column({type:"text"})
    text?: string;

    @Column({type:"text", nullable: true})
    image?: string;

}

