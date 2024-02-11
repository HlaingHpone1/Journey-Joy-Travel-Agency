import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

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
      <div className='signIn space-y-6'>
      <div className="input py-4 pl-2 flex  items-center w-96 bg-white">
        <MdEmail className="size-8 mr-2 opacity-50 "/>
        <input type='focus:outline-0 text-lg bg-transparent text-black' placeholder='Email' value={email}
        onChange={emailHandler}/><br/>
      </div>
        
      <div className="input py-4 pl-2 flex items-center bg-white ">
        <RiLockPasswordFill className="size-8 mr-2 opacity-50 "/>
        <input type='focus:outline-0 text-lg bg-transparent text-black' placeholder='Password' value={password} onChange={passwordHandler}/><br/>
      </div>
        <p className='text-xl text-tertiary'>Forgot your password?</p>
        <button type='button' onClick={addHandler} className='text-xl font-Roboto py-3.5 px-16 bg-tertiary rounded-2xl'>Submit</button>
      </div>
    </div>
  )
}
