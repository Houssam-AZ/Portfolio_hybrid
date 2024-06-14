import React from "react";
import Particle from "@/components/Particle";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative h-screen overflow-hidden">
            <Particle />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] mx-auto grid gap-[3rem] h-full items-center">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        <div className="w-[500px] bg-[#55e6a5] relative flex items-center rounded-full h-[500px] order-1 lg:order-2 lg:ml-8 mb-8 lg:mb-0">
                            <Image src="/public/images/1.jpg" alt="user" layout="fill" className="object-cover rounded-full"/>
                        </div>
                        <div className="flex-1 order-2 lg:order-1">
                            <h1 className="text-[35px] md:text-[50px] text-white font-bold shadow-gray-800">
                                HI, Im <span className="text-yellow-400">HOUSSAM!</span><br/>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
