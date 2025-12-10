import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Signup.css";
import Useauthstore from '../../authstore/authstore';


const Signup = () => {
    const [text , settext] = useState({
        Fullname: "",
        email: "",
        password: "",
    });

    const [error, seterror]=useState("")
    const [submiting, setsubmiting] = useState(false);

    const {signup} = Useauthstore();

    const handlesubmit = async(e)=>{
      e.preventDefault();
      seterror("");
      try{
        await signup?.(text);

      }catch(err){
        console.log(err);
        seterror("cannot signup the page",err)
      }
      

    }
    const handlechange =(e)=>{
        console.log(e.target.value);
        settext({...text,[e.target.name]:e.target.value})


    }
  return (
    <div className='container'>
        <form className='form' onSubmit={handlesubmit} action="">
            <div className="header-part">
              <img style={{width:"6rem", height:"6rem"}} src="./Teech.png" alt="" />
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
                <label htmlFor="">Email</label>
                <input
                 type="email"
                 name='email'
                 value={text.email}
                 onChange={handlechange}
                 placeholder='Enter the email'
                 required
                 />
            </div>

      <div className="input-field">
                <label htmlFor="">Password</label>
                <input
                 type="password"
                 name='password'
                 value={text.password}
                 onChange={handlechange}
                 placeholder='Enter the password'
                 required
                 />
            </div>
            <button className='btn'>sign up</button>
          <center>  <p className='bottom-type' style={{}}>Already have an account? <Link to="/login">login</Link></p></center>

        </form>
      
    </div>
  )
}

export default Signup
