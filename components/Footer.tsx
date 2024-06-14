import React from "react";
import { DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/20/solid";

const Footer = () => {
    return (
        <div className="pt-[4rem] pb-[2rem] bg-[#02050a] relative">
            <div className="grid border-b-[1px] pb-[3rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2
            w-[80%] mx-auto gap-[2rem]">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-[5rem] h-[5rem] md:w-[6.5rem] md:h-[6.5rem] flex items-center justify-center
                    rounded-full bg-[#55e6a5]">
                        <MapPinIcon className="w-[3.5rem] h-[3.5rem] md:w-[4rem] md:h-[4rem] text-black"/>
                    </div>
                    <div>
                        <h1 className="text-[20px] md:text-[25px] mb-[0.2rem] font-semibold text-[white]">
                            Address
                        </h1>
                        <p className="text-[15px] md:text-[17px] w-[90%] text-white opacity-60">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-[5rem] h-[5rem] md:w-[6.5rem] md:h-[6.5rem] flex items-center justify-center
                    rounded-full bg-[#55e6a5]">
                        <DevicePhoneMobileIcon className="w-[3.5rem] h-[3.5rem] md:w-[4rem] md:h-[4rem] text-black"/>
                    </div>
                    <div>
                        <h1 className="text-[20px] md:text-[25px] mb-[0.2rem] font-semibold text-[white]">
                            Phone
                        </h1>
                        <p className="text-[15px] md:text-[17px] w-[90%] text-white opacity-60">
                            +32474771229
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-[5rem] h-[5rem] md:w-[6.5rem] md:h-[6.5rem] flex items-center justify-center
                    rounded-full bg-[#55e6a5]">
                        <EnvelopeIcon className="w-[3.5rem] h-[3.5rem] md:w-[4rem] md:h-[4rem] text-black"/>
                    </div>
                    <div>
                        <h1 className="text-[20px] md:text-[25px] mb-[0.2rem] font-semibold text-[white]">
                            Send Email
                        </h1>
                        <p className="text-[15px] md:text-[17px] w-[90%] text-white opacity-60">
                            houssam.aberzak.p@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-[80%] mt-[2rem] mx-auto grig grid-cols-1 md:grid-cols-2 items-center justify-between">
                <div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-20">
                    2024 | All Rights Reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
