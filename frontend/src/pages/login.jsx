import React, {useState} from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const LoginPage = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async (e) => {
		e.preventDefault();
		const loadingToast = toast.loading('Logging you in....');

		try {
			const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {email, password}, {withCredentials: true});

			localStorage.setItem("token", res.data.token);

			toast.success('Login Successful', {id: loadingToast });
			setTimeout(() => navigate('/'), 1000);
		} catch(err) {
			const message = err.response?.data?.message || 'Login failed';
			toast.error(message, {id: loadingToast })
		}
	}

	const handleClick = () => {
		navigate('/register');
	}

	return (
		<div className="bg-black text-white min-h-screen flex items-center justify-center px-4">
			<div className="bg-neutral-900 w-full max-w-md p-8 rounded-2xl shadow-xl border border-neutral-800">
				<h2 className="text-3xl font-bold mb-6 text-center">Login to your account</h2>

				<form className="flex flex-col gap-5" onSubmit={handleLogin}>
					<div>
						<label className="text-sm text-gray-400">Email</label>
						<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"
							className="w-full mt-1 px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500"
						/>
					</div>

					<div>
						<label className="text-sm text-gray-400">Password</label>
						<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"
							className="w-full mt-1 px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500"
						/>
					</div>

					<button type="submit" className="mt-2 bg-purple-600 hover:bg-purple-700 transition duration-300 py-3 rounded-lg font-medium cursor-pointer">
						Login
					</button>
				</form>

				<p className="mt-6 text-sm text-center text-gray-500">
					Don't have an account?
					<button onClick={handleClick} className="text-purple-400 hover:underline cursor-pointer">
						Register
					</button>
				</p>
			</div>
		</div>
	);
};

export default LoginPage;