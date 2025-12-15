import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Chat.css"
import Sidebar from '../../components/sidebar/Sidebar'

const Chat = () => {
  return (
    <div>
        <Navbar/>
        <div className="page-container">
          <div className="page-content">
            <div className="chat-card">
              <div className="chat-container">
                <Sidebar/>

              </div>
            </div>
          </div>
        </div>

     
    </div>
  )
}

export default Chat
