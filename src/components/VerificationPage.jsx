
import React from 'react';
import { Link } from 'react-router-dom';

export const VerificationPage = () => {
    return (
        <div className="p-4 md:p-10 flex flex-col items-center justify-center h-full">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Identity Verification</h2>
            <p className="text-gray-500 mb-8">Please verify your identity to activate your card.</p>

            <div className="flex flex-col space-y-4 w-full max-w-sm">
                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left font-medium text-gray-700 flex justify-between items-center">
                    Upload ID Document
                    <span>&rarr;</span>
                </button>
                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left font-medium text-gray-700 flex justify-between items-center">
                    Verify via SMS
                    <span>&rarr;</span>
                </button>
            </div>

            <div className="mt-12">
                <Link to="/payment" className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800">
                    Skip for now
                </Link>
            </div>
        </div>
    );
};
