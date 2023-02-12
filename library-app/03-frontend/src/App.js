import './App.css';
import Footer from './layouts/NavbarAndFooter/Footer';
import Navbar from './layouts/NavbarAndFooter/Navbar';
import Homepage from './layouts/Homepage/Homepage';
import { SearchBooksPage } from './layouts/SearchBoooksPage/SearchBooksPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import BookCheckoutPage from './layouts/BookCheckoutPage/BookCheckoutPage';

function App() {
  return (
  <div className='d-flex flex-column min-vh-100'>

   <Navbar/>
   <div className='flex-grow-1'>
   <Switch>
    <Route path='/' exact>
    <Redirect to='/home'/>
   </Route>
   <Route path='/home'>
   <Homepage/>
   </Route>
   <Route path='/search'>
   <SearchBooksPage/>
   </Route>
   <Route path='/checkout/:bookId'>
   <BookCheckoutPage/>
   </Route>
   </Switch>
   </div>
   <Footer/>
   </div>
  );
}

export default App;
