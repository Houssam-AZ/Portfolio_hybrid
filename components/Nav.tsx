import { Bars3Icon } from '@heroicons/react/16/solid';
import React from 'react';

interface Props {
    openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
    return (
        <div className="w-[100%] relative z-50 h-16 flex items-center justify-between px-4">
            <h1 className="text-white text-lg font-bold">
                HOUS
                <span className='text-yellow-300'>DEV</span>
            </h1>
            <div className="flex space-x-4">
                <div className='nav-link text-white'>HOME</div>
                <div className='nav-link text-white'>SERVICES</div>
                <div className='nav-link text-white'>ABOUT</div>
                <div className='nav-link text-white'>PROJECT</div>
                <div className='nav-link text-white'>BLOG</div>
                <div className='nav-link text-white'>CONTACT</div>
                <div onClick={openNav}>
                    <Bars3Icon className="w-6 h-6 md:hidden cursor-pointer text-yellow-300" />
                </div>
            </div>
        </div>
    );
};

export default Nav;
