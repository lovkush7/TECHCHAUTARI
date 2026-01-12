import React, { useEffect, useRef } from 'react'
import ChatHeader from '../chatheader/chatHeader'
import Chatinput from '../chat_inputbox/chatinput'
import Usemessages from '../../../controlauth/msgstroe'
import Authcontrol from '../../../controlauth/authcontrol'
import { Formatmessagetime } from '../../../../utils/Formatetime'
import "./Chatcomonent.css"

const Chatcomponent = () => {
   const {messages,selectedUsers,getmessages, listenTomessages,nonlistenTomessages} = Usemessages();
   const {authUser} = Authcontrol();
   const MessageEndref = useRef(null);
    
    useEffect(()=>{
      if(!selectedUsers?.id) return;
      getmessages(selectedUsers.id);
      listenTomessages();
       return ()=> nonlistenTomessages()
    },[selectedUsers?.id, getmessages, listenTomessages, nonlistenTomessages]);

  return (
    <div style={{display:"flex",flexDirection:"column",flex:"1",overflow:"auto"

    }}>
      <ChatHeader/>
      <div className="chat-messages">
        {messages.map((msg)=>(
          <div key={msg.id}
          className={`chat ${msg.senderId === authUser.id ? "end" : "start"}`}>

            <div className="chat-image avatar">
              <div className="avatar-img">
                <img style={{width:"100%",height:"100%",objectFit:"cover"}} src={msg.senderId === authUser.id ? authUser.profile || "./profile.jpg" : 
                  selectedUsers.profile || './profile.jpg'} alt="" />
              </div>
            </div>
                <div className="chat-header">
                 
                  <div  className={`chat-bubble ${ msg.senderId === authUser.id ? "chat-bubble-primary text-white" : "bg-base-300 "}`} >
                    {msg.image && (
                      <img style={{width:"7rem",height:"7rem"}} src={msg.image} alt="" />
                    )}
                    {msg.text && (
                      <div className="max-w-xs">
                      <p style={{fontSize:"1rem"}}>{msg.text}</p>
                      </div>
                    )}
                  </div>
                   <time datetime="">
                    {Formatmessagetime(msg.createdat)}
                  </time>
                </div>
          </div>
        ))}
      </div>
        
      
      <Chatinput/>
        
      
    </div>
  )
}

export default Chatcomponent
