import Header from "@/components/header/Header";
import React from "react";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Home from "./home/Home";
import ContentSwitcher from "@/components/TrendyComp/ContentSwitcher";

const inter = Quicksand({ subsets: ["latin"] });

const Page = () => {
	return (
		<div className={`${inter.className} w-full overflow-x-hidden`}>
			<Header />
			<main>
				<Home />
				<ContentSwitcher />
			</main>
		</div>
	);
};

export default Page;
