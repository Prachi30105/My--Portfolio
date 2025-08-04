import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white px-8 md:px-16 lg:px-24 fixed top-0 w-full z-50 shadow-lg">
    <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline '>Prachi Patel</div>
        <div className='space-x-6'>
            <a href="#home" className="hover:text-gray-400">Home</a>
            <a href="#about" className="hover:text-gray-400">About Me</a>
            <a href="#skills" className="hover:text-gray-400">Skills</a>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform  transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
    </div>
    </nav>
  )
}

export default Navbar