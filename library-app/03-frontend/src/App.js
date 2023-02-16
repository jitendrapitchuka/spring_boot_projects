import './App.css';
import Footer from './layouts/NavbarAndFooter/Footer';
import Navbar from './layouts/NavbarAndFooter/Navbar';
import Homepage from './layouts/Homepage/Homepage';
import { SearchBooksPage } from './layouts/SearchBoooksPage/SearchBooksPage';
import { Redirect, Route, Switch,useHistory } from 'react-router-dom';
import BookCheckoutPage from './layouts/BookCheckoutPage/BookCheckoutPage';
import { oktaConfig } from './lib/oktaConfig';
import {OktaAuth,toRelativeUrl} from '@okta/okta-auth-js'
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import LoginWidget from './Auth/LoginWidget';
const oktaAuth = new OktaAuth(oktaConfig);



function App() {

  const customAuthHandler = () => {
    history.push('/login');
  }
  
  const history = useHistory();
  
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };


  return (
  <div className='d-flex flex-column min-vh-100'>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>

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
   <Route path='/login' render={
            () => <LoginWidget config={oktaConfig} /> 
            } 
          />
    <Route path='/login/callback' component={LoginCallback} />

   </Switch>
   </div>
   <Footer/>
   </Security>
   </div>
  );
}

export default App;
