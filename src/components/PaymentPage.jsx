
import React from 'react';
import { Link } from 'react-router-dom';

export const PaymentPage = () => {
    return (
        <div className="p-4 md:p-10 flex flex-col items-center justify-center h-full">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Payment Method</h2>
            <p className="text-gray-500 mb-8">Add funds to your account.</p>

            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="border p-6 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                    <span className="text-2xl mb-2">🏦</span>
                    <span className="font-medium text-sm">Bank Transfer</span>
                </div>
                <div className="border p-6 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                    <span className="text-2xl mb-2">💳</span>
                    <span className="font-medium text-sm">Credit Card</span>
                </div>
            </div>

            <div className="mt-12">
                <Link to="/overview" className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                    Continue
                </Link>
            </div>
        </div>
    );
};
