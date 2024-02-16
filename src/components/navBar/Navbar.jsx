import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TiArrowSortedDown } from "react-icons/ti";
// import axios from 'axios';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isMenu, setIsMenu] = useState(true);

    const toggleState = () => {
        setIsMenuActive(!isMenuActive)
        setIsMenu(!isMenu)
    }

    const handleResize = () => {
        if (window.innerWidth > 1024) {
            setIsMenuActive(false);
            setIsMenu(true);
        }
    };

    useEffect(() => {
        handleResize(); // Call on initial render

        const handleResizeEvent = () => {
            handleResize(); // Call whenever the window is resized
        };

        window.addEventListener('resize', handleResizeEvent);

        return () => {
            window.removeEventListener('resize', handleResizeEvent);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    // // Get
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((res)=>res.json())
    //     .then((data) =>console.log(data))
    //     .catch((err) => console.log(res))
    // },[])

    // // Post
    // const paramString = {
    //     method: "POST",
    //     header: "Content-Type, application/json",
    //     body: JSON.stringify({
    //         body: "new Data",
    //         id: 1050,
    //         title: "Title",
    //         userID: "user1",
    //     })
    // }

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/posts",paramString).then((res)=>res.json()).then((data)=>console.log(`${data.id} has been create.`))
    // })

    // const body = {
    //     body: "New data 1",
    //     id: 10,
    //     title: "New Title 1",
    //     userId: "user2"
    // }

    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => console.log(res.data))
    // })

    // const getData = () => {
    //     useEffect(() => {
    //         axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => console.log(res.data))
    //     })
    // }

    // const createData = () => {
    //     useEffect(() => {
    //         axios.post("https://jsonplaceholder.typicode.com/posts", body).then((res) => console.log(res.data.id))
    //     })
    // }

    const MenuMediaQuery = useMediaQuery({ query: '(min-width: 640px)' });


    return (
        <div className="l-header w-full bg-nav py-5 fixed top-0 z-50 px-10 xl:px-0">
            <div className="inner-wrap max-w-1240px my-0 mx-auto">
                <div className="l-header__bar flex justify-between items-center">
                    <div className="l-header__logo">
                        <NavLink className='xl:text-4xl md:text-3xl text-2xl font-bold font-Roboto-Slab text-white transition-all ease-linear duration-300' to="/">Journey Joy</NavLink>
                    </div>
                    <div className="l-header__menu">
                        <ul className={` lg:flex  items-center xl:gap-5 gap-2   text-white transition-all duration-300 ease-linear ${isMenu ? "hidden" : "flex absolute flex-col justify-center space-y-14  h-screen bg-black top-0 left-0  w-full lg:hidden"} `}>
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
                            {!MenuMediaQuery && (
                                <li>
                                    <NavLink activeclassname='active' className='text-xl font-Roboto-Slab transition-all ease-linear duration-150 block opacity-70 hover:opacity-100 hover:font-bold' to="/login">Log in</NavLink>
                                </li>
                            )}
                            {!MenuMediaQuery && (
                                <li>
                                    <NavLink activeclassname='active' className='text-xl font-Roboto-Slab transition-all ease-linear duration-150 block opacity-70 hover:opacity-100 hover:font-bold' to="/register">Register</NavLink>
                                </li>
                            )}


                        </ul>
                    </div>
                    <div className="btn-group sm:flex hidden xl:gap-5 gap-2.5 transition-all duration-300 ease-linear">
                        <NavLink className='bg-[#f6f6f6] lg:px-[25px] px-3 lg:py-[10px] py-1.5 font-bold lg:rounded-[10px] rounded-md hover:bg-secondary transition-colors duration-300 ease-linear font-Roboto-Slab hover:text-white' to="login">Log in</NavLink>
                        <NavLink className='bg-[#f6f6f6] lg:px-[25px] px-3 lg:py-[10px] py-1.5 font-bold lg:rounded-[10px] rounded-md font-Roboto-Slab hover:bg-secondary transition-colors duration-300 ease-linear hover:text-white' to="register">Register</NavLink>
                    </div>
                    <div className="menu-burger relative block lg:hidden">
                        <button onClick={toggleState} className={` ${isMenuActive ? "after:rotate-45 before:-rotate-45 after:-translate-y-3 before:translate-y-2.5" : "bg-white"} transition-all duration-300 ease-linear before:transition-all before:duration-300 after:transition-all after:duration-300 flex icon  w-10 h-1  absolute  after:bg-white  after:absolute after:top-3 after:w-10 after:h-1 before:absolute before:bg-white before:-top-3 before:w-10 before:h-1 right-5`}></button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Navbar;
