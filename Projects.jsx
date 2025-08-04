import React from 'react'

const projectsData = [
    {
        id: 1,
        title: 'Project One',
        description: 'A brief description of Project One.',
        image: 'project-one.png',
        github: 'https://github.com/user/project-one'
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        image: 'project-two.png',
        github: 'https://github.com/user/project-two'
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'A brief description of Project Three.',
        image: 'project-three.png',
        github: 'https://github.com/user/project-three'
    },
];
const Projects = () => {
  return (
    <div className=' bg-black text-white py-20' id='projects'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8'>
                {projectsData.map((project)=>(
                    <div key={project.id} className='bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105'>
                        <img src={project.image} alt="" className='rounded-lg mb-4 w-full h-48 object-cover' />
                        <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
                        <p className='text-gray-mb-4'>{project.description}</p>
                            <a href={project.github}  className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2  rounded-full' target='_blank' rel='noopener noreferrer'>View on GitHub</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Projects