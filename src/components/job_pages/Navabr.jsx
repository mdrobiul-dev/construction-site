import React from 'react'

// Main component representing the entire page
const App = () => {
  // File references for images (accessible via the environment)
  const heroImageSrc = 'navbar.jpg'; // Using the uploaded navbar.jpg for the background
  const logoImageSrc = 'image_0d0504.png'; // Using a placeholder for the logo
  const footerBannerPlaceholder = "https://placehold.co/1200x200/212121/ffffff?text=ADVERTISEMENT+BANNER";


  return (
    <div className="font-sans min-h-screen bg-white">
      {/* --- 1. Top Bar --- */}
      <div className="bg-gray-900 text-white text-sm py-2 px-4 flex justify-between items-center font-medium">
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span>We Will go through all the stages of construction</span>
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
            <span>203 Madison Ave. New York, USA</span>
          </span>
          <span className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            <span>info@example.com</span>
          </span>
        </div>
      </div>

      {/* --- 2. Main Navigation Bar (Rounded Corners) --- */}
      <nav className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 bg-white shadow-lg rounded-b-lg overflow-hidden">
            
            {/* Logo/Brand Name Section */}
            <div className="flex-shrink-0 flex items-center h-full bg-white pr-4">
              <img className="h-10 w-auto ml-2" src={logoImageSrc} alt="Buildexo Logo" /> 
              <span className="ml-2 text-2xl font-bold text-gray-800">Buildexo</span>
            </div>

            {/* Navigation Links and Buttons Section */}
            <div className="hidden md:flex items-center text-gray-700 font-semibold h-full">
              
              <a href="#" className="text-orange-500 hover:text-orange-600 transition duration-150 px-3 h-full flex items-center">Home</a>
              
              {['Pages', 'Services', 'Blog', 'Shop'].map((item) => (
                <div key={item} className="relative group h-full flex items-center">
                  <a href="#" className="hover:text-orange-500 transition duration-150 px-3 flex items-center">
                    {item}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </a>
                  <div className="absolute hidden group-hover:block top-full mt-0 bg-white shadow-lg z-10 w-40 border border-gray-100">
                    {/* Dropdown Items Here */}
                  </div>
                </div>
              ))}
              
              <a href="#" className="hover:text-orange-500 transition duration-150 px-3 h-full flex items-center">Contact</a>

              {/* Search Icon and Cart Icon */}
              <a href="#" className="text-xl hover:text-orange-500 transition duration-150 px-3 h-full flex items-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </a>
              <a href="#" className="relative text-xl hover:text-orange-500 transition duration-150 px-3 h-full flex items-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </a>
              
              {/* Get A Quote Button */}
              <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-full px-8 text-lg transition duration-300 flex items-center whitespace-nowrap">
                GET A QUOTE
                <span className="ml-2 text-xl font-light">»</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* --- 3. Hero Section / Breadcrumb Area --- */}
      <div className="relative overflow-hidden" style={{ minHeight: '350px' }}>
        
        {/* Background Image/Dark Overlay (Using uploaded navbar.jpg) */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${heroImageSrc})`, 
            backgroundColor: 'rgba(21, 38, 70, 0.8)', 
            backgroundBlendMode: 'multiply',
            zIndex: 0 
          }}
        ></div>
        
        {/* Content: Heading and Breadcrumbs */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-20 pb-10 text-white">
          <h1 className="text-5xl font-bold mb-4">Job Apply</h1>
          <p className="text-sm">
            <a href="#" className="text-white hover:text-orange-500">Home</a>
            <span className="mx-2">»</span>
            <span className="text-white opacity-75">Job Apply</span>
          </p>
        </div>
      </div>
      
      {/* --- 4. Job Application Form Section --- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header and Title */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-2">
              <span className="text-orange-500 text-sm font-semibold">Job Apply Now</span>
              <div className="w-1 h-1 rounded-full bg-orange-500 ml-1"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply For This Job</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Integer iaculis ultrices velit nec tempor. Pellentesque aliquet est massa, sit amet tempor mi auctor nec.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white p-8 sm:p-12 shadow-xl rounded-lg border border-gray-100">
            <form className="space-y-6">
              
              {/* Input Fields (Two columns) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <input type="text" placeholder="First name" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-150" />
                <input type="text" placeholder="Last name" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-150" />
                
                <input type="text" placeholder="Phone number" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-150" />
                <input type="text" placeholder="Location (City)" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-150" />
                
                <input type="email" placeholder="Email address" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-150" />
                
                {/* Position Dropdown */}
                <div className="relative">
                  <select defaultValue="" className="w-full p-4 border border-gray-300 rounded-lg appearance-none focus:ring-orange-500 focus:border-orange-500 text-gray-500 transition duration-150">
                    <option value="" disabled hidden>Position</option>
                    <option>Site Engineer</option>
                    <option>Project Manager</option>
                    <option>Architect</option>
                  </select>
                  {/* Custom Dropdown Arrow Icon */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>

                {/* Row 4 */}
                <input type="text" placeholder="Portfolio / Website link..." className="w-full p-4 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-150" />
                <input type="text" placeholder="Your expected salary" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition duration-150" />

              </div>

              {/* CV Upload Section */}
              <div className="pt-4">
                <label className="block text-gray-700 font-semibold mb-3">Upload CV</label>
                <div className="p-6 border border-gray-300 rounded-lg bg-gray-50 flex items-center space-x-4">
                  {/* Custom File Input Styling */}
                  <label className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium py-2 px-4 rounded-lg shadow-sm">
                    Choose File
                    <input type="file" className="hidden" />
                  </label>
                  <span className="text-gray-500">No file chosen</span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl">
                  SUBMIT NOW
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>
      
      {/* --- 5. Image Banner (Above Footer) --- */}
      <div className="relative w-full overflow-hidden" style={{ height: '200px' }}>
        <img 
          src={footerBannerPlaceholder} // Using placeholder for the banner
          alt="Team collaboration banner" 
          className="w-full h-full object-cover object-center"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1200x200/212121/ffffff?text=AD+BANNER+FALLBACK' }}
        />
      </div>
      
      {/* --- 6. Footer Section --- */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Footer Section: Contact, Social, Newsletter */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-gray-700 pb-10 mb-10">
            
            {/* Call Us */}
            <div className="flex items-center space-x-3 mb-8 md:mb-0">
              <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.957.679l.527 1.761a1 1 0 00.985.643h4.94a1 1 0 00.985-.643l.527-1.761A1 1 0 0118.72 3H22a2 2 0 012 2v10a2 2 0 01-2 2h-1.047l-.854-1.708A1 1 0 0018 13H6a1 1 0 00-.947.679L4.047 16H3a2 2 0 01-2-2V5zm10 4a1 1 0 100 2h.01a1 1 0 100-2H13zm-2 0a1 1 0 100 2h.01a1 1 0 100-2H11z"></path></svg>
              <div>
                <p className="text-gray-400 text-sm">Give us a call</p>
                <p className="text-lg font-bold text-white">+123-456-7890</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-8 md:mb-0">
              {/* Using simple text placeholders for icons */}
              <a href="#" className="text-gray-400 hover:text-white transition duration-150 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center font-bold">F</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-150 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center font-bold">T</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-150 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center font-bold">I</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-150 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center font-bold">L</a>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <span className="text-gray-400 text-sm md:text-base whitespace-nowrap">Join Newsletter</span>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="p-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:ring-1 focus:ring-orange-500" 
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-r-lg text-sm font-semibold transition duration-150">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Main Footer Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 text-gray-400">
            
            {/* Buildexo Info */}
            <div>
              <div className="flex items-center text-2xl font-bold text-white mb-4">
                <img className="h-8 w-auto mr-2" src={logoImageSrc} alt="Buildexo Logo" /> 
                Buildexo
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Improve efficiency, provide a better Customer experience with modern Technolo services available
              </p>
              {/* Payment Icons Placeholder */}
              <div className="flex space-x-4 text-xs font-semibold">
                 <span className="bg-gray-700 p-2 rounded">VISA</span>
                 <span className="bg-gray-700 p-2 rounded">MASTERCARD</span>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold text-white mb-5">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition duration-150">About</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-150">Career</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-150">Contact</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-150">FAQ</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-bold text-white mb-5">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition duration-150">Home</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-150">Contact</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-150">Portfolio</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-150">Services</a></li>
              </ul>
            </div>

            {/* Help Page */}
            <div>
              <h4 className="text-lg font-bold text-white mb-5">Help Page</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition duration-150">About</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-150">Career</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-150">Contact</a></li>
                <li><a href="#" className="hover:text-orange-500 transition duration-150">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center border-t border-gray-700 pt-8 text-gray-500 text-sm">
            &copy; Copyright 2023 All rights reserved.
          </div>

        </div>
      </footer>
    </div>
    
  )
}

export default App
