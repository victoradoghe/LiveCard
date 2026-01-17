import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* Sidebar - Hidden on mobile, usually would have a hamburger menu, 
          but for now keeping consistent with previous desktop-first design, 
          will make responsive later. */}
      {/* Desktop Sidebar */}
      <div className="border-r border-gray-200 w-64 pt-10 pl-10 hidden lg:block">
        <div className="mb-8">
          <Link to="/" className="text-2xl font-bold text-blue-700 hover:text-blue-800">Arto+</Link>
        </div>
        <Sidebar />
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={closeMenu}
          ></div>

          {/* Drawer Content */}
          <div className="relative bg-white w-64 h-full shadow-xl flex flex-col p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="text-2xl font-bold text-blue-700" onClick={closeMenu}>Arto+</Link>
              <button
                onClick={closeMenu}
                className="p-2 -mr-2 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 relative overflow-y-auto h-screen">
        {/* Mobile Header Placeholder */}
        <div className="lg:hidden p-4 border-b flex justify-between items-center bg-white sticky top-0 z-30">
          <Link to="/" className="text-xl font-bold text-blue-700">Arto+</Link>
          <button onClick={toggleMenu} className="text-gray-500 hover:text-blue-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <Outlet />
      </div>
    </div>
  );
};
