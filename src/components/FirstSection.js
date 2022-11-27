import { Typography } from "@material-tailwind/react";
import React from "react";
import featureOne from "../images/feature-1.png";
import featureTwo from "../images/feature-2.png";
import CheckIcon from "../utils/CheckIcon";

const FirstSection = () => {
	const firstCheckList = [
		{ id: "1", title: "Continuous integration and deployment" },
		{ id: "2", title: "Development Workflow" },
		{ id: "3", title: "Knowledge management" },
	];
	const checkList = [
		{ id: "1", title: "Dynamic reports and dashboards" },
		{ id: "2", title: "Templates for everyone" },
		{ id: "3", title: "Development workflow" },
		{ id: "4", title: "Limitless business automation" },
		{ id: "5", title: "Knowledge management" },
	];
	return (
		<div className='w-full bg-gray-50 py-14 lg:px-8 px-4'>
			<div className='w-full flex lg:flex-row flex-col justify-between items-center mb-10'>
				<div className='lg:pr-4 lg:w-1/2 w-full lg:mr-8'>
					<Typography className='text-2xl font-extrabold mb-4 font-poppins'>
						Work with tools you already use
					</Typography>
					<div className='pb-8 mb-8 border-b-2'>
						<Typography className='lg:text-lg text-md font-poppins'>
							Deliver great service experiences fast - without the complexity of
							traditional ITSM solutions. Accelerate critical development work,
							eliminate toil, and deploy changes with ease.
						</Typography>
					</div>
					<div>
						{firstCheckList.map((item) => (
							<div className='flex flex-row items-baseline mb-4 '>
								<CheckIcon />
								<Typography className='font-semibold font-poppins lg:text-md text-sm'>
									{item.title}
								</Typography>
							</div>
						))}
					</div>
					<Typography className='lg:text-lg mt-8 font-semibold font-poppins text-md'>
						Deliver great service experiences fast - without the complexity of
						traditional ITSM solutions.
					</Typography>
				</div>
				<div className='w-1/2 hidden lg:block'>
					<img src={featureOne} alt='Feature 1' />
				</div>
			</div>

			<div className='w-full flex lg:flex-row flex-col justify-between items-center py-10'>
				<div className='w-1/2 hidden lg:mr-8 lg:block'>
					<img src={featureTwo} alt='Feature 2' />
				</div>

				<div className='lg:pl-4 lg:w-1/2 w-full'>
					<Typography className='text-2xl font-extrabold mb-4 font-poppins'>
						We invest in the world’s potential
					</Typography>

					<div className='pb-8 mb-8 border-b-2'>
						<Typography className='lg:text-lg text-md font-poppins'>
							Deliver great service experiences fast - without the complexity of
							traditional ITSM solutions. Accelerate critical development work,
							eliminate toil, and deploy changes with ease.
						</Typography>
					</div>

					<div>
						{checkList.map((item) => (
							<div className='flex flex-row items-baseline mb-4'>
								<CheckIcon />
								<Typography className='font-semibold font-poppins lg:text-md text-sm'>
									{item.title}
								</Typography>
							</div>
						))}
					</div>

					<Typography className='lg:text-lg text-md mt-8 font-semibold font-poppins'>
						Deliver great service experiences fast - without the complexity of
						traditional ITSM solutions.
					</Typography>
				</div>
			</div>
		</div>
	);
};

export default FirstSection;
