import React, { useState, useEffect } from 'react'
import { MdNavigateNext } from 'react-icons/md'
import { TbPlayerTrackNextFilled } from 'react-icons/tb'
import DarkBtn from '../components/Utility/DarkBtn'

const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className={isDark ? 'dark bg-gray-900 text-white' : 'bg-white text-black'}>
        <section>
      <div className='wahid w-full h-64 overflow-hidden rounded-2xl' style={{ backgroundImage: "url('/images/port_sec.png')" }}>
      <div className='flex justify-end mr-20 mt-10'>
        <DarkBtn isDark={isDark} onToggle={toggleDarkMode} />
      </div>
      
      <div className='flex flex-col justify-center items-center h-full pb-20'>
        <h2 className='text-white font-bold text-6xl pb-3'>About us</h2>
        <p className='flex items-center text-base'>Home    <span className='flex items-center text-red-600 font-bold'>
            <TbPlayerTrackNextFilled/>
</span> About</p>
      </div>
      </div>
      </section>
      <section className='2nd container mx-auto'>
        <div className={`wahid flex justify-center items-center text-center my-20 px-4 ${isDark ? 'text-white' : 'text-black'}`}>
            <div>
            <h3 className='font-bold text-5xl pb-6'>A team of reliable and experienced contractors</h3>
            <p className='text-lg text-black'>Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia sit
consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. am Neque
porro dolor set quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
adipisci velit, sed quia non numquam</p>
            </div>
            <div>
            <img src="/images/port_experience.png" alt="about img" />
            </div>
        </div>
      </section>
      <section className='3rd container mx-auto grid grid-cols-2 my-32'>
        <div className=''>
          <img src="/images/port_3rdsec.png" />
          </div>
        <div className='wahid'>
          <h4 className='font-extrabold text-4xl pb-5'>What We Do!</h4>
          <p className='pb-2.5'>It is a long established fact that a reader will be distracted by the
readable content of a page when looking at its layout</p>
          <ul className='grid grid-rows-3 gap-2.5 list-disc list-inside text-lg'>
            <li> World Wide Donation</li>
            <li> World Wide Donation</li>
            <li> World Wide Donation</li>
          </ul>
          <h4 className='font-extrabold text-4xl pt-20 pb-5'>What We Do!</h4>
          <p className='pb-2.5'>It is a long established fact that a reader will be distracted by the
readable content of a page when looking at its layout</p>
          <ul className='grid grid-rows-3 gap-2.5 list-disc list-inside text-lg'>
            <li> World Wide Donation</li>
            <li> World Wide Donation</li>
            <li> World Wide Donation</li>
          </ul>
        </div>
      </section>
      <footer className={`${isDark ? 'bg-gray-800' : 'bg-gray-900'} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">IT Solutions</h3>
              <p className="text-gray-400 text-sm mb-4">
                Building the future with quality construction services and innovative solutions.
              </p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-xs">fb</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs">tw</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs">in</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs">yt</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Project</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Awards</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Get Help</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025. All Rights Reserved.</p>
            <div className="flex gap-4 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Terms & Condition</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Portfolio
