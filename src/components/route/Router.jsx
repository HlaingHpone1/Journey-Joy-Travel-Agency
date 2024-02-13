
import { Routes, Route, Navigate } from 'react-router-dom'
import Index from '../../pages/Index'
import TourPackage from '../../pages/TourPackage'
import Package from '../../pages/Package'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import Login from '../../pages/Login'
import Patner from '../../pages/Patner'
import Register from '../../pages/Register'
import Review from '../../pages/Review'
import NotFound from '../../pages/NotFound'

export const Router = () => {

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
            <Route path="*" element={<Navigate to="/404" replace />} />
            <Route path="/404" element={<NotFound />} />
        </Routes>

    )
}

export const getLocationPath = () => {

    return location;
};
