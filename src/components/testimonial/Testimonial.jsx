import React from 'react'
import { FaStar } from "react-icons/fa";

const Testimonial = ({userImage, name, review}) => {
  return (
    <div className="card w-[400px] bg-tertiary rounded-[50px]">
        <div className="card-inner w-[364px] space-y-3.5 pb-9 my-0 mx-auto ">
            <img className='block m-0 mx-auto ' src={userImage} alt="User"/>
            <h3 className='text-4xl '>{name}</h3>
                <div className="star flex space-x-3.5 justify-center ">
                    <FaStar className='text-yellow-300 size-8' />
                    <FaStar className='text-yellow-300 size-8' />
                    <FaStar className='text-yellow-300 size-8' />
                    <FaStar className='text-yellow-300 size-8' />
                    <FaStar className='text-yellow-300 size-8' />
                </div>
            <p className=' text-justify leading-8'>{review}</p>
        </div>
    </div>
  )
}

export default Testimonial