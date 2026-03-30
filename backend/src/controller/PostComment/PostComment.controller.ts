import type { Request, Response } from "express";
import PostCommentService from "../../services/postComments/PostComment.service.ts";

class PostcommentsController {
  async PostComment(
    req: Request,
    res: Response,
  ){
    try{
        const {comment} = req.body;
        const {postId} = req.params;

        const userId = req.user?.id;

        if(!userId){
            return {success: false, message:"unauthorized user"}
        }
        return await PostCommentService.postComment(comment,postId,userId);

    }catch(err){
        console.log("the erroris "+err)
    }

  }   
}
export default new PostcommentsController();