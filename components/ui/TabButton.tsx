"use client";
import React from 'react';

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const baseClasses = "px-4 py-2 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900";

    const activeClasses = "text-white bg-yellow-400 border-2 border-yellow-400 shadow-lg";
    const inactiveClasses = "text-gray-400 bg-gray-800 border-2 border-gray-700 hover:bg-gray-700 hover:text-white";

    const buttonClasses = `${baseClasses} ${active ? activeClasses : inactiveClasses}`;

    return (
        <button
            onClick={selectTab}
            className={buttonClasses}
            aria-selected={active} // FIXED: Use aria-selected instead of aria-pressed
            role="tab"
        >
            {children}
        </button>
    );
};

export default TabButton;