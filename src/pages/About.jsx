import React from 'react'
import Banner from '../components/banner/Banner';
import { Banner as ImgBanner} from "../components/img/Image"
import { Image } from '../components/img/Image'
import {About as AboutUs} from '../components/aboutus/About';

const About = () => {
	return (
		<div>
			<Banner
                image={ImgBanner.Banner7}
                header="About Us"
                text="Home / Pages / About us"
            />
			<div className="aboutus bg-primary">
				<div className='inner-wrap max-w-1240px my-0 mx-auto text-center py-24'>
					<div className="text text-white text-justify mb-24">
						<h3 className='text-4xl font-Roboto-Slab mb-2'>Who We Are</h3>
						<p className='text-base font-Roboto leading-8'>Journey Joy was born out of a love for exploration and the desire to share the wonders of the world with fellow adventures. It all began when our founder took a leap of faith, embarking on a solo journey that opened doors to a world of possibilities. Inspired by the transformative power of travel, He envisioned a platform that would curate unique and immersive experiences for discerning travelers.</p><br/>
						<p className='text-base font-Roboto leading-8'>We believe that every journey is a story waiting to be told, and we're here to help you create unforgettable chapters. Our passion for travel and commitment to exceptional experiences drive everything we do..</p>
					</div>

					<AboutUs
					 aboutImage={Image.Mission}
					 title="Our Vision"
					 paragraph1="Our vision is to redefine the way you experience the world. We envision a future where travel transcends beyond the ordinary, becoming a transformative force that not only enriches the lives of individuals but also fosters a global community united by shared experiences."
					 paragraph2 = "We envision empowering every traveler to become a storyteller, capturing the essence of each destination in their own unique way. Whether you're an intrepid explorer or a leisure seeker, we want to inspire you to step out of your comfort zone, embrace new cultures, and create memories that last a lifetime."/>


					<AboutUs
					 aboutImage={Image.Vision}
					 title="Our Mission"
					 paragraph1="At the heart of our mission is a dedication to crafting journeys that go beyond the ordinary. We strive to create moments that linger in your memory, connecting you with the world in meaningful ways. [Journey Joy] is more than just a travel service; it's a gateway to discovering cultures, forging connections, and embracing the beauty of our planet."
					 paragraph2 = "As we move forward, we invite you to be part of our vision. Join us on a journey that goes beyond travel—it's about creating a legacy of exploration, understanding, and shared moments that resonate with the soul.[Explore Our Vision] [Start Your Journey]"/>
						{/* <div className="img flex-1">
							<img src={Image.Mission} />
						</div> */}
						{/* <div className="text text-white text-justify flex-1 pr-10">
							<h3 className='text-4xl font-Roboto-Slab mb-2'>Our Vission</h3>
							<p className='text-base font-Roboto leading-9'>Our vision is to redefine the way you experience the world. We envision a future where travel transcends beyond the ordinary, becoming a transformative force that not only enriches the lives of individuals but also fosters a global community united by shared experiences.</p><br/>
							<p className='text-base font-Roboto leading-9'>We envision empowering every traveler to become a storyteller, capturing the essence of each destination in their own unique way. Whether you're an intrepid explorer or a leisure seeker, we want to inspire you to step out of your comfort zone, embrace new cultures, and create memories that last a lifetime.</p>
						</div> */}
					</div>
				</div>
			</div>
	)
}

export default About
