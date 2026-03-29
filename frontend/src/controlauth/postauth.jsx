import { create } from "zustand"
import api from "../api/api";

const postAuthstore = create((set)=>({
    Post:[],

    addpost:async(post)=>{
        try{
            const newpost = await api.post("/auth/posts",post)
            console.log("post error"+newpost.data)
            
            set((state)=>({
                Post: [...state.post, newpost.data]
            }))

        }catch(err){
            console.log("the error is "+err)
        }
    },

    sendComment: async(postId, comment) => {
            try {
                const response = await api.post(`/auth/comments/${postId}`, comment);
                set((state) => ({
                    Post: state.Post.map((post) =>
                        post.id === postId ? { ...post, comments: [...post.comments, response.data] } : post
                    )
                }));
                        

}))

export default postAuthstore;