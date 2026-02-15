"use client";
import React from "react";
import { Link } from "react-scroll";
import { HiXMark } from "react-icons/hi2";
// 1. NEW: Import constants
import { NAV_LINKS } from "@/lib/constants";

interface MobileNavProps {
    isOpen: boolean;
    closeNav: () => void;
}

const MobileNav = ({ isOpen, closeNav }: MobileNavProps) => {
    const navAnimation = isOpen ? "translate-x-0" : "translate-x-[-100%]";

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeNav();
        }
    };

    return (
        <div
            className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}
            onClick={handleBackdropClick}
            aria-hidden={!isOpen}
        >
            <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
                {/* 2. NEW: Dynamic Link Generation */}
                {NAV_LINKS.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href}
                        smooth={true}
                        duration={500}
                        className="nav-link-mobile text-2xl text-white hover:text-yellow-300 transition-colors cursor-pointer"
                        onClick={closeNav}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Close Button */}
            <button
                onClick={closeNav}
                className="absolute cursor-pointer top-8 right-8 text-yellow-400 hover:text-yellow-300 transition-colors"
                aria-label="Close navigation menu"
            >
                <HiXMark className="w-8 h-8" />
            </button>
        </div>
    );
};

export default MobileNav;