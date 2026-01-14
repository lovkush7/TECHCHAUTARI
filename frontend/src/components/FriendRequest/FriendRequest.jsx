import React, { useEffect, useState } from 'react'
import RequestStore from '../../controlauth/RequestStore'
import Authcontrol from '../../controlauth/authcontrol';
import Usemessages from '../../controlauth/msgstroe';

const FriendRequest = () => {

  
  const { getRequests,sendRequest,requests,isSendingRequest,isgettingRequests} = RequestStore();
  const {} = Authcontrol()
  const {  Users, getusers, setselectedUsers} = Usemessages()

  useEffect(()=>{
    getRequests();
    getusers();

  },[getRequests,getusers]);

  console.log("the requests are ",requests);
  return (
    <div>
      {Users.data?.map((user,index)=>(
        <div key={index} >
          <span>{user.Fullname}</span>
          <button className='ml-5 p-2 border-0' onClick={()=>sendRequest({reciverId: user.id})}>send</button>
        </div>
        
      ))}
      
    </div>
  )
}

export default FriendRequest

