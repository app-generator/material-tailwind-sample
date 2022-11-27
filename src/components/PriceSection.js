import {
	Typography,
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import React, { useState } from "react";
import PriceCard from "../utils/PriceCard";

const PriceSection = () => {
	const [open, setOpen] = useState(1);

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};
	const faqs = [
		{
			id: 1,
			heading: "Can I use Landwind in open-source projects?",
			content:
				"Landwind is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.",
		},
		{
			id: 2,
			heading: "Is there a Figma file available?",
			content:
				"Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file. Check out the Figma design system based on the utility classes from Tailwind CSS and components from Landwind.",
		},
		{
			id: 3,
			heading: "What are the differences between Landwind and Tailwind UI?",
			content:
				"The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds. Learn more about these technologies: Landwind Pro and Tailwind UI.",
		},
		{
			id: 5,
			heading: "What about browser support?",
			content:
				"Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds. Learn more about these technologies: Landwind Pro and Tailwind UI.",
		},
	];
	return (
		<div className='w-full px-8 py-16'>
			<div className='md:max-w-[70%] w-full mx-auto mb-16'>
				<Typography className='md:text-3xl text-2xl font-bold text-center mb-4 font-poppins'>
					Designed for business teams like yours
				</Typography>
				<Typography className='md:text-lg text-md text-center font-poppins'>
					Here at Landwind we focus on markets where technology, innovation, and
					capital can unlock long-term value and drive economic growth.
				</Typography>
			</div>

			<div className='flex lg:flex-row flex-col items-center justify-between lg:space-x-8 mb-24'>
				<PriceCard
					heading='Starter'
					subheading='Best option for personal use & for your next project.'
					price='$29'
					duration='month'
					checkLists={[
						{
							id: "1",
							item: "Individual configuration",
						},
						{
							id: "2",
							item: "No setup, or hidden fees",
						},
						{
							id: "3",
							item: "Team size: 1 developer",
						},
						{
							id: "4",
							item: "Premium support: 6 months",
						},
						{
							id: "5",
							item: "Free updates: 6 months",
						},
					]}
				/>
				<PriceCard
					heading='Company'
					subheading='Relevant for multiple users, extended & premium support.'
					price='$99'
					duration='month'
					checkLists={[
						{
							id: "1",
							item: "Individual configuration",
						},
						{
							id: "2",
							item: "No setup, or hidden fees",
						},
						{
							id: "3",
							item: "Team size: 1 developer",
						},
						{
							id: "4",
							item: "Premium support: 6 months",
						},
						{
							id: "5",
							item: "Free updates: 6 months",
						},
					]}
				/>

				<PriceCard
					heading='Enterprise'
					subheading='Best for large scale uses and extended redistribution rights.'
					price='$499'
					duration='month'
					checkLists={[
						{
							id: "1",
							item: "Individual configuration",
						},
						{
							id: "2",
							item: "No setup, or hidden fees",
						},
						{
							id: "3",
							item: "Team size: 1 developer",
						},
						{
							id: "4",
							item: "Premium support: 6 months",
						},
						{
							id: "5",
							item: "Free updates: 6 months",
						},
					]}
				/>
			</div>

			<div className='faq w-full'>
				<Typography className='text-3xl text-center font-extrabold mb-8 font-poppins'>
					Frequently asked questions
				</Typography>

				<div className='lg:w-[60%] w-full mx-auto'>
					{faqs.map((faq) => (
						<Accordion open={open === faq.id} key={faq.id}>
							<AccordionHeader
								onClick={() => handleOpen(faq.id)}
								className='font-poppins text-md'
							>
								{faq.heading}
							</AccordionHeader>
							<AccordionBody className='font-poppins'>
								{faq.content}
							</AccordionBody>
						</Accordion>
					))}
				</div>
			</div>
		</div>
	);
};

export default PriceSection;
