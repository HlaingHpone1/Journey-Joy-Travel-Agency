import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Banner from '../components/banner/Banner';
import { Banner as ImgBanner} from "../components/img/Image"
import {User} from "../components/img/Image";
import Testimonial from '../components/testimonial/Testimonial';

const Review = () => {
    return (
        <>
            <Banner
                image={ImgBanner.Banner3}
                header="Reviews"
                text="Home / Pages / Review"
            />
            <div className='review bg-primary'>
                <div className='inner-wrap max-w-1240px my-0 mx-auto text-center pt-36 pb-12'>
                    <h2 className='text-6xl font-Roboto-Slab text-white'>Testimonials</h2>
                    <div className="review-box flex space-x-12 mt-9 mb-6">

                    <Testimonial
                        userImage={User.User1}
                        name="John"
                        review="The travel experience exceeded expectations—seamless booking, thrilling adventures, and a perfect mix of exploration. A definite go-to for adventure seekers!"
                        />

                    <Testimonial
                        userImage={User.User2}
                        name="Jennifer"
                        review="Just had the perfect blend of adventure and relaxation on my getaway booked here. Varied experiences catered to all preferences, from thrilling activities to serene beach moments. Kudos for the diverse and balanced travel packages!"
                        />

                    <Testimonial
                        userImage={User.User3}
                        name="Sam"
                        review="Guided tours provided deep cultural dives, balancing popular attractions with off-the-beaten-path adventures. Highly recommended for authentic explorations!"
                        />
                    </div>
                    <div className='review-slider flex justify-center'>
                        <button type='button' ><IoArrowBackCircleOutline className='size-16 text-tertiary'/></button>
                        <button type='button'><IoArrowForwardCircleOutline className='size-16 text-tertiary'/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review
