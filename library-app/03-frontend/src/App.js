import './App.css';
import Footer from './layouts/NavbarAndFooter/Footer';
import Navbar from './layouts/NavbarAndFooter/Navbar';
import Homepage from './layouts/Homepage/Homepage';
import { SearchBooksPage } from './layouts/SearchBoooksPage/SearchBooksPage';

function App() {
  return (
    <>
   <Navbar/>
   {/* <Homepage/> */}
   <SearchBooksPage/>
   <Footer/>
   </>
  );
}

export default App;
