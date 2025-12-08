import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Column } from "typeorm";
import { BaseEntity, PrimaryGeneratedColumn } from "typeorm";
// import { UpdateDateColumn } from "typeorm/browser";

class Commonentities  extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn({type:"timestamp"})
    createdat: Date;

    @UpdateDateColumn({type:"timestamp"})
    updatedat: Date;


}

export default Commonentities;