import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Banner from '../components/banner/Banner';
import { Banner as ImgBanner, Image } from "../components/img/Image"


const Review = () => {
    return (
        <>
            <Banner
                image={ImgBanner.Banner3}
                header="Package"
                text="Home / Pages / Package"
            />
            <div className='review bg-primary'>
                
                <div className='inner-wrap max-w-1240px my-0 mx-auto'>
                    <h2>Testimonials</h2>
                    <div className='review-slider flex'>
                        <IoArrowBackCircleOutline />
                        <IoArrowForwardCircleOutline />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review
