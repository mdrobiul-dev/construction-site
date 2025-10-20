// src/components/job_pages/Navabr.jsx

import React, { useEffect, useState, useRef } from 'react';
// Kono CSS file dorkar nei, shob style inline o JavaScript diye control kora hoyeche.

// ==========================================================
// Custom Hook for Scroll Reveal Animation
// ==========================================================
const useScrollReveal = (threshold = 0.1) => {
    const refs = useRef([]);
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    // entry.target.dataset.key = 'form' ba 'footer'
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({ 
                            ...prev, 
                            [entry.target.dataset.key]: true 
                        }));
                        // Once visible, stop observing (optional, for performance)
                        observer.unobserve(entry.target); 
                    }
                });
            },
            { threshold }
        );

        refs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => {
            refs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [threshold]);

    // Function to assign ref and key to elements
    const setRef = (element, key) => {
        if (element && !refs.current.includes(element)) {
            refs.current.push(element);
            element.dataset.key = key; // Store a unique key on the element
        }
        return element;
    };

    return { setRef, isVisible };
};
// ==========================================================


const App = () => {
    // Images (Path-gulo thik thakle kaj korbe)
    const heroImageSrc = 'navbar.jpg';
    const logoImageSrc = 'image_0d0504.png';
    const footerBannerPlaceholder = "https://placehold.co/1200x200/212121/ffffff?text=ADVERTISEMENT+BANNER";

    // Initialize Scroll Reveal Hook
    const { setRef, isVisible } = useScrollReveal(0.2); // 20% visible hole reveal hobe

    // --- Theme Logic ---
    const [theme, setTheme] = useState(() => {
        try {
            const saved = window.localStorage.getItem('theme');
            if (saved === 'dark' || saved === 'light') return saved;
        } catch {}
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    // Local storage update
    useEffect(() => {
        try { 
            window.localStorage.setItem('theme', theme); 
        } catch {}
    }, [theme]);

    const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
    // --------------------

    // --- Dynamic Inline Styles & Colors (Transition add kora hoyeche) ---
    const transitionStyle = 'all 0.5s ease-in-out'; // Theme change transition
    const revealTransition = 'all 1.0s cubic-bezier(0.19, 1, 0.22, 1)'; // Scroll reveal transition

    const colors = {
        mainBg: theme === 'dark' ? '#111827' : '#ffffff', 
        navbarBg: theme === 'dark' ? '#1f2937' : '#ffffff', 
        textColor: theme === 'dark' ? '#f3f4f6' : '#1f2937', 
        linkTextColor: theme === 'dark' ? '#d1d5db' : '#374151', 
        formBg: theme === 'dark' ? '#1f2937' : '#f9fafb', 
        inputBg: theme === 'dark' ? '#000000' : '#ffffff', 
        inputBorder: theme === 'dark' ? '#4b5563' : '#d1d5db', 
        toggleBg: theme === 'dark' ? '#374151' : '#f3f4f6',
    };
    // ----------------------------------------------
    
    // --- Scroll Reveal Styles ---
    const getRevealStyle = (key) => ({
        // Initial state (hidden)
        opacity: isVisible[key] ? 1 : 0,
        transform: isVisible[key] ? 'translateY(0)' : 'translateY(50px)', // Move up 50px
        transition: revealTransition, // Slow reveal transition
    });


    return (
        <div 
            style={{ 
                backgroundColor: colors.mainBg, 
                color: colors.textColor,
                transition: transitionStyle,
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

            {/* Navbar (Stays fixed at the top, no scroll reveal needed) */}
            <nav 
                style={{ backgroundColor: colors.navbarBg, transition: transitionStyle }}
                className="shadow-lg"
            >
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <img src={logoImageSrc} className="h-10 w-auto" alt="Logo" />
                        <span 
                            style={{ color: colors.textColor, transition: transitionStyle }} 
                            className="ml-2 text-2xl font-bold"
                        >
                            Buildexo
                        </span>
                    </div>
                    <div className="flex items-center space-x-6 font-semibold">
                        {['Home','Pages','Services','Blog','Shop','Contact'].map(item => (
                            <a 
                                key={item} 
                                href="#" 
                                className="hover:text-orange-500"
                                style={{ color: colors.linkTextColor, transition: transitionStyle }}
                            >
                                {item}
                            </a>
                        ))}
                        
                        {/* ☀️ Dark/Light Mode Toggle Button 🌙 */}
                        <button 
                            onClick={toggleTheme} 
                            style={{ backgroundColor: colors.toggleBg, transition: 'background-color 0.3s' }}
                            className="ml-4 w-10 h-10 rounded-full flex items-center justify-center hover:ring-2 hover:ring-orange-500"
                            title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
                        >
                            <svg 
                                className="w-5 h-5" 
                                style={{ 
                                    color: theme === 'dark' ? '#facc15' : '#374151',
                                    transform: theme === 'dark' ? 'rotate(0deg)' : 'rotate(360deg)',
                                    transition: transitionStyle 
                                }} 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                            >
                                <path d={theme === 'dark' ? "M10 4.5a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 0110 4.5zM10 14a4 4 0 100-8 4 4 0 000 8z" : "M17.293 13.293a8 8 0 11-10.586-10.586 7 7 0 1010.586 10.586z"}/>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section (No scroll reveal needed) */}
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

            {/* 3. Job Apply Form Section: SCROLL REVEAL ADDED */}
            <section 
                // Set ref and merge scroll reveal style
                ref={el => setRef(el, 'form')} 
                style={{ ...getRevealStyle('form'), backgroundColor: colors.mainBg, transition: transitionStyle }}
                className="py-20"
            >
                <div className="max-w-4xl mx-auto px-4">
                    <h2 
                        style={{ color: colors.textColor, transition: transitionStyle }} 
                        className="text-4xl font-bold text-center mb-8"
                    >
                        Apply For This Job
                    </h2>
                    
                    <form 
                        style={{ backgroundColor: colors.formBg, transition: transitionStyle }}
                        className="p-8 rounded-lg shadow-xl space-y-6 border border-gray-200"
                    >
                        
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
                                        transition: transitionStyle
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
                                    transition: transitionStyle
                                }}
                                className="p-4 rounded-lg border appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                                <option style={{ color: '#000000' }}>Position</option>
                                <option style={{ color: '#000000' }}>Site Engineer</option>
                                <option style={{ color: '#000000' }}>Project Manager</option>
                                <option style={{ color: '#000000' }}>Architect</option>
                            </select>
                        </div>
                        
                        <div>
                            <label 
                                style={{ color: colors.textColor, transition: transitionStyle }} 
                                className="block mb-2 font-medium"
                            >
                                Upload CV
                            </label>
                            <input 
                                type="file" 
                                style={{ color: colors.textColor, transition: transitionStyle }} 
                                className="block w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100 transition-colors duration-300"
                            />
                        </div>
                        
                        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition">Submit Now</button>
                    </form>
                </div>
            </section>

            {/* Advertisement Banner Placeholder (Optional) */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <img src={footerBannerPlaceholder} alt="Advertisement Banner" className="w-full h-auto object-cover rounded-lg shadow-xl" />
            </div>

            {/* 6. Footer: SCROLL REVEAL ADDED */}
            <footer 
                // Set ref and merge scroll reveal style
                ref={el => setRef(el, 'footer')}
                style={{ ...getRevealStyle('footer'), backgroundColor: colors.navbarBg, color: '#ffffff', transition: transitionStyle }}
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