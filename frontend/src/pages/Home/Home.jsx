import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Authcontrol from '../../controlauth/authcontrol'

const Home = () => {

  const {logout} = Authcontrol()
  return (
    <div className=''>
      <Navbar/>
      <div className="home">
         
        <button className="btn btn-primary">
  DaisyUI Test
</button>
      <div className="chat-bubble">
        
      </div>
      <div className="logoout">
        <button className='border rounded-2xl p-6 bg-green-500 text-white '  onClick={logout}>
          logout
        </button>
      </div>


      </div>
    </div>
  )
}

export default Home
