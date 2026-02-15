"use client";
import React, { useState } from "react";
// 1. REMOVED: Animation imports (useSpring, animated)
import { FaGraduationCap, FaBriefcase, FaLanguage, FaUser, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';
import TabButton from "@/components/ui/TabButton";

const TAB_DATA = [
    {
        title: "Personal",
        id: "personal",
        icon: FaUser,
        content: (
            <div className="space-y-6">
                <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="text-yellow-400 font-semibold mb-4 text-xl">My Development Journey</h4>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            My passion for technology started with computer systems engineering, where I developed
                            a strong foundation in hardware and software principles. This evolved into a deep
                            fascination with web development and creating digital experiences that solve real problems.
                        </p>
                        <p>
                            As a second-year programming student at Thomas More University, I&rsquo;m continuously
                            expanding my skills in modern web technologies, from frontend frameworks like React
                            to backend systems with Node.js and Java.
                        </p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        icon: FaGraduationCap,
        content: (
            <div className="space-y-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="text-yellow-400 font-semibold mb-2">Bachelor&rsquo;s Degree in Computer Science</h4>
                    <p className="text-gray-300">Institut Supérieur du Génie Appliqué, Casablanca, Morocco</p>
                    <p className="text-gray-400 text-sm">Graduated: September 2020</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="text-yellow-400 font-semibold mb-2">Programming Student</h4>
                    <p className="text-gray-300">Thomas More University of Applied Sciences, Belgium</p>
                    <p className="text-gray-400 text-sm">Currently Enrolled - Second Year</p>
                </div>
            </div>
        )
    },
    {
        title: "Experience",
        id: "experience",
        icon: FaBriefcase,
        content: (
            <div className="space-y-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="text-yellow-400 font-semibold mb-2">Server Maintenance</h4>
                    <p className="text-gray-300">EVOLSYS, Casablanca, Morocco</p>
                    <p className="text-gray-400 text-sm">July - August 2017</p>
                    <p className="text-gray-300 text-sm mt-2">Hardware maintenance and server configuration</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="text-yellow-400 font-semibold mb-2">Surveillance Camera Installation</h4>
                    <p className="text-gray-300">AlifConnect, Casablanca, Morocco</p>
                    <p className="text-gray-400 text-sm">January - June 2021</p>
                    <p className="text-gray-300 text-sm mt-2">Technical installation and system configuration</p>
                </div>
            </div>
        )
    },
    {
        title: "Languages",
        id: "languages",
        icon: FaLanguage,
        content: (
            <div className="grid grid-cols-2 gap-4">
                {[
                    { language: "English", level: "Fluent", proficiency: "90%" },
                    { language: "Dutch", level: "Intermediate", proficiency: "60%" },
                    { language: "French", level: "Fluent", proficiency: "95%" },
                    { language: "Arabic", level: "Native", proficiency: "100%" }
                ].map((lang, index) => (
                    <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                            <div className="text-yellow-400 font-semibold">{lang.language}</div>
                            <div className="text-gray-400 text-sm">{lang.level}</div>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                                className="bg-yellow-400 h-2 rounded-full transition-all duration-1000"
                                style={{ width: lang.proficiency }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
];

const AboutSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState("personal");

    const handleTabChange = (id: string) => {
        setActiveTab(id);
    };

    // 2. REMOVED: springProps logic

    const activeTabData = TAB_DATA.find((tab) => tab.id === activeTab);

    return (
        <section id="about" className="section-padding bg-gray-900">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
                        My Journey & Skills
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        From computer systems engineering to full-stack development.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - 3. CHANGED: animated.div -> div, removed style prop */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 h-full">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                                <FaRocket className="text-gray-900 text-2xl" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">What I Bring</h3>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-start gap-3">
                                    <FaCode className="text-yellow-400 mt-1 flex-shrink-0" />
                                    <div className="text-left">
                                        <h4 className="text-white font-semibold">Full-Stack Expertise</h4>
                                        <p className="text-gray-300 text-sm">From UI/UX to database design and deployment</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FaLightbulb className="text-yellow-400 mt-1 flex-shrink-0" />
                                    <div className="text-left">
                                        <h4 className="text-white font-semibold">Problem Solver</h4>
                                        <p className="text-gray-300 text-sm">Analytical thinking and creative solutions</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FaGraduationCap className="text-yellow-400 mt-1 flex-shrink-0" />
                                    <div className="text-left">
                                        <h4 className="text-white font-semibold">Continuous Learner</h4>
                                        <p className="text-gray-300 text-sm">Always exploring new technologies and methodologies</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-700">
                                <h4 className="text-white font-semibold mb-3">Technical Focus</h4>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {["React Ecosystem", "TypeScript", "Node.js", "API Design", "Responsive UI", "Performance"].map((focus) => (
                                        <span
                                            key={focus}
                                            className="bg-gray-700 text-yellow-400 px-2 py-1 rounded text-xs font-medium border border-yellow-400/30"
                                        >
                                            {focus}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Tabs Section */}
                    <div className="bg-gray-800/30 rounded-xl border border-gray-700 overflow-hidden h-full">
                        {/* Tab Headers */}
                        <div className="flex flex-wrap border-b border-gray-700 gap-2 p-2 justify-center">
                            {TAB_DATA.map((tab) => (
                                <TabButton
                                    key={tab.id}
                                    selectTab={() => handleTabChange(tab.id)}
                                    active={activeTab === tab.id}
                                >
                                    <div className="flex items-center gap-2">
                                        <tab.icon className="w-4 h-4" />
                                        {tab.title}
                                    </div>
                                </TabButton>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="p-6 min-h-[500px]">
                            {activeTabData?.content}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;