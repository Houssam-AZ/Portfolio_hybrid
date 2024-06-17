import React, { useState, useTransition } from "react";
import { useSpring, animated } from 'react-spring';
import {
    FaLaptopCode,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaDatabase,
    FaServer,
    FaCodeBranch,
    FaMobileAlt,
    FaCode,
    FaPython,
    FaAngular,
    FaVuejs,
    FaBootstrap,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaJava,
    FaPhp,
    FaSwift,
    FaWordpress,
    FaWindows,
    FaLinux,
    FaApple,
    FaAndroid,
    FaChrome,
    FaFirefox,
    FaSafari,
    FaNode,
    FaCloud,
    FaCloudUploadAlt,
    FaCloudDownloadAlt,
    FaCloudMeatball,
} from 'react-icons/fa';
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc ml-5 text-lg text-white">
                <li className="mb-2">Bachelor&#39;s degree in Computer Science, Institut Supérieur du Génie Appliqué, Casablanca, Morocco (September 2020)</li>
                <li className="mb-2">Programming Student, Thomas More University of Applied Sciences, Belgium (Current)</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc ml-5 text-lg text-white">
                <li className="mb-2">Server Maintenance, EVOLSYS, Casablanca, Morocco (July - August 2017)</li>
                <li className="mb-2">Surveillance Camera Installation, AlifConnect, Casablanca, Morocco (January - June 2021)</li>
            </ul>
        )
    },
    {
        title: "Languages",
        id: "languages",
        content: (
            <ul className="list-disc ml-5 text-lg text-white">
                <li className="mb-2">English</li>
                <li className="mb-2">Dutch</li>
                <li className="mb-2">French</li>
                <li className="mb-2">Arabic</li>
            </ul>
        )
    },
    {
        title: "Hobbies",
        id: "hobbies",
        content: (
            <ul className="list-disc ml-5 text-lg text-white">
                <li className="mb-2">Football</li>
                <li className="mb-2">Fitness</li>
            </ul>
        )
    },
];

const iconList = [
    FaLaptopCode,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaDatabase,
    FaServer,
    FaCodeBranch,
    FaMobileAlt,
    FaCode,
    FaPython,
    FaAngular,
    FaVuejs,
    FaBootstrap,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaJava,
    FaPhp,
    FaSwift,
    FaWordpress,
    FaWindows,
    FaLinux,
    FaApple,
    FaAndroid,
    FaChrome,
    FaFirefox,
    FaSafari,
    FaNode,
    FaCloud,
    FaCloudUploadAlt,
    FaCloudDownloadAlt,
    FaCloudMeatball,
];

const AboutSection: React.FC = () => {
    const [tab, setTab] = useState("education");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const springProps = useSpring({
        from: { opacity: 0, transform: 'scale(0.5)' },
        to: { opacity: 1, transform: 'scale(1)' },
        config: { duration: 1000 },
        reset: true,
    });

    return (
        <section id="about" className="about-section relative bg-cover bg-center py-20">
            <div className="w-[80%] mx-auto grid lg:grid-cols-2 gap-[3rem] h-full items-start relative z-10">
                <div className="w-full flex justify-center items-center">
                    <animated.div style={springProps} className="icon-container">
                        {iconList.map((Icon, index) => (
                            <Icon key={index} className="icon-item text-white animate-bounce" style={{ animationDelay: `${index * 0.1}s` }} />
                        ))}
                    </animated.div>
                </div>
                <div className="text-left flex flex-col h-full">
                    <h1 className="section-title text-5xl md:text-[50px] text-[#55e6a5] font-bold text-center lg:text-left">
                        About Me
                    </h1>
                    <p className="mt-[1.5rem] text-[18px] text-white leading-relaxed">
                        I am a second-year programming student at Thomas More University of Applied Sciences. My journey in the programming world began after I graduated in 2020 with a bachelor&#39;s degree in computer systems engineering from the Institut Supérieur du Génie Appliqué (IGA) in Casablanca, Morocco. Throughout my studies, I have immersed myself in various technologies, including HTML, CSS, JavaScript, React, and more. Each day, I am driven by the desire to master new languages and frameworks, from VB.NET to Spring Boot and beyond.
                    </p>
                    <p className="mt-[1.5rem] text-[18px] text-white leading-relaxed">
                        My ambition is to excel in the programming world, creating innovative solutions that can make a difference. I am passionate about solving complex problems and constantly improving my skills to stay at the forefront of technology. Alongside my academic pursuits, I enjoy sports like football and fitness, which help me maintain a balanced lifestyle and a healthy mind. I am excited about the future and the endless possibilities that come with a career in programming.
                    </p>
                    <div className="flex flex-row mt-8 space-x-4">
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
                        <TabButton selectTab={() => handleTabChange("languages")} active={tab === "languages"}>Languages</TabButton>
                        <TabButton selectTab={() => handleTabChange("hobbies")} active={tab === "hobbies"}>Hobbies</TabButton>
                    </div>
                    <div className="mt-8 text-white">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
