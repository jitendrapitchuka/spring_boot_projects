import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'


export default function Posts() {

    const[responseData,setResponseData]=useState([])
    const [auth,setAuth]=useState(false)
    const[count,setCount]=useState(1)
    const[comment,setComment]=useState("")
    const history=useHistory(null)
    
    const[helperid,sethelperid]=useState()
    const[helperUserId,sethelperUserId]=useState()
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

   
   const userr=localStorage.getItem("userr")
   
  async function handleLikesUp(tflag,countt,userId,id){
    
    console.log("tflag",tflag)
    if(!tflag){
    setCount(countt+1)
      tflag=true
      
  }
    else{
      setCount(countt)
      
    }
    if(userr!==userId)
    tflag=false;
    await axios.put("http://localhost:8080/api/put",{likes_count:count,userId:userId,likesFlag:tflag,id:id})
    .then((response)=>{
      console.log(count)
      // alert("You already liked!")

    }

    )

   }

   async function handleLikesDown(tflag,countt,userId,id){
    
    

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
    if(userr!==userId)
    tflag=false;
    await axios.put("http://localhost:8080/api/put",{likes_count:count,userId:userId,likesFlag:tflag,id:id})
    .then((response)=>{
      console.log(count)
    }

    )

   }
   
  //  function helperToComment(id,userId){
  //   helperid=id;
  //   helperUserId=userId;
    
  //  }
   async function handleComment(){
    
    await axios.post("http://localhost:8080/api/postComment",{comment:comment,userId:helperUserId,postId:helperid})
    .then((response)=>{
      console.log(response.data.data)
      console.log(helperid)
    })

    setComment("")
    

   }
    
 function handlePost(id){
  history.push({pathname:"/commentsById",state:{postId:id}})
 
  
}


  return (
    <div className='container mx-5'>
       
        
            {responseData.map((temppost)=>(
                
                <div key={temppost.id}  className='card mt-5 w-75'>
                    {/* <div className="card-headercard text-white bg-secondary text-start">{temppost.post_header}</div> */}
                    <div className="card-body text-white bg-secondary  " >
                      <h5 className="card-title text-start" onClick={()=>handlePost(temppost.id)}>Title: {temppost.post_header}</h5>
                      <p className="card-text" >{temppost.description}</p>
                      {
                      auth &&
                      <>
                      <div className='float-start'>
                    <button  className="btn btn-primary" onClick={()=>handleLikesUp(temppost.likesFlag,temppost.likes_count,temppost.userId,temppost.id)} >   <i className="bi bi-hand-thumbs-up-fill" ></i></button>
                    <div className="vr" style={{padding:"1px"}}></div>
                    <button  className="btn btn-primary"  onClick={()=>handleLikesDown(temppost.likesFlag,temppost.likes_count,temppost.userId,temppost.id)} >   <i className="bi bi-hand-thumbs-down-fill"></i></button>
                    <strong>{temppost.likes_count}</strong></div>
                    
                    
                  

                         
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" 
            onClick={()=>{
            sethelperUserId(temppost.userId)
            sethelperid(temppost.id)
            }}>
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
              <textarea className="form-control" aria-label="With textarea" 
              value={comment} 
              onChange={(event)=>{
         setComment(event.target.value)
             }}
             />
            </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    {
                    <button type="button" data-bs-dismiss='modal' className="btn btn-primary" onClick={()=>handleComment()}>
                      Save</button>}
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

  
  )
}
