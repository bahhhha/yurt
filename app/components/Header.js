import Link from "next/link";

const Header = () => {
	return (
		<header className="flex lg:w-[1080px] text-[#304d72] pt-3 m-auto">
			<div className="w-[36px] m-auto h-auto flex items-center space-x-3">
				<img src="/home.svg"></img>
				<p className="text-xl font-black mt-2">Yurt.AI</p>
			</div>
			<nav className="lg:w-[360px] lg:text-lg m-auto flex justify-around">
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
				<Link
					href="/"
					className="bg-[#304d72] text-white lg:px-3 lg:p-2 hover:bg-[#6BDBD6] duration-150 rounded-xl"
				>
					Sign Up
				</Link>
			</nav>
		</header>
	);
};

export default Header;
