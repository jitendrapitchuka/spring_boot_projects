import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Posts() {

    const[reponseData,setResponseData]=useState([])
    const [auth,setAuth]=useState(false)
    useEffect(() => {
      const token=localStorage.getItem("token")
        if(token){
          setAuth(true)
        }
        else{
          setAuth(false)
        }

      axios.get("http://localhost:8080/api/posts")
      .then((response)=>
      
        setResponseData(response.data.data),
        

      )
    
    }, [auth])

    console.log(reponseData)
    



  return (
    <div>
        <div className="card w-75 mt-2 " >
        
            {reponseData.map((temppost)=>(
                
                <div key={temppost.id}  >
                    <div className="card-headercard text-white bg-secondary mb-2">{temppost.post_header}</div>
                    <div className="card-body text-white bg-secondary  mb-5">
                      <h5 className="card-title" >title</h5>
                      <p className="card-text" >{temppost.description}</p>
                      {
                      auth &&
                      <>
                    <button className='float-start'>   <i className="bi bi-hand-thumbs-up-fill" ></i></button>
                    
                     <button className=''>  <i className="bi bi-chat"></i></button>
                     
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
