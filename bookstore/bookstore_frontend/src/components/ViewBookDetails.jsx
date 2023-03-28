import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation,Link } from 'react-router-dom';
import SpinnerLoading from './SpinnerLoading';
export default function ViewBookDetails(props) {

    const location = useLocation();
    const [responseData,setResponseData]=useState([])
    const [reviewDescri,setReviewDescri]=useState("")
    const history=useHistory(null)
    const [isLoading, setIsLoading] = useState(true);
      

    let id


    useEffect(() => {
      
        axios.get(`http://localhost:8080/api/bookById?bookId=${location.state.bookId}`)
        .then((response)=>{
            setResponseData(response.data.data)
            setIsLoading(false)
        })
    
      
    }, [location.state.bookId])
    
    const handleReview=(Bookid)=>{
        axios.post("http://localhost:8080/api/review",{
            "id":id,
            "email":"sai@email.com",
            "bookId":Bookid,
            "reviewDescription":reviewDescri
        })
    }

    if(isLoading){
        return (
            <SpinnerLoading/>
        )
    }

    const handleAllReview=()=>{
        history.push("/allReviews",{bookId:responseData.id})
        console.log(responseData.id)
    }

   
   

  return (
    <div className="container">
    <div className="row mt-5">
      <div className="col-md-4 d-flex align-items-center">
        <img src={responseData.image} style={{width:"250px", height:"300px"}} alt="..." />
      </div>
      <div className="col-md-7 d-flex align-items-center">
        <div className="card">
          <div className="card-body">
            
        <div className='float-end d-flex gap-5'>
           
            <h5 className='text-info-emphasis'>{responseData.book_cost}Rs</h5>
            {
            !location.state.addedToCartStatus?
            <div>
            {
             props.authStatus?   
            <button className='btn btn-success' >
                Add to cart</button>
            :
            <Link className='btn btn-success' to="/login">Add to cart ? Login</Link>
            }
            </div>
            :
            <button className='btn btn-danger' >
                Remove</button>
        }
            </div>

        <h3 className="card-title">{responseData.book_title}</h3>
        <h5>{responseData.author}</h5>
        <p className="card-text">{responseData.book_description}</p>
        {
            responseData.instock?
        <span className='badge text-bg-success p-2 '>Instock</span>
        :
        <h6 className='badge text-bg-danger p-2'>out of stock</h6>
        }
        <hr/>
        <div className='d-flex justify-content-center align-items-center'>
        <h6><b>Published by :</b> Jitendra publications private Ltd.</h6>
        </div>
        <hr/>
        <div className='d-flex flex-column justify-content-center align-items-center'>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Post A Review
        </button>
        <p className="text-center mt-2">Post a review If you know about this book.</p>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Post Your Review</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <textarea className="form-control" value={reviewDescri} onChange={(event)=>{setReviewDescri(event.target.value)}}/>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" 
                onClick={()=>handleReview(responseData.id)}>Save changes</button>
            </div>
            </div>
        </div>
        </div>



        </div>
        </div>
      </div>
    </div>

    <button className='btn btn-primary' onClick={handleAllReview}>See all Reviews</button>

  </div>
  
  )
}
