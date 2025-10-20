import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaBolt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// This file is a single-file React component using TailwindCSS classes to match the provided Figma design.
// It intentionally avoids external CSS files so you can drop it into your project quickly.

export default function Teampage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  const topTeam = [
    {
      name: "Marc Chesson",
      role: "Project/Lead Contractor",
      img: "https://i.pravatar.cc/300?img=12",
    },
    {
      name: "Marc Boucher",
      role: "Site Foreman / Supervisor",
      img: "https://i.pravatar.cc/300?img=5",
    },
    {
      name: "Mitchel Johson",
      role: "Senior Safety Controller",
      img: "https://i.pravatar.cc/300?img=20",
    },
  ];

  const otherTeam = [
    "Jesse Butler",
    "Cris Wood",
    "Mark Stones",
    "John Doe",
    "Jane Smith",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Thin Top Bar (orange with contact) */}
      <div className="bg-orange-600 text-white text-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-10">
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">We will go through all the stages of construction</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaLocationDot className="w-4 h-4" />
              <span className="text-xs">203 Madison Ave, New York, USA</span>
            </div>
            <div className="flex items-center gap-2">
              <BiLogoGmail className="w-4 h-4" />
              <span className="text-xs">info@example.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-6">
        {/* Top header with big dark rounded card (matches screenshot center bar) */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div className="w-full md:w-[1000px] bg-[#161616] dark:bg-gray-800 text-white rounded-lg p-4 shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FaBolt className="text-yellow-400 w-6 h-6" />
              <p className="text-sm md:text-base">We Will go through all the stages of construction</p>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-3">
                <FaLocationDot className="text-red-400" />
                <span className="text-sm">203 Madison Ave, New York, USA</span>
              </div>
              <div className="flex items-center gap-3">
                <BiLogoGmail className="text-blue-400" />
                <span className="text-sm">info@example.com</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-medium">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </header>

        <Navbar />

        {/* Hero / Banner */}
        <section className="relative mt-8 rounded-lg overflow-hidden">
          <div
            className="w-full h-44 md:h-56 flex items-center justify-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(7,10,34,0.5), rgba(7,10,34,0.5)), url(https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=60)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
              <p className="text-sm md:text-base mt-2 opacity-90">Home / Team</p>
            </div>
          </div>
        </section>

        {/* Professional Team Title */}
        <section className="text-center mt-10">
          <p className="text-orange-500 font-medium">Great Experience In Building</p>
          <h3 className="text-3xl md:text-4xl font-bold mt-2">Professional Team</h3>
        </section>

        {/* Top 3 featured team */}
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topTeam.map((member, idx) => (
            <div
              key={idx}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-[0_15px_30px_rgba(8,7,16,0.08)] p-6 pt-16 flex flex-col items-center text-center overflow-visible"
            >
              <div className="absolute -top-12">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-md"
                />
              </div>
              <div className="mt-6 pt-2">
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{member.role}</p>

                <div className="mt-4 flex items-center justify-center gap-3">
                  <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 shadow-sm">
                    <FaFacebookF className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 shadow-sm">
                    <FaTwitter className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 shadow-sm">
                    <FaLinkedinIn className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Lower team placeholders (cards like screenshot) */}
        <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {otherTeam.map((name, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-700 mb-3 flex items-center justify-center text-xl font-medium">
                {name.split(" ")[0].charAt(0)}
              </div>
              <h5 className="text-sm font-semibold">{name}</h5>
              <p className="text-xs text-gray-500 dark:text-gray-300">Multi Role</p>
            </div>
          ))}

          {/* If you want the exact empty spots from the screenshot, add blank cards */}
          <div className="hidden lg:block bg-white dark:bg-gray-800 rounded-xl shadow p-4" />
          <div className="hidden lg:block bg-white dark:bg-gray-800 rounded-xl shadow p-4" />
        </section>

        {/* CTA / small gallery strip like screenshot */}
        <section className="mt-12 rounded-lg overflow-hidden">
          <div className="grid grid-cols-3 gap-2">
            <img src="https://images.unsplash.com/photo-1529429617124-9b8a7b2b3b9f?auto=format&fit=crop&w=800&q=60" alt="team" className="w-full h-28 object-cover" />
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60" alt="team" className="w-full h-28 object-cover" />
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=60" alt="team" className="w-full h-28 object-cover" />
          </div>
        </section>

        {/* Footer (matches dark purple footer in screenshot) */}
        <footer className="mt-12 bg-[#1b0f2b] text-gray-300 rounded-lg overflow-hidden">
          <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold text-white">Buildexo</h4>
              <p className="text-sm mt-3">We build smart, quality & better customer experiences with modern IT services.</p>
              <div className="flex items-center gap-3 mt-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Stripe_Logo%2C_recreated.svg" alt="stripe" className="w-16" />
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Resources</h5>
              <ul className="text-sm space-y-2">
                <li>About</li>
                <li>Career</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Company</h5>
              <ul className="text-sm space-y-2">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Help Page</h5>
              <ul className="text-sm space-y-2">
                <li>Support</li>
                <li>FAQs</li>
                <li>Documentation</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#12041a] text-xs text-gray-400 py-4 text-center">&copy; 2025 Buildexo. All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
}
