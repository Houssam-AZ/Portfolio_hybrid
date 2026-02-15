"use client";
import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
    return (
        <TypeAnimation
            sequence={[
                "Full Stack Developer",
                2000,
                "React Specialist",
                2000,
                "Problem Solver",
                2000,
                "Tech Enthusiast",
                2000
            ]}
            speed={50}
            className="text-yellow-400 font-bold"
            repeat={Infinity}
            style={{ display: 'inline-block' }}
        />
    );
};

export default TextEffect;