import type { Request, Response } from "express";
import PostService from "../../services/Post/Post.service.ts";

class LikeController {
    async likePost(
        req: Request,
        res: Response
    ){
        try{
            const {like} = req.body;
            const {PostId} = req.params;
            const userId = req.user?.id;

            if(!userId){
                return {success: false, message:"unauthorized user"}
            }
            return await PostService.PostLikes();


        }catch(err){
            console.log("the error is "+err);
        }
    
    }
}
export default new LikeController();