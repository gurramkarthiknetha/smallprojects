import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

export const SocialLinks = () => {
    
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/aishwarya-gurram-b47b05353/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/aishwaryagurram',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:gurramaishwarya332@gmail.com',
        },
    ];
    
    return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
       <ul>
            {links.map(({id, child, href, style, download}) => (
                <li 
                key={id} 
                className={`flex items-center justify-between w-40 px-4 h-14 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}>
                    <a 
                    href={href} 
                    className='flex items-center justify-between w-full text-white' 
                    download={download} 
                    target='_blank'
                    rel='noreferrer'>
                        {child}
                    </a>
                </li>
            ))}
        </ul> 
    </div>
  )
}

export default SocialLinks;