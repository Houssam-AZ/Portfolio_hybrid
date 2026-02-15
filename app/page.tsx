import Hero from '@/components/sections/Hero'
import AboutSection from '@/components/sections/AboutSection'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function Home() {
    return (
        <>
            <Hero />
            <AboutSection />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}