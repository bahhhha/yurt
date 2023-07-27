"use client";
import ImageUploader from "./ImageUpLoader";
import { useState } from "react";
import ProcessedImage from "./ProcessedImage";

const ImageProcess = () => {
	const [processedImageUrl, setProcessedImageUrl] = useState(null);

	return (
		<div className="flex boxes canvabg py-10  drop-shadow-xl md:w-[1400px] rounded-2xl px-10 md:space-y-6 md:flex-col flex-col justify-around m-auto w-max">
			<p className="text-center md:text-4xl text-2xl font-bold text-[#304d72]">
				Build the{" "}
				<span className="text-[#6BDBD6]">house</span> of
				your dreams
			</p>
			<ImageUploader
				setProcessedImageUrl={setProcessedImageUrl}
			/>
			<ProcessedImage processedImageUrl={processedImageUrl} />
		</div>
	);
};

export default ImageProcess;
