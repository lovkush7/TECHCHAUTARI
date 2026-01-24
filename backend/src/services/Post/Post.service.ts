import Posts from "../../entities/Post.entities.ts";
import { User } from "../../entities/User.entities.ts";

class PostService {
    async createPost(
        contents: string,
        images: string,
        userId: string
    ){
        try{
            const user = await User.findOne({
                where:{
                    id: userId
                }
            })

            if(!user){
                throw new Error("User not found")
            }

            const post = new Posts();
            post.contents = contents;
            post.image = images;
            post.user = user;

            await post.save()

            return post;

        }catch(err){
            throw err
        }

    }
}
export default new PostService();