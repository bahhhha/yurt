const Footer = () => {
	return (
		<footer className="relative m-auto text-white bg-[#304d72] text-center py-2">
			<div className="fixed left-0 bottom-0 w-full">
				<div className="bg-[#304d72] text-white text-center py-2">
					&copy; YurtAI {new Date().getFullYear()}{" "}
					<span className="font-bold text-[#6BDBD6]">
						DEMO
					</span>
					. Made with{" "}
					<span className="animatedheart text-red-400 text-sm">
						♥
					</span>{" "}
					in 🇰🇿.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
