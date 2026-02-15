"use client";
import React from "react";
import Particle from "@/components/ui/Particle";
import TextEffect from "@/components/ui/TextEffect";
import Image from "next/image";
// 1. CHANGED: Replaced @heroicons with react-icons/hi2 to fix the crash
import { HiArrowDownTray, HiPlayCircle } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative bg-gray-900 overflow-hidden flex items-center justify-center pt-24 pb-12">
            {/* Main Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                {/* Content Card with Particles Inside */}
                <div className="relative bg-gray-800/20 backdrop-blur-md border border-gray-700/40 rounded-3xl p-8 lg:p-12 shadow-2xl overflow-hidden">

                    {/* Particles Inside Container Only */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden z-0">
                        <Particle />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                        {/* Text Content */}
                        <div className="text-center lg:text-left">
                            {/* Welcome Text */}
                            <div className="mb-6">
                                <span className="text-yellow-400 text-sm font-semibold tracking-wider uppercase">
                                    Welcome to My Portfolio
                                </span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Hi, I&rsquo;m{" "}
                                <span className="text-yellow-400">Houssam</span>
                            </h1>

                            {/* Dynamic Text Effect */}
                            <div className="mb-8">
                                <div className="text-xl md:text-2xl text-gray-300 font-semibold">
                                    <TextEffect />
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                                Passionate Full Stack Developer and Programming Student at Thomas More University.
                                I create innovative digital solutions with modern technologies.
                            </p>

                            {/* Stats */}
                            <div className="flex justify-center lg:justify-start gap-8 mb-8">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-yellow-400">2+</div>
                                    <div className="text-sm text-gray-400">Years</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-yellow-400">10+</div>
                                    <div className="text-sm text-gray-400">Projects</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-yellow-400">15+</div>
                                    <div className="text-sm text-gray-400">Technologies</div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                                <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                                    {/* 2. CHANGED: Using the new icon component */}
                                    <HiArrowDownTray className="w-5 h-5" />
                                    Download CV
                                </button>
                                <a href="#projects">
                                    <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                                        {/* 3. CHANGED: Using the new icon component */}
                                        <HiPlayCircle className="w-5 h-5" />
                                        View Work
                                    </button>
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="flex justify-center lg:justify-start gap-4">
                                <a
                                    href="https://github.com/Houssam-AZ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-700/70 hover:bg-yellow-400 rounded-lg transition-all duration-300 group border border-gray-600/50"
                                >
                                    <FaGithub className="w-6 h-6 text-gray-300 group-hover:text-gray-900" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/houssam-aberzak-8144411a1/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-700/70 hover:bg-yellow-400 rounded-lg transition-all duration-300 group border border-gray-600/50"
                                >
                                    <FaLinkedin className="w-6 h-6 text-gray-300 group-hover:text-gray-900" />
                                </a>
                            </div>
                        </div>

                        {/* Larger Profile Image */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full p-3 shadow-2xl">
                                    <div className="w-full h-full bg-gray-900 rounded-full overflow-hidden border-2 border-white/20">
                                        <Image
                                            src="/images/profile.jpg"
                                            alt="Houssam - Full Stack Developer"
                                            width={400}
                                            height={400}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;