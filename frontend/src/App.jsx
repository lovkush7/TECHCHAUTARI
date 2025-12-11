import React, { useEffect } from 'react'
import { Links, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Useauthstore from './authstore/authstore'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Chat from './pages/chat/chat'
import Network from './pages/Network/Network'
import Jobs from './pages/Jobs/Jobs'
import Notification from './pages/Notification/Notification'
// import Chat from './components/chatbox/Chat'


const App = () => {
    const {authstore,check,ischeckingauth} = Useauthstore();

    useEffect(()=>{
        check();
    },[check])
     console.log(ischeckingauth);

    console.log("the user is ",authstore);

    if(ischeckingauth ){
        return <div>loading...</div>
    }
   


  return (
    <div>
       

        <Routes>
            <Route path='/' element={ authstore ? <Home />  : <Navigate to={'/login'} />} />
            <Route path='/login' element={ !authstore ? <Login /> : <Navigate to={"/"} /> } />
            <Route path='/signup' element={!authstore ? <Signup /> : <Navigate to={"/"}/>} />
            <Route path='/chat' element={<Chat/>}/>
            <Route path='/network' element={<Network/>}/>
            <Route path='/jobs' element={<Jobs/>}/>
            <Route path='/notification' element={<Notification/>}/>
          
        </Routes>
      
    </div>
  )
}

export default App
