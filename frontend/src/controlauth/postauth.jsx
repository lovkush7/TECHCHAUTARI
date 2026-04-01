import { create } from "zustand"
import api from "../api/api";
import Post from "../components/Post/Post";

const postAuthstore = create((set,get)=>({
    Post:[],
    postId: null,

    addpost:async(post)=>{
        try{
            const newpost = await api.post("/auth/posts",post)
            console.log("post error",newpost.data)
            
            set((state)=>({
                Post: [...state.Post, newpost.data]
            }
        
        ))
            

        }catch(err){
            console.log("the error is "+err)
        }
    },

    getPost: async()=>{
        try{
            const Posts = await api.get("/auth/getpost")
            set({Post: Posts.data})
            console.log("the post is ",Posts.data);
        }catch(err){
            console.log("the error is ",err)
        }
    },
    sendlikes: async (postId)=>{
        try{
            const res = await api.post("/auth/getlikes",{postId})
            console.log("the response is ", res.data);
            set((state)=>({
                Post: {
                   ...state.Post,
                   data: state.Post.data.map((p)=>
                      p.id === postId
                        ? { ...p, likes: [...p.likes, res.data] }
                        : p
                   )
                }
             }))

        }catch(err){
            console.log(err)
        }

    },

   sendcomment: async({postId, comment})=>{

    try{
        
        
        const commenT = await api.post(`/auth/post/comments/${postId}`,{comment})
        console.log("the comment is ", commenT.data);
       set((state)=>({
   Post: {
      ...state.Post,
      data: state.Post.data.map((p)=>
         p.id === postId
           ? { ...p, postcomments: [...p.postcomments, response.data] }
           : p
      )
   }
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