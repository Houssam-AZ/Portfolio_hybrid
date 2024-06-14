import React, { useState } from "react";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";

const HomePage = () => {
    const [nav, setNav] = useState(false);

    const openNav = () => setNav(true);
    const closeNav = () => setNav(false);

    return (
        <div className="overflow-x-hidden">
            <div>
                {/* Nav Bar */}
                <MobileNav nav={nav} closeNav={closeNav} />
                <Nav openNav={openNav} />
                {/* Hero Section */}
                <Hero />
            </div>
        </div>
    );
};

export default HomePage;
