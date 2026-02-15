"use client";
import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowUp } from "react-icons/hi2";
import { getCurrentYear } from "@/lib/utils";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-8">
            <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">

                {/* 1. Essential: Copyright */}
                <div className="text-gray-400 text-sm font-medium order-2 md:order-1">
                    © {getCurrentYear()} {PERSONAL_INFO.name}. All rights reserved.
                </div>

                {/* 2. Essential: Social Connections & Utility */}
                <div className="flex items-center gap-6 order-1 md:order-2">
                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <a
                            href={SOCIAL_LINKS.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-yellow-400 transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub className="text-xl" />
                        </a>
                        <a
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-yellow-400 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="text-xl" />
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="h-4 w-px bg-gray-700 hidden md:block"></div>

                    {/* Scroll to Top - Subtle & Professional */}
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400 transition-colors group"
                    >
                        <span>Top</span>
                        <HiArrowUp className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;