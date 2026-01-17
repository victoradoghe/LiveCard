import React from 'react';
import { NavLink } from 'react-router-dom';

// Since I cannot be sure react-icons is installed, I will use simple spans for now or SVG.
// Simple SVG checkmark
const CheckIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

export const Sidebar = () => {
    const steps = [
        { name: 'Delivery', path: '/delivery' },
        { name: 'Setup Card', path: '/setup' },
        { name: 'Verification', path: '/verification' },
        { name: 'Payment', path: '/payment' },
        { name: 'Overview', path: '/overview' },
    ];

    return (
        <div className="w-full py-8 pl-8 flex flex-col font-sans">
            <ul className="space-y-6">
                {steps.map((step, index) => (
                    <li key={index}>
                        <NavLink
                            to={step.path}
                            className={({ isActive, isPending }) => {
                                // Logic: If active, bold blue. If completed (previous in list), show check?
                                // For simplicity, we'll just check active state primarily.
                                return "flex items-center group";
                            }}
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive ? (
                                        <div className="flex items-center">
                                            <div className="w-4 h-0.5 bg-blue-600 mr-2"></div>
                                            <span className="text-sm font-bold text-gray-900">{step.name}</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center">
                                            {/* We can simulate 'completed' logic if we want, but for now just showing pending style vs active */}
                                            <div className="w-4 h-0.5 bg-transparent mr-2 group-hover:bg-gray-200"></div>
                                            <span className="text-sm font-medium text-gray-400 group-hover:text-gray-600">{step.name}</span>
                                        </div>
                                    )}
                                </>
                            )}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};
