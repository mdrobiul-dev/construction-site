import React from 'react'

const Header = () => {
  return (
     <div className="bg-[url('/banner.jpg')] bg-cover bg-center h-52 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="text-white text-3xl md:text-4xl font-bold relative z-10">
          Create Your Account
        </h1>
      </div>
  )
}

export default Header
