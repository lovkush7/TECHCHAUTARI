import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Image as ImageIcon, X } from 'lucide-react';

export  const SocialMediaApp = () => {
  const [posts, setPosts] = useState([
    {
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
    },
    {
      id: 2,
      username: "Alex Martinez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      content: "Beautiful sunset from my evening walk 🌅",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      likes: 128,
      liked: true,
      comments: [
        { id: 1, username: "Lisa Wong", text: "Stunning view! Where is this?" }
      ],
      timestamp: "5 hours ago"
    }
  ]);

  const [newPost, setNewPost] = useState({ content: '', image: null });
  const [imagePreview, setImagePreview] = useState(null);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [commentInputs, setCommentInputs] = useState({});

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setNewPost({ ...newPost, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const createPost = () => {
    if (!newPost.content.trim() && !newPost.image) return;

    const post = {
      id: posts.length + 1,
      username: "You",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=You",
      content: newPost.content,
      image: newPost.image,
      likes: 0,
      liked: false,
      comments: [],
      timestamp: "Just now"
    };

    setPosts([post, ...posts]);
    setNewPost({ content: '', image: null });
    setImagePreview(null);
    setShowCreatePost(false);
  };

  const toggleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const addComment = (postId) => {
    const commentText = commentInputs[postId];
    if (!commentText?.trim()) return;

    setPosts(posts.map(post => {
      if (post.id === postId) {
        const newComment = {
          id: post.comments.length + 1,
          username: "You",
          text: commentText
        };
        return { ...post, comments: [...post.comments, newComment] };
      }
      return post;
    }));

    setCommentInputs({ ...commentInputs, [postId]: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10 border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              SocialHub
            </h1>
            <button
              onClick={() => setShowCreatePost(!showCreatePost)}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {showCreatePost ? 'Cancel' : '+ Create Post'}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Create Post Form */}
        {showCreatePost && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100 animate-in">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Create a Post</h2>
            
            <textarea
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              placeholder="What's on your mind?"
              className="w-full p-4 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              rows="4"
            />

            {imagePreview && (
              <div className="relative mt-4">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-full h-64 object-cover rounded-xl"
                />
                <button
                  onClick={() => {
                    setImagePreview(null);
                    setNewPost({ ...newPost, image: null });
                  }}
                  className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
                >
                  <X size={20} />
                </button>
              </div>
            )}

            <div className="flex gap-3 mt-4">
              <label className="flex-1 cursor-pointer">
                <div className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-purple-500 transition">
                  <ImageIcon size={20} className="text-gray-600" />
                  <span className="text-gray-600 font-medium">Add Photo</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              <button
                onClick={createPost}
                disabled={!newPost.content.trim() && !newPost.image}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Post
              </button>
            </div>
          </div>
        )}

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              {/* Post Header */}
              <div className="p-4 flex items-center gap-3">
                <img
                  src={post.avatar}
                  alt={post.username}
                  className="w-12 h-12 rounded-full border-2 border-purple-200"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{post.username}</h3>
                  <p className="text-sm text-gray-500">{post.timestamp}</p>
                </div>
              </div>

              {/* Post Content */}
              {post.content && (
                <div className="px-4 pb-3">
                  <p className="text-gray-800 leading-relaxed">{post.content}</p>
                </div>
              )}

              {/* Post Image */}
              {post.image && (
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full max-h-96 object-cover"
                />
              )}

              {/* Actions Bar */}
              <div className="px-4 py-3 flex items-center gap-6 border-t border-gray-100">
                <button
                  onClick={() => toggleLike(post.id)}
                  className="flex items-center gap-2 group"
                >
                  <Heart
                    size={24}
                    className={`transition-all duration-300 ${
                      post.liked
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600 group-hover:text-red-500 group-hover:scale-110'
                    }`}
                  />
                  <span className={`font-medium ${post.liked ? 'text-red-500' : 'text-gray-600'}`}>
                    {post.likes}
                  </span>
                </button>

                <div className="flex items-center gap-2 text-gray-600">
                  <MessageCircle size={24} />
                  <span className="font-medium">{post.comments.length}</span>
                </div>
              </div>

              {/* Comments Section */}
              <div className="border-t border-gray-100 bg-gray-50">
                {post.comments.length > 0 && (
                  <div className="px-4 py-3 space-y-3">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="flex gap-3">
                        <img
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${comment.username}`}
                          alt={comment.username}
                          className="w-8 h-8 rounded-full border border-gray-200"
                        />
                        <div className="flex-1 bg-white rounded-xl px-4 py-2 border border-gray-200">
                          <p className="font-semibold text-sm text-gray-900">{comment.username}</p>
                          <p className="text-gray-700">{comment.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Add Comment Input */}
                <div className="px-4 py-3 flex gap-2">
                  <input
                    type="text"
                    value={commentInputs[post.id] || ''}
                    onChange={(e) => setCommentInputs({ ...commentInputs, [post.id]: e.target.value })}
                    onKeyPress={(e) => e.key === 'Enter' && addComment(post.id)}
                    placeholder="Write a comment..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                  <button
                    onClick={() => addComment(post.id)}
                    className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition-all"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}