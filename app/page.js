import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="text-center addbg m-auto">
			<div className="md:pb-36 addbg">
				<div className=" shadow-[#6BDBD6] w-3/5 text-left md:pt-48 pt-24 text-3xl md:text-center md:text-7xl font-black text-[#304d72] lg:w-[720px] m-auto">
					Build the{" "}
					<span className="text-[#6BDBD6]">house</span>{" "}
					of your dreams
				</div>
				<div className="lg:w-[700px] w-2/3 font-normal text-[#304d72] m-auto md:pt-16 md:pb-20 py-12 text-lg">
					A house is made of bricks and beams. A home
					is made of hopes and dreams... and{" "}
					<span className="font-bold">YurtAI</span>.
				</div>
				<Link
					className="lg:text-3xl
        font-semibold
        hover:bg-[#304d72] duration-150
        lg:p-3 lg:px-8 p-4 px-6 rounded-2xl bg-[#6BDBD6]
		 text-white"
					href="/pages/TransformYurt"
				>
					Build
				</Link>
			</div>
			<div className="flex md:flex-row flex-col md:py-28 py-24 space-y-8 md:space-y-0 w-1/2 justify-around m-auto md:w-[960px]">
				<div>
					<img
						src={"before1.jpeg"}
						className="rounded-2xl w-[360px] h-auto shadow-xl"
					></img>
					<div className="my-4 text-2xl font-bold text-[#304d72]">
						Before
					</div>
				</div>
				<div>
					<img
						src={"after1.png"}
						className="rounded-2xl w-[360px] h-auto shadow-xl"
					></img>
					<div className="my-4 text-2xl font-bold text-[#304d72]">
						After
					</div>
				</div>
			</div>
		</div>
	);
}
