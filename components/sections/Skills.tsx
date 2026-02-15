"use client";
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { IconType } from 'react-icons';
import {
    FaHtml5, FaJava, FaCss3Alt, FaJs, FaBootstrap, FaMicrosoft,
    FaAndroid, FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase
} from 'react-icons/fa';
import { SiSpringboot, SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiMysql, SiExpress } from 'react-icons/si';

interface Skill {
    icon: IconType;
    label: string;
    level: number;
    category: 'frontend' | 'backend' | 'tools' | 'database';
}

interface SkillCategory {
    title: string;
    description: string;
    skills: Skill[];
}

const Skills: React.FC = () => {
    // DATA DEFINITION
    const skillCategories: SkillCategory[] = [
        {
            title: "Frontend Development",
            description: "Creating responsive and interactive user interfaces",
            skills: [
                { icon: FaHtml5, label: 'HTML5', level: 90, category: 'frontend' },
                { icon: FaCss3Alt, label: 'CSS3', level: 85, category: 'frontend' },
                { icon: FaJs, label: 'JavaScript', level: 80, category: 'frontend' },
                { icon: SiTypescript, label: 'TypeScript', level: 75, category: 'frontend' },
                { icon: FaReact, label: 'React', level: 80, category: 'frontend' },
                { icon: SiNextdotjs, label: 'Next.js', level: 75, category: 'frontend' },
                { icon: FaBootstrap, label: 'Bootstrap', level: 85, category: 'frontend' },
                { icon: SiTailwindcss, label: 'Tailwind CSS', level: 80, category: 'frontend' },
            ]
        },
        {
            title: "Backend & Languages",
            description: "Server-side development and programming languages",
            skills: [
                { icon: FaNodeJs, label: 'Node.js', level: 75, category: 'backend' },
                { icon: SiExpress, label: 'Express.js', level: 70, category: 'backend' },
                { icon: FaJava, label: 'Java', level: 70, category: 'backend' },
                { icon: SiSpringboot, label: 'Spring Boot', level: 65, category: 'backend' },
                { icon: FaPython, label: 'Python', level: 70, category: 'backend' },
            ]
        },
        {
            title: "Tools & Databases",
            description: "Development tools and data management systems",
            skills: [
                { icon: FaGitAlt, label: 'Git', level: 85, category: 'tools' },
                { icon: FaGithub, label: 'GitHub', level: 80, category: 'tools' },
                { icon: FaDatabase, label: 'SQL', level: 75, category: 'database' },
                { icon: SiMysql, label: 'MySQL', level: 70, category: 'database' },
                { icon: SiMongodb, label: 'MongoDB', level: 65, category: 'database' },
                { icon: FaMicrosoft, label: 'MS Access', level: 80, category: 'database' },
                { icon: FaAndroid, label: 'Android', level: 60, category: 'tools' },
            ]
        }
    ];

    return (
        <section className="section-padding bg-gray-900" id="skills">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
                        Technical Expertise
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        My technical proficiency levels across different domains.
                    </p>
                </div>

                {/* Skills by Category - REMOVED animation wrapper to fix visibility issues */}
                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className="group bg-gray-800/30 rounded-2xl p-6 border border-gray-700 hover:border-yellow-400 transition-all duration-500 hover:transform hover:scale-105"
                        >
                            {/* Category Header */}
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                                    {category.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {category.description}
                                </p>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <SkillBar
                                        key={skillIndex}
                                        skill={skill}
                                        delay={skillIndex * 100}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// SkillBar component
const SkillBar: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => {
    // Keep this animation because it's cool, but make sure it starts visible
    const animation = useSpring({
        from: { width: '0%' },
        to: { width: `${skill.level}%` },
        delay: delay,
        config: { tension: 120, friction: 40 },
    });

    return (
        <div className="group p-3 bg-gray-900/50 rounded-xl hover:bg-gray-800 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-yellow-400 transition-colors duration-300">
                        <skill.icon className="text-lg text-yellow-400 group-hover:text-gray-900 transition-colors duration-300" />
                    </div>
                    <span className="text-white font-medium text-sm">{skill.label}</span>
                </div>
            </div>

            {/* Animated Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-1.5">
                <animated.div
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-1.5 rounded-full shadow-lg"
                    style={animation}
                />
            </div>
        </div>
    );
};

export default Skills;