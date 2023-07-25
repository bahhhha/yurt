"use client";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const Loading = () => {
	const [text, setText] = useState("Loading");

	useEffect(() => {
		const interval = setInterval(() => {
			setText((prevText) =>
				prevText.length < 9 ? prevText + "." : "Loading"
			);
		}, 500); // the text updates every 500ms

		// Cleanup function to clear the interval when the component unmounts
		return () => clearInterval(interval);
	}, []); // The empty array [] makes sure the effect runs once on mount and cleanup on unmount

	return (
		<div className="text-xl mt-8 text-[#6BDBD6] font-semibold">
			{text}
		</div>
	);
};

const ImageUploader = ({ setProcessedImageUrl }) => {
	const [imageUrl, setImageUrl] = useState(null);
	const [loading, setLoading] = useState(false);
	const [dragOver, setDragOver] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const fileInputRef = useRef(null);

	const handleDragEnter = (e) => {
		e.preventDefault();
		setDragOver(true);
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
		setDragOver(false);
	};

	const options = [
		{
			name: "Style",
			options: [
				"Random",
				"Farmhouse",
				"Mid-century",
				"Colonial",
				"Craftsman",
				"Mediterranean",
				"Victorian",
				"Cottage",
			],
		},
		{
			name: "Material",
			options: ["Random", "Wood", "Brick", "Concrete", "Stone"],
		},
		{
			name: "Location",
			options: ["Random", "Urban", "Suburban", "Rural"],
		},
	];

	const [style, setStyle] = useState(options[0].options[0]);
	const [material, setMaterial] = useState(options[1].options[0]);
	const [location, setLocation] = useState(options[2].options[0]);

	const submitFile = async () => {
		console.log("Uploading file...");
		console.log(selectedImage);
		if (selectedImage) {
			setLoading(true);
			const formData = new FormData();
			formData.append("file", selectedImage);

			const options =
				[style, material, location].join(", ") + ", ";

			formData.append("options", options);

			console.log(
				"Sending the following object to the server: ",
				{ file: selectedImage, options }
			);

			axios.post(
				"https://yourt-ai.onrender.com/uploadfile",
				formData
			)
				.then(function (response) {
					const imgUrl = response.data[1];
					setProcessedImageUrl(imgUrl);
					console.log(imgUrl);
					setLoading(false);
				})
				.catch(function (error) {
					console.log(error);
					setLoading(false);
				});
		} else {
			console.log("No file selected");
		}
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDrop = (e) => {
		e.preventDefault();
		setDragOver(false);
		const files = e.dataTransfer.files;
		setSelectedImage(files[0]);
	};

	const handleBrowseFiles = () => {
		fileInputRef.current.click();
	};

	const handleFileSelect = (e) => {
		const files = e.target.files;
		setSelectedImage(files[0]);
	};

	const handleRemove = () => {
		setSelectedImage(null);
	};

	return (
		<div className="flex md:flex-row flex-col md:space-x-12 md:content-center">
			<div className="flex md:flex-col flex-row md:space-x-0 space-x-2 justify-around h-max md:space-y-6 py-4 m-auto drop-shadow-sm">
				<select
					className="md:w-[200px] w-[100px] m-auto text-[#304d72] p-1 rounded-sm"
					value={style}
					onChange={(e) => setStyle(e.target.value)}
				>
					{options[0].options.map((opt, index) => (
						<option key={index} value={opt}>
							{opt}
						</option>
					))}
				</select>
				<select
					className="md:w-[200px] w-[100px] m-auto text-[#304d72] p-1 rounded-sm"
					value={material}
					onChange={(e) => setMaterial(e.target.value)}
				>
					{options[1].options.map((opt, index) => (
						<option key={index} value={opt}>
							{opt}
						</option>
					))}
				</select>
				<select
					className="md:w-[200px] w-[100px] m-auto text-[#304d72] p-1 rounded-sm"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				>
					{options[2].options.map((opt, index) => (
						<option key={index} value={opt}>
							{opt}
						</option>
					))}
				</select>
			</div>
			<div className="relative flex flex-col m-auto items-center">
				<div
					className={`w-[256px] h-[256px] md:w-[400px] md:h-[400px] m-auto border-2 border-dashed bg-white border-gray-400 rounded-lg flex items-center justify-center text-gray-400 relative ${
						dragOver ? "bg-gray-200" : ""
					}`}
					onDragEnter={handleDragEnter}
					onDragLeave={handleDragLeave}
					onDragOver={handleDragOver}
					onDrop={handleDrop}
				>
					{selectedImage && (
						<div className="absolute top-0 right-0 m-2">
							<button
								className="text-gray-500 rounded-full p-1 hover:bg-red-300 transition duration-200"
								onClick={handleRemove}
							>
								<svg
									className="h-4 w-4 text-red-900 opacity-40"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					)}
					{selectedImage ? (
						<img
							src={URL.createObjectURL(
								selectedImage
							)}
							alt="Uploaded"
							className="object-cover opacity-100 shadow-xl h-full w-full rounded-lg"
						/>
					) : (
						<div className="text-center">
							<svg
								className="mx-auto h-12 w-12 text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 6v6m0 0v6m0-6h6m-6 0H6"
								/>
							</svg>
							<p className="mt-1">
								Drag image here
							</p>
							<p className="text-sm text-gray-500">
								or
							</p>

							<button
								className="text-blue-500"
								onClick={
									handleBrowseFiles
								}
							>
								Browse files
							</button>
							<input
								type="file"
								className="hidden"
								ref={fileInputRef}
								onChange={
									handleFileSelect
								}
							/>
						</div>
					)}
				</div>

				{loading ? (
					<Loading />
				) : (
					<button
						onClick={submitFile}
						className="w-max py-2 px-4 mt-6 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none"
					>
						Submit
					</button>
				)}
			</div>
		</div>
	);
};

export default ImageUploader;
