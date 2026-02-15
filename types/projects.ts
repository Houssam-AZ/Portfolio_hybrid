// lib/projects.ts

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string; // The ? makes it optional
    liveUrl?: string;   // The ? makes it optional
    category: string;
    // features: string[]; <--- THIS LINE WAS REMOVED
}

export interface Skill {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    label: string;
    level: number;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}