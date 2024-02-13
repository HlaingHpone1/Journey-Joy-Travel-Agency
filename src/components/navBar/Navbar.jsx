import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TiArrowSortedDown } from "react-icons/ti";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className="l-header w-full bg-nav py-5 fixed top-0 z-50">
            <div className="inner-wrap max-w-1240px my-0 mx-auto">
                <div className="l-header__bar flex justify-between items-center">
                    <div className="l-header__logo">
                        <NavLink className='text-4xl font-bold font-Roboto-Slab text-white' to="/">Journey Joy</NavLink>
                    </div>
                    <div className="l-header__menu">
                        <ul className='flex gap-5 text-white'>
                            <li>
                                <NavLink activeclassname='active' className='text-xl font-Roboto-Slab transition-all ease-linear duration-150 block opacity-70 hover:opacity-100 hover:font-bold' to="/">Home</NavLink>
                            </li>
                            <li>
                                <div id='drop-down' onClick={toggleDropdown}
                                    onMouseLeave={closeDropdown}
                                    className="flex items-center">
                                    <span className='text-xl font-Roboto-Slab transition-all ease-linear duration-150 block opacity-70 hover:opacity-100 hover:font-bold'>Services </span><TiArrowSortedDown />
                                </div>
                                {isOpen && (
                                    <ul id='drop-down-content'
                                        onMouseEnter={() => setIsOpen(true)} onMouseLeave={closeDropdown}
                                        className='absolute bg-white py-3 px-3 rounded-md'>
                                        <li>
                                            <NavLink className='text-xl text-black font-Roboto-Slab transition-all ease-linear duration-150 block opacity-70 hover:opacity-100 hover:font-bold' to="/tourpackage">Tour Package</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='text-xl text-black font-Roboto-Slab transition-all ease-linear duration-150 block opacity-70 hover:opacity-100 hover:font-bold' to="/package">Package</NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <NavLink activeclassname='active' className='text-xl font-Roboto-Slab transition-all ease-linear duration-150 block opacity-70 hover:opacity-100 hover:font-bold' to="/about">About us</NavLink>
                            </li>
                            <li>
                                <NavLink activeclassname='active' className='text-xl font-Roboto-Slab transition-all ease-linear duration-150 block opacity-70 hover:opacity-100 hover:font-bold' to="/review">Review</NavLink>
                            </li>
                            <li>
                                <NavLink activeclassname='active' className='text-xl font-Roboto-Slab transition-all ease-linear duration-150 block opacity-70 hover:opacity-100 hover:font-bold' to="/partner">Partner</NavLink>
                            </li>
                            <li>
                                <NavLink activeclassname='active' className='text-xl font-Roboto-Slab transition-all ease-linear duration-150 block opacity-70 hover:opacity-100 hover:font-bold' to="/contact">Contact us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="btn-group flex gap-5">
                        <NavLink className='bg-[#f6f6f6] px-[25px] py-[10px] font-bold rounded-[10px] hover:bg-secondary transition-colors duration-300 ease-linear font-Roboto-Slab hover:text-white' to="login">Log in</NavLink>
                        <NavLink className='bg-[#f6f6f6] px-[25px] py-[10px] font-bold rounded-[10px] font-Roboto-Slab hover:bg-secondary transition-colors duration-300 ease-linear hover:text-white' to="register">Register</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
