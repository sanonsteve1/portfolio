import { ArrowUpRight } from "lucide-react";
import { useCube } from "@/components/CubeScene";

const PROJECTS = [
  {
    title: "SIG Électrification",
    subtitle: "EBURTIS · Bénin · suivi des travaux et activités terrain",
    tag: "SIG",
    image: "/projects/electrification.png",
  },
  {
    title: "Utility Network SONABEL",
    subtitle: "PDEC · Burkina Faso · ArcGIS Utility Network & open source",
    tag: "SIG",
    image: "/projects/sonabel.png",
  },
  {
    title: "Officines pharmaceutiques",
    subtitle: "Côte d’Ivoire · géoréférencement · Spring Boot & Angular",
    tag: "Web",
    image: "/projects/officines.png",
  },
  {
    title: "Plateforme e-Visa",
    subtitle: "Côte d’Ivoire · administration publique",
    tag: "Web",
    image: "/projects/evisa.png",
  },
  {
    title: "Rapprochement bancaire",
    subtitle: "Côte d’Ivoire & Burkina Faso · encaissements eau et banques",
    tag: "Fintech",
    image: "/projects/banque.png",
  },
  {
    title: "Maison intelligente",
    subtitle: "ERITECH · Tunisie · capteurs IoT",
    tag: "IoT",
    image: "/projects/iot.png",
  },
];

export function Projects() {
  const { setFace } = useCube();

  return (
    <div className="face-shell">
      <h2 className="heading-rule mb-4 shrink-0 text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">Projets</h2>

      <div className="grid min-h-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:flex-1 lg:grid-cols-2 lg:gap-3 lg:overflow-hidden xl:grid-cols-3">
        {PROJECTS.map((project) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setFace("contact")}
            className="portfolio-card group relative block aspect-[16/10] min-h-0 overflow-hidden rounded-xl text-left shadow-[0_0_0_1px_var(--hairline)] transition-transform duration-200 active:scale-[0.96] lg:aspect-auto lg:h-full"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-full min-h-0 w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 transition-transform duration-500 group-hover:scale-110"
            />
            <div className="portfolio-layer absolute inset-0 flex flex-col items-center justify-center bg-void/92 px-4 text-center">
              <span className="mb-1 text-[10px] font-semibold tracking-[0.18em] text-signal uppercase">{project.tag}</span>
              <h3 className="text-base font-semibold text-ink sm:text-lg">{project.title}</h3>
              <p className="mt-1 line-clamp-2 text-xs text-ink/70">{project.subtitle}</p>
              <span className="mt-3 hidden h-9 w-9 items-center justify-center rounded-full border-2 border-signal text-signal lg:inline-flex">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
