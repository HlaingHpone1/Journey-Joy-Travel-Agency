import React from 'react'
import { Image } from '../components/img/Image'

const Index = () => {
	return (
		<div className="bg-primary pt-14">
		 <div className="inner-wrap max-w-1240px my-0 mx-auto">
		     
			  {/* <h1 className="text-4xl font-bold">Welcome to our Traveling Website</h1>
		         <p className="text-lg mt-4">Explore the world with us!</p>
				<img src={Image.Mainviual} alt="This is Mainvisual" /> */}
		     
		       
		       <main>
				<div>
					<h1 className="text-4xl font-bold">Time to travel</h1>
		         <p className="text-lg mt-4">Explore the world with us!</p>
				<img src={Image.Mainviual} alt="This is Mainvisual" />
				</div>
			   
				<div >
           
                <h1 className="text-4xl font-bold">Popular tour</h1>
                <p className="text-xl">Your Gateway to Unforgettable Journeys. Immerse yourself in our curated selection of top-rated adventures, where every destination tells a story and every experience is a chapter waiting to be written. At Popular Tours, we redefine travel by offering you the most sought-after destinations and captivating experiences. Let the allure of our popular tours be your guide, as we invite you to discover the world's wonders in style. Unearth extraordinary landscapes, delve into diverse cultures, and create lasting memories with Popular Tours – where popularity meets unparalleled exploration.</p>
            
            <main className="flex gap-4">
                {/* Display images horizontally with a little space between them */}
                <img src={Image.Img1} alt="City"  />
                <img src={Image.Img2} alt="City"  />
                <img src={Image.Img3} alt="City"  />
                <img src={Image.Img4} alt="City"  />
            </main>
        </div>
		         <div>

				 </div>
		  
		       </main>
		</div>  
		</div> 
	)
}

export default Index


// pages/HomePage.jsx
// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="container mx-auto">
//       <header className="text-center py-10">
//         <h1 className="text-4xl font-bold">Welcome to our Traveling Website</h1>
//         <p className="text-lg mt-4">Explore the world with us!</p>
//       </header>
//       <main>
//         {/* Add your main content here */}
//         <p className="text-xl">Discover amazing destinations...</p>
//         <p className="text-xl">Book your next adventure...</p>
//       </main>
//       <footer className="text-center py-6">
//         <p>&copy; 2024 Traveling Website. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default HomePage;
