import React from 'react'

const Service = ({ img, imgText, text }) => {
    return (
        <div>
            <div className="service__package text-white text-center border p-5 rounded-[20px] w-[350px] ">
                <div className="inner-box space-y-3">
                    <img className="block m-0 mx-auto" src={img} alt="This is icon" />
                    <div className="title">{imgText}</div>
                    <div className="text-justify">Lorem ipsum dolor sit amet consectetur. Enim nec faucibus tellus placerat sem maecenas. Eros nulla sollicitudin adipiscing orci nunc semper lorem pulvinar suspendisse.</div>
                    <button className="text-lg px-8 py-3 bg-tertiary font-medium text-black rounded-lg">Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default Service
