import React from "react"
import Navbar from "./components/navBar/Navbar"
import Footer from "./components/footer/Footer"
import { BrowserRouter, useLocation } from 'react-router-dom'
import {Router} from './components/route/Router';

function App() {

	return (
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