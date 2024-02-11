import React, { useState } from 'react'


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("");
  const emailHandler = (e)=>{
    setEmail(e.target.value)
}

const passwordHandler = (e)=>{
  setPassword(e.target.value)
}

const addHandler = ()=>{
  console.log("Added value "+ email , password)
  if(email, password !== ""){
      setEmail("");
      setPassword("");
  }
}

  return (
    <div>
      <div className='signIn'>
        <input type='email' placeholder='Email' value={email}
        onChange={emailHandler}/><br/>
        <input type='password' placeholder='Password' value={password} onChange={passwordHandler}/><br/>

        <button type='button' onClick={addHandler}  to="/">Submit</button>
      </div>
    </div>
  )
}
