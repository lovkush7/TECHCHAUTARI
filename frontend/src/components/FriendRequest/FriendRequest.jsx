import React, { useEffect, useState } from 'react'
import RequestStore from '../../controlauth/RequestStore'
import Authcontrol from '../../controlauth/authcontrol';
import Usemessages from '../../controlauth/msgstroe';
import "./FriendRequest.css"
import Requestfr from '../friendreq/Requestfr';

const FriendRequest = () => {
 

  const {sendRequest, getRequests,getSendRequests,GetsendRequests,PendingRequests,isSendingRequest} = RequestStore();
  const {authUser} = Authcontrol()
  const {  Users, getusers} = Usemessages();
  const [visibleUser, setvisibleUser] = useState([]);

    
  useEffect(()=>{
  getSendRequests()
    getRequests();
    getusers();

  },[]);

    console.log("users",Users)      
    console.log("getreq",GetsendRequests)
    console.log("pending",PendingRequests)


    const ispending =(userId)=>{
      return GetsendRequests?.some((req)=>
      req.reciver?.id === userId &&
      req.status === "PENDING"
      )
    }

    const isAccpeted =(userId)=>{
      return GetsendRequests?.some((req)=>
      req.reciver?.id === userId &&
      req.status === "ACCEPTED"
      )
    
    }
    useEffect(()=>{
      if(Users?.data  && authUser?.id){
        setvisibleUser(Users.data.filter((user)=>
         user.id !== authUser.id ))

      }
    },[Users,authUser])

  
      const handlesubmit = async(userId)=>{
    await sendRequest({
      // senderId: authUser.id, 
      receiverId: userId,
      });
      RequestStore.setState((state)=>({
        GetsendRequests:[
          ...state.GetsendRequests,
          {
            reciver:{id:userId},
            status:"PENDING"
          }
        ]
      }))
      

  }
  return (
    <div className='user-form'>
      <Requestfr/>
      <div style={{"background":"linear-gradient(135deg, #eef2f3 0%, #d9e4ec 100%)"}} className=" flex flex-wrap justify-center border-amber-100 rounded-2xl p-17 overflow-y-auto">
      {visibleUser.map((user,idx)=>(
        <div key={idx} >
         <div className="user-info bg-white  p-2 m-1.5 overflow-y-auto ">
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
          {isAccpeted(user.id) ? (
            <button className='bg-green-600 text-white px-4 py-2 rounded-2xl' disabled>
              friend
            </button>
          ) : ispending(user.id) ? (
            <button className='bg-gray-400 text-white px-4 py-2 rounded-2xl' disabled>
              pending
            </button>
          ) : (
             <button 
          type="button"   
          id={user.id}
           onClick={()=> handlesubmit(user.id)}
            disabled={isSendingRequest }
           className="bg-black text-white px-4 py-2 mt-0.5 rounded-2xl hover:bg-gray-600">
            {isSendingRequest ? " sending" : " Follow"} 
            </button>) }

         
         </div>
        
        </div>
        
      ))}
      </div>
    </div>
  )
}

export default FriendRequest