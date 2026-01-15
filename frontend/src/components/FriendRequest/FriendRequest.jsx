import React, { useEffect, useState } from 'react'
import RequestStore from '../../controlauth/RequestStore'
import Authcontrol from '../../controlauth/authcontrol';
import Usemessages from '../../controlauth/msgstroe';
import "./FriendRequest.css"

const FriendRequest = () => {

  
  const { getRequests,sendRequest,requests,isSendingRequest,isgettingRequests} = RequestStore();
  const {authUser} = Authcontrol()
  const {  Users, getusers, setselectedUsers} = Usemessages()

  useEffect(()=>{
    getRequests();
    getusers();

  },[getRequests,getusers]);

  console.log("the requests are ",requests);
  return (
    <div className='user-form'>
      {Users.data?.filter((u)=>u.id !== authUser?.id).map((user,index)=>(
        <div key={index} >
         <div className="user-info  p-2 m-1.5 ">
          <div className='flex justify-end cursor-pointer'>X</div>
          <div  className="user-photo  p-1.5">
            <div className="photo-content ">
              <img  src={user.profile || "./tech.png"} alt="" />
          </div>
          </div>
          <br />

          <div className="user-name">
            <p>{user.Fullname}</p>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-600">Follow</button>
         </div>
        
        </div>
        
      ))}
      
    </div>
  )
}

export default FriendRequest

