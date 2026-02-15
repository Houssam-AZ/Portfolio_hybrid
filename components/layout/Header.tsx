"use client";

import { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleOpenNav = () => setIsMobileNavOpen(true);
    const handleCloseNav = () => setIsMobileNavOpen(false);

    return (
        <header>
            <Nav openNav={handleOpenNav} />
            <MobileNav isOpen={isMobileNavOpen} closeNav={handleCloseNav} />
        </header>
    );
};

export default Header;