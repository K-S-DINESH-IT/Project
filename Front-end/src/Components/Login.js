import React, { useState } from 'react'
import './Login.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import axios from 'axios'

const Login = () => {
  const [action, setAction] = useState("Login")
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const[id,setid]=useState(0)
  const handleSignUp = () => {
    setAction("Sign Up")
    axios.post("http://localhost:3001/student",{id:id,name:name,email:email,password:password})
    .then(res=>console.log(res.data))
    setid(prev=>prev+1)
  }

 
  const handleLogin = () => {
    setAction("Login")
    console.log(name, email, password)
  }
  const handleSubmit =(e)=>{
e.preventDefault()

  }
  return (

    <div>
      <form onSubmit={handleSubmit}>
        <div className='cointainer'>
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {action === "Login" ? <div></div> : <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" onChange={(e) => setname(e.target.value)} placeholder="Name" />
            </div>}

            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" onChange={(e) => setemail(e.target.value)} placeholder="Email ID" />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" onChange={(e) => setpassword(e.target.value)} placeholder="Password" />
            </div>
          </div>
          {action === "SignUp" ? <div></div> : <div className="forget-password">Lost Password? <span>Click Here!</span></div>}

          <div className="submit-container">
            <button type='Submit' className={action === "Login" ? "submit gray" : "submit"} onClick={handleSignUp}>Sign Up</button>
            <button type='Submit' className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleLogin}>Login</button>
          </div>
        </div>
      </form>
    </div >

  )
}

export default Login
