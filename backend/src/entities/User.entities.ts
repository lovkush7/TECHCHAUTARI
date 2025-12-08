import { BeforeInsert, Column, Entity } from "typeorm";
import Commonentities from "./Common.entities.ts";
import bcrypt from "bcrypt"
import { Role } from "../enums/Role.enums.ts";

@Entity()
export class User extends Commonentities{

    @Column({type:"text"})
    Fullname: string;

    @Column({type:"text",unique:true})
    email: string;

    @Column({type:"text"})
    password: string;

    @Column({type:"enum",enum:Role,default:Role.USER})
    Role: Role;

    @BeforeInsert()
    _(){
        this.password = bcrypt.hashSync(this.password,10)
    }



}