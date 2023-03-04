import React, { useState } from 'react'
import axios from "axios";
// import { Redirect } from 'react-router-dom';
export default function Signup() {

    const[id,setId]=useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    function error_alert(){
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <strong> signed up failed</strong> 
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    }
    function success_alert(){
        <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Successfully signed up</strong> 
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    }
    async function save(event){
        event.preventDefault()
        try{
           const send_data= await axios.post("http://localhost:8080/api/signup",
            {
                "id":id,
                "firstName":firstName,
                "lastName":lastName,
                "email":email,
                "password":password
            }
           )
           console.log(  send_data)
       success_alert()

           setId("")
           setFirstName("")
           setLastName("")
           setEmail("")
           setPassword("")
        }
        catch(error){
            
          error_alert()
            console.log(error)
        }
    }
    

    return (
    <div className='container mt-4'>

        <h1>SignUp</h1>
        
        <form >
  <div className="form-group">
    <label>First Name</label>
    <input type="text" className="form-control"  placeholder="Enter FirstName" 
    value={firstName} 
    onChange={(event)=>{
        setFirstName(event.target.value)
            }}
            />
            
  </div>
  <div className="form-group">
    <label>Last Name</label>
    <input type="text" className="form-control"  placeholder="Enter LastName"
     value={lastName} 
     onChange={(event)=>{
         setLastName(event.target.value)
             }}
    />
  </div>
  <div className="form-group">
    <label>Email</label>
    <input type="email" className="form-control"  placeholder="Enter Email"
     value={email} 
     onChange={(event)=>{
         setEmail(event.target.value)
             }}
    />
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control"  placeholder="Enter Password"
     value={password} 
     onChange={(event)=>{
         setPassword(event.target.value)
             }}
    />
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={save}>SignUp</button>
</form>

    </div>
  )
}
