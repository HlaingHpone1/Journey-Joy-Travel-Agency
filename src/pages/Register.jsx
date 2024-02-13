import React from 'react'
import { Image } from '../components/img/Image'
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { Register as RegisterForm } from "../components/form/Register"
import { Link } from 'react-router-dom';


const Register = () => {
	const submitHandler = (e) => { }
	console.log("done")
	return (
		<div className='Register bg-primary pt-28'>
			<div className='inner-wrap max-w-1240px my-0 mx-auto'>
				<div className='Register-box flex flex-row-reverse rounded-[25px] overflow-hidden pb-28'>
					<div className='Register-box_img flex-1'>
						<img src={Image.Register} alt="This is Register" />
					</div>

					<div className='Register-box_text rounded-bl-[25px] flex-1 flex items-center bg-[#66A3AF] text-center'>
						<div className="inner-box space-y-6 mx-auto">
							<h2 className='text-6xl text-tertiary'>Create Account</h2>
							<form className='space-y-6' onSubmit={submitHandler}>
								<div className='socialIcon flex items-center justify-around'>
									<a href="https://www.facebook.com/">
										<CgFacebook className="text-black bg-tertiary size-12 rounded-full p-2 hover:text-white hover:bg-primary transition-colors duration-300 ease-linear" />
									</a>
									<a href="https://www.instagram.com/">
										<AiOutlineInstagram className="text-black bg-tertiary size-12 rounded-full p-2 hover:text-white hover:bg-primary transition-colors duration-300 ease-linear" />
									</a>
									<a href="https://twitter.com/">
										<AiOutlineTwitter className="text-black bg-tertiary size-12 rounded-full p-2 hover:text-white hover:bg-primary transition-colors duration-300 ease-linear" />
									</a>
								</div>
								<div className="or flex items-center justify-between">
									<div class=" w-2/5 h-0.5 top-2/4 bg-white"></div>
									<p className='text-xl text-tertiary'>Or</p>
									<div class=" w-2/5 h-0.5 top-2/4 bg-white"></div>
								</div>
								<RegisterForm />
								<Link className='text-xl text-tertiary' to="/login" >Already have an account? Login</Link>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Register
