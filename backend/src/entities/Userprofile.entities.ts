import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne } from "typeorm";
import Commonentities from "./Common.entities.ts";
import { User } from "./User.entities.ts";
import Skill from "./Skill.entities.ts";
@Entity()
export class UserProfile extends Commonentities{

    @Column({type:"text"})
     profilepic: string;

     @Column({type:"text"})
     bio: string;

     @Column({type:"text"})
     hourlyRate: string;

     @ManyToMany(()=> Skill)
     @JoinTable()
     skills: Skill[];

@OneToOne(()=>User,(user)=>user.profile)
user: User;
}