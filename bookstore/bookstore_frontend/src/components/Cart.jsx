import axios from 'axios'
import React, { useEffect,useState } from 'react'

export default function Cart(props) {

    const[responseData,setResponseData]=useState([])

    useEffect(() => {
      
        axios.get(`http://localhost:8080/api/getByemail?email=${props.email}`)
        .then((response)=>{
            console.log(response.data.data)
            setResponseData(response.data.data)
        })

    }, [props.email])
    

  return (
    <div>
        {responseData.map((tempbook,index)=>(
        <div className="card mt-1 mx-3" key={index}>
  <div className="card-body">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={tempbook.image}
            className="img-fluid rounded-start" alt="..." style={{width:"200px",height:"150px"}}/>
    </div>
    <div className='col-md-6'>
    <h5 className="card-title">{tempbook.book_title}</h5>
    </div>
    </div>
  </div>
</div>
))}
<div className='d-flex justify-content-center align-items-center  mt-2 mb-5'>
<button className='btn btn-warning'>Proceed to buy</button>
    </div></div>
  )
}
