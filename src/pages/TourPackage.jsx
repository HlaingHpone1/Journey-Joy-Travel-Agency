import { AiFillStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { GiAirplaneDeparture } from "react-icons/gi";
import { GiAirplaneArrival } from "react-icons/gi";
import React, { useState } from 'react'
import Banner from '../components/banner/Banner'
import { Banner as ImgBanner, Image } from "../components/img/Image"


const TourPackage = ({ startPrice, endPrice, onChange }) => {
    const [rating, setRating] = useState(0);

    const handleClick = (starIndex) => {
        setRating(starIndex + 1);
    };


    return (
        <div>
            <Banner image={ImgBanner.Banner4} header="Tour Package" text="Home / Pages / Tour Package" />
            <div className="tour-package pt-9 pb-28 bg-primary">
                <div className="inner-wrap max-w-1240px m-0 mx-auto ">
                    <div className="search-category flex justify-between items-center mb-5">
                        <div className="from-box py-4 flex justify-center items-center  border-b-2 border-black bg-white rounded-[15px] px-5">
                            <GiAirplaneDeparture className="size-9 mr-2 opacity-50 " />
                            <input className="focus:outline-0 text-lg bg-transparent text-black" type="text" placeholder="From" />
                        </div>

                        <div className="from-to py-4 flex justify-center items-center  border-b-2 border-black bg-white rounded-[15px] px-5">
                            <GiAirplaneArrival className="size-9 mr-2 opacity-50 " />
                            <input className="focus:outline-0 text-lg bg-transparent text-black" type="text" placeholder="From" />
                        </div>

                        <div className="from-to py-4 flex justify-center items-center  border-b-2 border-black bg-white rounded-[15px] px-5">
                            <BsFillCalendarWeekFill className="size-9 p-1 mr-2 opacity-50 " />
                            <input className="focus:outline-0 text-lg bg-transparent text-black" type="date" placeholder="From" />
                        </div>

                        <div className="from-to py-4 flex justify-center items-center  border-b-2 border-black bg-white rounded-[15px] px-5">
                            <BsFillCalendarWeekFill className="size-9 p-1 mr-2 opacity-50 " />
                            <input className="focus:outline-0 text-lg bg-transparent text-black" type="date" placeholder="From" />
                        </div>
                        <div className="search-icon bg-white rounded-[15px] px-5 py-4">
                            <BiSearch className="size-9 mr-2" />
                        </div>
                    </div>
                    <div className="package-container grid grid-cols-5">
                        <div className="side-bar w-[250px] bg-white rounded-lg pb-3 overflow-hidden">
                            <div className="map h-20 flex justify-center items-center mb-3" style={{ background: `url(${Image.MapPackage})` }}>
                                <button className="bg-white p-2.5 rounded-lg">Go To Map</button>
                            </div>
                            <div className="side-inner max-w-[170px] m-0 mx-auto space-y-3 font-Roboto-Slab">
                                <div className="stop">
                                    <p className="title font-bold text-center text-lg">Stop</p>
                                    <div className="check-list">
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="airlist" id="airlist" />
                                            <label htmlFor="airlist">2+ Stop</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="airlist" id="airlist1" />
                                            <label htmlFor="airlist1">Non Stop</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="hotel">
                                    <p className="title font-bold text-center text-lg mb-3">Hotel Class</p>
                                    <div className="stars flex">
                                        {[...Array(5)].map((_, index) => (
                                            <AiFillStar
                                                key={index}
                                                className={`size-6 block ${index < rating ? 'text-yellow-500' : 'text-black'
                                                    } hover:text-yellow-500 transition-colors duration-300 ease-linear`}
                                                onClick={() => handleClick(index)}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="airlines">
                                    <p className="title font-bold text-center text-lg  mb-3">Air Lines</p>
                                    <div className="check-list">
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="airline1" id="airline1" />
                                            <label htmlFor="airline1">Emirates</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="airline2" id="airline2" />
                                            <label htmlFor="airline2">MAI</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="airline3" id="airline3" />
                                            <label htmlFor="airline3">Qatar Airways</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="airline4" id="airline4" />
                                            <label htmlFor="airline4">TMA</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="reviewScore">
                                    <p className="title font-bold text-center text-lg  mb-3">Review Score</p>

                                </div>

                                <div className="board">
                                    <p className="title font-bold text-center text-lg  mb-3">Board</p>
                                    <div className="check-list">
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="board" id="board" />
                                            <label htmlFor="board">Breakfast</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="board1" id="board1" />
                                            <label htmlFor="board1">Meal included</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="freebies">
                                    <p className="title font-bold text-center text-lg  mb-3">Freebies</p>
                                    <div className="check-list">
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="freebies" id="freebies" />
                                            <label htmlFor="freebies">Free Breakfast</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="freebies1" id="freebies1" />
                                            <label htmlFor="freebies1">Free Internet</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="freebies2" id="freebies2" />
                                            <label htmlFor="freebies2">Free Airport shuttle</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="freebies3" id="freebies3" />
                                            <label htmlFor="freebies3">Free Parking</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="amenities">
                                    <p className="title font-bold text-center text-lg  mb-3">Amenities</p>
                                    <div className="check-list">
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="amenitie1" id="amenitie1" />
                                            <label htmlFor="amenitie1">Air-Conditioned</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="amenitie2" id="amenitie2" />
                                            <label htmlFor="amenitie2">Airport Shuttle</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="amenitie3" id="amenitie3" />
                                            <label htmlFor="amenitie3">Elevator</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="amenitie4" id="amenitie4" />
                                            <label htmlFor="amenitie4">EV Station</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="amenitie5" id="amenitie5" />
                                            <label htmlFor="amenitie5">GYM</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="amenitie6" id="amenitie6" />
                                            <label htmlFor="amenitie6">Kitchen</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="amenitie7" id="amenitie7" />
                                            <label htmlFor="amenitie7">Parking</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="amenitie8" id="amenitie8" />
                                            <label htmlFor="amenitie8">Pet Friendly</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="amenitie9" id="amenitie9" />
                                            <label htmlFor="amenitie9">Pool</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="amenitie10" id="amenitie10" />
                                            <label htmlFor="amenitie10">Restaurant</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="amenitie11" id="amenitie11" />
                                            <label htmlFor="amenitie11">Spa</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="amenitie12" id="amenitie12" />
                                            <label htmlFor="amenitie12">Wi-Fi</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="amenitie13" id="amenitie13" />
                                            <label htmlFor="amenitie13">Hot Tub</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="amenitie13" id="amenitie13" />
                                            <label htmlFor="amenitie13">Smoking Room</label>
                                        </div>
                                        <div className="list">
                                            <input className="mr-2" type="checkbox" name="amenitie14" id="amenitie14" />
                                            <label htmlFor="amenitie14">Golf</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ml-5 cards col-span-4 h-[50vh] bg-gray-500">

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TourPackage
