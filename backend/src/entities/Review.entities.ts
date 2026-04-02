import { ManyToOne } from "typeorm";
import Commonentities from "./Common.entities.ts";
import { User } from "./User.entities.ts";

class Rating extends Commonentities{

    @ManyToOne(()=>User, (user)=>user.ratings)
    user: User;

}
export default Rating;