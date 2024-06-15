import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { IconType } from 'react-icons';
import { FaHtml5, FaJava, FaCss3Alt, FaJs } from 'react-icons/fa';

const Skills: React.FC = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 3500, min: 1600 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 1600, min: 1200 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1200, min: 700 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 1,
        },
    };

    // Define an array of objects containing icon components and labels
    const icons: { icon: IconType; label: string }[] = [
        { icon: FaHtml5, label: 'HTML' },
        { icon: FaJava, label: 'Java' },
        { icon: FaCss3Alt, label: 'CSS' },
        { icon: FaJs, label: 'JavaScript' },
    ];

    return (
        <section className="py-20 relative" id="skills">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h1 className="section-title text-5xl font-bold text-white">Skills</h1>
                    <p className="section-description text-lg text-gray-600 mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br />
                        Commodi, maxime! Reiciendis nesciunt rem, iure omnis.
                    </p>
                </div>
                <div className="skill-bx bg-gray-800 text-white rounded-xl p-8">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        className="skill-slider"
                        itemClass="p-2" // Adjust padding between items (e.g., p-2, p-3, etc.)
                        showDots={false} // Optional: Remove if you want to show dots for navigation
                    >
                        {/* Map through the icons array to render each item in the carousel */}
                        {icons.map((item, index) => (
                            <div key={index} className="item flex flex-col items-center justify-center">
                                <div className="rounded-full overflow-hidden border-4 border-yellow-400 h-32 w-32 md:h-40 md:w-40 flex items-center justify-center">
                                    <item.icon className="text-5xl text-yellow-400" />
                                </div>
                                <h5 className="mt-3 text-xl font-semibold">{item.label}</h5>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Skills;
