import React from 'react'
import { Image } from '../components/img/Image'
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { Login as LoginForm } from "../components/form/Login"
import { Link } from 'react-router-dom';

const Login = () => {
	const submitHandler = (e) => { }
	console.log("done")
	return (
		<div className='login bg-primary pt-28'>
			<div className='inner-wrap max-w-1240px my-0 mx-auto'>
				<div className='login-box flex rounded-[25px] overflow-hidden pb-28'>
					<div className='login-box_img flex-1'>
						<img src={Image.Login} alt="This is login" />
					</div>

					<div className='login-box_text rounded-br-[25px] flex-1 flex items-center bg-gradient-to-tr from-[rgba(5,68,94,1)] to-[rgba(24,154,180,1)] text-center'>
						<div className="inner-box space-y-6 mx-auto">
							<h2 className='text-6xl text-tertiary'>Log In</h2>
							<form className='space-y-6' onSubmit={submitHandler}>
								<div className='socialIcon flex items-center justify-around'>
									<CgFacebook className="text-black bg-tertiary size-12 rounded-full p-2 hover:text-white hover:bg-primary transition-colors duration-300 ease-linear" />
									<AiOutlineInstagram className="text-black bg-tertiary size-12 rounded-full p-2 hover:text-white hover:bg-primary transition-colors duration-300 ease-linear" />
									<AiOutlineTwitter className="text-black bg-tertiary size-12 rounded-full p-2 hover:text-white hover:bg-primary transition-colors duration-300 ease-linear" />
								</div>
								<div className="or flex items-center justify-between">
									<div class=" w-2/5 h-0.5 top-2/4 bg-white"></div>
									<p className='text-xl text-tertiary'>Or</p>
									<div class=" w-2/5 h-0.5 top-2/4 bg-white"></div>
								</div>
								<LoginForm />
								<Link className='text-xl text-tertiary' to="/register">Don't have an account? Register</Link>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
