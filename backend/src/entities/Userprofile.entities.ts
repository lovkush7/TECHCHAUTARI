import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import Commonentities from "./Common.entities.ts";
import { User } from "./User.entities.ts";
@Entity()
export class UserProfile extends Commonentities{

    @Column({type:"text"})
     profilepic: string;


@OneToOne(()=>User,(user)=>user.profile)
user: User;
}