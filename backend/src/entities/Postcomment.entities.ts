import { Entity, ManyToOne } from "typeorm";
import Commonentities from "./Common.entities.ts";
import { User } from "./User.entities.ts";
import Posts from "./Post.entities.ts";
@Entity()
class PostComment extends Commonentities{

    @ManyToOne(()=>User,(user)=>user.postcomments)
    user: User;

    @ManyToOne(()=>Posts,(post)=>post.postcomments)
    post: Posts;

}
export default PostComment;