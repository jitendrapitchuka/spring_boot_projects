import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'

export default function Login(props) {

    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [displayWarning, setDisplayWarning] = useState(false);
    const location = useLocation();
    const history=useHistory(null)
    const redirect = new URLSearchParams(location.search).get('redirect');


     async function handleLogin(){   
        try{
        await axios.post("http://localhost:8080/api/login",
        {
            "email":email,
            "password":password
        }).then((response)=>{
            
            console.log(response.data.data)
            
            if(response.status===200){
              if (redirect) {
                history.push(redirect);
              } else {
                history.push('/home');
              }
              localStorage.setItem("token",response.data.data.token)
              props.handleLoginAuthStatus()
              setDisplayWarning(false)
              props.setEmail(email)
            }
  
        })
            setEmail("")
            setPassword("")
    }
    catch(error){
      console.log(error)
     
      setDisplayWarning(true)
    }
  }
  

   
    
 
    return (

<div className='container'>
  {
    displayWarning &&

<div className="alert alert-warning alert-dismissible mt-2" role="alert">
  Something went wrong with Email or Password
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

  }

        <h2 className='mt-3'>Login</h2>
        <div className="mt-5">
  <label className="form-label">Email</label>
  <input type="email" className="form-control"placeholder="Enter email"
  value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
</div>
<div className="mt-2 my-4">
  <label className="form-label">Password</label>
  <input type="password" className="form-control" placeholder="Enter password"
  value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
</div>

<button className='btn btn-primary' onClick={handleLogin}>Submit</button>

<div className='d-flex justify-content-center align-items-center mt-3'>
<div className='d-flex flex-column align-items-center'>
  <Link type='button' to='/signup' className='btn btn-success'>Signup</Link>
  <b><p className='mt-2'>Don't have an account ? Create one.</p></b>
  </div>
    </div>
    </div>
   
  )
}
