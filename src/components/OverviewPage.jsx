
import React from 'react';
import { Link } from 'react-router-dom';

export const OverviewPage = () => {
    return (
        <div className="p-4 md:p-10 flex flex-col items-center justify-center h-full text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl text-green-600">✓</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">All Set!</h2>
            <p className="text-gray-500 mb-8 max-w-md">Your card has been configured and is ready for use upon delivery.</p>

            <Link to="/" className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800">
                Go to Dashboard
            </Link>
        </div>
    );
};
