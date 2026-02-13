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
    
  return (
    <div>
    
      
    </div>
  )
}

export default Post
