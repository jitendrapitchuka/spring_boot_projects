import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Search() {

    const[search,setSearch]=useState("")
    const[responseData,setResponseData]=useState([])

    useEffect(() => {
      
        axios.get("http://localhost:8080/api/books")
        .then((response)=>{
            setResponseData(response.data.data)
            console.log(response.data.data)
        })

    }, [])
    
    const handleSearch=()=>{
        axios.get(`http://localhost:8080/api/booksBySearch?search=${search}`)
        .then((response)=>{
            setResponseData(response.data.data)
        }

        )
        setSearch("")
    }

  return (
    <div>
    <div className='d-flex mt-4 mx-3 mb-5'>
    <input type="text" placeholder='Search By BookName' className='border-rounded form-control w-50'
    value={search} onChange={(event)=>{setSearch(event.target.value)}}/>
    <button className='btn btn-primary' onClick={handleSearch}>Search</button>
    </div>

    {responseData.map((tempbook)=>(
    <div className="card mb-3  mx-4 mt-3" style={{width: "1000px"}} key={tempbook.id}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={tempbook.img} className="img-fluid rounded-start" alt="..."/>
    </div>
    
    <div className="col-md-8">
      <div className="card-body">
        <div className='float-end d-flex gap-5'>
            <h5 className='text-info-emphasis'>{tempbook.book_cost}RS</h5>
      <button className='btn btn-primary'>Add to cart</button>
      </div>
        <h3 className="card-title">{tempbook.book_title}</h3>
        
        <h5>{tempbook.author}</h5>
        <p className="card-text">{tempbook.book_description.slice(0,300)+"......."}</p>
       
      </div>
    </div>
  </div>
</div>
    ))
}


    </div>
  )
}
