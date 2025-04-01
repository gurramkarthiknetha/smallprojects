import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import anaconda from '../assets/anaconda.png'
import csharp from '../assets/c#.png'
import github from '../assets/github.png'
import cplus from '../assets/c++.png'
import excel from '../assets/excel.png'
import jupyter from '../assets/jupyter.png'
import powerautomate from '../assets/powerautomate.png'
import powershell from '../assets/powershell.png'
import tailwind from '../assets/tailwind.png'
import python from '../assets/python.png'
import microsoftsqlserver from '../assets/microsoftsqlserver.png'
import vs from '../assets/vs.png'
import vscode from '../assets/vscode.png'
import node from '../assets/node.png'
import chatgpt from '../assets/chatgpt.png'
import tortoisesvn from '../assets/tortoisesvn.png'
import jira from '../assets/jira.png'
const Experience = () => {
  const tech = [
    {
        id: 1,
        src: csharp,
        title: 'C#',
        style: 'shadow-green-400',
        link: ''
    },
    {
        id: 2,
        src: microsoftsqlserver,
        title: 'SQL',
        style: 'shadow-red-400',
        link: ''
    },
    {
        id: 3,
        src: cplus,
        title: 'C++',
        style: 'shadow-blue-300',
        link: ''
    },
    {
        id: 4,
        src: python,
        title: 'Python',
        style: 'shadow-yellow-300',
        link: ''
    },
    {
        id: 5,
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500',
        link: ''
    },
    {
        id: 6,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500',
        link: ''

    },
    {
        id: 7,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500',
        link: ''
    },
    {
        id: 8,
        src: node,
        title: 'NodeJS',
        style: 'shadow-lime-600',
        link: ''
    },
    {
        id: 9,
        src: reactImage,
        title: 'React',
        style: 'shadow-blue-600',
        link: ''
    },
    {
        id: 10,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-sky-400',
        link: ''
    },
    {
        id: 11,
        src: github,
        title: 'GitHub',
        style: 'shadow-gray-400',
        link: ''
    },
    {
        id: 12,
        src: anaconda,
        title: 'Anaconda',
        style: 'shadow-green-700',
        link: ''
    },
    {
        id: 13,
        src: jupyter,
        title: 'Jupyter Notebooks',
        style: 'shadow-orange-300',
        link: ''
    },
    {
        id: 14,
        src: powershell,
        title: 'Powershell',
        style: 'shadow-blue-400',
        link: ''
    },
    {
        id: 15,
        src: tortoisesvn,
        title: 'Tortoise SVN',
        style: 'shadow-gray-400',
        link: ''
    },
    {
        id: 16,
        src: excel,
        title: 'Microsoft Excel',
        style: 'shadow-green-400',
        link: ''
    },
    {
        id: 17,
        src: powerautomate,
        title: 'Microsoft Power Automate',
        style: 'shadow-cyan-400',
        link: ''
    },
    {
        id: 18,
        src: vs,
        title: 'Microsoft Virtual Studio',
        style: 'shadow-purple-400',
        link: ''
    },
    {
        id: 19,
        src: vscode,
        title: 'Microsoft Virtual Code',
        style: 'shadow-blue-400',
        link: ''
    },
    {
        id: 20,
        src: chatgpt,
        title: 'OpenAI and ChatGPT',
        style: 'shadow-gray-500',
        link: ''
    },
    {
        id: 21,
        src: jira,
        title: 'Jira',
        style: 'shadow-blue-700',
        link: ''
    },
  ]
    
  return (
    <div name='experience' className='w-full md:h-screen sm:h-fit bg-gradient-to-b from-gray-800 to-black'>
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white'>
            <div className='pt-96'>
                <p className='inline p-2 text-4xl font-bold border-b-4 border-gray-500'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0'>
                {tech.map(({id, src, title, style}) => (
                    <div 
                    key={id}
                    className={`py-2 duration-500 rounded-lg shadow-md hover:scale-105 ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Experience