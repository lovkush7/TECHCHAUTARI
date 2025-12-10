import { BeforeInsert, Column, Entity, JoinColumn, OneToOne } from "typeorm";
import Commonentities from "./Common.entities.ts";
import bcrypt from "bcrypt"
import { Role } from "../enums/Role.enums.ts";
import { UserProfile } from "./Userprofile.entities.ts";

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

    @OneToOne(()=>UserProfile, (profile)=>profile.user)
    @JoinColumn()
    profile: UserProfile;

    @BeforeInsert()
    _(){
        this.password = bcrypt.hashSync(this.password,10)
    }



}