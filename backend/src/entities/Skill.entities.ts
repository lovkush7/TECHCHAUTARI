import { Column, Entity, ManyToOne } from "typeorm";
import Commonentities from "./Common.entities.ts";
import { User } from "./User.entities.ts";

@Entity()
class Skill extends Commonentities{

    @Column({type:"text"})
    skillname: string;

    @ManyToOne(()=>User, (user)=>user.skills)
    user: User;
}
export default Skill;