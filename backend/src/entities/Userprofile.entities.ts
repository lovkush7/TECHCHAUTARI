import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne } from "typeorm";
import Commonentities from "./Common.entities.ts";
import { User } from "./User.entities.ts";
import Skill from "./Skill.entities.ts";
@Entity()
export class UserProfile extends Commonentities{

    @Column({type:"text", nullable: true})
     profilepic: string;

     @Column({type:"text"})
     bio: string;

     @Column({type:"text"})
     hourlyRate: string;

     @Column({type:"text"})
     location: string;

     @Column({type:"text"})
    About: string;



     @ManyToMany(()=> Skill)
     @JoinTable()
     skills: Skill[];

@OneToOne(()=>User,(user)=>user.profile)
user: User;
}