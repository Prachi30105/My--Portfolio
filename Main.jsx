import React from 'react'
import prachi from '../assets/prachi.png'

const Main = () => {
  return (
    <div className='bg-black text-white text-center py-16'>

        <img src={prachi} alt="" className='mx-auto mb-4 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>

        <h1 className='text-4xl font-bold '>
            I'm {""}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Prachi Patel</span>
             ,Backend Developer
        </h1>

        <p className='mt-4 text-lg text-gray-300'>
            I am a Backend Developer with a passion for building robust and scalable applications. I have experience in various backend technologies and frameworks, and I love solving complex problems through code. My goal is to create efficient and maintainable systems that enhance user experiences and drive business success.
        </p>
        
        <div className='mt-8 space-x-4'>

            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform duration-300'>Contact With Me</button>

            {/* <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform duration-300'>Resume</button> */}

            <a href="/PrachiPatel1.pdf" download="PrachiPatel1.pdf" className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform duration-300">Resume</a>

            {/* <a href="/Prachi Patel 1.pdf" download="Prachi_Patel_Resume.pdf" className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform duration-300">Resume</a> */}
        </div>
    </div>
  )
}

export default Main