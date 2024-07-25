import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
	return (
		<section className="relative bg-[#F8EBE5] h-screen flex items-center justify-center overflow-hidden">
			<div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between w-11/12">
				<div className="text-left md:w-1/2 space-y-4">
					<div className="flex items-center">
						<hr className="w-8 border-red-600 border-t-2 mr-2" />
						<h2 className="text-sm text-red-600">NEW TREND</h2>
					</div>
					<div>
						<h1 className="text-[55px] md:text-6xl lg:text-7xl font-semibold w-full">
							SUMMER SALE STYLISH
						</h1>
						<div className="text-5xl md:text-6xl lg:text-7xl font-bold">
							<span className="text-black">WOMENS</span>
						</div>
					</div>
					<a
						href="#"
						className="mt-4 inline-block text-lg font-semibold text-black relative group"
					>
						DISCOVER MORE
						<span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
					</a>
				</div>
				<div className="md:w-1/2 mt-8 md:mt-0 md:ml-16">
					<Image
						src="https://res.cloudinary.com/dk9sj96mg/image/upload/v1721872001/imageWo_bcfzcf.png"
						alt="Fashion"
						height={100}
						width={100}
						className="object-cover w-full md:w-[55%] h-auto"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
