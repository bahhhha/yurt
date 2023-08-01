"use client";
import { useState } from "react";
import ImageUploader from "../../components/ImageUpLoader";
import ProcessedImage from "../../components/ProcessedImage";
import ImageProcess from "../../components/ImageProcess";

const TransformYurtPage = () => {
	return (
		<div className="flex py-8 pb-16 bg-white md:h-max">
			{/* <VerticalNavbar /> */}
			<ImageProcess />
		</div>
	);
};

export default TransformYurtPage;
