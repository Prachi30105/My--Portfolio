import React from 'react'
import 'animate.css'

const skillsData = [
    // {
    //     id: 1,
    //     title: 'Web Development',
    //     description: 'Building responsive and interactive web applications using modern technologies.',
    //     icon: 'web-icon.png'
    // },
    {
        id: 1,
        title: 'Frontend Development',
        description: 'Creating user interfaces with a focus on user experience and performance.',
        icon: 'frontend-icon.png'      
    },
    {
        id: 2,
        title: 'Backend Development',
        description: 'Building and maintaining the server-side logic and database interactions.',
        icon: 'backend-icon.png'
    },
];
const Skills = () => {
  return (
    <div className=' bg-black text-white py-20' id='skills'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Skills</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                {skillsData.map(skill => (
                    <div key={skill.id} className='animate__animated animate__fadeInDown animate__repeat-3 bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105'>
                        <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400'>
                          {skill.id}
                        </div>
                        <h3 className='animate__animated animate__fadeInDown animate__repeat-3 mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400'>
                          {skill.title}
                        </h3>
                        <p className='text-gray-300'>{skill.description}</p>

                        <img src={`/assets/${skill.icon}`} alt={skill.title} className='w-16 h-16 mt-4 mx-auto' />
                        <div className='flex justify-center mt-4'>  
                          <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-400'>Read More</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Skills