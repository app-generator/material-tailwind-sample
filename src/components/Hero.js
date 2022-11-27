import { Typography } from "@material-tailwind/react";
import React from "react";
import hero from "../images/hero.png";
import github from "../images/github.svg";
import figma from "../images/figma.svg";
import Airbnb from "../utils/Airbnb";
import Google from "../utils/Google";
import Microsoft from "../utils/Microsoft";
import Spotify from "../utils/Spotify";
import MailChimp from "../utils/MailChimp";
import Mashable from "../utils/Mashable";

const Hero = () => {
	const icons = [
		{ id: "1", icon: <Airbnb /> },
		{ id: "2", icon: <Google /> },
		{ id: "3", icon: <Microsoft /> },
		{ id: "4", icon: <Spotify /> },
		{ id: "5", icon: <MailChimp /> },
		{ id: "6", icon: <Mashable /> },
	];
	return (
		<div className='w-full p-4'>
			<div className='w-full flex lg:flex-row flex-col items-center justify-between lg:h-[65vh]'>
				<div className='lg:px-4 lg:pr-8'>
					<Typography className='max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white font-poppins'>
						Building digital <br />
						products & brands.
					</Typography>
					<Typography className='text-md lg:text-lg mb-8 text-gray-600 font-poppins lg:font-medium'>
						This free and open-source landing page template was built using the
						utility classes from{" "}
						<span className='hover:cursor-pointer hover:underline font-poppins'>
							Tailwind CSS
						</span>{" "}
						and based on the components from the{" "}
						<span className='hover:cursor-pointer hover:underline font-poppins'>
							Flowbite Library
						</span>{" "}
						and the{" "}
						<span className='hover:cursor-pointer hover:underline font-poppins'>
							Blocks System.
						</span>{" "}
					</Typography>
					<div className='w-full flex md:flex-row items-center flex-col'>
						<button className='border-[1px] px-4 py-2 md:mr-5 rounded-lg font-poppins flex items-center hover:bg-gray-100 mb-4 w-full md:w-auto justify-center text-sm'>
							<img src={github} alt='GitHub' className='mr-2' />
							View on GitHub
						</button>
						<button className='border-[1px] px-4 py-2 rounded-lg font-poppins flex items-center hover:bg-gray-100 mb-4 w-full justify-center md:w-auto text-sm'>
							<img src={figma} alt='Figma' className='mr-2' />
							Get Figma File
						</button>
					</div>
				</div>
				<div className='hidden lg:block'>
					<img src={hero} alt='Hero' />
				</div>
			</div>
			<div className='w-full p-4 flex items-center lg:justify-around justify-between flex-wrap lg:h-[20vh]'>
				{icons.map((icon) => (
					<div
						className=' items-center opacity-60 cursor-pointer m-4'
						key={icon.id}
					>
						{icon.icon}
					</div>
				))}
			</div>
		</div>
	);
};

export default Hero;
