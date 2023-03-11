import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { Route, Switch,Redirect } from 'react-router-dom';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import EditOrNewPost from './components/EditOrNewPost';
import PostByEmail from './components/PostByEmail';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from './components/Footer';

function App() {
  return (
    
     <div className="App">
     
     <Navbar/>
       <Switch>
      
       <Route path='/' exact>
    <Redirect to='/home'/>
   </Route>
       
   <Route path='/home'>
   <Home/>
   </Route>
   <Route path='/signup'>
   <Signup/>
   </Route>
   <Route path='/welcome'>
   <Welcome />
   </Route>
        
   <Route path='/login'>
   <Login/>
   </Route>
   <Route path='/newpost'>
   <EditOrNewPost/>
   </Route>
   <Route path='/profile'>
    <PostByEmail/>
   </Route>
      
    
      </Switch> 
     <Footer/>
      </div>
  );
}

export default App;
