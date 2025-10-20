import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Teampage from "./pages/Teampage";
import JOBS from "./pages/JOBS";
import Registration from "./pages/Registration";
import Landingpage from "./pages/Landingpage";
import Portfolio from "./pages/Portfolio";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/jobs" element={<JOBS />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team" element={<Teampage />} />
      </Routes>
    </Router>
  );
};

export default App;
