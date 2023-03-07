import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Link, useHistory, useLocation } from 'react-router-dom';

import Posts from './Posts';


export default function Welcome(props) {

    const location = useLocation();
    const history=useHistory(null)
    // const[reponseData,setResponseData]=useState([])
    const [auth,setAuth]=useState(false)
  const [change,SetChange]=useState(false)
    useEffect(() => {
        
        
         axios.get("http://localhost:8080/api/posts").then((response)=>{
          // setResponseData(response.data.data)
      SetChange(true)
    }
     )
       const token=localStorage.getItem("token")
       if(token){
         setAuth(true)
       }
       
        
     }, [change]);

     function handleClick() {
        history.push("/newpost",location.state);
      }

      function handleProfile() {
        history.push("/profile",location.state);
      }

  return (
    <div>
        
      {
        auth?
        <>
         <h2>Welcome</h2> 
         <button className="btn btn-primary" onClick={handleProfile}>Profile</button><br/><br/>
         <button  className='btn btn-primary' onClick={handleClick}>New Post</button>
        <Posts />
       {/* <h2>Welcome {location.state.firstName}</h2> 
      
       <button  className='btn btn-primary' onClick={handleClick}>New Post</button>
      
       <PostByEmail firstName={location.state.firstName} lastName={location.state.lastName} emailId={location.state.userEmail}
      userId={location.state.userId} token={location.state.accessToken}/>*/}
       </> 
       :
       <>
<div className='container mt-5'>
       <img src={require("../Images/access-denied.jpg")} alt="access-denied"/>
      <h4 className='mt-4'>Go to signup </h4> 
       <Link className="btn btn-primary" to="/signup">SignUp</Link>
      
      <h4>Go go login</h4>
        <Link className="btn btn-primary" to="/login">Login</Link>

       </div>
       </>
      }
   </div>
  )
}
