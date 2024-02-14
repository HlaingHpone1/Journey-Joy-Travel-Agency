import { GiCommercialAirplane } from "react-icons/gi";
import { IoMdBed } from "react-icons/io";
import { BsStarHalf } from "react-icons/bs";
// import { AiFillStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { GiAirplaneDeparture } from "react-icons/gi";
import { GiAirplaneArrival } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from 'react'
import Banner from '../components/banner/Banner'
import { Banner as ImgBanner, Image, Package } from "../components/img/Image"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import CheckBox from "../components/checkBox/CheckBox";
import { AiFillStar, AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';

const getStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < filledStars; i++) {
        stars.push(<AiFillStar key={i} className="text-yellow-500 size-6" />);
    }
    if (halfStar) {
        stars.push(<BsStarHalf key={filledStars} className="text-yellow-500 size-6" />);
    }
    for (let i = 0; i < 5 - filledStars - (halfStar ? 0 : 1); i++) {
        stars.push(<AiFillStar key={filledStars + i + 1} className="text-gray-300 size-6" />);
    }

    return stars;
};

const TourPackage = () => {
    const [rating, setRating] = useState(0);
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = (starIndex) => {
        setRating(starIndex + 1);
    };

    const totalTravelers = adultCount + childCount;

    const [selectedOption, setSelectedOption] = useState('Recommended');

    const filterOptions = [
        { label: 'Recommended', value: 'Recommended' },
        { label: 'Summer', value: 'Summer' },
        { label: 'Winter', value: 'Winter' },
        { label: 'Other', value: 'Other' },
    ];

    const adultOptions = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }];
    const childOptions = [{ value: 0 }, { value: 1 }, { value: 2 }, { value: 3 }];

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
        // console.log('====================================');
        // console.log(e.target.value);
        // console.log('====================================');
        if (e.target.value != "Recommended") {
            const filterItems = cardsData.filter((data) => 
                 data.label === e.target.value
            )
            setData(filterItems);
        }else{
            setData(cardsData);
        }

    };

    const handleAdultCountChange = (event) => {
        setAdultCount(parseInt(event.target.value, 10));
    };

    const handleChildCountChange = (event) => {
        setChildCount(parseInt(event.target.value, 10));
    };

    const handleTotalTravelersClick = () => {
        setShowDropdown(!showDropdown);
    };

    const [selectedScore, setSelectedScore] = useState(null);

    const handleScoreClick = (score) => {
        setSelectedScore(score);
    };

    const amenities = [
        { id: 1, name: 'amenitie1', text: 'Air-Conditioned' },
        { id: 2, name: 'amenitie2', text: 'Airport Shuttle' },
        { id: 3, name: 'amenitie3', text: 'Elevator' },
        { id: 4, name: 'amenitie4', text: 'EV Station' },
        { id: 5, name: 'amenitie5', text: 'GYM' },
        { id: 6, name: 'amenitie6', text: 'Parking' },
        { id: 7, name: 'amenitie7', text: 'Pet Friendly' },
        { id: 8, name: 'amenitie8', text: 'Pool' },
        { id: 9, name: 'amenitie9', text: 'Restaurant' },
        { id: 10, name: 'amenitie10', text: 'Spa' },
        { id: 11, name: 'amenitie11', text: 'Breakfast' },
        { id: 12, name: 'amenitie12', text: 'Wi-Fi' },
        { id: 13, name: 'amenitie13', text: 'Hot Tub' },
        { id: 14, name: 'amenitie14', text: 'Smoking Room' },
        { id: 15, name: 'amenitie15', text: 'Golf' },
    ];

    const [selectedAmenities, setSelectedAmenities] = useState([]);

    const handleCheckboxChange = (e) => {
        const amenitie = amenities.find((item) => item.name === e.target.name);
        if (e.target.checked) {
            setSelectedAmenities([...selectedAmenities, amenitie]);
        } else {
            setSelectedAmenities(selectedAmenities.filter((item) => item.id !== amenitie.id));
        }
    };

    const cardsData = [
        {
            image: Package.Package2,
            fromLocation: "Yangon",
            toLocation: "Bangkok",
            reviewPoint: "9.5",
            reviewLevel: "Excellent",
            reviewCount: "6,515 Reviews",
            services: ["Breakfast", "Free Wi-Fi"],
            flightTime: "6:30 PM Yangon, Terminal 1, 1 Stops",
            label: "Other",
            price: 520,
        },
        {
            image: Package.Package1,
            fromLocation: "Yangon",
            toLocation: "Tokyo",
            reviewPoint: "8.5",
            reviewLevel: "Excellent",
            reviewCount: "8,515 Reviews",
            services: ["Breakfast", "Free Wi-Fi"],
            flightTime: "5:30 PM Yangon, Terminal 5, 2 Stops",
            label: "Winter",
            price: 650,
        },
        {
            image: Package.Package3,
            fromLocation: "Yangon",
            toLocation: "Hong Kong",
            reviewPoint: "5.5",
            reviewLevel: "Good",
            reviewCount: "5,015 Reviews",
            services: ["Breakfast", "Free Wi-Fi"],
            flightTime: "7:00 AM Yangon, Terminal 3, 1 Stops",
            label: "Summer",
            price: 600,
        },
        {
            image: Package.Package4,
            fromLocation: "Yangon",
            toLocation: "Canada",
            reviewPoint: "7.0",
            reviewLevel: "Good",
            reviewCount: "10,200 Reviews",
            services: ["Breakfast", "Free Wi-Fi"],
            flightTime: "8:00 PM Yangon, Terminal 4, 2 Stops",
            label: "Summer",
            price: 800,
        },
        {
            image: Package.Package5,
            fromLocation: "Yangon",
            toLocation: "Paris",
            reviewPoint: "6.7",
            reviewLevel: "Excellent",
            reviewCount: "60,515 Reviews",
            services: ["Breakfast", "Free Wi-Fi"],
            flightTime: "6:00 AM Yangon, Terminal 5, 3 Stops",
            label: "Summer",
            price: 1500,
        },
        {
            image: Package.Package6,
            fromLocation: "Yangon",
            toLocation: "London",
            reviewPoint: "9.0",
            reviewLevel: "Excellent",
            reviewCount: "9,300 Reviews",
            services: ["Breakfast", "Free Wi-Fi"],
            flightTime: "5:30 AM Yangon, Terminal 5, 3 Stops",
            label: "Winter",
            price: 1300,
        },
    ];

    const [data, setData] = useState(cardsData);

    return (
        <div>
            <Banner image={ImgBanner.Banner4} header="Tour Package" text="Home / Pages / Tour Package" />
            <div className="tour-package pt-9 pb-28 bg-primary">
                <div className="inner-wrap max-w-1240px m-0 mx-auto ">
                    <div className="text-white mb-3">
                        <p className="flex items-center mr-3" onClick={handleTotalTravelersClick}> Travelers {totalTravelers} <IoIosArrowDown /></p>
                        {showDropdown && (
                            <div className="traveller-amount bg-gray-900 absolute py-3 px-7 rounded-md">
                                <label htmlFor="adult-select">Adults:</label>
                                <select className="bg-transparent focus:outline-none" id="adult-select" value={adultCount} onChange={handleAdultCountChange}>
                                    {adultOptions.map((option) => (
                                        <option className="bg-gray-800" key={option.value} value={option.value}>
                                            {option.value}
                                        </option>
                                    ))}
                                </select>

                                <label htmlFor="child-select">Children:</label>
                                <select className="bg-transparent focus:outline-none" id="child-select" value={childCount} onChange={handleChildCountChange}>
                                    {childOptions.map((option) => (
                                        <option className="bg-gray-800" key={option.value} value={option.value}>
                                            {option.value}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        )}
                    </div>
                    <div className="search-category flex justify-between items-center mb-5">
                        <div className="from-box py-4 flex justify-center items-center  border-b-2 border-black bg-white rounded-[15px] px-5">
                            <GiAirplaneDeparture className="size-9 mr-2 opacity-50 " />
                            <input className="focus:outline-0 text-lg bg-transparent text-black" type="text" placeholder="From" />
                        </div>

                        <div className="from-to py-4 flex justify-center items-center  border-b-2 border-black bg-white rounded-[15px] px-5">
                            <GiAirplaneArrival className="size-9 mr-2 opacity-50 " />
                            <input className="focus:outline-0 text-lg bg-transparent text-black" type="text" placeholder="To" />
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
                        <div className="side-bar w-[250px] h-fit bg-white rounded-lg pb-3 overflow-hidden">
                            <div className="map h-20 flex justify-center items-center mb-3" style={{ background: `url(${Image.MapPackage})` }}>
                                <button className="bg-white p-2.5 rounded-lg hover:bg-secondary hover:text-white transition-colors duration-300 ease-linear">Go To Map</button>
                            </div>
                            <div className="side-inner max-w-[170px] m-0 mx-auto space-y-3 font-Roboto-Slab">
                                <div className="stop">
                                    <p className="title font-bold text-center text-lg">Stop</p>
                                    <div className="check-list">
                                        <CheckBox name="airlist" text="2+ Stop" />
                                        <CheckBox name="airlist1" text="Non Stop" />
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
                                        <CheckBox name="airline1" text="Emirates" />
                                        <CheckBox name="airline2" text="MAI" />
                                        <CheckBox name="airline3" text="Qatar Airways" />
                                        <CheckBox name="airline4" text="TMA" />
                                    </div>
                                </div>
                                <div className="reviewScore">
                                    <p className="title font-bold text-center text-lg  mb-3">Review Score</p>
                                    <div className="review-box flex justify-between">
                                        <div className={`review outline outline-2 outline-black rounded-lg p-1.5 font-sm font-bold ${selectedScore === 0 ? 'bg-secondary outline-0 outline-transparent' : ''}`} onClick={() => handleScoreClick(0)}>
                                            0+
                                        </div>
                                        <div className={`review outline outline-2 outline-black rounded-lg p-1.5 font-sm font-bold ${selectedScore === 6 ? 'bg-secondary outline-0 outline-transparent' : ''}`} onClick={() => handleScoreClick(6)}>
                                            6+
                                        </div>
                                        <div className={`review outline outline-2 outline-black rounded-lg p-1.5 font-sm font-bold ${selectedScore === 7 ? 'bg-secondary outline-0 outline-transparent' : ''}`} onClick={() => handleScoreClick(7)}>
                                            7+
                                        </div>
                                        <div className={`review outline outline-2 outline-black rounded-lg p-1.5 font-sm font-bold ${selectedScore === 8 ? 'bg-secondary outline-0 outline-transparent' : ''}`} onClick={() => handleScoreClick(8)}>
                                            8+
                                        </div>
                                        <div className={`review outline outline-2 outline-black rounded-lg p-1.5 font-sm font-bold ${selectedScore === 9 ? 'bg-secondary outline-0 outline-transparent' : ''}`} onClick={() => handleScoreClick(9)}>
                                            9+
                                        </div>
                                    </div>
                                </div>

                                <div className="board">
                                    <p className="title font-bold text-center text-lg  mb-3">Board</p>
                                    <div className="check-list">
                                        <CheckBox name="board" text="Breakfast" />
                                        <CheckBox name="board1" text="Meal included" />
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
                                        <div>
                                            {amenities.map((amenitie) => (
                                                <CheckBox
                                                    key={amenitie.id}
                                                    name={amenitie.name}
                                                    text={amenitie.text}
                                                    checked={selectedAmenities.some((item) => item.id === amenitie.id)}
                                                    onChange={handleCheckboxChange}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ml-5 cards col-span-4">
                            <div className="card-filter text-white flex justify-between mb-3">
                                <div className="package-number">{`${data.length} of ${cardsData.length} Packages`}</div>
                                <div className="filter-dropdown">
                                    <div>
                                        <label htmlFor="filter-select">Sorted by</label>
                                        <select className="bg-transparent focus:outline-0 font-bold" id="filter-select" value={selectedOption} onChange={handleSelectChange}>
                                            {filterOptions.map((option) => (
                                                <option className="bg-gray-800" key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {data.map((card, index) => {
                                    // Calculate review level dynamically
                                    let reviewLevel;
                                    if (card.reviewPoint >= 8.0) {
                                        reviewLevel = "Excellent";
                                    } else if (card.reviewPoint >= 6.0) {
                                        reviewLevel = "Good";
                                    } else {
                                        reviewLevel = "Average";
                                    }

                                    let fullStars = Math.floor(card.reviewPoint / 2);
                                    let halfStar = card.reviewPoint / 2 - fullStars >= 0.5 ? 1 : 0;
                                    let emptyStars = 5 - fullStars - halfStar;

                                    return (
                                        <div key={index} className="card rounded-3xl overflow-hidden mb-3.5 shadow-md shadow-neutral-500 bg-[#f4f4f4] flex">
                                            <img className="block" src={card.image} alt="This is Package Photo" />

                                            <div className="card-des ps-3.5 font-Roboto-Slab py-3.5">
                                                <div className="title flex items-center space-x-3.5 mb-5">
                                                    <div className="capitalize text-2xl font-bold from-location">
                                                        {card.fromLocation}
                                                    </div>
                                                    <MdOutlineKeyboardDoubleArrowRight className="size-7" />
                                                    <div className="capitalize text-2xl font-bold to-location">{card.toLocation}</div>
                                                </div>
                                                <div className="stars flex mb-4">
                                                    {[...Array(fullStars)].map((_, i) => (
                                                        <AiFillStar key={i} className="text-yellow-500 size-6" />
                                                    ))}
                                                    {halfStar === 1 && <BsStarHalf className="text-yellow-500 size-6" />}
                                                    {[...Array(emptyStars)].map((_, i) => (
                                                        <AiOutlineStar key={i} className="text-yellow-500 size-6" />
                                                    ))}
                                                </div>
                                                <div className="flex justify-between w-[475px] items-center pr-14">
                                                    <div className="review flex space-x-3.5">
                                                        <div className={`review-point p-1.5  rounded-lg w-fit font-medium font-Roboto-Slab text-white ${reviewLevel === 'Excellent' ? 'bg-green-700' : 'bg-black'}`}>
                                                            {card.reviewPoint}
                                                        </div>
                                                        <div className="review-text text-xs">
                                                            <div className="review-level font-bold">{reviewLevel}</div>
                                                            <div className="review-count">{card.reviewCount}</div>
                                                        </div>
                                                    </div>
                                                    <div className="hotel-services">
                                                        {card.services.map((service, i) => (
                                                            <div key={i} className="hotel-service flex space-x-2.5">
                                                                <IoMdBed className="size-7" /> <label htmlFor="">{service}</label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiCommercialAirplane className="size-7" /><p className=" ml-3">{card.flightTime}</p>
                                                </div>
                                                <div className="flight-detail flex items-center">
                                                    <p>See Flight Details</p> <IoIosArrowDown className="size-5" />
                                                </div>
                                            </div>
                                            <div className="card-price flex flex-col justify-center space-y-12 ps-3 border-s-2 border-gray-300">
                                                <div className="price-bloc">
                                                    <div className="price font-bold font-Roboto-Slab text-2xl">{`$ ${card.price}`}</div>
                                                    <div className="total-price text-sm">{`$ ${card.price * totalTravelers}`}</div>
                                                </div>
                                                <button className="bg-primary text-white p-2.5 rounded-lg" type="button">View Deal</button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TourPackage
