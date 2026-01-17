import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-14 sm:h-16">
                        <div className="flex-shrink-0">
                            <span className="text-xl sm:text-2xl font-bold text-blue-700">Arto+</span>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#features" className="text-gray-500 hover:text-gray-900">Features</a>
                            <a href="#how-it-works" className="text-gray-500 hover:text-gray-900">How it Works</a>
                            <a href="#testimonials" className="text-gray-500 hover:text-gray-900">Testimonials</a>
                        </div>
                        <div>
                            <Link
                                to="/setup"
                                className="px-4 py-2 sm:px-6 bg-black text-white text-sm sm:text-base rounded-full font-medium hover:bg-gray-800 transition shadow-md"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative overflow-hidden pt-12 sm:pt-16 pb-20 sm:pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-4 sm:mb-6">
                        Banking, <span className="text-blue-600">Reimagined.</span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-base sm:text-xl text-gray-500 mb-8 sm:mb-10 px-2">
                        Experience the future of financial control with Arto+. <br className="hidden md:block" />
                        Customizable cards, instant setup, and zero hidden fees.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
                        <Link to="/setup" className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full font-bold text-base sm:text-lg hover:bg-blue-700 transition shadow-xl hover:-translate-y-1 transform duration-200">
                            Create Your Card
                        </Link>
                        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-bold text-base sm:text-lg hover:bg-gray-50 transition shadow-sm">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Abstract Background Decoration */}
                <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none opacity-30">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>
            </header>

            {/* Features Section */}
            <section id="features" className="py-12 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Choose Arto+?</h2>
                        <p className="mt-4 text-gray-500">Everything you need to manage your finances with style.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <span className="text-2xl">🎨</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Customizable</h3>
                            <p className="text-gray-500">
                                Design your card to match your style. specialized themes and colors available instantly.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Secure by Default</h3>
                            <p className="text-gray-500">
                                Advanced encryption and instant freeze capabilities keep your money safe at all times.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <span className="text-2xl">🌍</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Global Access</h3>
                            <p className="text-gray-500">
                                Use your Arto+ card anywhere in the world with zero foreign transaction fees.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-black rounded-2xl sm:rounded-3xl p-8 sm:p-12 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to upgrade your wallet?</h2>
                        <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">Join over 100,000 users who have switched to Arto+ for a better banking experience.</p>
                        <Link to="/setup" className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition">
                            Get Started Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-2xl font-bold text-blue-700">Arto+</span>
                        <p className="text-gray-500 text-sm mt-1">© {new Date().getFullYear()} Arto Financial. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-gray-600">Privacy</a>
                        <a href="#" className="text-gray-400 hover:text-gray-600">Terms</a>
                        <a href="#" className="text-gray-400 hover:text-gray-600">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
