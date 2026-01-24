import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import Commonentities from "./Common.entities.ts";
import { User } from "./User.entities.ts";
import PostLikes from "./Postlikes.entities.ts";
import PostComment from "./Postcomment.entities.ts";

@Entity()
class Posts extends Commonentities {

    @Column({type:"text"})
    contents: string;

    @Column({nullable: true, type:"text"})
    image?: string;

    @ManyToOne(()=>User, (user)=>user.posts)
    user: User;

    @OneToMany(()=>PostLikes,(like)=>like.post)
    postlikes: PostLikes[];

    @OneToMany(()=>PostComment,(comment)=>comment.post)
    postcomments: PostComment[]

    

}
export default Posts;

