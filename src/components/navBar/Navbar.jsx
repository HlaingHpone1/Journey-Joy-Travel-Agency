import React, { useState } from 'react'
import { BrowserRouter, Link, useLocation  } from 'react-router-dom'
import { TiArrowSortedDown } from "react-icons/ti";
import {Router, getLocationPath} from '../route/Router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState('');
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    
    return (
        <BrowserRouter>
        
            <div className="l-header w-full bg-nav py-5 fixed top-0">
                <div className="inner-wrap max-w-1240px my-0 mx-auto">
                    <div className="l-header__bar flex justify-between items-center">
                        <div className="l-header__logo">
                            <Link className='text-4xl font-bold font-Roboto-Slab text-white' to="/">Journey Joy</Link> 
                        </div>
                        <div className="l-header__menu">
                            <ul className='flex gap-5 text-white'>
                                <li>
                                    <Link className='text-xl font-Roboto-Slab transition-all ease-linear duration-150 block opacity-70 hover:opacity-100 hover:font-bold active ' to="/">Home</Link>
                                </li>
                                <li>
                                    <div id='drop-down' onClick={toggleDropdown} className="flex items-center"><Link className='text-xl font-Roboto-Slab transition-all ease-linear duration-150 block opacity-70 hover:opacity-100 hover:font-bold'>Services</Link> <TiArrowSortedDown /></div>
                                    {
                                        isOpen && (
                                            <ul id='drop-down-content' className='absolute bg-white py-3 px-3 rounded-md'>
                                                <li>
                                                    <Link className='text-xl text-black font-Roboto-Slab transition-all ease-linear duration-150 block opacity-70 hover:opacity-100 hover:font-bold' to="/tourpackage">Tour Package</Link>
                                                </li>
                                                <li>
                                                    <Link className='text-xl text-black font-Roboto-Slab transition-all ease-linear duration-150 block opacity-70 hover:opacity-100 hover:font-bold' to="/package">Package</Link>
                                                </li>
                                            </ul>
                                        )
                                    }

                                </li>
                                <li>
                                    <Link className='text-xl font-Roboto-Slab transition-all ease-linear duration-150 block opacity-70 hover:opacity-100 hover:font-bold' to="/about">About us</Link>
                                </li>
                                <li>
                                    <Link className='text-xl font-Roboto-Slab transition-all ease-linear duration-150 block opacity-70 hover:opacity-100 hover:font-bold' to="/review">Review</Link>
                                </li>
                                <li>
                                    <Link className='text-xl font-Roboto-Slab transition-all ease-linear duration-150 block opacity-70 hover:opacity-100 hover:font-bold' to="/partner">Partner</Link>
                                </li>
                                <li>
                                    <Link className='text-xl font-Roboto-Slab transition-all ease-linear duration-150 block opacity-70 hover:opacity-100 hover:font-bold' to="/contact">Contact us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="btn-group flex gap-5">
                            <Link className='bg-[#f6f6f6] px-[25px] py-[10px] rounded-[10px] hover:bg-secondary transition-colors duration-300 ease-linear hover:text-white' to="login">Log in</Link>
                            <Link className='bg-[#f6f6f6] px-[25px] py-[10px] rounded-[10px] hover:bg-secondary transition-colors duration-300 ease-linear hover:text-white' to="register">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Router />
        </BrowserRouter>
    )
}

export default Navbar
