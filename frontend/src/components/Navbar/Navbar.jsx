import React, { useState } from 'react'
import "./Navbar.css"
import { HiHome } from "react-icons/hi";
import { IoPeopleSharp } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { BsChatRightDots } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menu , setmenu] = useState("Home");
  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <img style={{width:"4rem", height:"4rem"}} src="./Teech.png" alt="png" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>{
          setmenu("Home");
          // <Link to={"/chat"} />
          navigate("/")
          
        
        }}
         className={menu === "Home"? "active":""}
        style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:'center',gap:"4px"}}>
            <HiHome style={{fontSize:'1.5rem',}}/>
            Home
        </li>
        <li onClick={()=>{setmenu("Network");    navigate("/")}}
        className={menu === "Network" ? "active": ""}
        style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:'center',gap:"4px"}}>
            <IoPeopleSharp style={{fontSize:'1.5rem'}} />
            Network 
        </li>
        <li onClick={()=>setmenu("Jobs")}
         className={menu === "Jobs"? "active": ""}
        style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:'center',gap:"4px"}}>
            <BsPersonWorkspace  style={{fontSize:'1.5rem'}}  />
            Jobs
        </li>
        <li onClick={()=>{setmenu("Messenger");   
         navigate("/chat")}}
         className={menu === "Messenger"?"active": ""}
        style={{display:"flex",flexDirection:"column",justifyContent:"center", alignItems:'center',gap:"4px"}}>
            <BsChatRightDots style={{fontSize:'1.5rem'}}  />
            Messenger
        </li>
        <li  onClick={()=>setmenu("notifications")}
        className={menu === "notifications"?"active":""}
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
