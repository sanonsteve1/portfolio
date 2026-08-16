import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Expertise } from "@/components/Expertise";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CubeProvider, CubeScene, CubeFacePanel } from "@/components/CubeScene";

export default function Home() {
  return (
    <CubeProvider>
      <div className="h-dvh overflow-hidden bg-void text-ink">
        <Navbar />
        <CubeScene>
          <CubeFacePanel side="home">
            <Hero />
          </CubeFacePanel>
          <CubeFacePanel side="about">
            <Expertise />
          </CubeFacePanel>
          <CubeFacePanel side="projects">
            <Projects />
          </CubeFacePanel>
          <CubeFacePanel side="path">
            <Experience />
          </CubeFacePanel>
          <CubeFacePanel side="contact">
            <Contact />
          </CubeFacePanel>
        </CubeScene>
        <Footer />
      </div>
    </CubeProvider>
  );
}
