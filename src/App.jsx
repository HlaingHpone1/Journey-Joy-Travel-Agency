import React from "react"
import Navbar from "./components/navBar/Navbar"
import Footer from "./components/footer/Footer"
import { BrowserRouter, useLocation } from 'react-router-dom'
import { Router } from './components/route/Router';
import { useEffect } from "react";
import axios from 'axios';

function App() {
	const body = {
        body: "New data 1",
        id: 10,
        title: "New Title 1",
        userId: "user2"
    }
	const getData = () => {
			axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => console.log(res.data))
		}
	

	const createData = () => {
			axios.post("https://jsonplaceholder.typicode.com/posts", body).then((res) => console.log(res.data.id))
		
	}
	return (

		// <div className="">
		// 	<button className='mt-44' onClick={getData}> Get Data </button>
		// 	<button onClick={createData}> Create Data</button>
		// </div>
		<BrowserRouter>
			<div className="font-Roboto">
				<Navbar />
				<Router />
				<Footer />
			</div>

		</BrowserRouter>
	)
}

export default App