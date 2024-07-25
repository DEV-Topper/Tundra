import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const All = () => {
	const [hovered, setHovered] = useState<boolean>(false);

	return (
		<div className="max-w-xs w-full mx-auto rounded-lg overflow-hidden shadow-lg bg-white">
			<div
				className="relative"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<div className="relative bg-[#F4F4F6]">
					<img
						src="https://res.cloudinary.com/dk9sj96mg/image/upload/v1721874901/collection_grid_c6xewg.png" // Primary image
						alt="Cropped Faux Leather Jacket"
						className={`w-full h-auto object-cover transition-opacity duration-500 ${
							hovered ? "opacity-0" : "opacity-100"
						}`}
					/>
					<img
						src="https://res.cloudinary.com/dk9sj96mg/image/upload/v1721874901/collection_gri_f0rm7e.png" // Secondary image
						alt="Cropped Faux Leather Jacket Hover"
						className={`w-full h-auto object-cover absolute top-0 left-0 transition-opacity duration-500 ${
							hovered ? "opacity-100" : "opacity-0"
						}`}
					/>
				</div>

				<button
					className={`absolute bottom-0 left-0 w-full bg-white text-black px-4 py-1 rounded-md shadow-md transition-transform duration-300 ${
						hovered
							? "translate-y-0 opacity-100"
							: "translate-y-full opacity-0"
					}`}
				>
					ADD TO CART
				</button>
			</div>

			<div className="px-3 py-2">
				<div className="flex justify-between items-center mb-1">
					<span className="text-xs font-bold text-gray-700">
						Dresses
					</span>
					<CiHeart />
				</div>

				<h3 className="text-md font-semibold text-gray-900">
					Cropped Faux Leather Jacket
				</h3>

				<p className="text-lg font-bold text-gray-800">$29</p>

				<div className="flex items-center mt-1">
					<FaStar className="text-yellow-400 mr-1 text-sm" />
					<span className="text-xs text-gray-600">8k+ reviews</span>
				</div>
			</div>
		</div>
	);
};

export default All;
