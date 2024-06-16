import { Bars3Icon } from '@heroicons/react/16/solid';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';

interface Props {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    return (
        <div className="w-[100%] relative z-50 h-16 flex items-center justify-between px-4">
            <h1 className="text-white text-lg font-bold">
                HOUS
                <span className='text-yellow-300'>DEV</span>
            </h1>
            <div className="flex space-x-4 items-center">
                <div className='nav-link text-white'>ABOUT</div>
                <div className='nav-link text-white'>SKILLS</div>
                <div className='nav-link text-white'>PROJECTS</div>
                <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-6 h-6 text-white hover:text-yellow-300" />
                </a>
                <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-6 h-6 text-white hover:text-yellow-300" />
                </a>
                <div onClick={openNav} className="md:hidden cursor-pointer">
                    <Bars3Icon className="w-6 h-6 text-yellow-300" />
                </div>
            </div>
        </div>
    );
};

export default Nav;
