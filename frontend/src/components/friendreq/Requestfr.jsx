import React, { useEffect } from 'react'
import RequestStore from '../../controlauth/RequestStore'

const Requestfr = () => {

  const {PendingRequests,getRequests,acceptreq,rejectreq} = RequestStore()

  useEffect(()=>{
    getRequests()
  },[getRequests])
  console.log("pending",PendingRequests)
  
  return (
    <div className='w-full'>
      <div className="friendrequest">
        FriendRequest 
        <hr style={{color:"#cccc"}}/>
        <br />
        <div>
        {PendingRequests?.map((user)=>(
          <div key={user.id} className="friendreq-card flex justify-between mt-3 m-1 " >
            <div className="friendreq-info flex items-center gap-4">
              <div className="pp">
                <img className='w-12 h-12' src={user.profilePic || "./profile.jpg"} alt="Profile Picture" />
              </div>
              <div className="info">
                <h3>{user.sender.Fullname}</h3>
              </div>
            
              </div>
                <div className="ac-rj-btn flex gap-x-9">
                <button className='bg-black text-white px-4 py-0.5 rounded-md'
                onClick={()=>acceptreq(user.id) } >Accept</button>
                <button onClick={()=>rejectreq(user.id)} className='bg-black text-white px-4 py-0.5 rounded-md'>Reject</button>
              </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Requestfr

