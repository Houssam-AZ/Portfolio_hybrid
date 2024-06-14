import React, { useState, useTransition } from "react";
import Image from 'next/image';
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>Iga</li>
                <li>Thomas More</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul>
                <li>Iga</li>
                <li>Thomas More</li>
                <li>Iga</li>
                <li>Thomas More</li>
                <li>Iga</li>
                <li>Thomas More</li>
            </ul>
        )
    },
    {
        title: "Hobbies",
        id: "hobbies",
        content: (
            <ul>
                <li>Iga</li>
                <li>Thomas More</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("education");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="h-[88vh] relative bg-[url('/images/banner.jpg')] bg-cover bg-center">
            <div className="w-[80%] mx-auto grid lg:grid-cols-2 gap-[3rem] h-full items-start relative z-10 pt-20 lg:pt-0">
                <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center h-[500px]">
                    <Image src="/images/u1.jpg" alt="user" layout="fill" className="object-cover" />
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                        About Me
                    </h1>
                    <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi, maxime! Reiciendis nesciunt rem, iure omnis
                        debitis sed aut nisi vitae natus dignissimos, porro dolorem iste qui accusamus vel et voluptatibus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi, maxime! Reiciendis nesciunt rem, iure omnis
                        debitis sed aut nisi vitae natus dignissimos, porro dolorem iste qui accusamus vel et voluptatibus!
                    </p>
                    <div className="flex flex-row mt-8 space-x-4">
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
                        <TabButton selectTab={() => handleTabChange("hobbies")} active={tab === "hobbies"}>Hobbies</TabButton>
                    </div>
                    <div className="mt-8 text-white">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
