import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';


export default function PostByEmail(props) {

    const[reponseData,setResponseData]=useState([])
    const location = useLocation();
    
    // const[emailId,setEmailId]=useState("")
    useEffect( () => {
        const getpostById=async()=>{
     await axios.get(`http://localhost:8080/api/postsByUserId?userId=${location.state.userId}`,
     {headers:{"authorization":location.state.accessToken}})
      .then((response)=>
      setResponseData(response.data.data)
      
)}
getpostById()
// eslint-disable-next-line
}, [location.state.userId])


  function handleDelete(id){
    try{
  axios.delete(`http://localhost:8080/api/delete?postId=${id}`).then((response)=>{console.log(response.data.data)})}

 catch(error){
    console.log(error)

}
}

  return (
    <div>
      <h2>User profile</h2>
    <div className="card w-75 mt-2 " >
    
        {reponseData.map((temppost)=>(
            
            <div key={temppost.id}  >
                <div className="card-headercard text-white bg-secondary mb-2">{temppost.post_header}</div>
                <div className="card-body text-white bg-secondary mb-5">
                  <h5 className="card-title" >title</h5>
                  <p className="card-text" >{temppost.description}</p>
                  <button className='btn btn-danger' onClick={()=>handleDelete(temppost.id)}>Delete</button>
                </div>
                
                </div>
          
               ))
               
               }

</div>

</div>
  )
}
