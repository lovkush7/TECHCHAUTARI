import React, { useEffect, useState } from 'react'
import RequestStore from '../../controlauth/RequestStore'
import Authcontrol from '../../controlauth/authcontrol';
import Usemessages from '../../controlauth/msgstroe';
import "./FriendRequest.css"

const FriendRequest = () => {
  const [Followingid,setFollowingid] = useState([]);
  const [visibleUsers, setVisibleUsers]= useState([])

  const { getRequests,sendRequest,requests,isSendingRequest,isgettingRequests,getSendRequests,GetsendRequests} = RequestStore();
  const {authUser} = Authcontrol()
  const {  Users, getusers, setselectedUsers} = Usemessages();

     



  useEffect(()=>{
  getSendRequests()
    getRequests();
    getusers();

  },[]);
  console.log("the req ",GetsendRequests)
  
  // useEffect(()=>{
  //   if(requests?.length){
  //     const sendId = requests.map((r)=>r.receiverId)
  //     setFollowingid(sendId);
  //   }
  // },[requests])

   
   useEffect(()=>{
          if(Users.data && requests){
          
                    
           const sendId = GetsendRequests?.map((r)=>r.receiverId);
           setFollowingid(sendId),
            
       setVisibleUsers(Users.data.
        filter((u)=>u.id !== authUser?.id)
        .filter((u)=>!Followingid.includes(u.id))
        
      
      )
    
    }
   }
   ,[Users.data, authUser?.id,GetsendRequests])



  console.log("the requests are ",requests);
      const handlesubmit = async(userId)=>{
    await sendRequest({
      // senderId: authUser.id, 
      receiverId: userId,
      });
     setFollowingid((prev)=>[...prev,userId]);
     setVisibleUsers(prev =>
      prev.filter(user => user.id !== userId)
    );
  }
  return (
    <div className='user-form'>
      {visibleUsers.map((user,idx)=>(
        <div key={idx} >
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
          <button 
          type="button"   
          id={user.id}
           onClick={()=> handlesubmit(user.id)}
            disabled={isSendingRequest || Followingid.includes(user.id)}
           className="bg-black text-white px-4 py-2 mt-0.5 rounded hover:bg-gray-600">
            {Followingid.includes(user.id) ? " following" : " Follow"} 
            </button>
         </div>
        
        </div>
        
      ))}
      
    </div>
  )
}

export default FriendRequest

