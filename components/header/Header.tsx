"use client";
import React, { useState, useEffect } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 871);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return <>{isMobile ? <MobileHeader /> : <DesktopHeader />}</>;
};

export default Header;
