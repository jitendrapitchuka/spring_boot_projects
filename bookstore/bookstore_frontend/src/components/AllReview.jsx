import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function AllReview() {

    const location = useLocation();
    const [responseData,setResponseData]=useState([])

    useEffect(() => {
      axios.get(`http://localhost:8080/api/reviewById?bookId=${location.state.bookId}`)
      .then((response)=>{
        setResponseData(response.data.data)

      })
      console.log(location.state.bookId)
      
    }, [location.state.bookId])
    

  return (
    <div className='container mt-4'>
        <h2 className='mt-3 mb-5'>Reviews:</h2>
{responseData.map((tempReview)=>(
       <div class="card" key={tempReview.id}>
       <div class="card-body">
         <p class="card-text"><strong>{tempReview.reviewDescription}</strong></p>
       </div>
     </div>
))
}
    </div>
  )
}
