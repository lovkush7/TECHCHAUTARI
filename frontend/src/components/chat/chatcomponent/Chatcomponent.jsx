import React, { useEffect, useRef } from 'react'
import ChatHeader from '../chatheader/chatHeader'
import Chatinput from '../chat_inputbox/chatinput'
import Usemessages from '../../../controlauth/msgstroe'
import Authcontrol from '../../../controlauth/authcontrol'
import { Formatmessagetime } from '../../../../utils/Formatetime'
import "./Chatcomonent.css"

const Chatcomponent = () => {
  const { messages, selectedUsers, getmessages, listenTomessages, nonlistenTomessages } = Usemessages();
  const { authUser } = Authcontrol();
  const MessageEndref = useRef(null);

  useEffect(() => {
    if (!selectedUsers?.id) return;
    getmessages(selectedUsers.id);
    listenTomessages();
    return () => nonlistenTomessages()
  }, [selectedUsers?.id, getmessages, listenTomessages, nonlistenTomessages]);

  useEffect(() => {
 if(MessageEndref.current && messages){
  MessageEndref.current.scrollIntoView({ behavior: "smooth" });
 }

}, [messages]);

  return (
    <div className="flex-1 flex flex-col ">
      <ChatHeader />
       <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg)=>(
          <div key={msg.id}
          className={`chat ${msg.sender?.id === authUser?.id ? "chat-end" : "chat-start"}` } ref={MessageEndref}  >
            {/* {console.log("the senderid and authuserid", msg.sender.id, authUser.id)}
            {console.log( "the messageis",msg)} */}

            <div className="chat-image avatar">
              <div className="size-10 rounded-full border ">
                <img src={msg.sender?.id === authUser?.id ? authUser.profile || "./profile.jpg" : 
                  selectedUsers.profile || './profile.jpg'} alt="" />
              </div>
            </div>
                {/* <div className="chat-header mb-1">
                    <time className='text-xs opacity050 ml-1' datetime="">
                    {Formatmessagetime(msg.createdat)}
                  </time>
                   
                </div> */}
                  <div className={`chat-bubble ${ msg.sender?.id === authUser?.id ? "chat-bubble-primary" : "chat-bubble-secondary" } flex flex-col`}>
                    {msg.image && (
                      <img className='sm:max-w-[100px] rounded-md mb-2' src={msg.image} alt="" />
                    )}
                   {msg.text ? <p>{msg.text}</p> : null}
                 
                  </div>
                        <div className="chat-header mb-1">
                    <time className='text-xs opacity050 ml-1' datetime="">
                    {Formatmessagetime(msg.createdat)}
                  </time>
                   
                </div>
              
          </div>
          
        ))}
         
      </div>
      <Chatinput />


    </div>
  )
}

export default Chatcomponent
