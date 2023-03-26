
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Search from './components/Search';
import "bootstrap-icons/font/bootstrap-icons.css";
import ViewBookDetails from './components/ViewBookDetails';
import AllReview from './components/AllReview';
import { useState } from 'react';


function App() {

  const[authStatus,setAuthStatus]=useState(false)

  const handleLogout=()=>{
    sessionStorage.removeItem("token")
    setAuthStatus(false)
  }

  const handleLoginAuthStatus=()=>{
  
    setAuthStatus(true)
  }

  return (
    <div>
      <Navbar handleLogout={handleLogout} authStatus={authStatus}/>

<Switch>
<Route path='/' exact>
    <Redirect to='/home'/>
   </Route>

<Route path="/login">
<Login handleLoginAuthStatus={handleLoginAuthStatus}/>
</Route>
<Route path="/signup">
<Signup/>
</Route>
<Route path="/home">
<Home/>
</Route>
<Route path="/search">
<Search authStatus={authStatus}/>
</Route>
<Route path="/details">
<ViewBookDetails authStatus={authStatus}/>
</Route>
<Route path="/allReviews">
<AllReview/>
</Route>


</Switch>


      <Footer/>
    </div>
  );
}

export default App;
