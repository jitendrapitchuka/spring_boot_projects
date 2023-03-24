
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


function App() {
  return (
    <div>
      <Navbar/>

<Switch>
<Route path='/' exact>
    <Redirect to='/home'/>
   </Route>

<Route path="/login">
<Login/>
</Route>
<Route path="/signup">
<Signup/>
</Route>
<Route path="/home">
<Home/>
</Route>
<Route path="/search">
<Search/>
</Route>


</Switch>


      <Footer/>
    </div>
  );
}

export default App;
