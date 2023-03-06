import React, { useEffect } from 'react'

import { useHistory, useLocation } from 'react-router-dom';
import PostByEmail from './PostByEmail';


export default function Welcome(props) {

    const location = useLocation();
    const history=useHistory(null)

    useEffect(() => {
        console.log(location.state)
        
     }, [location.state]);

     function handleClick() {
        history.push("/newpost",location.state);
      }

  return (
    <div>
        
            
       <h2>Welcome {location.state.firstName}</h2> 
      
       <button  className='btn btn-primary' onClick={handleClick}>New Post</button>
      
       <PostByEmail firstName={location.state.firstName} lastName={location.state.lastName} emailId={location.state.userEmail}
       userId={location.state.userId} />

   </div>
  )
}
