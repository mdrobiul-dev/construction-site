import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Teampage from "./pages/Teampage";
import JOBS from "./pages/JOBS";
import Registration from "./pages/Registration";
import Landingpage from "./pages/Landingpage";
import Portfolio from "./pages/Portfolio";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // kept HEAD's longer duration
      once: true,
    });
  }, []);

  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/home" element={<Landingpage />} />
        <Route path="/jobs" element={<JOBS />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team" element={<Teampage />} />
      </Routes>
    </Router>
  );
};

export default App;

