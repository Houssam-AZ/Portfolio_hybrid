import React from 'react';
import Image from 'next/image';

const Projects: React.FC = () => {
    return (
        <section className="py-20 relative " id="projects">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h1 className="section-title text-5xl font-bold text-[#55e6a5]">
                        Projects
                    </h1>
                </div>
                <div className="w-full pt-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="project-item transform cursor-pointer hover:translate-y-2 transition-all duration-200 flex flex-col items-center justify-center">
                        <div className="rounded-xl overflow-hidden border-4 border-yellow-400 h-[200px] md:h-[300px] w-full relative">
                            <Image src="/images/kunstify.png" alt="Project 1" layout="fill" className="object-cover" />
                        </div>
                        <h5 className="mt-3 text-xl font-semibold text-white">Kunstify</h5>
                    </div>
                    <div className="project-item transform cursor-pointer hover:translate-y-2 transition-all duration-200 flex flex-col items-center justify-center">
                        <div className="rounded-xl overflow-hidden border-4 border-yellow-400 h-[200px] md:h-[300px] w-full relative">
                            <Image src="/images/houssam_pa.png" alt="Project 2" layout="fill" className="object-cover" />
                        </div>
                        <h5 className="mt-3 text-xl font-semibold text-white">Auto Parts Houssam</h5>
                    </div>
                    <div className="project-item transform cursor-pointer hover:translate-y-2 transition-all duration-200 flex flex-col items-center justify-center">
                        <div className="rounded-xl overflow-hidden border-4 border-yellow-400 h-[200px] md:h-[300px] w-full relative">
                            <Image src="/images/bataille_navale.png" alt="Project 3" layout="fill" className="object-cover" />
                        </div>
                        <h5 className="mt-3 text-xl font-semibold text-white">battleship in C</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
