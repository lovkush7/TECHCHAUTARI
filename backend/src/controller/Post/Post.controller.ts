import type { Request, Response } from "express";
import PostService from "../../services/Post/Post.service.ts";

class PostController {
    async createPost(
        req: Request,
        res: Response
    ){
        try{
            const {contents, images} =req.body;

            const userId = req.user?.id;

            if(!userId){
                throw new Error("User not found")

            }

            return await PostService.createPost(contents, images, userId);

        }catch(err){
            throw err
        }

    }
}
export default new PostController();