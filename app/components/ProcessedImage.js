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
			<div className="my-24 text-center text-xl font-bold text-[#304d72]">
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
						className="rounded-md h-[400px] w-[400px] object-cover  border-2 border-dashed border-gray-400 "
					/>
				</a>
				<div className="mt-4 ">
					<button
						className="bg-[#6BDBD6] text-[#304d72] hover:text-[#6bdbd6] hover:bg-[#304d72] duration-150 font-medium px-4 py-2 rounded-md"
						onClick={downloadFile}
					>
						Download
					</button>
				</div>
			</div>
		);
	} else return <div></div>;
};

export default ProcessedImage;
