import { Column, Entity, ManyToOne } from "typeorm";
import Commonentities from "./Common.entities.ts";
import { User } from "./User.entities.ts";
import Job from "./job.entities.ts";

@Entity()
class Rating extends Commonentities{

    @ManyToOne(()=>User, (reviewer)=>reviewer.ratings)
    reviewer: User;

    @ManyToOne(()=>User, (reviewedUser)=>reviewedUser.rating)
    reviewedUser: User;

    @ManyToOne(()=>Job, (job)=>job.ratings)
    project: Job;

    @Column({type: "integer"})
    rating: number;

    @Column({type: "text"})
    review: string;

}
export default Rating;