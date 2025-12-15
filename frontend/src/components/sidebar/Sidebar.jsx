import React, { useEffect } from 'react'
import "./Sidebar.css"
import Usemessages from '../../authstore/messagesstore'
import { HiUsers } from 'react-icons/hi';
import Useauthstore from '../../authstore/authstore';

const Sidebar = () => {
    const {Users,setselectedUsers,isuserloading, getusers,selectedusers} = Usemessages();
    const {Onlineusers } = Useauthstore()

    useEffect(()=>{
        getusers();

    },[getusers]);

    if(isuserloading){
        <div>loading.....</div>
    }


  return (
    <aside>
    <div className='sidebar-header'>
      <div className="header-content">
        <HiUsers className='user-icons'/>
        <span className="header-title">Contract</span>
      </div>
    </div>
    <div className="sidebar-body">
        {Users.map((user)=>(
            <button key={user.id} onClick={()=>setselectedUsers(user)}
            className={`user-button ${selectedusers?.id === user.id? "active":""}`}>
            <div className="user-profile">
                <img src={user.profile || "./profile.jpg"} alt="" />
            </div>
            </button>
        ))}
    </div>
    </aside>
  )
}

export default Sidebar
