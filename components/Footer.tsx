import React from "react";
import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="py-2 bg-[#02050a] relative">
            <div className="grid border-b border-gray-400 pb-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-4/5 mx-auto gap-6"> {/* Reduced padding bottom */}
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-20 h-20 md:w-26 md:h-26 flex items-center justify-center rounded-full bg-[#55e6a5]">
                        <MapPinIcon className="w-14 h-14 md:w-16 md:h-16 text-black" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl mb-1 font-semibold text-white">
                            Address
                        </h1>
                        <p className="text-base md:text-lg w-11/12 text-white opacity-60">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-20 h-20 md:w-26 md:h-26 flex items-center justify-center rounded-full bg-[#55e6a5]">
                        <DevicePhoneMobileIcon className="w-14 h-14 md:w-16 md:h-16 text-black" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl mb-1 font-semibold text-white">
                            Phone
                        </h1>
                        <p className="text-base md:text-lg w-11/12 text-white opacity-60">
                            +32474771229
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-20 h-20 md:w-26 md:h-26 flex items-center justify-center rounded-full bg-[#55e6a5]">
                        <EnvelopeIcon className="w-14 h-14 md:w-16 md:h-16 text-black" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl mb-1 font-semibold text-white">
                            Email
                        </h1>
                        <p className="text-base md:text-lg w-11/12 text-white opacity-60">
                            houssam.aberzak.p@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-4/5 mt-6 mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
                <div className="text-lg mb-4 md:mb-0 text-white">
                    2024 | All Rights Reserved
                </div>
                <div className="flex justify-center md:justify-end space-x-6">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white text-2xl hover:text-gray-400 transition-colors duration-200" />
                    </a>
                    <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white text-2xl hover:text-gray-400 transition-colors duration-200" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
