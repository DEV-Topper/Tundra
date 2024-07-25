import Image from "next/image";
import React from "react";

const Collections: React.FC = () => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-8 bg-white">
			<div className="relative bg-gray-100 h-[300px] md:h-[420px]">
				<Image
					src="https://res.cloudinary.com/dk9sj96mg/image/upload/v1721874901/collection_grid_c6xewg.png"
					alt="Women Collection"
					fill
					className="object-cover"
				/>
				<div className="absolute bottom-4 left-4 text-black">
					<h3 className="text-xs md:text-sm uppercase font-semibold">
						Hot List
					</h3>
					<h2 className="text-xl md:text-3xl font-bold">
						Women Collection
					</h2>
					<a
						href="#"
						className="inline-block mt-2 text-xs md:text-sm underline"
					>
						Shop Now
					</a>
				</div>
			</div>

			<div className="grid grid-rows-[auto,1fr] gap-4 md:grid-cols-1 md:gap-4">
				<div className="relative bg-gray-100 h-[150px] md:h-[200px]">
					<Image
						src="https://res.cloudinary.com/dk9sj96mg/image/upload/v1721874901/collection_gri_f0rm7e.png"
						alt="Men Collection"
						fill
						className="object-cover"
					/>
					<div className="absolute bottom-4 left-4 text-black">
						<h3 className="text-xs md:text-sm uppercase font-semibold">
							Hot List
						</h3>
						<h2 className="text-xl md:text-3xl font-bold">
							Men Collection
						</h2>
						<a
							href="#"
							className="inline-block mt-2 text-xs md:text-sm underline"
						>
							Shop Now
						</a>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="relative bg-gray-100 h-[150px] md:h-[200px]">
						<Image
							src="https://res.cloudinary.com/dk9sj96mg/image/upload/v1721874902/collection_g_qbgcsr.png"
							alt="Kids Collection"
							fill
							className="object-cover"
						/>
						<div className="absolute bottom-4 left-4 text-black">
							<h3 className="text-xs md:text-sm uppercase font-semibold">
								Hot List
							</h3>
							<h2 className="text-xl md:text-3xl font-bold">
								Kids Collection
							</h2>
							<a
								href="#"
								className="inline-block mt-2 text-xs md:text-sm underline"
							>
								Shop Now
							</a>
						</div>
					</div>

					<div className="relative bg-pink-100 p-4 md:p-8 h-[150px] md:h-[200px]">
						<h2 className="text-lg md:text-xl font-bold text-black">
							E-Gift Cards
						</h2>
						<p className="text-xs md:text-sm text-gray-700">
							Surprise someone with the gift they really want.
						</p>
						<a
							href="#"
							className="inline-block mt-2 text-xs md:text-sm underline"
						>
							Shop Now
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Collections;
