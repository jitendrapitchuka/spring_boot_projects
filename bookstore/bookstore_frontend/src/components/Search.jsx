import axios from 'axios'
import React, { useEffect, useState } from 'react';

import { Form } from 'react-bootstrap';

import { useHistory,useLocation } from 'react-router-dom';
import SpinnerLoading from './SpinnerLoading';

export default function Search(props) {

    const history=useHistory(null)
    const[search,setSearch]=useState("")
    const[responseData,setResponseData]=useState([])
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    

    const { searching } = useLocation();
    
      let id
    
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const [addedToCart, setAddedToCart] = useState(storedCartItems.length ? storedCartItems : Array(responseData.length).fill(false));
    const redirect = new URLSearchParams(searching).get('redirect');
    let filteredData

   

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(addedToCart));
      }, [addedToCart]);

      

    useEffect(() => {

            axios.get("http://localhost:8080/api/books")
            .then((response)=>{
                setResponseData(response.data.data)
                console.log(response.data.data)
                setIsLoading(false)
            })


    }, [])
    
    if(isLoading){
        return (
            <SpinnerLoading/>
        )
    }

    const handleSearch=()=>{
        axios.get(`http://localhost:8080/api/booksBySearch?search=${search}`)
        .then((response)=>{
            setResponseData(response.data.data)
            console.log(response.data.data)
            
        }

        )
        setSearch("")
    }

    const handleDesc=()=>{
        const sortedProducts = [...responseData].sort((a, b) => {
            return b.book_cost - a.book_cost;
           })
           setResponseData(sortedProducts)
    }

    const handleAsc=()=>{

        const sortedProducts = [...responseData].sort((a, b) => {
             return a.book_cost - b.book_cost;
            })
            setResponseData(sortedProducts)
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
      

    filteredData = responseData.filter((item) => {
        if (isChecked1 && isChecked2 && isChecked3) {
          return item.author==='ramu' || item.author==='balu' || item.author==='sita'
        }
        else if(isChecked1 && isChecked2){
            return item.author==='ramu' ||  item.author==='balu'}
        else if(isChecked2 && isChecked3)
            return item.author==='sita' ||  item.author==='balu'
        else if(isChecked1 && isChecked3)
            return item.author==='ramu' ||  item.author==='sita' 
        else if (isChecked1) {
          return item.author==='ramu' 
        } else if (isChecked2) {
          return item.author==='balu'
        }
        else if(isChecked3)
          return item.author==='sita'
         
        else{
            filteredData=responseData
        return  true
        
        }
      });
      
      const handleViewDetails=(id,index)=>{
        let status=addedToCart[index]
        history.push({pathname:  "/details/",state:{bookId:id,addedToCartStatus:status,index:index}})
        console.log(status)
        console.log(addedToCart)
      }
    
      const handleRedirectToLogin=()=>{
        history.push(`/login?redirect=${encodeURIComponent(window.location.pathname)}`);

    }

    const addToCart=async(index,bookid,cost)=>{
        if(bookid!=null){
        await axios.post("http://localhost:8080/api/checkout",{
          id:id,
          email:props.email,
          bookCost:cost,
          bookId:bookid
    
        }).then((response)=>{
          console.log(response.data.data)
          if(response.status===200){
           
           const updatedAddedToCart=[...addedToCart]
           updatedAddedToCart[index]=true
           setAddedToCart(updatedAddedToCart)
           props.setCount(props.count+1)
    
          }
        })
      
        console.log({id:id,
          email:props.email,
          bookCost:cost,
          bookId:bookid})
        }
      }

      const removeFromcart=async(index,bookid)=>{
        try{
       await axios.delete("http://localhost:8080/api/deleteFromCart",{data:{
          bookId:bookid,
          email:props.email
        }}).then((response)=>{
          console.log(response.data.data)
         
          const updatedAddedToCart=[...addedToCart]
          updatedAddedToCart[index]=false
          setAddedToCart(updatedAddedToCart)
          if(props.count>0)
          props.setCount(props.count-1)
    
        })
       
        }
        catch(error){
            console.log(error)
          
              }
          
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

    {filteredData.map((tempbook,index)=>(
    <div className="card mb-3  mx-4 mt-3" style={{width: "1000px"}} key={tempbook.id}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={tempbook.image}
            className="img-fluid rounded-start" alt="..."/>
    </div>
    
    <div className="col-md-8">
      <div className="card-body">
        <div className='float-end d-flex gap-5'>
            <h5 className='text-info-emphasis'>{tempbook.book_cost}RS</h5>
            {
                !addedToCart[index]?
            <div>
                
            {
                props.authStatus?
      <button className='btn btn-primary' onClick={()=>
        {
        if(redirect)
        history.push(redirect)
        
        addToCart(index,tempbook.id,tempbook.book_cost)
        
        }
        
        }>Add to cart</button>
      :
      <button className='btn btn-primary' onClick={handleRedirectToLogin}>Add to cart ? Login</button>
            }
            </div>
            :
            <button className='btn btn-danger' onClick={()=>removeFromcart(index,tempbook.id)}>Remove</button>


}
      </div>
        <h3 className="card-title">{tempbook.book_title}</h3>
        
        <h5>{tempbook.author}</h5>
        <p className="card-text">{tempbook.book_description.slice(0,300)+"......."}</p>
       <button className='btn btn-info' onClick={()=>handleViewDetails(tempbook.id,index)}>View Details</button>
      </div>
    </div>
  </div>
</div>
    ))
}



    </div>
  )
}
