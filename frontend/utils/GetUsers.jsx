import React, { useEffect } from 'react'
import Usemessages from '../src/controlauth/msgstroe'
import Authcontrol from '../src/controlauth/authcontrol'
import FriendRequest from '../src/components/FriendRequest/FriendRequest'

const GetUsers = () => {
     const {  Users, getusers, setselectedUsers} = Usemessages()
      const {authUser} = Authcontrol()

      useEffect(()=>{
        getusers()
      },[getusers])

  return (
    <div>
      {Users.data?.filter((u)=>u.id !== authUser?.id)
      .map((user)=>(
        <FriendRequest key={user.id} user={user} />
      ))}
    </div>
  )
}

export default GetUsers
