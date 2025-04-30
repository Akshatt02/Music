import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        const loadingToast = toast.loading("Creating account...");

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, {
                username: formData.username,
                email: formData.email,
                password: formData.password
            });

            toast.success("Registration successful", { id: loadingToast });
            navigate("/login");
        } catch (err) {
            toast.error(err.response?.data?.error || "Registration failed", { id: loadingToast });
        }
    };

    return (
        <div className="bg-black text-white min-h-screen flex items-center justify-center px-4">
            <div className="bg-neutral-900 w-full max-w-md p-8 rounded-2xl shadow-xl border border-neutral-800">
                <h2 className="text-3xl font-bold mb-6 text-center">Join Vibeify 🎧</h2>

                <form className="flex flex-col gap-5" onSubmit={handleRegister}>
                    <div>
                        <label className="text-sm text-gray-400">Username</label>
                        <input type="text" placeholder="Enter Username" name="username" value={formData.username} onChange={handleChange}
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-400">Email</label>
                        <input type="email" placeholder="Enter Email" name="email" value={formData.email} onChange={handleChange}
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-400">Password</label>
                        <input
                            type="password" placeholder="Enter Password" name="password" value={formData.password} onChange={handleChange}
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-400">Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} 
                        className="w-full mt-1 px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500"
                        />
                    </div>

                    <button type="submit" className="mt-2 bg-purple-600 hover:bg-purple-700 transition duration-300 py-3 rounded-lg font-medium cursor-pointer">
                        Create Account
                    </button>
                </form>

                <p className="mt-6 text-sm text-center text-gray-500">
                    Already have an account?{" "}
                    <span onClick={() => navigate("/login")} className="text-purple-400 hover:underline cursor-pointer">
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;