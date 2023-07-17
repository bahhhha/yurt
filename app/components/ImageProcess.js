"use client";
import ImageUploader from "./ImageUpLoader";
import { useState } from "react";
import ProcessedImage from "./ProcessedImage";
const ImageProcess = () => {
	const [processedImageUrl, setProcessedImageUrl] = useState(null);

	return (
		<div className="flex flex-row justify-around w-1/2 space-x-16 m-auto py-4">
			<ImageUploader
				setProcessedImageUrl={setProcessedImageUrl}
			/>
			<ProcessedImage processedImageUrl={processedImageUrl} />
		</div>
	);
};

export default ImageProcess;
