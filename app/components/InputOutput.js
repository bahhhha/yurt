import Editor from "@/app/components/Editor";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const Option = ({ option, input, setActionResult, dropdownOptions }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handleDropdownClick = (author) => {
		const result = option.action({ text: input, author });
		console.log(result);
		setActionResult(result);
		setDropdownOpen(false);
	};

	return (
		<div
			onMouseEnter={() => setDropdownOpen(true)}
			onMouseLeave={() => setDropdownOpen(false)}
		>
			<button
				onClick={() =>
					!dropdownOptions && handleDropdownClick()
				}
			>
				<img
					src={`/icons/${option.img}`}
					title={option.label}
					className="aiIcon hover:bg-[#054044] p-2 rounded-2xl"
				/>
			</button>
			{dropdownOpen && dropdownOptions && (
				<ul className="dropdownMenu">
					{dropdownOptions.map((author) => (
						<li
							key={author}
							className="dropdownOption"
							onClick={() =>
								handleDropdownClick(
									author
								)
							}
						>
							{author}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

const AIOptions = ({ value, options, setActionResult }) => {
	const optionsToShow = options.map((option) => (
		<li key={option.label}>
			<Option
				option={option}
				input={value}
				setActionResult={setActionResult}
				dropdownOptions={
					option.label === "Imitate..."
						? [
								"Nolan",
								"Tarantino",
								"Kubrick",
								"Scorsese",
						  ]
						: null
				}
			/>
		</li>
	));

	return (
		<div className="bg-[#042123] py-2 space-y-1 border-2 border-[#fff2cc] lg:w-[720px] m-auto rounded-b-xl drop-shadow-lg ">
			<div className="text-[#054044] font-extrabold text-center">
				AI
			</div>
			<ol className="flex justify-center space-x-20">
				{optionsToShow}
			</ol>
		</div>
	);
};

const ActionResult = ({ result, editorText, setEditorText }) => (
	<div className="max-w-[800px] m-auto">
		<motion.div
			className="flex flex-col"
			initial={{ opacity: 0, x: 50 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 50 }}
			transition={{ duration: 0.5 }}
		>
			<div className="space-x-4 mb-5">
				<button
					className=""
					onClick={async () => {
						const resolvedResult = await result;
						setEditorText(resolvedResult);
					}}
				>
					<img
						className="hover:brightness-125"
						src="/copy.svg"
						title="Copy to editor"
					/>
				</button>
				<button
					className=""
					onClick={async () => {
						const resolvedResult = await result;
						navigator.clipboard.writeText(
							resolvedResult
						);
					}}
				>
					<img
						className="hover:brightness-125"
						src="/clipboard.svg"
						title="Copy to clipboard"
					/>
				</button>
				<button
					className=""
					onClick={async () => {
						const resolvedResult = await result;
						setEditorText(
							editorText + resolvedResult
						);
					}}
				>
					<img
						className="hover:brightness-125"
						src="/file-plus.svg"
						title="Add to editor"
					/>
				</button>
			</div>
			<p className="mb-5 text-3xl font-extrabold text-[#45818e] jasmineSays">
				Jasmine says...
			</p>

			<div>{result}</div>
		</motion.div>
	</div>
);

const InputOutput = ({ isLoggedIn }) => {
	const [isLoading, setIsLoading] = useState(false);
	const options = [
		{
			label: "Build Character",
			img: "user-square.svg",
			action: async ({ text }) => {
				try {
					const response = await axios.post(
						"https://jasmine-c6nm.onrender.com/characters/build_character",
						{ text }
					);
					return response.data;
				} catch (error) {
					console.error(error);
					return `Error: ${error.message}`;
				}
			},
		},
		{
			label: "Build Stage",
			img: "trees.svg",
			action: async ({ text }) => {
				try {
					const response = await axios.post(
						"https://jasmine-c6nm.onrender.com/characters/build_stage",
						{ text }
					);
					return response.data;
				} catch (error) {
					console.error(error);
					return `Error: ${error.message}`;
				}
			},
		},
		{
			label: "Finish Thought",
			img: "pencil-line.svg",
			action: async ({ text }) => {
				setIsLoading(true);
				try {
					const response = await axios.post(
						`https://jasmine-c6nm.onrender.com/characters/finish_thought?incomplete_text=${encodeURIComponent(
							text
						)}`
					);
					setIsLoading(false);
					return response.data.extended_idea;
				} catch (error) {
					console.error(error);
					setIsLoading(false);

					return `Error: ${error.message}`;
				}
			},
		},
		{
			label: "Find imperfections",
			img: "factory.svg",
			action: async ({ text }) => {
				setIsLoading(true);

				try {
					const response = await axios.post(
						`https://jasmine-c6nm.onrender.com/characters/fix_imperfections?text=${encodeURIComponent(
							text
						)}`
					);
					setIsLoading(false);

					return response.data.corrected_script;
				} catch (error) {
					console.error(error);
					setIsLoading(false);

					return `Error: ${error.message}`;
				}
			},
		},
		{
			label: "Imitate...",
			img: "clapperboard.svg",
			action: async ({ text, author }) => {
				try {
					setIsLoading(true);

					const response = await axios.post(
						`https://jasmine-c6nm.onrender.com/characters/imitate?text=${encodeURIComponent(
							text
						)}&author=${encodeURIComponent(
							author
						)}`
					);
					console.log(response);
					setIsLoading(false);

					return response.data.script; // Assuming the response data is the imitated text
				} catch (error) {
					console.error(error);
					setIsLoading(false);

					return `Error: ${error.message}`;
				}
			},
		},
	];

	const [input, setInput] = useState("");
	const [actionResult, setActionResult] = useState("");

	useEffect(() => {
		console.log(input);
	}, [input]);

	return (
		<div className=" flex justify-center w-screen m-auto">
			<motion.div
				style={{
					display: "flex",
					width: "100%",
					maxWidth: "1400px",
				}}
				className="flex justify-center"
				initial={{ marginLeft: 0 }}
				animate={{
					marginLeft: actionResult ? "-10%" : "0",
				}}
				transition={{
					duration: 1,
					type: "spring",
					bounce: 0.25,
				}}
			>
				<div style={{ width: "100%" }}>
					<Editor input={input} setInput={setInput} />
					<AIOptions
						value={input}
						options={options}
						setActionResult={setActionResult}
					/>
				</div>
				{/* {isLoading && <div>Hello WOrld</div>} */}
				<div>
					<AnimatePresence>
						{actionResult && (
							<ActionResult
								result={actionResult}
								setEditorText={setInput}
								editorText={input}
							/>
						)}
					</AnimatePresence>
				</div>
			</motion.div>
		</div>
	);
};

export default InputOutput;