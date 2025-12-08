import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Useauthstore from './authstore/authstore'

const App = () => {
    const {authstore,check,ischeckingauth} = Useauthstore();

    useEffect(()=>{
        check();
    },[check])

    console.log("the error is "+authstore);

    if(ischeckingauth && !authstore){
        return <div>loading...</div>
    }


  return (
    <div>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
      
    </div>
  )
}

export default App
