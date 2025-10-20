import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);



  return (
    <>
    <Navbar/>
    <Home/>
    </>
  )
}

export default App
