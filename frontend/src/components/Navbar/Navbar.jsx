import React from 'react'
import "./Navbar.css"
import { HiHome } from "react-icons/hi";
import { IoPeopleSharp } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { BsChatRightDots } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='navbar'>
      <img style={{width:"4rem", height:"4rem"}} src="./Teech.png" alt="png" className="logo" />
      <ul className="navbar-menu">
        <li style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:'center',gap:"4px"}}>
            <HiHome style={{fontSize:'1.5rem',}}/>
            Home
        </li>
        <li style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:'center',gap:"4px"}}>
            <IoPeopleSharp style={{fontSize:'1.5rem'}} />
            Network 
        </li>
        <li  style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:'center',gap:"4px"}}>
            <BsPersonWorkspace  style={{fontSize:'1.5rem'}}  />
            Jobs
        </li>
        <li  style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:'center',gap:"4px"}}>
            <BsChatRightDots style={{fontSize:'1.5rem'}}  />
            Messenger
        </li>
        <li  style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:'center',gap:"4px"}}>
            <IoNotificationsOutline   style={{fontSize:'1.5rem'}} />
          notifications
        </li>
      </ul>
      <div className="navbar-right">
        <input style={{}} type="search"  placeholder=' Search here ......' />
      </div>
    </div>
  )
}

export default Navbar
