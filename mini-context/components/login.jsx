import React from 'react'
import {useContext , useState} from 'react'
import UserContext from '../Context/UserContext';

function login() {

    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");

    const {setUser} =  useContext(UserContext);

    const handleSubmit = (e) =>{
   e.preventDeafault();
   setUser({username, password})
    }

  return (
   <input
   type="text"
   id="username"
   value ={username}
onChange= {(e) => {
setUsername(e.target.value)
}}
placeholder='ussername'
/>

<input
   type="text"
   id="password"
   value ={password}
onChange= {(e) => { 
setPassword(e.target.value)
}}
placeholder='ussername'
/>

<button type="submit" onClick= {handleSubmit}></button>


  )
}
export default login