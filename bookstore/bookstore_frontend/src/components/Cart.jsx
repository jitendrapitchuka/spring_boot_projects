// import axios from 'axios'
// import React, { useEffect,useState } from 'react'

// export default function Cart(props) {

//     const[responseData,setResponseData]=useState([])

//     useEffect(() => {
      
//         axios.get(`http://localhost:8080/api/getByemail?email=${props.email}`)
//         .then((response)=>{
//             console.log(response.data.data)
//             setResponseData(response.data.data)
//         })

//     }, [])
    

//   return (
//     <div>
//          {responseData.map((tempbook,index)=>(
//     <div className="card mb-3  mx-4 mt-3" style={{width: "1000px"}} key={tempbook.id}>
//   <div className="row g-0">
//     <div className="col-md-4">
//       <img src={tempbook.image}
//             className="img-fluid rounded-start" alt="..."/>
//     </div>
    
//     <div className="col-md-8">
//       <div className="card-body">
//         <div className='float-end d-flex gap-5'>
//             <h5 className='text-info-emphasis'>{tempbook.book_cost}RS</h5>
//             {
//                 !addedToCart[index]?
//             <div>
                
//             {
//                 props.authStatus?
//       <button className='btn btn-primary' onClick={()=>
//         {
//         if(redirect)
//         history.push(redirect)
        
//         addToCart(index,tempbook.id,tempbook.book_cost)
        
//         }
        
//         }>Add to cart</button>
//       :
//       <button className='btn btn-primary' onClick={handleRedirectToLogin}>Add to cart ? Login</button>
//             }
//             </div>
//             :
//             <button className='btn btn-danger' onClick={()=>removeFromcart(index,tempbook.id)}>Remove</button>


// }
//       </div>
//         <h3 className="card-title">{tempbook.book_title}</h3>
        
//         <h5>{tempbook.author}</h5>
//         <p className="card-text">{tempbook.book_description.slice(0,300)+"......."}</p>
//        <button className='btn btn-info' onClick={()=>handleViewDetails(tempbook.id,index)}>View Details</button>
//       </div>
//     </div>
//   </div>
// </div>
//     ))
// }

//     </div>
//   )
// }
