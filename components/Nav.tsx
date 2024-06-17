import { Bars3Icon } from '@heroicons/react/16/solid';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-scroll';

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
                <Link to="about" smooth={true} duration={500} spy={true} offset={-70} className='nav-link text-white cursor-pointer'>ABOUT</Link>
                <Link to="skills" smooth={true} duration={500} spy={true} offset={-70} className='nav-link text-white cursor-pointer'>SKILLS</Link>
                <Link to="projects" smooth={true} duration={500} spy={true} offset={-70} className='nav-link text-white cursor-pointer'>PROJECTS</Link>
                <a href="https://www.linkedin.com/in/houssam-aberzak-8144411a1/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-6 h-6 text-white hover:text-yellow-300" />
                </a>
                <a href="https://github.com/Houssam-AZ" target="_blank" rel="noopener noreferrer">
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
