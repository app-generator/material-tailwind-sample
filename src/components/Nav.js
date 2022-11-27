import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import logo from "../images/logo.svg";
import star from "../images/star.svg";
import Hamburger from "../utils/Hamburger";

const Nav = () => {
	const [mobileNav, setMobileNav] = useState(false);
	const toggleMobileNav = () => setMobileNav(!mobileNav);

	const links = [
		{ id: "1", url: "/", name: "Home" },
		{ id: "2", url: "/company", name: "Company" },
		{ id: "3", url: "/market", name: "Marketplace" },
		{ id: "4", url: "features", name: "Features" },
		{ id: "5", url: "team", name: "Team" },
		{ id: "6", url: "contact", name: "Contact" },
	];
	return (
		<>
			<nav className='h-[10vh] flex flex-row items-center px-3 justify-between top-0 sticky md:mb-4 bg-white z-50'>
				<div className='flex flex-row items-center'>
					<img src={logo} alt='Landwind logo' className='h-6 mr-3 sm:h-9' />
					<Typography className='font-bold text-lg font-poppins'>
						Landwind
					</Typography>
				</div>

				<div className='hidden  lg:flex flex-row items-center '>
					{links.map((link) => (
						<a
							href={link.url}
							className='mx-3 text-gray-600 font-poppins hover:text-purple-700 active:text-purple-700'
							key={link.id}
						>
							{link.name}
						</a>
					))}
				</div>

				<div className='flex flex-row items-center'>
					<div className='border-[1px] border-gray-400 hidden md:flex items-center justify-between rounded-[3px] mr-4 '>
						<a
							href='/'
							className='flex items-center justify-center bg-gray-100 px-2 py-1 '
						>
							<img src={star} alt='Github Stars' className='mr-1' />
							<span className='text-sm font-poppins font-semibold text-[12px]'>
								Star
							</span>
						</a>

						<a
							href='/'
							className='text-[12px] border-l-[1px] border-gray-400 px-2 py-1 hover:text-purple-300'
						>
							222
						</a>
					</div>

					<a
						href='/'
						className='font-poppins text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800'
					>
						Download
					</a>
					<Hamburger toggleMobileNav={toggleMobileNav} />
				</div>
			</nav>
			{mobileNav ? (
				<ul className='w-full md:hidden block'>
					{links.map((li) => (
						<li key={li.id}>
							<a
								href={li.url}
								className='p-2 w-full block hover:bg-gray-100 cursor-pointer active:bg-purple-500 active:text-white rounded-sm border-[1px] border-gray-50'
							>
								{li.name}
							</a>
						</li>
					))}
				</ul>
			) : (
				""
			)}
		</>
	);
};

export default Nav;
