import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function WelcomeComponent(){
    
   

        return(
            <div className='Welcome'>Welcome 
            <br/><br/>
            
           <Link className="btn btn-outline-primary" to='/todos'>GO to todos</Link>
   
            
            </div> 
        )
    }