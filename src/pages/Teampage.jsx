import React from 'react'
import "./Teampage.css"
import Navbar from '../components/navbar/navbar'
import { FaLocationDot } from "react-icons/fa6";

import { BiLogoGmail } from "react-icons/bi";
import { FaBolt } from "react-icons/fa";





const Teampage = () => {
  return (
    <div className='main_nav_part'>
          <div className="container">
       <header className='flex justify-end'>
         <div className="main_head w-[1000px] h-[46px] items-center justify-center bg-[#161616] text-white flex  ">
              <div className="icon ">
     <FaBolt />
              </div>

        <p >We Will go through all the stages of construction</p>
        <div className="icon ">

        <FaLocationDot />

        </div>
<p >203 Madison Ave, New York, USA</p>
<div className="icon ">

        <  BiLogoGmail />
</div>

<p c>info@example.com</p>
      </div>
       </header>
      <Navbar/>
       </div>
     
    </div>
  )
}

export default Teampage
