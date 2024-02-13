import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [comfirmpassword, setComfirmpassword] = useState("");


    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    };

    const comfirmpasswordHandler = (e) => {
        setComfirmpassword(e.target.value);
    };

    const addHandler = () => {
        console.log("Added value " + email, password, comfirmpassword)
        if (email, password, comfirmpassword !== "") {
            setEmail("");
            setPassword("");
            setComfirmpassword("");
        }
    }

    return (
        <div>
            <div className='signIn space-y-6 mb-5'>

                <div className=" py-4 pl-2 flex items-center bg-white ">
                    <FaUser className="size-8 mr-2 opacity-50" />
                    <input type='text' className='focus:outline-none text-lg bg-transparent text-black block w-full' placeholder='Username' value={username} onChange={usernameHandler} /><br />
                </div>

                <div className="input py-4 pl-2 flex  items-center bg-white">
                    <MdEmail className="size-8 mr-2 opacity-50 " />
                    <input type='email' className='focus:outline-none text-lg bg-transparent text-black block w-full' placeholder='Email' value={email}
                        onChange={emailHandler} /><br />
                </div>

                <div className="input py-4 pl-2 flex items-center bg-white ">
                    <RiLockPasswordFill className="size-8 mr-2 opacity-50 " />
                    <input type='password' className='focus:outline-none text-lg bg-transparent text-black block w-full' placeholder='Password' value={password} onChange={passwordHandler} /><br />
                </div>

                <div className="input py-4 pl-2 flex items-center bg-white ">
                    <RiLockPasswordFill className="size-8 mr-2 opacity-50 " />
                    <input type='password' className='focus:outline-none text-lg bg-transparent text-black block w-full' placeholder='Comfirm password' value={comfirmpassword} onChange={comfirmpasswordHandler} />
                </div>
                <button type='button' onClick={addHandler} className='text-xl font-Roboto py-3.5 px-16 bg-tertiary rounded-2xl hover:bg-primary transition-colors duration-300 ease-linear hover:text-white'>Submit</button>

            </div>
        </div>
    )
}
