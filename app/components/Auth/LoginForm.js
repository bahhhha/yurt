// components/LoginForm.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const router = useRouter(); // Instantiate useRouter

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setError(null);
		try {
			const params = new URLSearchParams();
			params.append("username", email);
			params.append("password", password);

			const response = await fetch(
				"https://jasmine-c6nm.onrender.com/auth/users/tokens",
				{
					method: "POST",
					headers: {
						"Content-Type":
							"application/x-www-form-urlencoded",
					},
					body: params,
				}
			);
			if (!response.ok) {
				// Provide a more descriptive error message
				let errMsg =
					response.statusText ||
					"Login failed. Please check your credentials and try again.";
				throw new Error(errMsg);
			}
			const data = await response.json();
			console.log(data);
			// Redirect to another page upon successful login
			router.push("/pages/TransformYurt");
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className="">
			<form
				onSubmit={handleSubmit}
				className="w-802 mx-auto mt-8"
			>
				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						className="mt-1 px-3 py-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
						placeholder="Enter your email"
						value={email}
						onChange={(e) =>
							setEmail(e.target.value)
						}
						required
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="password"
						className="block text-sm font-medium text-gray-700"
					>
						Password
					</label>
					<input
						type="password"
						id="password"
						className="mt-1 px-3 py-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
						placeholder="Enter your password"
						value={password}
						onChange={(e) =>
							setPassword(e.target.value)
						}
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-[#6BDBD6] hover:bg-[#304d72] text-white font-semibold py-2 rounded-md"
				>
					Log In
				</button>
			</form>
			{error && (
				<div className="text-red-900 text-center pt-3">
					Login failed, try again.
				</div>
			)}
			<div className="text-center pt-3 text-[#304d72] hover:text-[#6BDBD6] duration-100">
				<Link href="/pages/Auth/Register">
					I don't have an account
				</Link>
			</div>
		</div>
	);
};

export default LoginForm;
