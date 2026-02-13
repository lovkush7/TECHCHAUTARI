import React, { useState } from 'react'
import Authcontrol from '../../controlauth/authcontrol';

const Post = () => {
    const [post , setpost] = useState([]);
    const [newPost , setnewPost] = useState({
        content:"",
        image:null
    });
    const [imagePreview, setImagePreview] =  useState(null);
    const [showCreatePost, setShowCreatePost] = useState(false);
    const [commentInputs, setCommentInputs] = useState({});

    const {authUser} =Authcontrol() 
    const handleImagechange = (e)=>{
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setImagePreview(reader.result);
                setnewPost({...newPost , image:reader.result})
            }
            reader.readAsDataURL(file);
        }
        
    }

    const createpost = ()=>{
        if(!newPost.content.trim() && !newPost.image) return;
       const post = {
        id: authUser.id,
        username: authUser.Fullname,
        avatar: authUser.profile || "./profile.jpg",
        content: newPost.content,
        image: newPost.image,
        like: 0,
        liked: false,
        comments: [],
       }
       setpost([post, ...post])
       setnewPost({content:"", image:null})
       setImagePreview(null);
       setShowCreatePost(false);

    }
    const Tooglelike = (postId)=>{
      setpost(post.map(p => p.id === postId ? {...p, liked: !p.liked, like: p.liked ? p.like - 1 : p.like + 1} : p))
    }
    
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'>
     <header className='bg-white shadow-sm sticky top-0 z-10 border-b border-gray-200'>
         <div className='max-w-2xl mx-auto px-4 py-4'>
              <div className='flex items-center justify-between'>
                 <h1 className='text-2xl font-bold text-blue-500'>TECHCHAUTARI</h1>
                 <button onClick={()=>setShowCreatePost(!showCreatePost)} 
                    className='px-4 py-2 bg-black text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105'>
                    {showCreatePost ? "discard post" : "create post"}
                 </button>
              </div>
         </div>
     </header>
      
    </div>
  )
}

export default Post
