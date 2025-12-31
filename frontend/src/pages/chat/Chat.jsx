import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Chat.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Chatcomponent from '../../components/chat/chatcomponent/Chatcomponent'
import Usemessages from '../../controlauth/msgstroe'
import Nochatselected from '../../components/chat/nochatselected/Nochatselected'

const Chat = () => {
  const {selectedUsers} = Usemessages();
  return (
    <div>
        <Navbar/>
        <div className="page-container">
          <div className="page-content">
            <div className="chat-card">
              <div className="chat-container">
                <Sidebar/>
              {!selectedUsers ? <Nochatselected/> : <Chatcomponent/>}  

              </div>
            </div>
          </div>
        </div>

     
    </div>
  )
}

export default Chat
