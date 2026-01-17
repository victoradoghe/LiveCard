
import React from 'react';
import { Link } from 'react-router-dom';

export const DeliveryPage = () => {
    return (
        <div className="p-4 md:p-10 flex flex-col items-center justify-center h-full">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Delivery Status</h2>
            <p className="text-gray-500 mb-8">Your card is being prepared for shipment.</p>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-md w-full">
                <div className="flex items-center mb-4">
                    <div className="w-4 h-4 rounded-full bg-green-500 mr-4"></div>
                    <span className="font-medium text-gray-700">Order Received</span>
                </div>
                <div className="flex items-center mb-4">
                    <div className="w-4 h-4 rounded-full bg-blue-500 mr-4 animate-pulse"></div>
                    <span className="font-medium text-gray-700">Processing</span>
                </div>
                <div className="flex items-center opacity-50">
                    <div className="w-4 h-4 rounded-full bg-gray-300 mr-4"></div>
                    <span className="font-medium text-gray-700">Shipped</span>
                </div>
            </div>

            <div className="mt-12">
                <Link to="/setup" className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                    Proceed to Card Setup
                </Link>
            </div>
        </div>
    );
};
