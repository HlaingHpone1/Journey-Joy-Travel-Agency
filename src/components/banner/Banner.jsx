import React from 'react'

const Banner = ({image, header, text}) => {

    const bgImg = {
        backgroundImage: `url(${image})`, // Use image as a string here
    }

    return (
        <div className="bannner h-[50vh] w-full grid align-middle place-content-center text-center" style={bgImg}>
            <p>{header} </p>
            <p>{text} </p>
        </div>
    )
}

export default Banner
