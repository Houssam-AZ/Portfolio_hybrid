import React from "react";
import Particle from "./Particle";
import Image from "next/image";
import TextEffect from "@/components/TextEffect";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";

const Hero = () => {
    return (
        <div className="h-[88vh] relative bg-cover bg-center">
            <Particle />
            <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-full items-center relative z-10">
                <div>
                    <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                        HI, I&#39;M <span className="text-yellow-400">HOUSSAM!</span>
                        <br />
                    </h1>
                    <TextEffect />
                    <p className="mt-[1.5rem] text-[18px] text-white leading-relaxed">
                        I am a second-year graduate programming student at Thomas More University of Applied Sciences. I graduated in 2020 with a bachelor&#39;s degree in computer systems engineering in Morocco. My academic journey has equipped me with a solid foundation in software development and system analysis. Besides my studies, I am passionate about sports like football and fitness, which help me maintain a balanced lifestyle.
                    </p>
                    <div className="mt-[2rem] flex-col sm:flex-row items-center sm:justify-center sm:space-x-6">
                        <a href="/Professional_cv.pdf" className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 justify-center sm:justify-start">
                            <p>Download CV</p>
                            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
                        </a>
                    </div>
                </div>
                <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px] overflow-hidden border-4 border-yellow-400">
                    <Image src="/images/profile.jpg" alt="user" layout="fill" className="object-cover rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
