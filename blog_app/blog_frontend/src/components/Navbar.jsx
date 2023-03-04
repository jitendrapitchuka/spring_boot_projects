
import { Link } from 'react-router-dom'

export default function Navbar() {
    
  return (
    
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="#">WEbsite</Link>
  
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">SignUp</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Logout</Link>
      </li>
    </ul>
    
  </div>
</nav>
    
  )
}
