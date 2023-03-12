import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Comments() {

    const[responseData,setResponseData]=useState([])
    const location = useLocation();
    useEffect(() => {
       
        axios.get(`http://localhost:8080/api/comments?postId=${location.state.postId}`)
        .then((response)=>{
          setResponseData(response.data.data)
          console.log(response.data.data)
  
        
        }
          )
      
      }, [location.state.postId])

  return (
    <div>
        
       <h2 className='text-start mx-5 mt-4'>Comments:</h2>
    <div className='container mx-1'>
        {responseData.length!==0 ? 
        <>
        {responseData.map((tempcomment,index)=>(
    
        <div className="card mt-5" key={tempcomment.id}>
  {/* <div className="card-header">  Featured
  </div> */}
   
  <div className="card-body text-white bg-secondary">
    {/* <h5 className="card-title">Special title treatment</h5> */}

    <p className="card-text text-start">{index+1}){tempcomment.comment}</p>
    
  </div>
</div>
))}
</>
:
<h3 className='text-center mx-5'>No Comments available for this post.</h3>
}
</div>
    </div>
  )
}
