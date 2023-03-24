import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Login() {

    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
   
    const history=useHistory(null)

     async function handleLogin(){
       
        try{
        await axios.post("http://localhost:8080/api/login",
        {
            "email":email,
            "password":password
        }).then((response)=>{
            
            console.log(response.data.data)
           
            if(response.status===200){
              history.push("/home")
              localStorage.setItem("token",response.data.data.token)
            }
            
           
            
            
        })
       
        
            setEmail("")
            setPassword("")
    }
    catch(error){
      console.log(error)
    }
  }
  

   
    
 
    return (

<div className='container'>

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

    </div>
   
  )
}
