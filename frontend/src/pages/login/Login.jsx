import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Login.css";
import Useauthstore from '../../authstore/authstore';


const Login = () => {
    const [text , settext] = useState({
        email: "",
        password: "",
    });

    const [error, seterror]=useState("")
    const [submiting, setsubmiting] = useState(false);

    const {login} = Useauthstore()

    const handlesubmit =async(e)=>{
      e.preventDefault();
      seterror("")
      try{
        await login?.(text);

      }catch(err){
        console.log("the error is"+err)
        seterror("cannot login the pages",err)
      }

    }
    const handlechange =(e)=>{
        console.log(e.target.value);
        settext({...text,[e.target.name]:e.target.value})


    }
  return (
    <div className='container'>
        <form className='form' action="" onSubmit={handlesubmit}>
            <div className="header-part">
              <img style={{width:"6rem", height:"6rem"}} src="./Teech.png" alt="" />
              <h2>WELCOME BACK</h2>
              <p>Login to access your account  </p>  
            </div>
            {error && <p className='error' style={{color:"red"}}>{error}</p>}

          
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
            <button className='btn' type='submit'>login</button>
          <center>  <p className='bottom-type' style={{}}>Don't have an account? <Link to="/signup">signup</Link></p></center>

        </form>
      
    </div>
  )
}

export default Login;
