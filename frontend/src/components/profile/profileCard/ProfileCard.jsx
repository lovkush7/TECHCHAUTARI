import React from 'react'
import Authcontrol from '../../../controlauth/authcontrol'

const ProfileCard = () => {
  const {authUser} = Authcontrol()
  return (
   
    <div className=' bg-white rounded-2xl border border-stone-200 shadow overflow-hidden '>
        <div className='h-20 bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff]'/>
            <div className='flex flex-col items-center px-5 pb-6 -mt-11 '>
                <div className='relative'>
                    <div className='w-20 h-20 rounded-full border-4 border-white flex items-center justify-center shadow-lg'>
                        <img src={ "./profile.jpg" || authUser?.profile?.profilepic } alt="Profile" className='w-full h-full object-cover rounded-full'/>    
                         
                    </div>
                    
{console.log("the auth user",authUser)}
                </div>
                <h2 className='font-display text-lg font-extrabold text-stone-900 mt-3'>{authUser?.Fullname}</h2>
               <p className=' text-xs text-stone-400 mt-1 '>Nepal,kathmandu</p>
               <div className=' flex items-center gap-1.5 mt-3'>
                 <span className="text-amber-400 text-sm">★★★★★</span>
                <span className="text-xs text-stone-500">4.9 (138 reviews)</span>

               </div>
            </div>

        
      
    </div>
   
  )
}

export default ProfileCard
