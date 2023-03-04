import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function Welcome() {

    const location = useLocation();

    useEffect(() => {
        console.log(location.state.firstName)
        
     }, [location]);

  return (
    <div>
       <h2>Welcome {location.state.firstName}</h2> 
       
   </div>
  )
}
