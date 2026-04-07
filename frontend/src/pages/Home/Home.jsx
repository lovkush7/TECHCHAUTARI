import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Authcontrol from '../../controlauth/authcontrol'
import Post from '../../components/Post/Post'
import { LogOut } from 'lucide-react'

const Home = () => {

  const {logout} = Authcontrol()
  return (
    <div className=''>
      <Navbar/>
     <Post/>
      
   
      <div className="logoout flex justify-end mr-5 mt-5 ">
        <button className='   border rounded-2xl px-2 py-2 bg-black text-white '  onClick={logout}>
          <LogOut size={24} />
        </button>
      </div>


      </div>
    
  )
}

export default Home
