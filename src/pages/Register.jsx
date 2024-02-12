import React from 'react'
import { Image } from '../components/img/Image'
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { Register as RegisterForm } from "../components/form/Register"


const Login = () => {
	const submitHandler = (e) => { }
	console.log("done")
	return (
		<div className='login bg-primary pt-28'>
			<div className='inner-wrap max-w-1240px my-0 mx-auto'>
				<div className='login-box flex flex-row-reverse rounded-[25px] overflow-hidden pb-28'>
					<div className='login-box_img flex-1'>
						<img src={Image.Register} alt="This is login" />
					</div>

					<div className='login-box_text flex-1 flex items-center bg-[#66A3AF] text-center'>
						<div className="inner-box space-y-6 mx-auto">
							<h2 className='text-6xl text-tertiary'>Log In</h2>
							<form className='space-y-6' onSubmit={submitHandler}>
								<div className='socialIcon flex items-center justify-around'>
									<CgFacebook className="text-black bg-tertiary size-12 rounded-full p-2" />
									<AiOutlineInstagram className="text-black bg-tertiary size-12 rounded-full p-2" />
									<AiOutlineTwitter className="text-black bg-tertiary size-12 rounded-full p-2" />
								</div>
								<p className='text-xl text-tertiary'>Or</p>
								<RegisterForm />
								<p className='text-xl text-tertiary'>Don't have an account? <a href="">Register</a></p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
