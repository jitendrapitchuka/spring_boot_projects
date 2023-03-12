import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function Login(props) {

    const [email, setEmail] = useState("")
    const [password,setPassword] =useState("")
    
    const history=useHistory(null)
   
    async function handleSubmit(event){
        event.preventDefault()
        try{
        await axios.post("http://localhost:8080/api/login",
        {
            "email":email,
            "password":password

        }).then((response)=>{
            
            console.log(response.data.data)
           
            history.push('/welcome',response.data.data )
            localStorage.setItem('token', response.data.data.accessToken)
            localStorage.setItem('userr',response.data.data.userId)
           
        } )
      
    }
    catch(error){
        console.log(error)
    }
     
    setEmail("")
    setPassword("")
    }




  return (


    <div>
        <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label >Email address:</label>
    <input type="email" className="form-control" placeholder="Enter email" id="email"
    value={email} 
    onChange={(event)=>{
        setEmail(event.target.value)
            }}
    />
  </div>
  <div className="form-group">
    <label>Password:</label>
    <input type="password" className="form-control" placeholder="Enter password" id="pwd"
    value={password} 
    onChange={(event)=>{
        setPassword(event.target.value)
            }}
    />
  </div>
  
  <button type="submit" className="btn btn-primary"  >Submit</button>
</form>



    </div>
  )
}
