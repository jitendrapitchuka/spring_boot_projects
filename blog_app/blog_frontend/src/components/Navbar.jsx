
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    
  const [auth,setAuth]=useState(false)

  useEffect(() => {
    setInterval(() => {
    const token=localStorage.getItem("token")
    if(token){
      setAuth(true)
    }
    else{
      setAuth(false)
    }
  }, 1);
  }, [])

  

 

  const handleLogout = () => {
   
    localStorage.clear();
  };

  return (
    
   <nav className="navbar navbar-dark navbar-expand-lg  bg-dark sticky-top" >
  <Link className="navbar-brand mx-3" to="#" >BLOG</Link>
  
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home </Link>
      </li>
      {
        !auth ?
        <>
      <li className="nav-item">
        <Link className="nav-link " to="/signup">SignUp</Link>
      </li>
      
     
       
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li></>
      :
      <>
      <li className="nav-item ">
        <Link className="nav-link" to='/home' onClick={handleLogout}>Logout</Link>
      </li>
      {/* <li className="nav-item ">
      <Link className="nav-link" to='/profile' >Profile</Link>
    </li> */}
    </>
     
}
     
    </ul>
    
  </div>
</nav>
    
  )
}
