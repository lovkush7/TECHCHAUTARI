import React, { useState } from 'react'
import "./Navbar.css"
import { HiHome } from "react-icons/hi";
import { IoPeopleSharp } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { BsChatRightDots } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  // const [menu , setmenu] = useState("Home");
  const navigate = useNavigate();

  const location = useLocation();
  const menu = location.pathname;
  return (
    <div className='navbar'>
      <img style={{width:"4rem", height:"4rem"}} src="./Teech.png" alt="png" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>{
          navigate("/");
        }}
         className={menu === "/"? "active":""}
        style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:'center',gap:"4px"}}>
            <HiHome style={{fontSize:'1.5rem',}}/>
            Home
        </li>
        <li 
        className={menu === "/network" ? "active": ""}
        onClick={()=>{ navigate("/network")}}
        style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:'center',gap:"4px"}}>
            <IoPeopleSharp style={{fontSize:'1.5rem'}} />
            Network 
        </li>
        <li onClick={()=>navigate("/jobs")}
         className={menu === "/jobs"? "active": ""}
        style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:'center',gap:"4px"}}>
            <BsPersonWorkspace  style={{fontSize:'1.5rem'}}  />
            Jobs
        </li>
        <li onClick={()=>{  
         navigate("/chat")}}
         className={menu === "/chat"?"active": ""}
        style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:'center',gap:"4px"}}>
            <BsChatRightDots style={{fontSize:'1.5rem'}}  />
            Messenger
        </li>
        <li  onClick={()=>navigate("/notification")}
        className={menu === "/notification"?"active":""}
         style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:'center',gap:"4px"}}>
            <IoNotificationsOutline   style={{fontSize:'1.5rem'}} />
          notifications
        </li>
      </ul>
      <div style={{display:"flex",justifyContent:'center',alignItems:"center",minWidth:'9rem'}} className="navbar-right">
        <input   type="search"  placeholder=' Search here ......' />
      </div>
    </div>
  )
}

export default Navbar
