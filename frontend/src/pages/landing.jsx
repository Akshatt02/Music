import React from 'react';
import { FaBrain, FaMusic, FaYoutube } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <div className="bg-black text-white min-h-screen w-full">
            <section className="flex flex-col items-center justify-center text-center py-32 px-6">
                <h1 className="text-8xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                    Vibeify
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl">
                    Your mood. Your vibe. Your Music - Powered With AI.
                </p>
                <button onClick={handleLogin} className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-full text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-purple-800/40 cursor-pointer">
                    Login to Vibe
                </button>
            </section>

            <section className="bg-neutral-900 py-20 px-6 text-center">
                <h2 className="text-3xl font-semibold mb-14">How This Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-6xl mx-auto">
                    <div className="hover:scale-105 transition-transform duration-300">
                        <FaBrain className="text-5xl mx-auto mb-4 text-purple-400" />
                        <h3 className="text-xl font-semibold mb-2">Pick a Mood</h3>
                        <p className="text-gray-400 text-sm">Tell us how you're feeling—chill, sad, hype, whatever vibe you're on </p>
                    </div>
                    <div className="hover:scale-105 transition-transform duration-300">
                        <FaMusic className="text-5xl mx-auto mb-4 text-purple-400" />
                        <h3 className="text-xl font-semibold mb-2">Let AI Cook</h3>
                        <p className="text-gray-400 text-sm">Our AI curates a playlist that matches your mood perfectly.</p>
                    </div>
                    <div className="hover:scale-105 transition-transform duration-300">
                        <FaYoutube className="text-5xl mx-auto mb-4 text-purple-400" />
                        <h3 className="text-xl font-semibold mb-2">Press Play</h3>
                        <p className="text-gray-400 text-sm">Stream instantly through YouTube — no login or premium needed.</p>
                    </div>
                </div>
            </section>

            <footer className="bg-black text-center py-6 text-sm text-gray-500 border-t border-neutral-800">
                <p>Made by Akshat</p>
                <p className="mt-1">© 2025 Vibeify. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;