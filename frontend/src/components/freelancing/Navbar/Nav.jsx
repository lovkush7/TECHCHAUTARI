import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// import "./Nav.css"

const Nav = () => {
     const navigate = useNavigate();
    const location = useLocation();
    const menu = location.pathname;
  return (
    <div className='flex  px-4 py-2 gap-4 justify-start flex-col'>
        <h1 className='py-2 px-2 flex font-bold text-2xl'>JOBS YOU MIGHT LIKE</h1>
       <ul style={{color:"#49557e"}} className='nav-menu flex  gap-4 cursor-pointer'>
        <li className={menu === "/mostrecent"? " pb-1 border-b-2 border-black text-black transition" : ""} 
        onClick={()=>{navigate("/mostrecent")}}
        >
           Best matches
            </li>
        <li className={menu === "/BestMatches"? " pb-1 border-b-2 border-black text-black transition" : ""}
        onClick={()=>navigate("/BestMatches")} >
            Most Recent
            </li>
        <li className={menu === "/savedjobs" ? "pb-1 border-b-2 border-black text-black transition" : ""  } 
        onClick={()=>navigate("/savedjobs")}>
            Savd
             </li>
       </ul>
    </div>
  )
}

export default Nav

