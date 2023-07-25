"use client";
import ImageUploader from "./ImageUpLoader";
import { useState } from "react";
import ProcessedImage from "./ProcessedImage";
const ImageProcess = () => {
	const [processedImageUrl, setProcessedImageUrl] = useState(null);
	const [text, setText] = useState("");

	return (
		<div className="flex py-6 space-y-6 md:space-y-0 md:flex-row flex-col justify-around md:space-x-6 m-auto w-max">
			<ImageUploader
				setProcessedImageUrl={setProcessedImageUrl}
			/>
			<ProcessedImage processedImageUrl={processedImageUrl} />
		</div>
	);
};

export default ImageProcess;
