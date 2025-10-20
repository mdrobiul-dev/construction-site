// src/components/job_pages/Navabr.jsx

import React, { useEffect, useState } from "react";

// Image paths (adjust according to your project)
const navbarImg = "/images/navbar.png"; // Logo
const heroImageSrc = "navbar.jpg";      // Hero background
const footerBannerPlaceholder =
  "https://placehold.co/1200x200/212121/ffffff?text=ADVERTISEMENT+BANNER";

const Navbar = () => {
  // --- Theme State ---
  const [theme, setTheme] = useState(() => {
    try {
      const saved = window.localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") return saved;
    } catch {}
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Apply theme class to <html> for Tailwind
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      window.localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="font-sans min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-gray-100">
      {/* --- Top Bar --- */}
      <div className="bg-gray-900 text-white text-sm py-2 px-4 flex justify-between items-center font-medium">
        <span>We Will go through all the stages of construction</span>
        <span>203 Madison Ave, NY | info@example.com</span>
      </div>

      {/* --- Navbar --- */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg rounded-b-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={navbarImg} className="h-10 w-auto" alt="Logo" />
            <span className="ml-2 text-2xl font-bold transition-colors duration-300">
              Buildexo
            </span>
          </div>

          {/* Links & Buttons */}
          <div className="hidden md:flex items-center space-x-6 font-semibold">
            {["Home", "Pages", "Services", "Blog", "Shop", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 dark:text-gray-200 hover:text-orange-500 transition duration-150"
                >
                  {item}
                </a>
              )
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-colors hover:ring-2 hover:ring-orange-500"
              title={theme === "dark" ? "Switch to light" : "Switch to dark"}
            >
              {theme === "dark" ? (
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 4.5a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 0110 4.5zM10 14a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293a8 8 0 11-10.586-10.586 7 7 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <div className="relative h-96">
        <div
          className="absolute inset-0 bg-cover bg-center bg-black/70"
          style={{ backgroundImage: `url(${heroImageSrc})` }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-4">Job Apply</h1>
          <p>Home » Job Apply</p>
        </div>
      </div>

      {/* --- Job Apply Form --- */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            Apply For This Job
          </h2>
          <form className="p-8 rounded-lg shadow-xl space-y-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                placeholder="First Name"
                className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300"
              />
              <input
                placeholder="Last Name"
                className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300"
              />
              <input
                placeholder="Phone"
                className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300"
              />
              <input
                placeholder="City"
                className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300"
              />
              <input
                placeholder="Email"
                className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300"
              />
              <select className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300">
                <option>Position</option>
                <option>Site Engineer</option>
                <option>Project Manager</option>
                <option>Architect</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Upload CV</label>
              <input
                type="file"
                className="block w-full text-gray-700 dark:text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100 transition-colors duration-300"
              />
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition">
              Submit Now
            </button>
          </form>
        </div>
      </section>

      {/* --- Footer Banner --- */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <img
          src={footerBannerPlaceholder}
          alt="Advertisement Banner"
          className="w-full h-auto object-cover rounded-lg shadow-xl"
        />
      </div>

      {/* --- Footer --- */}
      <footer className="py-12 bg-gray-900 dark:bg-gray-800 text-white text-center">
        &copy; 2023 Buildexo. All rights reserved.
      </footer>
    </div>
  );
};

export default Navbar;


