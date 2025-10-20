import React, { useState } from 'react'
import { MdOutlineNightlight, MdOutlineNightlightRound } from "react-icons/md";
const Header = () => {
const [darkmode, setdarkmode] = useState(false)
const toggleTheme = () => {
  if(darkmode){
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
    setdarkmode(false)
  }else{
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
    setdarkmode(true)
  }
}
  return (
     <div className="bg-[url('/banner.jpg')] bg-cover bg-center flex items-center justify-around h-52 relative ">
        <div className="absolute inset-0 bg-black/50">
        </div>
        {/* button */}
        <h1 className="text-white text-3xl md:text-4xl font-bold relative z-10 text-center">
          Create Your Account
        </h1>
        <div className='flex items-start'>
          <button 
          onClick={toggleTheme}
           className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
          >{darkmode ? (
            <MdOutlineNightlight className='text-4xl text-yellow-400'/>
          ) : (
        <MdOutlineNightlightRound className="text-gray-800 text-4xl" />
      )}</button>
        </div>
      </div>
  )
}

export default Header
