import React from 'react'

const Banner = ({image, header, text}) => {

    const bgImg = {
        background: `url(${image}) no-repeat`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
    }

    return (
        <div className="bannner h-[70vh] w-full grid align-middle place-content-center text-center " style={bgImg}>
            <p className='text-8xl font-bold font-Roboto-Slab text-white'>{header} </p>
            <p className='text-xl font-Roboto-Slab text-white'>{text} </p>
        </div>
    )
}

export default Banner
