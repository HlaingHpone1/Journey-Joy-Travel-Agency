import React from 'react'
import { Image, Banner as ImgBanner, Partner } from "../components/img/Image"
import Banner from '../components/banner/Banner';
import { MdLocalHotel } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { AiFillBank } from "react-icons/ai";

const Patner = () => {
	return (
		<>
			<Banner
				image={ImgBanner.Banner1}
				header="Partners With Us"
				text="Home / Pages / Partner"
			/>
			<div className='partner bg-primary'>
				<div className='inner-wrap max-w-1240px my-0 mx-auto'>
					<div className="partnerBox py-20">
						<div className='box bg-tertiary rounded-2xl p-8 mb-20'>
							<h2 className='text-4xl font-Roboto-Slab text-black pb-5 flex items-center'>
								<MdLocalHotel className='size-12' />Hotels</h2>
							<div className="box_img flex justify-between">
								<img src={Partner.Hotel1} alt="" />
								<img src={Partner.Hotel2} alt="" />
								<img src={Partner.Hotel3} alt="" />
								<img src={Partner.Hotel4} alt="" />
								<img src={Partner.Hotel5} alt="" />
								<img src={Partner.Hotel6} alt="" />
							</div>
						</div>

						<div className='box bg-tertiary rounded-2xl p-8 mb-20'>
							<h2 className='text-4xl font-Roboto-Slab text-black pb-5 flex items-center'>
							<MdOutlineAirplanemodeActive className='size-12' />Airlines</h2>
							<div className="box_img grid grid-cols-4 gap-5">
								<img className='block w-full h-full' src={Partner.Airline4} alt="" />
								<div className="flex flex-col space-y-5">
									<img className='block w-full h-full' src={Partner.Airline1} alt="" />
									<img className='block w-full h-full' src={Partner.Airline2} alt="" />
								</div>
								<img className='block w-full h-full' src={Partner.Airline3} alt="" />
								<img className='block w-full h-full' src={Partner.Airline5} alt="" />
							</div>
						</div>

						<div className='box bg-tertiary rounded-2xl p-8 mb-20'>
							<h2 className='text-4xl font-Roboto-Slab text-black pb-5 flex items-center'>
								<AiFillBank className='size-12' />Banks</h2>
							<div className="box_img grid grid-cols-4 gap-4">
								<div className="flex space-y-7 flex-col">
									<img className='block w-full h-full' src={Partner.Bank4} alt="" />
									<img className='block w-full h-full' src={Partner.Bank5} alt="" />
								</div>
								<div className="col-span-2 flex flex-col space-y-4">
									<div className="flex space-x-8">
										<img className='block w-full h-full' src={Partner.Bank3} alt="" />
										<img className='block w-full h-full' src={Partner.Bank1} alt="" />
									</div>
									<img className='block w-full h-full' src={Partner.Bank6} alt="" />
								</div>
								<img className='block w-full h-full' src={Partner.Bank2} alt="" />
							</div>
						</div>

						<div className='box bg-tertiary rounded-2xl p-8'>
							<h2 className='text-4xl font-Roboto-Slab text-black pb-5 flex items-center'>
								<MdRestaurantMenu className='size-12' />Restaurants</h2>
							<div className="box_img flex justify-between">
								<img src={Partner.Restaurant1} alt="" />
								<img src={Partner.Restaurant2} alt="" />
								<img src={Partner.Restaurant3} alt="" />
								<img src={Partner.Restaurant4} alt="" />
								<img src={Partner.Restaurant5} alt="" />
							</div>
						</div>




					</div>
				</div>
			</div>
		</>
	)
}

export default Patner
