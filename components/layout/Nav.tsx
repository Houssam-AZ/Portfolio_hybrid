"use client";
import React from 'react';
import { Link } from 'react-scroll';
import { HiBars3 } from 'react-icons/hi2';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
// 1. NEW: Import the constants
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';

interface NavProps {
    openNav?: () => void;
}

const Nav = ({ openNav }: NavProps) => {
    return (
        <nav className="w-[100%] fixed top-0 left-0 z-50 h-16 flex items-center justify-between px-4 bg-gray-900/80 backdrop-blur-sm">
            {/* Logo */}
            <div className="text-white text-lg font-bold">
                HOUS
                <span className='text-yellow-300'>DEV</span>
            </div>

            {/* Navigation Links & Social */}
            <div className="flex space-x-4 items-center">
                {/* Desktop Links - Hidden on Mobile */}
                <div className="hidden md:flex space-x-4">
                    {/* 2. NEW: Map through constants instead of hardcoding */}
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-70}
                            className="nav-link text-white cursor-pointer hover:text-yellow-300 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Social Links - Using constants for URLs */}
                <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="hover:text-yellow-300 transition-colors"
                >
                    <FaLinkedin className="w-6 h-6 text-white hover:text-yellow-300 transition-colors" />
                </a>
                <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="hover:text-yellow-300 transition-colors"
                >
                    <FaGithub className="w-6 h-6 text-white hover:text-yellow-300 transition-colors" />
                </a>

                {/* Mobile Menu Button */}
                {openNav && (
                    <button
                        onClick={openNav}
                        className="md:hidden cursor-pointer p-1"
                        aria-label="Open navigation menu"
                    >
                        <HiBars3 className="w-8 h-8 text-yellow-300" />
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Nav;