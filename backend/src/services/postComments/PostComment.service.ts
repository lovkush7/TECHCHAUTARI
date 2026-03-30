import Posts from "../../entities/Post.entities.ts";
import PostComment from "../../entities/Postcomment.entities.ts";

class PostCommentService {
    async postComment(
        comment: string,
        postId: any,
        userId: string
    ){
        try{
            console.log(comment);
            console.log(postId)
            if (!comment) {
    return {
        success: false,
        message: "Comment cannot be empty"
    };
}
            const postIds = await Posts.findOne({
                where:{
                    id: postId
                },
                relations:{
                    user: true,
                    postcomments: true
                }
            })
            if(!postIds){
                return {success: false, message:"post not found"}
            }
            const newcomment = new PostComment()
            newcomment.comment = comment;
            newcomment.user = {id: userId} as any;
            newcomment.post = postId;
            await newcomment.save();
            return {success: true, data: newcomment}

        }catch(err){
            console.log("the error is "+err)
        }

    }
}
export default new PostCommentService();