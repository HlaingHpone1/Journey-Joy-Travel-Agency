import React from 'react'
import { BiCheck } from "react-icons/bi"; 
import { useNavigate } from 'react-router-dom';

export const Package = () => {
	
	const navgiate =useNavigate();
	
	const onclickHandalar = () => {
		navgiate("/tourpackage")
	}

    return (
        <div className="package mb-16">
				<div className="inner-wrap max-w-1240px mx-auto my-0">
					<div className="package__header text-center text-white mb-3">
						<p className="title font-Roboto-Slab text-6xl mb-2.5">Main Package</p>
						<p className="subTitle text-xl">Let Travel Around World!</p>
					</div>
					<div className="package__table grid grid-rows-11">
						<div className="package__table__header grid grid-cols-5 font-bold text-xl text-center text-white grid-flow-row uppercase">
							<div className="col-span-2"></div>
							<div className="text-2xl bg-secondary py-5">Platinum Package</div>
							<div className="text-2xl bg-secondary py-5">Premium Package</div>
							<div className="text-2xl bg-secondary py-5">Custom Package</div>
						</div>
						<div className="package__des grid grid-cols-5 font-medium text-xl text-center grid-flow-row capitalize">
							<div className="text-xl py-5 col-span-2 bg-tertiary">3-4 Stars Hotel </div>
							<div className="text-xl py-5 bg-[#c2dcdf]"><BiCheck className="m-0 mx-auto size-8" /></div>
							<div className="text-xl py-5 bg-[#c2dcdf]"><BiCheck className="m-0 mx-auto size-8" /></div>
							<div className="text-xl py-5 bg-[#c2dcdf]"><BiCheck className="m-0 mx-auto size-8" /></div>
						</div>
						<div className="package__des grid grid-cols-5 font-medium text-xl text-center grid-flow-row capitalize">
							<div className="text-xl py-5 col-span-2 bg-[#a1dae0]">Include breakfast , lunch</div>
							<div className="text-xl py-5 bg-[#94c7cd]"><BiCheck className="m-0 mx-auto size-8" /></div>
							<div className="text-xl py-5 bg-[#94c7cd]"><BiCheck className="m-0 mx-auto size-8" /></div>
							<div className="text-xl py-5 bg-[#94c7cd]"><BiCheck className="m-0 mx-auto size-8" /></div>
						</div>
						<div className="package__des grid grid-cols-5 font-medium text-xl text-center grid-flow-row capitalize">
							<div className="text-xl py-5 col-span-2 bg-tertiary">Give mini-present</div>
							<div className="text-xl py-5 bg-[#c2dcdf]"><BiCheck className="m-0 mx-auto size-8" /></div>
							<div className="text-xl py-5 bg-[#c2dcdf]"><BiCheck className="m-0 mx-auto size-8" /></div>
							<div className="text-xl py-5 bg-[#c2dcdf]"><BiCheck className="m-0 mx-auto size-8" /></div>
						</div>
						<div className="package__des grid grid-cols-5 font-medium text-xl text-center grid-flow-row capitalize">
							<div className="text-xl py-5 col-span-2 bg-[#a1dae0]">free entrance fees for tour destination</div>
							<div className="text-xl py-5 bg-[#94c7cd]"><BiCheck className="m-0 mx-auto size-8" /></div>
							<div className="text-xl py-5 bg-[#94c7cd]"><BiCheck className="m-0 mx-auto size-8" /></div>
							<div className="text-xl py-5 bg-[#94c7cd]"><BiCheck className="m-0 mx-auto size-8" /></div>
						</div>
						<div className="package__des grid grid-cols-5 font-medium text-xl text-center grid-flow-row capitalize">
							<div className="text-xl py-5 col-span-2 bg-tertiary">Include local and outbound tour guide</div>
							<div className="text-xl py-5 bg-[#c2dcdf]"><BiCheck className="m-0 mx-auto size-8" /></div>
							<div className="text-xl py-5 bg-[#c2dcdf]"><BiCheck className="m-0 mx-auto size-8" /></div>
							<div className="text-xl py-5 bg-[#c2dcdf]"><BiCheck className="m-0 mx-auto size-8" /></div>
						</div>
						<div className="package__des grid grid-cols-5 font-medium text-xl text-center grid-flow-row capitalize">
							<div className="text-xl py-5 col-span-2 bg-[#a1dae0]">Transportation service</div>
							<div className="text-xl py-5 bg-[#94c7cd]"><BiCheck className="m-0 mx-auto size-8" /></div>
							<div className="text-xl py-5 bg-[#94c7cd]"><BiCheck className="m-0 mx-auto size-8" /></div>
							<div className="text-xl py-5 bg-[#94c7cd]"><BiCheck className="m-0 mx-auto size-8" /></div>
						</div>
						<div className="package__des grid grid-cols-5 font-medium text-xl text-center grid-flow-row capitalize">
							<div className="text-xl py-5 col-span-2 bg-tertiary">free entrance fees for tour destination</div>
							<div className="text-xl py-5 bg-[#c2dcdf]"><BiCheck className="m-0 mx-auto size-8" /></div>
							<div className="text-xl py-5 bg-[#c2dcdf]"><BiCheck className="m-0 mx-auto size-8" /></div>
							<div className="text-xl py-5 bg-[#c2dcdf]"><BiCheck className="m-0 mx-auto size-8" /></div>
						</div>
						<div className="package__des grid grid-cols-5 font-medium text-xl text-center grid-flow-row capitalize">
							<div className="text-xl py-5 col-span-2 bg-[#a1dae0]">Make activities and events
								based on your tour</div>
							<div className="text-xl py-5 bg-[#94c7cd]"></div>
							<div className="text-xl py-5 bg-[#94c7cd]"><BiCheck className="m-0 mx-auto size-8" /></div>
							<div className="text-xl py-5 bg-[#94c7cd]"><BiCheck className="m-0 mx-auto size-8" /></div>
						</div>
						<div className="package__des grid grid-cols-5 font-medium text-xl text-center grid-flow-row capitalize">
							<div className="text-xl py-5 col-span-2 bg-tertiary">arrange other tour services
								for specific country</div>
							<div className="text-xl py-5 bg-[#c2dcdf]"></div>
							<div className="text-xl py-5 bg-[#c2dcdf]"></div>
							<div className="text-xl py-5 bg-[#c2dcdf]"><BiCheck className="m-0 mx-auto size-8" /></div>
						</div>
						<div className="package__button grid grid-cols-5 font-medium text-xl text-center text-white grid-flow-row">
							<div className="col-span-2"></div>
							<button type="button" onClick={onclickHandalar} className="text-lg bg-secondary py-5">Visit More</button>
							<button type="button" className="text-lg bg-secondary py-5">Visit More</button>
							<button type="button" className="text-lg bg-secondary py-5">Visit More</button>
						</div>
					</div>
				</div>
			</div>
    )
}
