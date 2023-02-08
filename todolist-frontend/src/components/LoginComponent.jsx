import { useState } from "react"
import { useNavigate } from "react-router-dom"



export default function LoginComponent(){

    const [username,setUsername]=useState('demologin')
    const [password,setPassword]=useState('demo')

    const [showSuccmsg,setShowSuccmsg]=useState(false)
    const [showErrormsg,setShowErrormsg]=useState(false)

    const navigate=useNavigate()

    function handleUsernameChange(event){
        // console.log(event.target.value)
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        // console.log(event.target.value)
        setPassword(event.target.value)
    }

    function handleSubmit(){
        console.log(username)
        console.log(password)
        if(username==='demologin' && password==='demo'){
            console.log("success")
            setShowSuccmsg(true)
            setShowErrormsg(false)
            navigate(`/welcome/${username}`)
        }
        else{
        console.log("fail")
        setShowSuccmsg(false)
        setShowErrormsg(true)
        }
    }
    
    return(
        <div className='Login'>
            {showSuccmsg && <div className='successMessage'>Authenti success</div>}
            {showErrormsg && <div className='errorMessage'>Authenti failed</div>}
           
        <div className='LoginForm'>
        <div>
            <label>Username</label>
            <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
        </div>

        <div>
            <label>Password</label>
            <input type="password" name="Password" value={password} onChange={handlePasswordChange}/>
        </div>

        <div>
        <button type="buttton" onClick={handleSubmit}>Login</button>
        </div>

        </div>
        
        </div> 
    )
}

