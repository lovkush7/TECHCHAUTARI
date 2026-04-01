import Posts from "../../entities/Post.entities.ts";
import PostLikes from "../../entities/Postlikes.entities.ts";
import { User } from "../../entities/User.entities.ts";

class postlikesSercice{
    async likepost(
        postId: string,
        userId: string,
    ){
        console.log("post id is "+postId)
        console.log("user id is "+userId)

        const post = await Posts.findOne({
            where:{
                id: postId
            },
            relations:{
                user: true,
                postlikes: true
            }
        });
        if(!post){
            return {success: false, message: "Post not found"}
        }
       
         const isliked = await PostLikes.findOne({
            where:{
                post: {id: postId},
                user: {id: userId}
            }

            
         })
         if(isliked){
            await PostLikes.remove(isliked)
         }else{
            const user= await User.findOne({
                where:{
                    id: userId
                }
            })
            if(!user){
                return {success: false, message: "User not found"}
            }
            const newlike = new PostLikes();
            newlike.user = user;
            newlike.post = post;
            await newlike.save();

         }
          
         const likescount = await PostLikes.count({
            where:{
                 post: {id: postId}
            }
         })
            return likescount;

    }
}
export default new postlikesSercice();