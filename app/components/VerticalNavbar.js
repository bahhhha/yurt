import React from "react";
import ChooseForm from "./ImageSettings/ChooseForm";

const forms = [
	{
		name: "Style",
		options: [
			"Random",
			"Farmhouse",
			"Cape Cod",
			"Mid-century modern",
			"Colonial",
			"Craftsman",
			"Mediterranean",
			"Victorian",
			"Neoclassical",
			"Cottage",
		],
	},
	{
		name: "Material",
		options: [
			"Random",
			"Wood",
			"Brick",
			"Concrete",
			"Steel Frame",
			"Earthbag",
			"Cob",
			"Straw Bale",
			"Stone",
		],
	},
	{
		name: "Location",
		options: ["Random", "Urban", "Suburban", "Rural"],
	},
];

const VerticalNavbar = () => {
	const formsToShow = forms.map((form, index) => {
		return (
			<ChooseForm
				key={index}
				name={form.name}
				options={form.options}
			/>
		);
	});

	return (
		<div className="flex flex-col bg-[#fafafa] shadow-xl h-screen text-[#304d72] w-[360px]">
			<div className="flex flex-col items-center justify-center py-4">
				<span className="text-lg font-bold">Settings</span>
			</div>
			<ol>{formsToShow}</ol>
			{/* Add more settings here */}
		</div>
	);
};

export default VerticalNavbar;
