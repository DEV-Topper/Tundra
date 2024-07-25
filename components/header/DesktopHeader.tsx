"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";

import Image from "next/image";

const DesktopHeader = () => {
	const [activeLink, setActiveLink] = useState<string | null>(null);

	const handleLinkClick = (link: string) => {
		setActiveLink(link);
	};

	return (
		<header className="bg-[#f4f4f4] shadow">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center w-11/12">
				<div className="flex items-center text-3xl font-bold text-gray-800">
					<Link href="/">
						<Image
							alt="Tundra Logo"
							height={100}
							width={100}
							src="https://res.cloudinary.com/dvtisceko/image/upload/v1719749190/tundra_ivo8dz.png"
						/>
					</Link>
				</div>

				<nav className="flex-row md:flex space-x-8 text-lg font-semibold text-gray-800">
					{["Home", "Shop", "Blog", "Pages", "About", "Contact"].map(
						(item) => (
							<Link
								key={item}
								href={`/${item.toLowerCase()}`}
							>
								<div
									className={`relative ${
										activeLink === item ? "text-orange-600" : ""
									}`}
									onClick={() => handleLinkClick(item)}
								>
									{item}
									<hr
										className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-orange-600 transform transition-all duration-300 ${
											activeLink === item
												? "scale-x-100"
												: "scale-x-0"
										}`}
									/>
								</div>
							</Link>
						)
					)}
				</nav>

				<div className="flex items-center space-x-8 text-xl">
					<IoSearchOutline className="transition cursor-pointer" />
					<BsPerson className="transition cursor-pointer" />
					<FaRegHeart className="transition cursor-pointer" />
					<IoBagOutline className="transition cursor-pointer" />
				</div>
			</div>
		</header>
	);
};

export default DesktopHeader;
