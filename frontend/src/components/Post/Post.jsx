import React, { useRef, useState } from 'react'
import Authcontrol from '../../controlauth/authcontrol';
import { Heart, ImageIcon, X } from 'lucide-react';

const Post = () => {
    const [post, setpost] = useState([{
        id: 1,
        username: "Sarah Johnson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        content: "Just launched my new project! 🚀 Excited to share it with everyone.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
        likes: 42,
        liked: false,
        comments: [
            { id: 1, username: "Mike Chen", text: "Congratulations! This looks amazing!" },
            { id: 2, username: "Emma Davis", text: "Can't wait to try it out! 🎉" }
        ],
        timestamp: "2 hours ago"
    },]);
    const [newPost, setnewPost] = useState({
        content: "",
        image: null
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [showCreatePost, setShowCreatePost] = useState(false);
    const [commentInputs, setCommentInputs] = useState({});
    const fileinputref = useRef()

    const { authUser } = Authcontrol()
    const handleImagechange = (e) => {
        const file = e.target.files[0];
        if (!file.type.startsWith("image/")) {
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
            setnewPost({ ...newPost, image: reader.result })
        }
        reader.readAsDataURL(file);


    }

    const createpost = () => {
        if (!newPost.content.trim() && !newPost.image) return;
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
        setnewPost({ content: "", image: null })
        setImagePreview(null);
        setShowCreatePost(false);

    }
    const Tooglelike = (postId) => {
        setpost(post.map(p => p.id === postId ? { ...p, liked: !p.liked, like: p.liked ? p.like - 1 : p.like + 1 } : p))
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'>
            <header className='bg-white shadow-sm sticky top-0 z-10 border-b border-gray-200'>
                <div className='max-w-2xl mx-auto px-4 py-4'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-2xl font-bold text-blue-500'>TECHCHAUTARI</h1>
                        <button onClick={() => setShowCreatePost(!showCreatePost)}
                            className='px-4 py-2 bg-black text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105'>
                            {showCreatePost ? "discard post" : "create post"}
                        </button>
                    </div>
                </div>
            </header>
            <div className='max-w-2xl mx-auto px-4 py-6'>
                {showCreatePost && (
                    <div className='bg-white rounded-2xl shadow-lg p-6 border border-gray-100 animate-in'>
                        <h2 className='text-xl font-bold mb-4 text-gray-800'>create a post</h2>

                        <textarea
                            value={newPost.content}
                            onChange={(e) => setnewPost({ ...newPost, content: e.target.value })}
                            placeholder="what's on your mind ? "
                            className='w-full p-4 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none'
                            name="" id="" rows="4" />
                        {imagePreview && (
                            <div className='relative mt-4 '>
                                <img src={imagePreview} alt="abc" className='w-full h-64 object-cover rounded-xl' />
                                <button onClick={() => {
                                    setImagePreview(null);
                                    setnewPost({ ...newPost, image: null })
                                }} className='absolute top-2 right-2 bg-black bg-opacity-50  text-white p-2 rounded-full hover:bg-opacity-70 transition'>
                                    <X size={20} />

                                </button>
                            </div>

                        )}
                        <div className='flex gap-3 mt-4'>
                            <label className='flex-1 cursor-pointer' htmlFor="">
                                <div onClick={() => { fileinputref.current?.click() }} className='flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-b-gray-300 rounded-xl  hover:border-blue-500 transistion'>
                                    <ImageIcon size={20} className='text-gray-600' />
                                    <span className='text-gray-600 font-medium'>add photo</span>
                                </div>
                                <input type="file"
                                    accept="image/*"
                                    onChange={handleImagechange}
                                    className='hidden'
                                    ref={fileinputref} />
                            </label>
                            <button onClick={createpost}
                                disabled={!newPost.content.trim() && !newPost.image}
                                className='px-8 py-3 bg-black text-white rounded-xl font-medium hover:shadow-xl transistion-all disabled:opacity-50 disabled:cursor-not-allowed'>
                                addpost
                            </button>

                        </div>

                    </div>
                )}
                <div className='space-y-6'>
                    {post.map((post) => (
                        <div key={post.id} className='bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300'>
                            <div className='p-6 flex items-center gap-3'>
                                <img src={post.avatar} alt={post.username} className='w-12 h-12 rounded-full border-2 border-blue-600 object-cover' />
                                <div className='flex-1'>
                                    <h3 className='font-bold text-gray-900'>{post.username}</h3>
                                    <p className='text-sm text-gray-500'>{post.timestamp}</p>


                                </div>
                            </div>
                            {post.content && ( 
                                <div className='px-4 bp-3'>
                                    <p className=' text-gray-800 leading-relaxed'>{post.content}</p> 
                                </div>
                            )}
                            {post.image && (
                                <img src={post.image} alt="pp" className='w-full max-h-96 object-cover' />
                            )}
                        </div>
                    ))}

                {/* likes */}
                  
                  <div className='px-4 py-3 flex items-center gap-6 border-t border-gray-100 '>
                     <button onClick={()=>Tooglelike(post.id)} 
                        className="flex items-center gap-2 group">
                        
                        <Heart 
                        size={24} 
                        className={ `transition-all duration-300 
                        ${post.like ? 'fill-red-500 text-red-500 ' : 
                        'text-gray-600 group-hover:text-red-500   group-hover: scale-110'} `}/> 
                        </button>
                  </div>
                </div>


            </div>

        </div>
    )
}

export default Post
