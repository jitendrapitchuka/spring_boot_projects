import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import PostByEmail from './PostByEmail';


export default function Welcome() {

    const location = useLocation();

    useEffect(() => {
        console.log(location.state.firstName)
        
     }, [location]);

  return (
    <div>
       <h2>Welcome {location.state.firstName}</h2> 
     <h3>{location.state.userEmail}</h3>  
       
       <PostByEmail firstName={location.state.firstName} lastName={location.state.lastName} emailId={location.state.userEmail}
       userId={location.state.userId} />
   </div>
  )
}
