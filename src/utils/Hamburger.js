import React from "react";

const Hamburger = ({ toggleMobileNav }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className='w-7 h-7 ml-3 text-gray-700 cursor-pointer md:hidden inline-block'
			onClick={toggleMobileNav}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
			/>
		</svg>
	);
};

export default Hamburger;
