"use client";
import { useEffect, useState } from "react";
import All from "./All";
import NewArrivals from "./NewArrivals";
import BestSeller from "./BestSeller";
import TopRated from "./TopRated";

interface ContentSection {
	title: string;
	content: JSX.Element;
}

const contentSections: ContentSection[] = [
	{
		title: "ALL",
		content: (
			<div className="w-full">
				<All />
			</div>
		),
	},
	{
		title: "NEW ARRIVALS",
		content: (
			<div className="w-full">
				<NewArrivals />
			</div>
		),
	},
	{
		title: "BEST SELLER",
		content: (
			<div className="w-full">
				<BestSeller />
			</div>
		),
	},
	{
		title: "TOP RATED",
		content: (
			<div className="w-full">
				<TopRated />
			</div>
		),
	},
];

const ContentSwitcher = () => {
	const [activeSection, setActiveSection] = useState<string>(
		contentSections[0].title
	);
	const [fadeIn, setFadeIn] = useState<boolean>(false);

	const handleButtonClick = (title: string) => {
		setFadeIn(false);
		setTimeout(() => {
			setActiveSection(title);
			setFadeIn(true);
		}, 200);
	};

	const activeContent = contentSections.find(
		(section) => section.title === activeSection
	);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setFadeIn(true);
			clearTimeout(timeout);
		}, 200);
	}, []);

	return (
		<div className="w-full flex flex-col items-center bg-white">
			{/* Title */}
			<div className="mt-20 w-full px-4">
				<h1 className="text-4xl font-semibold mb-6 text-center">
					OUR TRENDY <span className="font-extrabold">PRODUCTS</span>
				</h1>

				<div className="flex justify-center mb-4">
					{contentSections.map((el) => (
						<button
							key={el.title}
							className={`px-4 py-2 mr-2 rounded-md text-gray-700 hover:text-black font-semibold relative ${
								activeSection === el.title
									? "text-black"
									: "hover:text-gray-900"
							}`}
							onClick={() => handleButtonClick(el.title)}
						>
							{el.title}
							<hr
								className={`absolute left-0 right-0 bottom-0 h-0.5 bg-black transform transition-all duration-300 ${
									activeSection === el.title
										? "scale-x-100"
										: "scale-x-0"
								} hover:scale-x-100`}
							/>
						</button>
					))}
				</div>
				<div
					className={`flex-grow transition-opacity duration-200 ${
						fadeIn ? "opacity-100" : "opacity-0"
					}`}
				>
					{activeContent?.content}
				</div>
			</div>
		</div>
	);
};

export default ContentSwitcher;
