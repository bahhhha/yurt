"use client";
import { useState } from "react";
import VerticalNavbar from "../../components/VerticalNavbar";
import ImageUploader from "../../components/ImageUpLoader";
import ProcessedImage from "../../components/ProcessedImage";
import ImageProcess from "../../components/ImageProcess";

const TransformYurtPage = () => {
	return (
		<div className="flex  canvabg  flex-row">
			<VerticalNavbar />
			<ImageProcess />
		</div>
	);
};

export default TransformYurtPage;
