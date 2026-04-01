import type { Request, Response } from "express";
import PostlikesService from "../../../services/postLIkes/Postlikes.service.ts";

class LikeController {
    async likepost(
        req: Request,
        res: Response
    ){
        try{
            const {postId} = req.body;

            const userId = req.user?.id;

            if(!userId){
                throw new Error("User not found")
            }
            if(!postId){
                throw new Error("Post not found")
            }


            return await PostlikesService.likepost(postId, userId);

        }catch(err){
            console.log(err)
        }

    }
}
export default new LikeController();