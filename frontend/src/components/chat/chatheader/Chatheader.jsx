import React from 'react'
import Usemessages from '../../../controlauth/msgstroe'
import Authcontrol from '../../../controlauth/authcontrol';
import "./Chatheader.css"
import { Cross, CrosshairIcon, CrossIcon } from 'lucide-react';
import { IoClose } from 'react-icons/io5';

const ChatHeader = () => {
    const {Users ,selectedUsers,setselectedUsers } = Usemessages();
    const {onlineusers} = Authcontrol();
  return (
    <div className='chat-header'>
        <div className="chat-header-inner">
            <div className="chat-user">
                <div className="avtar">
                    <img style={{width:"2rem",height:"2rem"}} src={selectedUsers?.profile ||"./profile.jpg"  } alt="photo xinna ra" />
                </div>
          
            <div style={{marginBottom:'0'}}>
            <h3 className="user-name"  >
                {selectedUsers?.Fullname}
               
            </h3>
            <p className="userstatus">
                 {onlineusers.includes(selectedUsers?.id) ? "online" : "offline"}
            </p>
        </div>
        </div>
        <button style={{outline:"none",border:"none"}} onClick={()=>setselectedUsers(null)}>
            <IoClose size={20} style={{backgroundColor:"transparent"}}/>
        </button>
          </div>
      
    </div>
  )
}

export default ChatHeader
