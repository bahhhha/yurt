'use client'

import Link from "next/link";
import { useState, useEffect} from 'react';
import { useSession, signIn, signOut, getProviders } from "next-auth/react";

const Header = () => {
	const { data: session } = useSession();
	
	const [providers, setProviders] = useState(null);

	useEffect(() => {
		const setUpProviders = async () => {
			const response = await getProviders();

			setProviders(response);
		}

		setUpProviders();
	}, [])

	return (
		<header className="flex md:w-[1080px]  text-[#304d72] py-5 m-auto">
			<div className="lg:w-[36px] w-[24px] m-auto h-auto flex space-x-1  md:space-x-3">
				<img src="/home.svg"></img>
				<p className="md:text-xl text-md font-black">Yurt.AI</p>
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
				<div className="sm:flex hidden">
    				{session?.user ? (
        				<div className="flex gap-3 md:gap-5">
            				<button 
                				type="button" 
                				onClick={() => signOut()} 
                				className="bg-[#304d72] text-white lg:px-3 lg:p-2 hover:bg-[#6BDBD6] duration-150 rounded-xl"
            				>
                				Logout
            				</button>

        				</div>
    				) : (
					<>
					  {providers &&
						Object.values(providers).map((provider) => (
						  <button
							type='button'
							key={provider.name}
							onClick={() => {
							  signIn(provider.id);
							}}
							className='bg-[#304d72] text-white lg:px-3 p-1 px-3 lg:p-2 hover:bg-[#6BDBD6] duration-150 rounded-xl'
						  >
							Sign in
						  </button>
						))}
					</>
				  )}
				</div>	
			</nav>
		</header>
	);
};


export default Header;
