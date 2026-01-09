import React, { useEffect } from 'react'
import { User, User2, User2Icon } from "lucide-react"
import Usemessages from '../../controlauth/msgstroe'
import "./Sidebar.css"
import Authcontrol from '../../controlauth/authcontrol'

const Sidebar = () => {
    const {Users, getusers, setselectedUsers,selectedUsers} = Usemessages();
    const { onlineusers} = Authcontrol()

  useEffect(()=>{
    getusers();
  },[getusers])
  return (
    <aside className='sidebar'>
      <div className="sidebar-header">
        <div className="header-content">
          <User2  className='user-icons'/>
          <span  style={{fontWeight:"500"}} className="header-title">
            contacts
          </span>
        </div>
      </div>
      <div className="sidebar-body">
        {Users?.data?.map((user)=>(
          <button key={user.id}
          onClick={()=>setselectedUsers(user)}
          className={`user-btn ${selectedUsers?.id === user?.id ? "active" : ""}`}
          >
            <div className="user-profile">
              <img  src={"./profile.jpg" || user.profile} alt="ac" className='user-profile' />
              {onlineusers.includes(user.id) && (
                <span className="online-indicator"></span>
              )}
            
            </div>
            <div className="user-info-details">
              <div className="user-fullname">
                {user.Fullname}
              </div>
              <div className="user-status">
                {onlineusers.includes(user.id) ? "Online" : "Offline"}
              </div>
            </div>

          </button>
        ))}
      </div>

    </aside>
  )
}

export default Sidebar
