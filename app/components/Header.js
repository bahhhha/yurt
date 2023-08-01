"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with your authentication logic

	const handleLogout = () => {
		// Replace this with your logout logic
		setIsLoggedIn(false);
	};

	return (
		<header className="flex md:w-[1080px]  text-[#304d72] py-5 m-auto">
			<div className="lg:w-[36px] w-[24px] m-auto h-auto flex space-x-1  md:space-x-3">
				<img src="/home.svg"></img>
				<p className="md:text-xl text-md font-black ">
					Yurt.AI
				</p>
			</div>
			<nav className="lg:w-[360px] space-x-3 lg:text-lg m-auto flex justify-around">
				<Link
					href="/"
					className="p-2 hover:text-[#6BDBD6] duration-150"
				>
					Home
				</Link>
				<Link
					href="/pages/About"
					className="p-2 hover:text-[#6BDBD6] duration-150"
				>
					About Us
				</Link>
				{isLoggedIn ? (
					<button
						className="underline decoration-[#45818e] hover:text-[#45818e] duration-100"
						onClick={handleLogout}
					>
						Log Out
					</button>
				) : (
					<Link
						href="/pages/Auth/Login"
						className="p-2 hover:text-[#6BDBD6] duration-150"
					>
						Log In
					</Link>
				)}
			</nav>
		</header>
	);
};

export default Header;
