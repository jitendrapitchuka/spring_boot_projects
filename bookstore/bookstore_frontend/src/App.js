
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
import axios from 'axios';
import Cart from './components/Cart';





function App() {

  const[authStatus,setAuthStatus]=useState(false)
  // const[cartRemButton,setCartRemButton]=useState(false)
  const[email,setEmail]=useState("")
  
const [count,setCount]=useState(0)
  
  const handleLogout=()=>{
   
    setAuthStatus(false)
    localStorage.clear()
    setCount(0)
    handledeletebyemail()
  }

  const handledeletebyemail=async()=>{
    await axios.delete(`http://localhost:8080/api/deletebyemail?email=${email}`)
    .then((response)=>{
      console.log(response.data.data)
    })
  }

  const handleLoginAuthStatus=()=>{
  
    setAuthStatus(true)
  }

  console.log(email)

  return (
    <div>
      <Navbar handleLogout={handleLogout} authStatus={authStatus} count={count}/>

<Switch>
<Route path='/' exact>
    <Redirect to='/home'/>
   </Route>

<Route path="/login">
<Login handleLoginAuthStatus={handleLoginAuthStatus} setEmail={setEmail}/>
</Route>
<Route path="/signup">
<Signup/>
</Route>
<Route path="/home">
<Home/>
</Route>
<Route path="/search">
<Search authStatus={authStatus} email={email}  setCount={setCount} count={count}/>
</Route>
<Route path="/details">
<ViewBookDetails authStatus={authStatus}/>
</Route>
<Route path="/allReviews">
<AllReview/>
</Route>
<Route path="/cart">
<Cart email={email}/>
</Route>


</Switch>


      <Footer/>
    </div>
  );
}

export default App;
