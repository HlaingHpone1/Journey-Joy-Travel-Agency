import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Index from '../../pages/Index'
import TourPackage from '../../pages/TourPackage'
import Package from '../../pages/Package'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import Login from '../../pages/Login'
import Patner from '../../pages/Patner'
import Register from '../../pages/Register'
import Review from '../../pages/Review'
// import Navbar from '../navBar/Navbar'

export const Router = () => {

    const location = useLocation().pathname;
    console.log('====================================');
    console.log(location);
    console.log('====================================');
    
    return (
        <Routes>
            <Route path='/' element={<Index />} ></Route>
            <Route path='/tourpackage' element={<TourPackage />}></Route>
            <Route path='/package' element={<Package />} ></Route>
            <Route path='/about' element={<About />} ></Route>
            <Route path='/review' element={<Review />} ></Route>
            <Route path='/partner' element={<Patner />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
        </Routes>

    )
}

export const getLocationPath = () => {
    
    return location;
};
