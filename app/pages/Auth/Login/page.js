// pages/login.js

import Head from "next/head";
import LoginForm from "../../../components/Auth/LoginForm.js";

const LoginPage = () => {
	return (
		<div>
			<Head>
				<title>Login</title>
			</Head>
			<main className="min-h-screen bg-gray-100 pb-40 flex flex-col space-y-8 items-center justify-center">
				<img src="/favicon.ico"></img>
				<div className="bg-white md:w-[400px]  shadow-md rounded-md p-8">
					<h1 className="text-3xl font-semibold mb-6">
						Log In
					</h1>
					<LoginForm />
				</div>
			</main>
		</div>
	);
};

export default LoginPage;
