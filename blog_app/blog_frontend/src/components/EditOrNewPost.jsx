import axios from 'axios'
import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

export default function EditOrNewPost(props) {

    const[title,setTitle]=useState("")
    const[desc,setDesc]=useState("")
     const location = useLocation();
        const history=useHistory(null)

    async function handleSubmit(event){
        event.preventDefault()
        try{
        await axios.post("http://localhost:8080/api/newpost",
        {
            "post_header":title,
            "description":desc,
            "likes_count":0,
            "emailId":location.state.userEmail,
            "userId":location.state.userId

        }).then((response)=>{
            
            console.log(response.data.data)
            history.push('/welcome',location.state)
            
           
        } )
      
    }
    catch(error){
        console.log( {
            "post_header":title,
            "description":desc,
            "likes_count":0,
            "emailId":location.state.emailId,
            "userId":location.state.userId

        })
    }
     
    setTitle("")
    setDesc("")
    }

  return (
    <div>
<form>
  <div className="form-group">
    <label >Post title</label>
    <input type="text" className="form-control"  placeholder="Enter Your post title"
     value={title} 
     onChange={(event)=>{
         setTitle(event.target.value)}}
    />
   
  </div>
  <div className="form-group">
    <label >Description</label>
    <input type="text" className="form-control"  placeholder="description"
     value={desc} 
     onChange={(event)=>{
         setDesc(event.target.value)}}
    />
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Save</button>
</form>

    </div>
  )
  }
