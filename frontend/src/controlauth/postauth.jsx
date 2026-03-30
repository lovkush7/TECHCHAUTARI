import { create } from "zustand"
import api from "../api/api";
import Post from "../components/Post/Post";

const postAuthstore = create((set,get)=>({
    Post:[],
    postId: null,

    addpost:async(post)=>{
        try{
            const newpost = await api.post("/auth/posts",post)
            console.log("post error"+newpost.data)
            
            set((state)=>({
                Post: [...state.post, newpost.data]
            }
        
        ))
            

        }catch(err){
            console.log("the error is "+err)
        }
    },

   sendcomment: async({postId, comment})=>{

    try{
        
        
        const commenT = await api.post(`/auth/post/comments/${postId}`,comment)
        console.log("the comment is "+commenT.data);
        set((state)=>({
            Post: state.Post.map((post)=>
            post.id === postId ? {...post, comments: [...post.comments, comment.data]} : post
            )
        }))

    }catch(err){
        console.log(err);
    }
   },

    postID: async(postId)=>{
        set({postId})

    }
                        

}))

export default postAuthstore;