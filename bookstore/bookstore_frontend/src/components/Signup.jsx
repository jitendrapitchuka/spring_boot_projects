import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {

    let id;
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [displaySuceess, setDisplaySucess] = useState(false);

    const handleSignup=async()=>{
      
        try{
        await axios.post("http://localhost:8080/api/signup",
        {
            "id":id,
            "username":username,
            "password":password,
            "email":email
        })
        
           setUsername("")
           setEmail("")
           setPassword("")
        setDisplaySucess(true)
       
    }
    catch(error){
        console.log(error)
        
    }
        
        
    }
    

  return (
    <div className='container'>
       {
    displaySuceess &&

<div className="alert alert-success alert-dismissible mt-2" role="alert">
  Signed Up Successfully . Now try Login using below button.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

  }
    <h2 className='mt-3'>SignUp</h2>
    <div className="mt-5">
<label className="form-label">Email</label>
<input type="email" className="form-control"placeholder="Enter email" 
value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
</div>
<div className="mt-2">
<label className="form-label">Username</label>
<input type="text" className="form-control"placeholder="Enter Username" 
value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
</div>
<div className="mt-2 my-4">
<label className="form-label">Password</label>
<input type="password" className="form-control" placeholder="Enter password"
value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
</div>


<button className='btn btn-primary'  onClick={handleSignup}>Submit</button>

<div className='d-flex justify-content-center align-items-center mt-3'>
  <Link type='button' to='/login' className='btn btn-success'>Login</Link>
  
    </div>

</div>
  )
}
