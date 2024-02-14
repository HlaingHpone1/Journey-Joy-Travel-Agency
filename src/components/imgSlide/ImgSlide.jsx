import React from 'react'

const ImgSlide = ({img}) => {
    return (
        <img className='block hover:scale-110 transition-all duration-300 ease-linear' src={img} alt="City" />
    )
}

export default ImgSlide
