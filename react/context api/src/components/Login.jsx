import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const{setUser} = useContext(UserContext)

    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username , password})

    }

  return (
    <div>
        <h1>login</h1>
        <input type="text" 
        onChange={(e)=>setusername(e.target.value)}
        value={username} placeholder='username' />

        <input type="text" 
        onChange={(e)=>setpassword(e.target.value)}
        value={password} placeholder='password' />
        
        <button onClick={ handleSubmit}>Submit</button>
    </div>
  )
}

export default Login;