import React, { useEffect, useRef } from 'react'
import ChatHeader from '../chatheader/chatHeader'
import Chatinput from '../chat_inputbox/chatinput'
import Usemessages from '../../../controlauth/msgstroe'
import Authcontrol from '../../../controlauth/authcontrol'

const Chatcomponent = () => {
   const {messages,selectedUsers,getmessages} = Usemessages();
   const {authUser} = Authcontrol();
   const MessageEndref = useRef(null);
    
    useEffect(()=>{
      if(!selectedUsers?.id) return;
      getmessages(selectedUsers.id);
    },[getmessages])

  return (
    <div style={{display:"flex",flexDirection:"column",flex:"1",overflow:"auto"

    }}>
      <ChatHeader/>
      <div className="chat-messages">
        {messages.map((msg)=>(
          <div key={msg.id}
          className={`chat ${msg.senderId === authUser.id ? "start" : "end"}`}>

            <div className="chat-image avatar">
              <div className="avatar-img">
                <img src={msg.senderId === authUser.id ? authUser.profile || "./profile.jpg" : 
                  selectedUsers.profile || './profile.jpg'} alt="" />
              </div>
            </div>
                <div className="chat-header">
                  <time datetime="">
                    {Formatmessagetime(msg.createdAt)}
                  </time>
                  <div className="chat-bubble">
                    {msg.image && (
                      <img src={msg.image} alt="" />
                    )}
                    {msg.text && (
                      <p>{msg.text}</p>
                    )}
                  </div>
                </div>
          </div>
        ))}
      </div>
        
      
      <Chatinput/>
        
      
    </div>
  )
}

export default Chatcomponent
