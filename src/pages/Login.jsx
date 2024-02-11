import React from 'react'
import { Image } from '../components/img/Image'
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";



const Login = () => {
	const submitHandler = (e)=>{}
        console.log("done")
	return (
		<div className='login bg-primary'>
			<div className='inner-wrap max-w-1240px my-0 mx-auto'>
				<div className='login-box flex'>
					<div className='login-box_img'>
						
					</div>

					<div className='login-box_text my-0 mx-auto'>
					<h2>Log In</h2>
						<form onSubmit={submitHandler}>
							<div className='socialIcon flex'>
								<div className='facebook'>
									<TiSocialFacebook />
								</div>
								<div className='twitter'>
									<TiSocialTwitter />
								</div>
								<div className='twitter'>
									<SlSocialInstagram />
								</div>
							</div>
							<Login/>
							<p>Or</p>
							<p>Forgot your password?</p>
							<p>Don't have an account? <a href="">Register</a></p> 
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
