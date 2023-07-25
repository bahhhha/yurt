const Footer = () => {
	return (
		<footer className="relative m-auto text-white bg-[#304d72] text-center  py-2 bottom-0">
			&copy; YurtAI {new Date().getFullYear()}. Made with{" "}
			<span className="animatedheart text-red-400 text-sm">
				♥
			</span>{" "}
			in 🇰🇿.
		</footer>
	);
};

export default Footer;
