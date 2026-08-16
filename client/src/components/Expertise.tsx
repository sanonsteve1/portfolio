import { asset } from "@/lib/asset";

const SKILLS = [
  { title: "SIG · ArcGIS, QGIS, Utility Network", value: 95 },
  { title: "Java · Spring Boot · Angular", value: 92 },
  { title: "Flutter · Java mobile", value: 86 },
  { title: "IoT · IA · PostgreSQL / PostGIS", value: 82 },
];

const SERVICES = [
  {
    title: "Architecture & intégration",
    text: "Spring Boot, API REST, Angular, TypeScript — conception et livraison de bout en bout.",
  },
  {
    title: "SIG & données spatiales",
    text: "ArcGIS Pro, Field Maps, Dashboard, QGIS, QField et Utility Network.",
  },
  {
    title: "Conseil & gestion de projet",
    text: "Analyse des besoins, Agile, coordination technique et documentation.",
  },
];

export function Expertise() {
  return (
    <div className="face-shell">
      <h2 className="heading-rule mb-4 shrink-0 text-2xl font-bold text-ink sm:mb-6 sm:text-3xl lg:text-4xl">À propos</h2>

      <div className="grid min-h-0 flex-1 gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:gap-8 lg:overflow-hidden">
        <div className="flex min-h-0 flex-col">
          <img
            src={asset("africa-map.png")}
            alt="Carte de l’Afrique : Burkina Faso, Côte d’Ivoire, Bénin et Tunisie mis en évidence"
            className="h-48 w-full rounded-2xl object-cover object-center outline outline-1 -outline-offset-1 outline-ink/10 sm:h-64 lg:h-full lg:min-h-0 lg:flex-1"
          />
          <p className="mt-2 shrink-0 text-xs tracking-wide text-signal/90">
            Burkina Faso · Côte d’Ivoire · Bénin · Tunisie
          </p>
        </div>

        <div className="flex min-h-0 flex-col">
          <h3 className="mb-3 text-xl font-semibold text-ink sm:text-2xl lg:text-3xl">Ingénieur informatique / Consultant IT</h3>
          <div className="space-y-3 text-sm leading-relaxed text-ink/80 sm:text-base">
            <p>
              Ingénieur logiciel et consultant IT, diplômé en Génie Logiciel &amp; Systèmes d’Information, avec plus de 3
              ans d’expérience professionnelle dans la conception, le développement et la mise en œuvre de solutions
              numériques en Afrique.
            </p>
            <p>
              Expertise en développement Full-Stack, applications Web et mobiles, intégration d’API, bases de données,
              IoT et systèmes d’information géographiques.
            </p>
            <p>
              Expérience en gestion de projet, analyse des besoins, coordination technique et livraison de solutions de
              bout en bout pour des entreprises, institutions publiques et startups.
            </p>
          </div>

          <div className="mt-6 flex flex-col justify-evenly gap-4 lg:flex-1">
            {SKILLS.map((skill, i) => (
              <div key={skill.title}>
                <div className="mb-1.5 flex justify-between gap-3 text-sm font-medium text-ink">
                  <span className="min-w-0">{skill.title}</span>
                  <span className="shrink-0 tabular-nums text-signal">{skill.value}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-track">
                  <div
                    className="skill-fill h-full rounded-full bg-signal"
                    style={{ width: `${skill.value}%`, animationDelay: `${i * 100}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid shrink-0 gap-4 sm:grid-cols-3">
        {SERVICES.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl bg-panel px-5 py-5 shadow-[0_0_0_1px_var(--hairline)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_var(--signal)]"
          >
            <h4 className="mb-2 text-base font-semibold text-signal">{item.title}</h4>
            <p className="text-sm leading-relaxed text-ink/75">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
