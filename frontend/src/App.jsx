import React, { useEffect } from 'react'
import { Links, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
// import Useauthstore from './authstore/authstore'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Chat from './pages/chat/chat'
import Network from './pages/Network/Network'
import Jobs from './pages/Jobs/Jobs'
import Notification from './pages/Notification/Notification'
// import Usemessages from './authstore/messagesstore'
import Authcontrol from './controlauth/authcontrol'
import Usemessages from './controlauth/msgstroe'
// import Chat from './components/chatbox/Chat'


const App = () => {
    // const {authstore,chec,ischeckingauth,checkroute} = Useauthstore();
    const {getusers,Users} = Usemessages();
    const {check,authUser,ischeckingauth} = Authcontrol();
    const {getmessages,messages} = Usemessages()

    // useEffect(()=>{
    //   checkroute();
    //     check();
    //     getusers();
    // },[check,getusers,checkroute])

    useEffect(()=>{
      check();
      getusers();
      getmessages()
    },[check,getusers])
    console.log("the messages are ",messages);
     console.log(ischeckingauth);
     console.log( "the users are",Users);
      console.log( "the users ara",Users.data)

    console.log("the user is ",authUser);

    if(ischeckingauth ){
        return <div>loading...</div>
    }
   


  return (
    <div>
       

        <Routes>
            <Route path='/' element={ authUser ? <Home />  : <Navigate to={'/login'} />} />
            <Route path='/login' element={ !authUser ? <Login /> : <Navigate to={"/"} /> } />
            <Route path='/signup' element={!authUser ? <Signup /> : <Navigate to={"/"}/>} />
            <Route path='/chat' element={<Chat/>}/>
            <Route path='/network' element={<Network/>}/>
            <Route path='/jobs' element={<Jobs/>}/>
            <Route path='/notification' element={<Notification/>}/>
          
        </Routes>
      
    </div>
  )
}

export default App
