import React from 'react'

export const About = ({ aboutImage, title, paragraph1, paragraph2 }) => {
  return (
    
      <div className="about-box flex justify-center items-center mb-5 gap-5">
        <div className="img flex-1">
          <img className='block' src={aboutImage} />
        </div>
        <div className="text flex-1 text-white text-justify">
          <h3 className='text-4xl font-Roboto-Slab mb-2'>{title}</h3>
          <p className='text-base font-Roboto leading-9'>{paragraph1}</p><br />
          <p className='text-base font-Roboto leading-9'>{paragraph2}</p>
        </div>
      </div>
    
  )
}

