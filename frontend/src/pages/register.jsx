import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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

    const handleRegister = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }
    };

    return (
        <div className="bg-black text-white min-h-screen flex items-center justify-center px-4">
            <div className="bg-neutral-900 w-full max-w-md p-8 rounded-2xl shadow-xl border border-neutral-800">
                <h2 className="text-3xl font-bold mb-6 text-center">Join Vibeify 🎧</h2>

                <form className="flex flex-col gap-5" onSubmit={handleRegister}>
                    <div>
                        <label className="text-sm text-gray-400">Username</label>
                        <input type="text" name="username" placeholder="vibe_master" value={formData.username} onChange={handleChange}
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-400">Email</label>
                        <input type="email" name="email" placeholder="you@vibeify.com" value={formData.email} onChange={handleChange}
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-400">Password</label>
                        <input
                            type="password" name="password" placeholder="••••••••" value={formData.password} onChange={handleChange} 
                            className="w-full mt-1 px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-400">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={handleChange}
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