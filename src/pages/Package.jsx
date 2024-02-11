import React from "react";
import Banner from "../components/banner/Banner";
import { Banner as ImgBanner, Icon } from "../components/img/Image";
import { Package as Table } from "../components/package/Package";

const Package = () => {
	return (
		<div className="bg-primary">
			<Banner
				image={ImgBanner.Banner5}
				header="Package"
				text="Home / Pages / Package"
			/>

			<div className="l-content pt-24 pb-16 ">

				<Table />

				<div className="service">
					<div className="inner-wrap max-w-1240px mx-auto my-0">
						<div className="package__header text-center text-white mb-3">
							<p className="title font-Roboto-Slab text-6xl mb-2.5">Other Services</p>
							<p className="subTitle text-xl">Below are our Services</p>
						</div>
						<div className="service__packages flex justify-between">
							<div className="service__package text-white text-center border p-5 rounded-[20px] w-[350px] ">
								<div className="inner-box space-y-3">
									<img className="block m-0 mx-auto" src={Icon.Visa} alt="This is visa icon" />
									<div className="title">Visa</div>
									<div className="text-justify">Lorem ipsum dolor sit amet consectetur. Enim nec faucibus tellus placerat sem maecenas. Eros nulla sollicitudin adipiscing orci nunc semper lorem pulvinar suspendisse.</div>
									<button className="text-lg px-8 py-3 bg-tertiary font-medium text-black rounded-lg">Book Now</button>
								</div>
							</div>
							<div className="service__package text-white text-center border p-5 rounded-[20px] w-[350px] ">
								<div className="inner-box space-y-3">
									<img className="block m-0 mx-auto" src={Icon.tourGuide} alt="This is visa icon" />
									<div className="title">Visa</div>
									<div className="text-justify">Lorem ipsum dolor sit amet consectetur. Enim nec faucibus tellus placerat sem maecenas. Eros nulla sollicitudin adipiscing orci nunc semper lorem pulvinar suspendisse.</div>
									<button className="text-lg px-8 py-3 bg-tertiary font-medium text-black rounded-lg">Book Now</button>
								</div>
							</div>
							<div className="service__package text-white text-center border p-5 rounded-[20px] w-[350px] ">
								<div className="inner-box space-y-3">
									<img className="block m-0 mx-auto" src={Icon.AirTicket} alt="This is visa icon" />
									<div className="title">Visa</div>
									<div className="text-justify">Lorem ipsum dolor sit amet consectetur. Enim nec faucibus tellus placerat sem maecenas. Eros nulla sollicitudin adipiscing orci nunc semper lorem pulvinar suspendisse.</div>
									<button className="text-lg px-8 py-3 bg-tertiary font-medium text-black rounded-lg">Book Now</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Package;
