import { Button, Typography } from "@material-tailwind/react";
import React from "react";

const AdsContainer = () => {
	return (
		<div className='bg-gray-50 w-full  p-16 flex flex-col items-center justify-center'>
			<Typography className='md:text-3xl text-2xl font-extrabold mb-4 font-poppins'>
				Start your free trial today
			</Typography>
			<Typography className='mb-4 font-poppins text-center '>
				Try Landwind Platform for 30 days. No credit card required.
			</Typography>
			<Button variant='filled' color='purple' className='font-poppins'>
				Free trial for 30 days
			</Button>
		</div>
	);
};

export default AdsContainer;
