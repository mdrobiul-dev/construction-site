import React from 'react'



import { useEffect, useState } from "react";
import Navbar from '../components/Landingpage/Navbar'
import Banner from '../components/Landingpage/Banner'
import Experience from '../components/Landingpage/Experience'
import Catalog from '../components/Landingpage/Catalog'


const Home = () => {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } catch (error) {
      console.log(error);
      
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch  (error) {
      console.log(error);
      
      return false;
    }
    } else {
      root.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch (error) {
      console.log(error);
      
      return false;
    }
    }
  }, [dark]);

  return (
    <>
      <button
      className="theme-toggle"
      aria-pressed={dark}
      onClick={() => setDark((d) => !d)}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {dark ? "🌙" : "☀️"}
      </button>

<Navbar />
      <Banner />
      <Experience />
      <Catalog />
    </>
  );
};

export default Home;
