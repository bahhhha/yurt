"use client";
import Image from "next/image";
import useDownloader from "react-use-downloader";
const ProcessedImage = ({ processedImageUrl }) => {
	const { download } = useDownloader();

	const downloadFile = () => {
		download(processedImageUrl, "yurt.png");
	};
	if (processedImageUrl !== null) {
		return (
			<div className="py-4 md:py-0 flex flex-col text-center m-auto font-bold text-[#304d72]">
				{/* <div className="my-4">
					Your{" "}
					<span className="text-[#6BDBD6]">
						dream house
					</span>{" "}
					is ready.
				</div> */}
				<a
					className="flex justify-center drop-shadow-xl m-auto"
					href={processedImageUrl}
				>
					<img
						src={processedImageUrl}
						alt="Processed"
						className="rounded-md md:w-[400px] md:h-[400px] w-[256px] h-[256px] object-cover border-2 border-dashed border-gray-400 "
					/>
				</a>
				<div className="">
					<button
						onClick={downloadFile}
						className="w-max py-2 px-4 mt-6 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none"
					>
						Download{" "}
					</button>
				</div>
			</div>
		);
	} else return <div></div>;
};

export default ProcessedImage;
