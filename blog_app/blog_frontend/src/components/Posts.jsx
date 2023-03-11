import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Posts() {

    const[responseData,setResponseData]=useState([])
    const [auth,setAuth]=useState(false)
    const[count,setCount]=useState(1)
    
    useEffect(() => {
      const token=localStorage.getItem("token")

      
        if(token){
          setAuth(true)
        }
        else{
          setAuth(false)
        }

 
      axios.get("http://localhost:8080/api/posts")
      .then((response)=>{
        setResponseData(response.data.data)
        console.log(response.data.data)

      
      }
        )
    
    }, [auth,count])

   
   
   
  async function handleLikesUp(tflag,countt,id){
    console.log("tflag",tflag)
    if(!tflag){
    setCount(countt+1)
      tflag=true
      
  }
    else{
      setCount(countt)
      
    }
    await axios.put("http://localhost:8080/api/put",{likes_count:count,id:id,likesFlag:tflag})
    .then((response)=>{
      console.log(count)
      // alert("You already liked!")

    }

    )

   }

   async function handleLikesDown(tflag,countt,id){
    if(tflag){
    if(countt !== 0){
    setCount(countt-1)
    tflag=false
    
    }
    }
    else{
    setCount(countt)
    
  //  alert("You already Disliked!")
    }
    await axios.put("http://localhost:8080/api/put",{likes_count:count,id:id,likesFlag:tflag})
    .then((response)=>{
      console.log(count)
    }

    )

   }
    



  return (
    <div>
        <div className="card w-75 mt-2 " >
        
            {responseData.map((temppost)=>(
                
                <div key={temppost.id}  >
                    <div className="card-headercard text-white bg-secondary mb-2">{temppost.post_header}</div>
                    <div className="card-body text-white bg-secondary  mb-5">
                      <h5 className="card-title" >title</h5>
                      <p className="card-text" >{temppost.description}</p>
                      {
                      auth &&
                      <>
                      <div className='float-start'>
                    <button  className="btn btn-primary" onClick={()=>handleLikesUp(temppost.likesFlag,temppost.likes_count,temppost.id)} >   <i className="bi bi-hand-thumbs-up-fill" ></i></button>
                    <div className="vr" style={{padding:"1px"}}></div>
                    <button  className="btn btn-primary"  onClick={()=>handleLikesDown(temppost.likesFlag,temppost.likes_count,temppost.id)} >   <i className="bi bi-hand-thumbs-down-fill"></i></button>
                    <strong>{temppost.likes_count}</strong></div>
                    
                    
                  

                         
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <i className="bi bi-chat">Comment</i>
            </button>

            
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" style={{color:"black"}} id="staticBackdropLabel">Add your Comment</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  <div className="input-group">
              {/* <span className="input-group-text">With textarea</span> */}
              <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save</button>
                  </div>
                </div>
              </div>
            </div>
                      </>
            }
                    </div>
                    </div>
              
                   ))
                   }
 
</div>

    </div>
  )
}
