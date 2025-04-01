import React from 'react'
import MyImg from '../assets/image.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 via-black'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full md:w-1/2'>
                <h2 className='text-4xl font-bold text-white sm:text-7xl'>
                    I'm a Full Stack Software Engineer
                </h2>
                <p className='py-4 text-gray-500'>
                    I have 1 year of professional experience building and designing software.
                    Currently, I love to work on backend projects that utilize ASP .NET frameworks, C#, Microsoft SQL Server,
                    Docker, Python, Powershell. Additionally, I have worked on various frontend projects that utilize
                    JavaScript, CSS, HTML, React, Tailwind, and Next JS. 
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500'>
                        Portfolio
                        <span className='duration-300 group-hover:rotate-90'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div className='md:w-1/2 md:ml-8'>
                <img 
                    src={MyImg} 
                    alt="my profile" 
                    className='rounded-2xl mx-auto w-2/3 md:w-full'
                />
            </div>
        </div>
    </div>
  )
}

export default Home