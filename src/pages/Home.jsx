import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Experience from "../components/Experience";
import Catalog from "../components/Catalog";

const Home = () => {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch {}
    } else {
      root.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch {}
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

      <Banner />
      <Experience />
      <Catalog />
    </>
  );
};

export default Home;
