import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        // <BrowserRouter>

        <div className="l-ft py-10 bg-gradient w-full">
            <div className="inner-wrap max-w-1240px my-0 mx-auto">
                <div className="l-ft-content flex flex-wrap justify-between  sm:flex-row flex-col sm:items-start items-center space-x-20 gap-y-10 mb-20" >
                    <div className="l-ft__link flex-1 ">
                        <p className="text-4xl font-bold font-Roboto-Slab capitalize text-white mb-6">Quick Link</p>
                        <div className="link">
                            <ul className='space-y-5'>
                                <li>
                                    <Link className='text-white text-xl font-Roboto-Slab font-bold ' to="/about">About</Link>
                                </li>
                                <li>
                                    <Link className='text-white text-xl font-Roboto-Slab font-bold ' to="/tourpackage">Tour Package</Link>
                                </li>
                                <li>
                                    <Link className='text-white text-xl font-Roboto-Slab font-bold ' to="/contact">Contact us</Link>
                                </li>
                                <li>
                                    <Link className='text-white text-xl font-Roboto-Slab font-bold ' to="/partner">Partner</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="l-ft__info flex-1">
                        <p className="text-4xl font-bold font-Roboto-Slab capitalize text-white mb-6">Journey Joy</p>
                        <p className="text-white text-justify font-Roboto mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis doloribus aspernatur quisquam totam.</p>
                        <div className="social-link flex space-x-5">
                            <a href="https://www.facebook.com/">
                                <CgFacebook className="text-black bg-tertiary size-12 rounded-full p-2 hover:text-white hover:bg-primary transition-colors duration-300 ease-linear" />
                            </a>
                            <a href="https://www.instagram.com/">
                                <AiOutlineInstagram className="text-black bg-tertiary size-12 rounded-full p-2 hover:text-white hover:bg-primary transition-colors duration-300 ease-linear" />
                            </a>
                            <a href="https://www.youtube.com/">
                                <AiFillYoutube className="text-black bg-tertiary size-12 rounded-full p-2 hover:text-white hover:bg-primary transition-colors duration-300 ease-linear" />
                            </a>
                            <a href="https://twitter.com/">
                                <AiOutlineTwitter className="text-black bg-tertiary size-12 rounded-full p-2 hover:text-white hover:bg-primary transition-colors duration-300 ease-linear" />
                            </a>
                        </div>
                    </div>
                    <div className="l-ft__update flex-1">
                        <p className="text-4xl font-bold font-Roboto-Slab uppercase text-white mb-6">Get Regular Update from us</p>
                        <div className="subscribe flex rounded-md overflow-hidden">
                            <input className='block py-2 pl-2.5 pr-12 w-[300px] focus:outline-0 ' type="text" placeholder='Enter Your Email . . .' />
                            <button className='p-2.5 block bg-primary text-white'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <hr className="mb-2.5" />
                <div className="l-ft-bottom text-white">
                    <address className="flex justify-between flex-wrap opacity-65">
                        <p className="copy-right"> &copy; Copy Right | All Right Reserved </p>
                        <div className="quick-link">
                            <ul className="flex space-x-4">
                                <li>
                                    <Link>FAQ</Link>
                                </li>
                                <li>
                                    <Link>Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link>Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link>Refund & Cancellation</Link>
                                </li>
                                <li>
                                    <Link>Cookie Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </address>
                </div>
            </div>
        </div>

        // </BrowserRouter>
    )
}

export default Footer
