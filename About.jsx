import React from 'react'
import about from '../assets/about.png'

const About = () => {
  return (
    <div className='bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white p-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={about} alt="" className='w-72 h-80 object-cover mb-8 md:mb-0'/>

             <div className='flex-1'>
            <p className='text-lg mb:8'>
                Hello! I'm Prachi, a passionate web developer with a keen interest in creating dynamic and responsive web applications. I love exploring new technologies and continuously improving my skills. In my free time, I enjoy reading tech blogs and contributing to open-source projects.
            </p>
            
            <div className='space-y-4'>
                <div className='flex items-center'>
                  <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                  <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
                    </div>
                    </div>
                  </div>
                </div>

                <div className='space-y-4'>
                <div className='flex items-center'>
                  <label htmlFor="htmlandcss" className='w-2/12'>React Jx</label>
                  <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'>
                    </div>
                    </div>
                  </div>
                </div>

                <div className='space-y-4'>
                <div className='flex items-center'>
                  <label htmlFor="htmlandcss" className='w-2/12'>Node Js</label>
                  <div className='grow bg-gray-800 rounded-full h-2.5'>
                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-5/12'>
                    </div>
                    </div>
                  </div>
                </div>
                <div className='mt-12 flex justify-between text-center'>
                  <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>0</h3>
                    <p>Fresher</p>
                  </div>
                   <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>5</h3>
                    <p>Projects Completed</p>
                  </div>
                   <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>1+</h3>
                    <p>Happy Clients</p>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
  )
}

export default About