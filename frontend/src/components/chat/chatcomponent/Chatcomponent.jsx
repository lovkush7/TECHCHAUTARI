import React from 'react'
import ChatHeader from '../chatheader/chatHeader'
import Chatinput from '../chat_inputbox/chatinput'

const Chatcomponent = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",flex:"1",overflow:"auto"

    }}>
      <ChatHeader/>
      
      <Chatinput/>
        
      
    </div>
  )
}

export default Chatcomponent
