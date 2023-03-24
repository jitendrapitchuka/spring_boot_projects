import axios from 'axios'
import React, { useState } from 'react'

export default function Signup() {

    let id;
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // function success_alert(){
    //     return (
    //         <div className="alert alert-success alert-dismissible fade show" role="alert">
    //         <strong>Successfully signed up</strong> 
    //         <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    //           <span aria-hidden="true">&times;</span>
    //         </button>
    //       </div>
    //       )
    // }

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

       
    }
    catch(error){
        console.log(error)
        
    }
        
        
    }
    

  return (
    <div className='container'>
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

</div>
  )
}
