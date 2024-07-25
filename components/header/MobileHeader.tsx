"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";
import { HiBars3CenterLeft } from "react-icons/hi2";
import Image from "next/image";
import { IoBagOutline } from "react-icons/io5";

const MobileHeader = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [isRotated, setIsRotated] = useState<boolean>(false);

	const handleIconClick = () => {
		setIsMenuOpen(!isMenuOpen);
		setIsRotated(!isRotated);
	};

	return (
		<header className="shadow relative z-50">
			<div className="container mx-auto px-10 bg-[#f4f4f4] z-50 py-4 flex justify-between items-center w-full">
				{/* Burger/Cancel */}
				<div
					className={`flex items-center text-xl transition-transform duration-300 ${
						isRotated ? "rotate-180" : "rotate-0"
					}`}
				>
					{isMenuOpen ? (
						<LiaTimesSolid
							size={25}
							className="transition-transform cursor-pointer"
							onClick={handleIconClick}
						/>
					) : (
						<HiBars3CenterLeft
							size={26}
							className="transition-transform cursor-pointer"
							onClick={handleIconClick}
						/>
					)}
				</div>

				{/* Logo - Centered */}
				<div className="flex items-center flex-grow justify-center">
					<Link href="/">
						<Image
							alt="Tundra Logo"
							height={100}
							width={100}
							src="https://res.cloudinary.com/dvtisceko/image/upload/v1719749190/tundra_ivo8dz.png"
						/>
					</Link>
				</div>

				{/* Shopping Bag */}
				<div className="flex items-center text-xl">
					<IoBagOutline className="transition cursor-pointer" />
				</div>
			</div>

			<nav
				className={`fixed left-0 right-0 bg-white shadow-md h-screen -z-20 transition-transform duration-300 ease-in-out ${
					isMenuOpen ? "translate-y-0" : "-translate-y-full -top-32"
				}`}
			>
				<div className="flex flex-col space-y-4 text-lg font-semibold text-gray-800 p-4 px-10">
					{["Home", "Shop", "Blog", "Pages", "About", "Contact"].map(
						(item) => (
							<Link
								key={item}
								href={`/${item.toLowerCase()}`}
								className="block"
								onClick={() => setIsMenuOpen(false)}
							>
								{item}
							</Link>
						)
					)}
				</div>
			</nav>
		</header>
	);
};

export default MobileHeader;
