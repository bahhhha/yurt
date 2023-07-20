"use client";
import ImageUploader from "./ImageUpLoader";
import { useState } from "react";
import ProcessedImage from "./ProcessedImage";
const ImageProcess = () => {
	const [processedImageUrl, setProcessedImageUrl] = useState(null);
	const [text, setText] = useState("");

	return (
		<div className="flex justify-around space-x-6 m-auto w-max">
			<ImageUploader
				setProcessedImageUrl={setProcessedImageUrl}
			/>
			<ProcessedImage processedImageUrl={processedImageUrl} />
		</div>
	);
};

export default ImageProcess;
