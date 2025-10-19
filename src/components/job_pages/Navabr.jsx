import React from 'react';

// Assuming your background image is accessible via this public path
const navbarImg = '/images/navbar.png';

const Navbar = () => {
    return (
        <div className="font-sans">
            {/* Top Bar - No change needed here for alignment/rounding */}
            <div className="bg-gray-900 text-white text-sm py-2 px-4 flex justify-between items-center font-medium">
                <div className="flex items-center space-x-6">
                    <span className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        <span>We Will go through all the stages of construction</span>
                    </span>
                </div>
                <div className="flex items-center space-x-6">
                    <span className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                        <span>203 Madison Ave. New York, USA</span>
                    </span>
                    <span className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        <span>info@example.com</span>
                    </span>
                </div>
            </div>

            {/* Main Navigation Bar (With Rounded Corners) */}
            <nav className="bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* The Inner Container for Rounding and White Background */}
                    <div className="flex justify-between items-center h-20 bg-white shadow-lg rounded-b-lg overflow-hidden">
                        
                        {/* 1. Logo/Brand Name Section (White space on the left) */}
                        <div className="flex-shrink-0 flex items-center h-full bg-white pr-4">
                            {/* NOTE: Please replace navbarImg with your small logo image. */}
                            <img className="h-10 w-auto ml-2" src={navbarImg} alt="Buildexo Logo" /> 
                            <span className="ml-2 text-2xl font-bold text-gray-800">Buildexo</span>
                        </div>

                        {/* 2. Navigation Links and Buttons Section (The main navigation area) */}
                        <div className="hidden md:flex items-center text-gray-700 font-semibold h-full">
                            
                            {/* Links */}
                            <a href="#" className="text-orange-500 hover:text-orange-600 transition duration-150 px-3 h-full flex items-center">Home</a>
                            
                            {/* Dropdowns (Pages, Services, Blog, Shop) */}
                            {['Pages', 'Services', 'Blog', 'Shop'].map((item) => (
                                <div key={item} className="relative group h-full flex items-center">
                                    <a href="#" className="hover:text-orange-500 transition duration-150 px-3 flex items-center">
                                        {item}
                                        {/* Down Arrow Icon */}
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </a>
                                    {/* Dropdown Content placeholder */}
                                    <div className="absolute hidden group-hover:block top-full mt-0 bg-white shadow-lg z-10 w-40 border border-gray-100">
                                        {/* Dropdown Items Here */}
                                    </div>
                                </div>
                            ))}
                            
                            <a href="#" className="hover:text-orange-500 transition duration-150 px-3 h-full flex items-center">Contact</a>

                            {/* Search Icon and Cart Icon */}
                            <a href="#" className="text-xl hover:text-orange-500 transition duration-150 px-3 h-full flex items-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </a>
                            <a href="#" className="relative text-xl hover:text-orange-500 transition duration-150 px-3 h-full flex items-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </a>
                            
                            {/* Get A Quote Button - fills the rest of the space, giving the 'aligned' effect */}
                            <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-full px-8 text-lg transition duration-300 flex items-center whitespace-nowrap">
                                GET A QUOTE
                                <span className="ml-2 text-xl font-light">»</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section / Breadcrumb Area */}
            <div className="relative overflow-hidden" style={{ minHeight: '350px' }}>
                
                {/* Background Image/Dark Overlay */}
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ 
                        backgroundImage: `url(${navbarImg})`, 
                        backgroundColor: 'rgba(21, 38, 70, 0.8)', 
                        backgroundBlendMode: 'multiply',
                        zIndex: 0 
                    }}
                ></div>
                
                {/* Content: Heading and Breadcrumbs */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full pt-20 pb-10 text-white">
                    <h1 className="text-5xl font-bold mb-4">Job Apply</h1>
                    <p className="text-sm">
                        <a href="#" className="text-white hover:text-orange-500">Home</a>
                        <span className="mx-2">»</span>
                        <span className="text-white opacity-75">Job Apply</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;