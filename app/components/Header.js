"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
	const [user, setUser] = useState(null);
	const [fiefAuth, setFiefAuth] = useState(null);

	useEffect(() => {
		const initialize = () => {
			const fiefClient = new window.fief.Fief({
				baseURL: "https://yurt-ai.fief.dev",
				clientId: "nkBx5IWyzE1C8fwNB7q2ssIN5X4GKQ4bDtDqptO3OYE",
			});

			const auth = new window.fief.browser.FiefAuth(fiefClient);
			setFiefAuth(auth);

			const userinfo = auth.getUserinfo();

			if (userinfo !== null) {
				setUser(userinfo);
			}
		};

		if (window.fief) {
			initialize();
		} else {
			const script = document.createElement("script");
			script.src =
				"https://unpkg.com/@fief/fief/build/index.umd.js";
			script.addEventListener("load", initialize);
			document.body.appendChild(script);
		}
	}, []);

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
				{user ? (
					<button
						onClick={() =>
							fiefAuth &&
							fiefAuth.logout(
								"http://localhost:3000"
							)
						}
						className="bg-[#304d72] text-white lg:px-3 lg:p-2 hover:bg-[#6BDBD6] duration-150 rounded-xl"
					>
						Logout
					</button>
				) : (
					<button
						onClick={() =>
							fiefAuth &&
							fiefAuth.redirectToLogin(
								"http://localhost:3000/callback"
							)
						}
						className="bg-[#304d72] text-white lg:px-3 p-1 px-3 lg:p-2 hover:bg-[#6BDBD6] duration-150 rounded-xl"
					>
						Login
					</button>
				)}
			</nav>
		</header>
	);
};

export default Header;
