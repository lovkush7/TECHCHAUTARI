import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Signup.css";


const Signup = () => {
    const [text , settext] = useState({
        Fullname: "",
        Email: "",
        Password: "",
    });

    const [error, seterror]=useState("")
    const [submiting, setsubmiting] = useState(false);

    const handlesubmit =()=>{

    }
    const handlechange =(e)=>{
        console.log(e.target.value);
        settext({...text,[e.target.name]:e.target.value})


    }
  return (
    <div className='container'>
        <form className='form' action="">
            <div className="header-part">
              <img style={{width:"6rem", height:"6rem"}} src="./tech.png" alt="" />
              <h2>CREATE ACCOUNT</h2>
              <p>Get Started with account </p>  
            </div>
            {error && <p className='error' style={{color:"red"}}>{error}</p>}

            <div className="input-field">
                <label htmlFor="">Fulllname</label>
                <input
                 type="text"
                 name='Fullname'
                 value={text.Fullname}
                 onChange={handlechange}
                 placeholder='Enter the fullname'
                 required
                 />
            </div>
              <div className="input-field">
                <label htmlFor="">email</label>
                <input
                 type="email"
                 name='Email'
                 value={text.Email}
                 onChange={handlechange}
                 placeholder='Enter the email'
                 required
                 />
            </div>

      <div className="input-field">
                <label htmlFor="">Password</label>
                <input
                 type="password"
                 name='Password'
                 value={text.Password}
                 onChange={handlechange}
                 placeholder='Enter the password'
                 required
                 />
            </div>
            <button className='btn'>sign up</button>
            <p>Already have an account? <Link to="/login">login</Link></p>

        </form>
      
    </div>
  )
}

export default Signup
