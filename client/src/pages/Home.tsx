// Direction artistique : Cartographie d’impact - Page d’accueil principale du portfolio de Steve Sanon.
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Expertise } from '@/components/Expertise';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-[#1E2229]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Expertise />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
