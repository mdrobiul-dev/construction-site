import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="bg-[#0d0d26] text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} Buildexo. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer
