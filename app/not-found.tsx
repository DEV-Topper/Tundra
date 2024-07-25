// pages/404.tsx
import React from "react";

const NotFound = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="text-center">
				<div className="notfound-404 mb-4">
					<h3 className="text-lg font-semibold text-gray-600">
						Oops! Page not found
					</h3>
					<h1 className="text-9xl font-bold text-[##323232] flex justify-center space-x-2">
						<span className="animate-bounce">4</span>
						<span className="animate-pulse">0</span>
						<span className="animate-bounce">4</span>
					</h1>
				</div>
				<h2 className="text-xl font-light text-gray-500">
					We are sorry, but the page you requested was not found.
				</h2>
				<a
					href="/"
					className="inline-block mt-8 px-6 py-3 text-lg font-medium text-white bg-[#000000] hover:bg-[##9CA3AF] rounded-full transition-colors duration-300"
				>
					Go Back Home
				</a>
			</div>
		</div>
	);
};

export default NotFound;
