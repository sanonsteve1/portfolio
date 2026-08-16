const ROLES = [
  {
    company: "EBURTIS",
    role: "Chef de projet & développeur Web/SIG",
    period: "Déc. 2023 — août 2026",
    place: "Côte d’Ivoire · Burkina Faso · Bénin",
    text: "Électrification, officines, e-Visa, rapprochement bancaire et suivi des encaissements.",
  },
  {
    company: "KAMBBA",
    role: "Développeur mobile Flutter",
    period: "Oct. — nov. 2023",
    place: "Burkina Faso",
    text: "Application éducative : suivi des élèves et gestion des emplois du temps.",
  },
  {
    company: "Proximind",
    role: "Développeur mobile Flutter",
    period: "Fév. — juil. 2023",
    place: "Tunisie",
    text: "Suivi des étudiants et stagiaires d’Afrique subsaharienne.",
  },
  {
    company: "ERITECH",
    role: "Chef de projet & développeur Java",
    period: "Mai — déc. 2022",
    place: "Tunisie",
    text: "Maison intelligente intégrant des capteurs IoT.",
  },
  {
    company: "CNRNM",
    role: "Stagiaire développeur Python",
    period: "Juil. — sept. 2021",
    place: "Tunisie",
    text: "Web scraping, IoT et reconnaissance d’objets par IA.",
  },
  {
    company: "Freelance",
    role: "Full-Stack & infographiste",
    period: "2017 — aujourd’hui",
    place: "Afrique",
    text: "Collecte géolocalisée, reporting temps réel, scraping et Machine Learning.",
  },
];

const DIPLOMAS = [
  { title: "Licence Génie Logiciel & SI", place: "ESPIN Sfax, Tunisie", year: "2023" },
  { title: "Baccalauréat série D", place: "Ouagadougou, Burkina Faso", year: "2017" },
];

const CERTS = [
  { title: "Python Essentials 1", org: "Cisco" },
  { title: "NDG Linux Unhatched", org: "Cisco" },
  { title: "HTML & CSS", org: "OpenClassrooms" },
  { title: "IA en médecine", org: "JETAIM’3" },
];

const STATS = [
  { value: "3+", label: "années" },
  { value: "4", label: "pays" },
  { value: "6", label: "postes" },
];

export function Experience() {
  return (
    <div className="face-shell">
      <div className="mb-5 flex shrink-0 flex-wrap items-end justify-between gap-4">
        <h2 className="heading-rule text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">Parcours</h2>
        <div className="flex gap-5 sm:gap-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-right">
              <p className="text-xl font-bold tabular-nums leading-none text-signal sm:text-2xl lg:text-3xl">{stat.value}</p>
              <p className="mt-1 text-[11px] font-semibold tracking-[0.16em] text-ink/55 uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid min-h-0 flex-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:overflow-hidden">
        <ol className="relative flex min-h-0 flex-col justify-between gap-5 border-l-2 border-signal/35 pl-7 lg:gap-0">
          {ROLES.map((item) => (
            <li key={item.company} className="relative py-0.5">
              <span className="absolute top-2 -left-[1.97rem] h-3.5 w-3.5 rounded-full bg-signal shadow-[0_0_0_4px_var(--void)]" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                <h3 className="text-base font-bold text-ink sm:text-lg lg:text-xl">{item.company}</h3>
                <p className="text-[11px] font-semibold tracking-wide text-signal uppercase sm:text-xs">{item.period}</p>
              </div>
              <p className="text-sm font-medium text-signal/90">{item.role}</p>
              <p className="text-[11px] text-ink/50">{item.place}</p>
              <p className="mt-1 max-w-xl text-sm leading-snug text-ink/75">{item.text}</p>
            </li>
          ))}
        </ol>

        <aside className="flex min-h-0 flex-col gap-4">
          <div className="grid gap-3 lg:flex-1 lg:grid-rows-2">
            {DIPLOMAS.map((item) => (
              <article
                key={item.title}
                className="flex flex-col justify-center rounded-2xl bg-panel px-5 py-4 shadow-[0_0_0_1px_var(--hairline)]"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-signal uppercase">{item.year}</p>
                <h3 className="mt-1 text-base font-semibold text-ink sm:text-lg">{item.title}</h3>
                <p className="mt-1 text-sm text-ink/65">{item.place}</p>
              </article>
            ))}
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold tracking-wide text-ink/80 uppercase">Certifications</h3>
            <div className="grid grid-cols-2 gap-2">
              {CERTS.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl bg-panel px-3 py-3 shadow-[0_0_0_1px_var(--hairline)]"
                >
                  <h4 className="text-sm font-semibold text-ink">{item.title}</h4>
                  <p className="text-xs text-signal">{item.org}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-panel px-5 py-4 shadow-[0_0_0_1px_var(--hairline)]">
            <h3 className="mb-2 text-sm font-semibold tracking-wide text-ink/80 uppercase">Langues & mobilité</h3>
            <p className="text-sm text-ink/80">
              Français · langue maternelle
              <span className="mx-2 text-signal">/</span>
              Anglais · débutant
            </p>
            <p className="mt-2 text-sm text-ink/60">Permis C · Afrique de l’Ouest et missions internationales</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
