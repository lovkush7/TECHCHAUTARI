import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { SocialMediaApp } from './postt'
import ProfileCard from '../../components/profile/profileCard/ProfileCard'
import Skills from '../../components/profile/skills/Skills'
import Avaibility from '../../components/Post/avaibility/Avaibility'
import Tabbar from '../../components/tabBar/Tabbar'
import Authcontrol from '../../controlauth/authcontrol'

const Notification = () => {
    const {logout} = Authcontrol()
    console.log()
  return (
    <div>
        <Navbar/>
        <div className="min-h-screen bg-stone-100 font-sans">
  <div className='w-full px-4 py-10 grid grid-cols-1 gap-8'>
    
    <aside className='w-full'>
      <ProfileCard/>
    </aside>

    <main className='bg-white p-5 rounded-xl shadow'>
      <Skills/>
      <br />
      <Avaibility/>
    </main>
      <br />
      <main className='bg-white p-5 rounded-xl shadow'>
         <Tabbar/>
      </main>

        
      


  </div>
</div>
    </div>
  )
}

export default Notification
