import { Typography } from "@material-tailwind/react";
import React from "react";
import QuoteIcon from "../utils/QuoteIcon";

const Testimonial = () => {
	return (
		<div className='w-full lg:h-[400px] bg-gray-50 px-8 py-16 flex items-center justify-center '>
			<div className=' lg:w-[80%] w-full flex flex-col items-center justify-center'>
				<QuoteIcon />
				<Typography className='font-bold md:text-base lg:text-2xl text-center mb-4 font-poppins'>
					"Landwind is just awesome. It contains tons of predesigned components
					and pages starting from login screen to complex dashboard. Perfect
					choice for your next SaaS application."
				</Typography>
				<div className='flex items-center'>
					<img
						src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png'
						alt='Michael Gouch'
						className='rounded-full h-6 w-6 mr-4'
					/>
					<Typography className='lg:font-bold mr-3 font-poppins font-semibold font-base'>
						Michael Gouch{" "}
					</Typography>
					<div className='border-l-2 border-gray-600 pl-3'>
						<Typography className='font-poppins font-base'>
							CEO at Google
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
