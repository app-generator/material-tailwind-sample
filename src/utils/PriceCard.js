import React from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import MarkIcon from "../utils/MarkIcon";

const PriceCard = ({ heading, subheading, price, duration, checkLists }) => {
	return (
		<Card className='lg:w-1/3 md:w-[60%]sm:w-full mb-8 lg:mb-auto'>
			<CardBody>
				<Typography className='text-xl font-bold text-center mb-4 font-poppins text-black'>
					{heading}
				</Typography>
				<Typography className=' text-center mb-8 font-poppins text-black'>
					{subheading}
				</Typography>
				<div>
					<div className='flex items-center justify-center mb-8'>
						<span className='flex items-baseline'>
							<Typography className='text-5xl font-extrabold font-poppins text-black'>
								{price}{" "}
							</Typography>
							<Typography className='font-poppins text-black'>
								{" "}
								/{duration}
							</Typography>
						</span>
					</div>
					<div>
						{checkLists?.map((item) => (
							<div className='flex mb-4' key={item.id}>
								<MarkIcon />
								<Typography className='font-poppins text-black'>
									{item.item}
								</Typography>
							</div>
						))}
					</div>
					<Button
						variant='filled'
						color='purple'
						className='w-full mt-4'
						size='lg'
					>
						Get Started
					</Button>
				</div>
			</CardBody>
		</Card>
	);
};

export default PriceCard;
