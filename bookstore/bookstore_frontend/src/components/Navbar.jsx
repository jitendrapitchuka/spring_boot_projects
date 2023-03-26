import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  // const[authStatus,setAuthStatus]=useState(false)

  // useEffect(() => {
  //   const getToken=sessionStorage.getItem("token")
  //   setAuthStatus(!!getToken)
  // }, [])
  


  return (
    <div>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">BookStore</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        <Link className="nav-link" to="/search">Search</Link>
        <Link className="nav-link" to="#">Profile</Link>
        
        {
        props.authStatus?
        <Link className="nav-link"  to="/login" onClick={props.handleLogout}>Logout</Link>
        :
        <Link className="nav-link" to="/login">Login</Link>
        }
        
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
