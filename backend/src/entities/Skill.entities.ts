import { Column, Entity } from "typeorm";
import Commonentities from "./Common.entities.ts";

@Entity()
class Skill extends Commonentities{

    @Column({type:"text"})
    skillname: string;

}
export default Skill;