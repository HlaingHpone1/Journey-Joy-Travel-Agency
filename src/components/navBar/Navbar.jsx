import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <BrowserRouter>
            <div className="l-header">
                <div className="inner-wrap">
                    <div className="l-header__bar">
                        <div className="l-header__logo">
                            <a href="">Journey Joy</a>
                        </div>
                        <div className="l-header__menu">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>
                                <li>
                                    <Link to="about">About us</Link>
                                </li>
                                <li>
                                    <Link to="review">Review</Link>
                                </li>
                                <li>
                                    <Link>Partner</Link>
                                </li>
                                <li>
                                    <Link>Contact us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="btn-group">

                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Navbar
