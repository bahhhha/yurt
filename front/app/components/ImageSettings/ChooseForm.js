"use client";
import { useState } from "react";

function ChooseForm({ name, options }) {
	const [selected, setSelected] = useState(options[0]);

	const handleChange = (event) => {
		setSelected(event.target.value);
	};

	return (
		<form className="text-lg px-4 w-1/2 m-auto text-center my-6">
			<div>
				<label htmlFor="style-select" className="">
					{name}
				</label>
			</div>
			<div>
				<select
					className="w-full"
					id="style-select"
					value={selected}
					onChange={handleChange}
				>
					{options.map((option, index) => (
						<option value={option} key={index}>
							{option}
						</option>
					))}
				</select>
			</div>
		</form>
	);
}

export default ChooseForm;
