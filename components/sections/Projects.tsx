"use client";
import React from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// 1. IMPORT the type from your centralized file
import { Project } from '@/types/projects';

const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: "Kunstify",
        description: "A modern e-commerce platform for art enthusiasts to discover and purchase unique artworks from emerging artists.",
        image: "/images/kunstify.png",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
        githubUrl: "https://github.com/Houssam-AZ/kunstify",
        liveUrl: "https://kunstify.vercel.app",
        category: "Full Stack",
    },
    {
        id: 2,
        title: "Auto Parts Houssam",
        description: "Inventory management system for automotive parts with real-time stock tracking and order processing.",
        image: "/images/houssam_pa.png",
        technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"],
        githubUrl: "https://github.com/Houssam-AZ/auto-parts",
        category: "Backend",
    },
    {
        id: 3,
        title: "Battleship Game",
        description: "Classic Battleship game implementation in C with console interface and AI opponent.",
        image: "/images/bataille_navale.png",
        technologies: ["C", "Algorithms", "Game Development"],
        githubUrl: "https://github.com/Houssam-AZ/battleship-c",
        category: "Algorithms",
    }
];

const Projects: React.FC = () => {
    return (
        <section className="section-padding bg-gray-900/30" id="projects">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        A selection of projects that showcase my technical skills and problem-solving abilities.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {PROJECTS_DATA.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/Houssam-AZ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2"
                    >
                        <FaGithub />
                        View All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105 flex flex-col h-full">
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden flex-shrink-0">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-yellow-400 transition-colors"
                            aria-label={`View ${project.title} source code`}
                        >
                            <FaGithub className="text-white text-xl" />
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-yellow-400 transition-colors"
                            aria-label={`View ${project.title} live demo`}
                        >
                            <FaExternalLinkAlt className="text-white text-xl" />
                        </a>
                    )}
                </div>
                <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {project.title}
                </h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4 border-t border-gray-700 mt-auto">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-medium text-center transition-colors flex items-center justify-center gap-2"
                        >
                            <FaGithub className="text-sm" />
                            Code
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-gray-900 py-2 px-4 rounded-lg text-sm font-medium text-center transition-colors flex items-center justify-center gap-2"
                        >
                            <FaExternalLinkAlt className="text-sm" />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Projects;