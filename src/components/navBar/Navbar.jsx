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
                                    <Link></Link>
                                </li>
                                <li>
                                    <Link></Link>
                                </li>
                                <li>
                                    <Link></Link>
                                </li>
                                <li>
                                    <Link></Link>
                                </li>
                                <li>
                                    <Link></Link>
                                </li>
                                <li>
                                    <Link></Link>
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
