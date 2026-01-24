import { Entity, ManyToOne } from "typeorm";
import Commonentities from "./Common.entities.ts";
import { User } from "./User.entities.ts";
import Posts from "./Post.entities.ts";

@Entity()
class PostLikes extends Commonentities{

    @ManyToOne(()=>User,(user)=>user.Postlikes)
    user: User;

    @ManyToOne(()=>Posts,(post)=>post.postlikes)
    post: Posts;

}
export default PostLikes;