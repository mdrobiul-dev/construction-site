// src/components/job_pages/Navabr.jsx

import React, { useEffect, useState } from 'react';
// CSS import line-ta comment kore din ba remove korun jodi shomossha kore
// import '../../App.css'; 

const App = () => {
    // Images (Ei path-gulo apnar project-er public folder ba relevant path-e thakle kaj korbe)
    const heroImageSrc = 'navbar.jpg';
    const logoImageSrc = 'image_0d0504.png';
    const footerBannerPlaceholder = "https://placehold.co/1200x200/212121/ffffff?text=ADVERTISEMENT+BANNER";

    // --- Theme Logic (Shothik ache) ---
    const [theme, setTheme] = useState(() => {
        try {
            const saved = window.localStorage.getItem('theme');
            if (saved === 'dark' || saved === 'light') return saved;
        } catch {}
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    // We no longer need to add 'dark' class to <html>. 
    // We only need the 'theme' state.
    useEffect(() => {
        // Shudhu local storage update korchi, karon inline style use korchi
        try { window.localStorage.setItem('theme', theme); } catch {}
        
        // *Optional: Jodi kichu element-er styling CSS-e kora thake, 
        // tar jonno <html> tag-e class rakhte paren*
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('theme-dark'); 
        } else {
            root.classList.remove('theme-dark');
        }
        
    }, [theme]);

    const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
    // --------------------

    // --- Dynamic Inline Styles Define Kora Hoche ---
    const colors = {
        mainBg: theme === 'dark' ? '#111827' : '#ffffff', // Gray-900 or White
        navbarBg: theme === 'dark' ? '#1f2937' : '#ffffff', // Gray-800 or White
        textColor: theme === 'dark' ? '#f3f4f6' : '#1f2937', // Gray-100 or Gray-900
        formBg: theme === 'dark' ? '#1f2937' : '#f9fafb', // Gray-800 or Gray-50
        inputBg: theme === 'dark' ? '#000000' : '#ffffff', // Black or White
        inputBorder: theme === 'dark' ? '#4b5563' : '#d1d5db', // Gray-700 or Gray-300
    };
    // ----------------------------------------------
    
    return (
        // Main container: Inline style diye background change
        <div 
            style={{ 
                backgroundColor: colors.mainBg, 
                color: colors.textColor,
                transition: 'background-color 0.5s, color 0.5s'
            }}
            className="font-sans min-h-screen" // Shudhu fixed classes
        >
            
            {/* Top Bar (Fixed) */}
            <div className="bg-gray-900 text-white text-sm py-2 px-4 flex justify-between items-center font-medium">
                <span>We Will go through all the stages of construction</span>
                <span>203 Madison Ave, NY | info@example.com</span>
            </div>

            {/* Navbar: Inline style diye background change */}
            <nav 
                style={{ backgroundColor: colors.navbarBg, transition: 'background-color 0.5s' }}
                className="shadow-lg"
            >
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <img src={logoImageSrc} className="h-10 w-auto" alt="Logo" />
                        {/* Logo Text Color */}
                        <span style={{ color: colors.textColor }} className="ml-2 text-2xl font-bold transition-colors duration-300">Buildexo</span>
                    </div>
                    <div style={{ color: colors.textColor }} className="flex items-center space-x-6 font-semibold transition-colors duration-300">
                        {['Home','Pages','Services','Blog','Shop','Contact'].map(item => (
                            // Link Color change-er jonno Tailwind classes use kora hoche (eta kaj korar kotha)
                            <a key={item} href="#" className="text-gray-700 dark:text-gray-200 hover:text-orange-500">{item}</a>
                        ))}
                        
                        {/* ☀️ Dark/Light Mode Toggle Button 🌙 */}
                        <button 
                            onClick={toggleTheme} 
                            className="ml-4 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-colors hover:ring-2 hover:ring-orange-500"
                            title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
                        >
                            {theme === 'dark' ? 
                                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 4.5a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 0110 4.5zM10 14a4 4 0 100-8 4 4 0 000 8z"/></svg>
                                :
                                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293a8 8 0 11-10.586-10.586 7 7 0 1010.586 10.586z"/></svg>
                            }
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section (No BG change needed here) */}
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

            {/* Job Apply Form Section: Inline style for BG */}
            <section 
                style={{ backgroundColor: colors.mainBg, transition: 'background-color 0.5s' }}
                className="py-20"
            >
                <div className="max-w-4xl mx-auto px-4">
                    {/* Header Text Color */}
                    <h2 style={{ color: colors.textColor }} className="text-4xl font-bold text-center mb-8 transition-colors duration-300">Apply For This Job</h2>
                    
                    {/* Form container: Inline style for BG */}
                    <form 
                        style={{ 
                            backgroundColor: colors.formBg, 
                            color: colors.textColor, 
                            transition: 'background-color 0.5s, color 0.5s' 
                        }}
                        className="p-8 rounded-lg shadow-xl space-y-6 border border-gray-200 dark:border-gray-700"
                    >
                        
                        {/* Form Inputs: Inline style for BG/Border/Text */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input 
                                placeholder="First Name" 
                                style={{ backgroundColor: colors.inputBg, color: colors.textColor, borderColor: colors.inputBorder }}
                                className="p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300" 
                            />
                            {/* ... (Baki input field gulo-o oi bhabe inline style korte hobe) ... */}
                            {/* Baki input field gulo apnake uporer template-e inline style diye change korte hobe */}
                            <input 
                                placeholder="Last Name" 
                                style={{ backgroundColor: colors.inputBg, color: colors.textColor, borderColor: colors.inputBorder }}
                                className="p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300" 
                            />
                            <input 
                                placeholder="Phone" 
                                style={{ backgroundColor: colors.inputBg, color: colors.textColor, borderColor: colors.inputBorder }}
                                className="p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300" 
                            />
                            <input 
                                placeholder="City" 
                                style={{ backgroundColor: colors.inputBg, color: colors.textColor, borderColor: colors.inputBorder }}
                                className="p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300" 
                            />
                            <input 
                                placeholder="Email" 
                                style={{ backgroundColor: colors.inputBg, color: colors.textColor, borderColor: colors.inputBorder }}
                                className="p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300" 
                            />
                            
                            {/* Select Dropdown */}
                            <select 
                                style={{ backgroundColor: colors.inputBg, color: colors.textColor, borderColor: colors.inputBorder }}
                                className="p-4 rounded-lg border appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300"
                            >
                                <option>Position</option>
                                <option>Site Engineer</option>
                                <option>Project Manager</option>
                                <option>Architect</option>
                            </select>
                        </div>
                        
                        {/* File Upload label color */}
                        <div>
                            <label style={{ color: colors.textColor }} className="block mb-2 font-medium transition-colors duration-300">Upload CV</label>
                            {/* File input-er button style CSS ba Tailwind chara change kora kothin. */}
                            <input 
                                type="file" 
                                className="block w-full text-gray-700 dark:text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100 transition-colors duration-300"
                            />
                        </div>
                        
                        {/* Submit Button (Fixed) */}
                        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition">Submit Now</button>
                    </form>
                </div>
            </section>

            {/* Advertisement Banner Placeholder (Optional) */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <img src={footerBannerPlaceholder} alt="Advertisement Banner" className="w-full h-auto object-cover rounded-lg shadow-xl" />
            </div>

            {/* Footer: Inline style for BG */}
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