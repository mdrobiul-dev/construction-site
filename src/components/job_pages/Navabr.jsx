// src/components/job_pages/Navabr.jsx

import React, { useEffect, useState } from 'react';
// ⚠️ Kono CSS file import korben na! Shob style inline kora hoyeche.

const App = () => {
    // Images (Ei path-gulo apnar project-er public folder ba relevant path-e thakle kaj korbe)
    const heroImageSrc = 'navbar.jpg';
    // const logoImageSrc = 'image_0d0504.png';
    const footerBannerPlaceholder = "https://placehold.co/1200x200/212121/ffffff?text=ADVERTISEMENT+BANNER";

    // --- Theme Logic (Shothik ache) ---
    const [theme, setTheme] = useState(() => {
        try {
            const saved = window.localStorage.getItem('theme');
            if (saved === 'dark' || saved === 'light') return saved;
        } catch {console.error();
        }
        // Default to system preference
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    // Theme state change hole local storage update kora hoche
    useEffect(() => {
        try { 
            window.localStorage.setItem('theme', theme); 
        } catch {console.error()}
    }, [theme]);

    const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
    // --------------------

    // --- Dynamic Inline Styles Define Kora Hoche ---
    // Ekhane shob color dynamically theme-er upor nirbhor korche
    const colors = {
        mainBg: theme === 'dark' ? '#111827' : '#ffffff', // Dark Gray-900 or White
        navbarBg: theme === 'dark' ? '#1f2937' : '#ffffff', // Dark Gray-800 or White
        textColor: theme === 'dark' ? '#f3f4f6' : '#1f2937', // Light Gray-100 or Dark Gray-900
        linkTextColor: theme === 'dark' ? '#d1d5db' : '#374151', // Gray-200 or Gray-700
        formBg: theme === 'dark' ? '#1f2937' : '#f9fafb', // Dark Gray-800 or Light Gray-50
        inputBg: theme === 'dark' ? '#000000' : '#ffffff', // Black or White
        inputBorder: theme === 'dark' ? '#4b5563' : '#d1d5db', // Dark Gray-700 or Gray-300
        toggleBg: theme === 'dark' ? '#374151' : '#f3f4f6', // Gray-700 or Gray-100
    };
    // ----------------------------------------------
    
    return (
        // 1. Main container: Dynamic Background and Text Color
        <div 
            style={{ 
                backgroundColor: colors.mainBg, 
                color: colors.textColor,
                transition: 'background-color 0.5s, color 0.5s', // Smooth transition
            }}
            className="font-sans min-h-screen" 
        >
            
            {/* Top Bar (Fixed Dark Background) */}
            <div 
                className="text-sm py-2 px-4 flex justify-between items-center font-medium"
                style={{ backgroundColor: '#111827', color: '#ffffff' }}
            >
                <span>We Will go through all the stages of construction</span>
                <span>203 Madison Ave, NY | info@example.com</span>
            </div>

            {/* 2. Navbar: Dynamic Background and Text Color */}
            <nav 
                style={{ backgroundColor: colors.navbarBg, transition: 'background-color 0.5s' }}
                className="shadow-lg"
            >
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
                    <div className="flex items-center">
                        {/* <img src={logoImageSrc} className="h-10 w-auto" alt="Logo" /> */}
                        {/* Logo Text Color */}
                        <span style={{ color: colors.textColor }} className="ml-2 text-2xl font-bold transition-colors duration-300">Buildexo</span>
                    </div>
                    <div className="flex items-center space-x-6 font-semibold transition-colors duration-300">
                        {['Home','Pages','Services','Blog','Shop','Contact'].map(item => (
                            // Link Text Color
                            <a 
                                key={item} 
                                href="#" 
                                className="hover:text-orange-500"
                                style={{ color: colors.linkTextColor }}
                            >{item}</a>
                        ))}
                        
                        {/* ☀️ Dark/Light Mode Toggle Button 🌙 */}
                        <button 
                            onClick={toggleTheme} 
                            style={{ backgroundColor: colors.toggleBg, transition: 'background-color 0.3s' }}
                            className="ml-4 w-10 h-10 rounded-full flex items-center justify-center hover:ring-2 hover:ring-orange-500"
                            title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
                        >
                            {theme === 'dark' ? 
                                <svg className="w-5 h-5" style={{ color: '#facc15' }} fill="currentColor" viewBox="0 0 20 20"><path d="M10 4.5a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 0110 4.5zM10 14a4 4 0 100-8 4 4 0 000 8z"/></svg>
                                :
                                <svg className="w-5 h-5" style={{ color: '#374151' }} fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293a8 8 0 11-10.586-10.586 7 7 0 1010.586 10.586z"/></svg>
                            }
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section (No dynamic BG change needed) */}
            <div className="relative h-96">
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${heroImageSrc})`, backgroundBlendMode: 'multiply', backgroundColor:'rgba(21,38,70,0.8)'}}
                />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-5xl font-bold mb-4">Job Apply</h1>
                    <p>Home » Job Apply</p>
                </div>
            </div>

            {/* 3. Job Apply Form Section: Dynamic Background */}
            <section 
                style={{ backgroundColor: colors.mainBg, transition: 'background-color 0.5s' }}
                className="py-20"
            >
                <div className="max-w-4xl mx-auto px-4">
                    {/* Header Text Color */}
                    <h2 style={{ color: colors.textColor }} className="text-4xl font-bold text-center mb-8 transition-colors duration-300">Apply For This Job</h2>
                    
                    {/* 4. Form container: Dynamic Background and Text Color */}
                    <form 
                        style={{ 
                            backgroundColor: colors.formBg, 
                            transition: 'background-color 0.5s' 
                        }}
                        className="p-8 rounded-lg shadow-xl space-y-6 border border-gray-200"
                    >
                        
                        {/* 5. Form Inputs: Dynamic Background/Border/Text */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Input Template */}
                            {['First Name', 'Last Name', 'Phone', 'City', 'Email'].map(placeholder => (
                                <input 
                                    key={placeholder}
                                    placeholder={placeholder} 
                                    style={{ 
                                        backgroundColor: colors.inputBg, 
                                        color: colors.textColor, 
                                        borderColor: colors.inputBorder,
                                        transition: 'background-color 0.5s, color 0.5s, border-color 0.5s'
                                    }}
                                    className="p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500" 
                                />
                            ))}
                            
                            {/* Select Dropdown */}
                            <select 
                                style={{ 
                                    backgroundColor: colors.inputBg, 
                                    color: colors.textColor, 
                                    borderColor: colors.inputBorder,
                                    transition: 'background-color 0.5s, color 0.5s, border-color 0.5s'
                                }}
                                className="p-4 rounded-lg border appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                                <option style={{ color: '#000000' }}>Position</option>
                                <option style={{ color: '#000000' }}>Site Engineer</option>
                                <option style={{ color: '#000000' }}>Project Manager</option>
                                <option style={{ color: '#000000' }}>Architect</option>
                            </select>
                        </div>
                        
                        {/* File Upload label color */}
                        <div>
                            <label style={{ color: colors.textColor }} className="block mb-2 font-medium transition-colors duration-300">Upload CV</label>
                            {/* File input-er button style Tailwind classes use korche, but main text color thik thakbe */}
                            <input 
                                type="file" 
                                style={{ color: colors.textColor }} // Input Text Color fix kora holo
                                className="block w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100 transition-colors duration-300"
                            />
                        </div>
                        
                        {/* Submit Button (Fixed Orange) */}
                        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition">Submit Now</button>
                    </form>
                </div>
            </section>

            {/* Advertisement Banner Placeholder (Optional) */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <img src={footerBannerPlaceholder} alt="Advertisement Banner" className="w-full h-auto object-cover rounded-lg shadow-xl" />
            </div>

            {/* 6. Footer: Dynamic Background (Text color fixed white for contrast) */}
            <footer 
                style={{ backgroundColor: colors.navbarBg, color: '#ffffff', transition: 'background-color 0.5s' }}
                className="py-12"
            >
                <div className="max-w-7xl mx-auto px-4 text-center">
                    &copy; 2023 Buildexo. All rights reserved.
                </div>
            </footer>

        </div>
    )
}

export default App;