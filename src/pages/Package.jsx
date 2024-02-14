import React from "react";
import Banner from "../components/banner/Banner";
import { Banner as ImgBanner, Icon } from "../components/img/Image";
import { Package as Table } from "../components/package/Package";
import Service from "../components/service/Service";

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
							<Service img={Icon.Visa} imgText="Visa" text="Lorem ipsum dolor sit amet consectetur. Enim nec faucibus tellus placerat sem maecenas. Eros nulla sollicitudin adipiscing orci nunc semper lorem pulvinar suspendisse." />
							<Service img={Icon.TourGuide} imgText="Tour Guide" text="Lorem ipsum dolor sit amet consectetur. Enim nec faucibus tellus placerat sem maecenas. Eros nulla sollicitudin adipiscing orci nunc semper lorem pulvinar suspendisse." />
							<Service img={Icon.AirTicket} imgText="Air Ticket" text="Lorem ipsum dolor sit amet consectetur. Enim nec faucibus tellus placerat sem maecenas. Eros nulla sollicitudin adipiscing orci nunc semper lorem pulvinar suspendisse." />

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Package;
