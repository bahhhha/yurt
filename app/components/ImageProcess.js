"use client";
import ImageUploader from "./ImageUpLoader";
import { useState } from "react";
import ProcessedImage from "./ProcessedImage";
const ImageProcess = () => {
	const [processedImageUrl, setProcessedImageUrl] = useState(null);

	return (
		<div className="space-y-4  flex flex-col w-1/2 m-auto py-4">
			<ImageUploader
				setProcessedImageUrl={setProcessedImageUrl}
			/>
			<ProcessedImage processedImageUrl={processedImageUrl} />
		</div>
	);
};

export default ImageProcess;
