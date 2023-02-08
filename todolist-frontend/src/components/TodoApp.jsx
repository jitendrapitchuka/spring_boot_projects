import React from 'react'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import './TodoApp.css'
import ListTodosComponent from './ListTodosComponent';
import WelcomeComponent from './WelcomeComponent';
import ToDoComponent from './ToDoComponent';

export default function TodoApp() {
  return (
    <div className='TodoApp'>
        {/* <HeaderComponent/> */}
        <BrowserRouter>
        <Routes>
        {/* <Route path='/' element={<LoginComponent/>}/> */}
        {/* <Route path='/login' element={<LoginComponent/>}/> */}
        <Route path='/' element={ <WelcomeComponent/>}/>
        <Route path='/todos' element={ <ListTodosComponent/>}/>
        <Route path='/todo/:id' element={ <ToDoComponent/>}/>
        {/* <Route path='/logout' element={ <LogoutComponent/>}/> */}
        <Route path='*' element={ <ErrorComponent/>}></Route>
        
        </Routes>
        </BrowserRouter>
    {/* <FooterComponent/> */}
   
    </div>
  )
}





function ErrorComponent(){
    return(
        <div className='ErrorComponent'>
           <h1>404 error</h1> 
        
        </div> 
    )
}



// function FooterComponent(){
//     return(
//         <div className='FooterComponent'>
//             <hr/>
//            <h1>FooterComponent comp</h1> 
        
//         </div> 
//     )
// }

// function HeaderComponent(){
//     return(
//         <div className='HeaderComponent'>
//            <h1>header comp</h1> 
//         <hr/>
//         </div> 
//     )
// }

// function LogoutComponent(){
//     return(
//         <div className='LogoutComponent'>
//            <h1>You are logged out :)</h1> 
        
//         </div> 
//     )
// }


