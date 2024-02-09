import React from "react"
import Navbar from "./components/navBar/Navbar"
import Footer from "./components/footer/Footer"
import {Image} from "./components/img/Image.js"

function App() {

	return (
		<div className="">

			<Navbar />
			<Footer />

			<img src={Image.Register} alt="" />
		</div>
	)
}

export default App
