import Posts from "../../../entities/Post.entities.ts";

class GetPostController {
    async getPost(  ){
      
        try{
            const User = await Posts.find({
                relations:{
                    postcomments: {
                        user: true
                    },
                    postlikes: {
                        user: true
                    },
                    user: true
                    
                }
            });
            return  User; 

        }catch(err){
            console.log("get post error",err);
        }    }
}
export default new GetPostController();