import { MessageCircleCodeIcon, MessageCircleHeart, MessageCircleMore } from 'lucide-react'
import React from 'react'
import "./Nochatselected.css"

const Nochatselected = () => {
  return (
    <div className='no-chat-selected' >
      <div className="content">
        <div className="icon-wrapper">
            <div className="icons-container">
              <img style={{width:"8rem",height:"8rem"}} src="./tech.png" alt="" />
            </div>
        </div>
        <h2 className="chath1">welcome to Tech Chautari</h2>
        <p className="chatp">
            please select a chat to start messaging
        </p>
      </div>
    </div>
  )
}

export default Nochatselected
