import { Typography } from "@material-tailwind/react";
import React from "react";
import Arrow from "../utils/Arrow";

const SecondSection = () => {
	const bottomLinks = [
		{
			id: "1",
			title: "Explore Legality Guide",
			link: "/",
		},
		{ id: "2", title: "Visit the Trust Center", link: "/" },
	];

	return (
		<div className='w-full bg-white py-14 min-h-[100vh] lg:px-8 px-4 flex lg:flex-row flex-col lg:items-center'>
			<div className='lg:pr-6 lg:w-1/2 w-full lg:mr-16'>
				<Typography className='font-bold text-lg text-purple-600 mb-4 font-poppins'>
					Trusted Worldwide
				</Typography>
				<Typography className='font-extrabold text-2xl mb-4 font-poppins'>
					Trusted by over 600 million users and 10,000 teams
				</Typography>
				<div className='pb-8 mb-8 border-b-2'>
					<Typography className='lg:text-lg text-md font-poppins'>
						Deliver great service experiences fast - without the complexity of
						traditional ITSM solutions. Accelerate critical development work,
						eliminate toil, and deploy changes with ease.
					</Typography>
				</div>
				{bottomLinks.map((link) => (
					<a
						href={link.link}
						className='flex text-purple-600 font-poppins mb-4'
						key={link.id}
					>
						<Typography className='font-bold text-purple-600 font-poppins'>
							{link.title}
						</Typography>
						<Arrow />
					</a>
				))}
			</div>

			<div className='lg:w-1/2 w-full'>
				<div className='w-full flex lg:flex-row flex-col items-center justify-between lg:mb-12 lg:space-x-5 '>
					<div className='lg:w-1/2 w-full mb-6'>
						<svg
							class='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								d='M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z'
								clip-rule='evenodd'
							></path>
						</svg>
						<Typography className='text-2xl mb-2 font-extrabold font-poppins'>
							99.99%
						</Typography>
						<Typography className='text-md font-poppins'>
							For Landwind, with zero maintenance downtime
						</Typography>
					</div>
					<div className='lg:w-1/2 w-full mb-6'>
						<svg
							class='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z'></path>
						</svg>
						<Typography className='text-2xl mb-2 font-extrabold font-poppins'>
							600M+ Users
						</Typography>
						<Typography className='text-md font-poppins'>
							Trusted by over 600 milion users around the world
						</Typography>
					</div>
				</div>

				<div className='w-full flex lg:flex-row flex-col items-center justify-between lg:space-x-5'>
					<div className='lg:w-1/2 w-full mb-6'>
						<svg
							class='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								d='M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z'
								clip-rule='evenodd'
							></path>
						</svg>
						<Typography className='text-2xl mb-2 font-extrabold font-poppins'>
							100+ countries
						</Typography>
						<Typography className='text-md font-poppins'>
							Have used Landwind to create functional websites
						</Typography>
					</div>
					<div className='lg:w-1/2 w-full'>
						<svg
							class='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z'></path>
						</svg>
						<Typography className='text-2xl mb-2 font-extrabold font-poppins'>
							5+ Million
						</Typography>
						<Typography className='text-md font-poppins'>
							Transactions per day
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SecondSection;
