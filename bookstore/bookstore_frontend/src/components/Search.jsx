import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Search() {

    const history=useHistory(null)
    const[search,setSearch]=useState("")
    const[responseData,setResponseData]=useState([])
    // const[arr,setArr]=useState([])
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    

    useEffect(() => {
      
        axios.get("http://localhost:8080/api/books")
        .then((response)=>{
            setResponseData(response.data.data)
            console.log(response.data.data)
        })

    }, [isChecked1,isChecked2,isChecked3])
    
    const handleSearch=()=>{
        axios.get(`http://localhost:8080/api/booksBySearch?search=${search}`)
        .then((response)=>{
            setResponseData(response.data.data)
        }

        )
        setSearch("")
    }

    const handleDesc=()=>{
        axios.get("http://localhost:8080/api/sortBooksDesc")
        .then((response)=>{
            setResponseData(response.data.data)
        })
    }

    const handleAsc=()=>{
        axios.get("http://localhost:8080/api/sortBooksAsc")
        .then((response)=>{
            setResponseData(response.data.data)
        })
    }

    const handleCheckboxChange1= (event) => {
        setIsChecked1(event.target.checked);
        console.log(event.target.checked)
      };

      const handleCheckboxChange2= (event) => {
        setIsChecked2(event.target.checked);
      };

      const handleCheckboxChange3= (event) => {
        setIsChecked3(event.target.checked);
        
      };
      

      if(isChecked1){
        axios.post("http://localhost:8080/api/filterByAuthor",[
            "ramu"
        ]).then((response)=>{
                setResponseData(response.data.data)
        })
      } 
       if(isChecked2){
        axios.post("http://localhost:8080/api/filterByAuthor",[
            "balu"
        ]).then((response)=>{
                setResponseData(response.data.data)
        })
      } 
       if(isChecked3){
        axios.post("http://localhost:8080/api/filterByAuthor",[
            "sita"
        ]).then((response)=>{
                setResponseData(response.data.data)
        })
      } 
      
      const handleViewDetails=(id)=>{
        history.push("/details",{bookId:id})
      }
    

  return (
    <div>
        <div className='float-end mx-5 mt-4 '>

            <button className='btn btn-secondary mx-1' onClick={handleAsc}><i className="bi bi-arrow-up"></i></button>
            <button className='btn btn-secondary mx-1' onClick={handleDesc}><i className="bi bi-arrow-down"></i></button>
        <button className='btn btn-info '>Sort by price</button>

        <div className='mt-5'>
            <h4>Filter by Author </h4>
            <Form>
            <Form.Check type="checkbox" label="ramu" onChange={handleCheckboxChange1}/>
            <Form.Check type="checkbox" label="balu" onChange={handleCheckboxChange2}/>
            <Form.Check type="checkbox" label="sita" onChange={handleCheckboxChange3}/>
    </Form>
        </div>
        </div>
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
       <button className='btn btn-info' onClick={()=>handleViewDetails(tempbook.id)}>View Details</button>
      </div>
    </div>
  </div>
</div>
    ))
}



    </div>
  )
}
