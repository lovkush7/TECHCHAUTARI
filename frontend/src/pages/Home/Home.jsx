import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Authcontrol from '../../controlauth/authcontrol'
import Post from '../../components/Post/Post'

const Home = () => {

  const {logout} = Authcontrol()
  return (
    <div className=''>
      <Navbar/>
     <Post/>
      
   
      <div className="logoout">
        <button className='border rounded-2xl p-6 bg-green-500 text-white '  onClick={logout}>
          logout
        </button>
      </div>


      </div>
    
  )
}

export default Home
