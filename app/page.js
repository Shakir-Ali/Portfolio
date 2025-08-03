import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#18181b] text-white flex flex-col">
      <Navbar />
      <div className="h-16" />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
}