import React from 'react'
import './images./css'

const Navabr = () => {
  return (
    <>
        <div class="font-sans">
    <div class="bg-gray-900 text-white text-sm py-2 px-4 flex justify-between items-center">
        <div class="flex items-center space-x-6">
            <span class="flex items-center space-x-2">
                <span class="w-2 h-2 rounded-full bg-orange-500"></span>
                <span>We Will go through all the stages of construction</span>
            </span>
        </div>
        <div class="flex items-center space-x-6">
            <span class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                <span>203 Madison Ave. New York, USA</span>
            </span>
            <span class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                <span>info@example.com</span>
            </span>
        </div>
    </div>

    <nav class="bg-white shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <div class="flex-shrink-0 flex items-center">
                    <img class="h-10 w-auto" src="placeholder-logo.png" alt="Buildexo">
                    <span class="ml-2 text-2xl font-bold text-gray-800">Buildexo</span>
                </div>

                <div class="hidden md:flex items-center space-x-6 text-gray-700 font-semibold">
                    <a href="#" class="text-orange-500 hover:text-orange-600 transition duration-150 py-5">Home</a>
                    <div class="relative group">
                        <a href="#" class="hover:text-orange-500 transition duration-150 py-5 flex items-center">
                            Pages
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </a>
                        <div class="absolute hidden group-hover:block bg-white shadow-lg z-10">
                            </div>
                    </div>
                    <div class="relative group">
                        <a href="#" class="hover:text-orange-500 transition duration-150 py-5 flex items-center">
                            Services
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </a>
                    </div>
                    <div class="relative group">
                        <a href="#" class="hover:text-orange-500 transition duration-150 py-5 flex items-center">
                            Blog
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </a>
                    </div>
                    <div class="relative group">
                        <a href="#" class="hover:text-orange-500 transition duration-150 py-5 flex items-center">
                            Shop
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </a>
                    </div>
                    <a href="#" class="hover:text-orange-500 transition duration-150 py-5">Contact</a>
                    
                    <a href="#" class="text-lg hover:text-orange-500 transition duration-150">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </a>
                    
                    <a href="#" class="relative hover:text-orange-500 transition duration-150">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-full">0</span>
                    </a>
                </div>

                <a href="#" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-7 px-8 text-lg transition duration-300 flex items-center">
                    GET A QUOTE
                    <span class="ml-2 text-xl font-light">»</span>
                </a>
            </div>
        </div>
    </nav>

    <div class="relative bg-gray-900 bg-opacity-70 overflow-hidden" style="min-height: 350px;">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('placeholder-background-image.jpg'); filter: brightness(0.5); z-index: 0;"></div>
        
        <div class="relative z-10 flex flex-col items-center justify-center h-full pt-20 pb-10 text-white">
            <h1 class="text-5xl font-bold mb-4">Job Apply</h1>
            <p class="text-sm">
                <a href="#" class="text-white hover:text-orange-500">Home</a>
                <span class="mx-2">»</span>
                <span class="text-orange-500">Job Apply</span>
            </p>
        </div>
        
        </div>
</div>
    </>
  )
}

export default Navabr