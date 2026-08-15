// Direction artistique : Cartographie d’impact - Frise chronologique (timeline) interactive du parcours professionnel.
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: 'Chef de projet & Développeur Web/SIG',
      company: 'EBURTIS',
      location: 'Côte d’Ivoire / Burkina Faso / Bénin',
      period: 'Décembre 2023 – Août 2026',
      description: 'Pilotage et implémentation de solutions de gestion de projets intégrées à des SIG (Bénin, Burkina Faso). Modélisation de réseaux électriques avec ArcGIS Utility Network (projet PDEC SONABEL). Développement de plateformes de géoréférencement pharmaceutique et de e-Visa en Côte d’Ivoire, ainsi que de solutions de rapprochement bancaire.',
      skills: ['Chef de projet', 'ArcGIS Utility Network', 'Spring Boot', 'Angular', 'PostGIS', 'Nginx']
    },
    {
      role: 'Développeur mobile Flutter',
      company: 'KAMBBA',
      location: 'Burkina Faso',
      period: 'Octobre – Novembre 2023',
      description: 'Conception et développement d’une application mobile éducative dédiée au suivi des élèves et à la gestion dynamique des emplois du temps.',
      skills: ['Flutter', 'Dart', 'Mobile UI/UX', 'API REST']
    },
    {
      role: 'Développeur mobile Flutter',
      company: 'Proximind',
      location: 'Tunisie',
      period: 'Février – Juillet 2023',
      description: 'Développement d’une application mobile innovante de suivi des étudiants et stagiaires d’Afrique subsaharienne.',
      skills: ['Flutter', 'Clean Architecture', 'API Integration']
    },
    {
      role: 'Chef de projet & Développeur mobile Java',
      company: 'ERITECH',
      location: 'Tunisie',
      period: 'Mai – Décembre 2022',
      description: 'Pilotage d’un projet de maison intelligente (Smart Home) intégrant des capteurs IoT communicants et des interfaces de contrôle.',
      skills: ['Pilotage de projet', 'IoT', 'Java Mobile', 'Capteurs communicants']
    },
    {
      role: 'Stagiaire Développeur Python',
      company: 'CNRNM',
      location: 'Tunisie',
      period: 'Juillet – Septembre 2021',
      description: 'Développement de solutions de web scraping avancées, travaux IoT et algorithmes de reconnaissance d’objets basés sur l’intelligence artificielle.',
      skills: ['Python', 'Web Scraping', 'IoT', 'Machine Learning']
    },
    {
      role: 'Développeur Full-Stack & Infographiste (Freelance)',
      company: 'Indépendant',
      location: 'Afrique',
      period: '2017 – Aujourd’hui',
      description: 'Développement de solutions de collecte de données géolocalisées pour projets terrain, conception d’outils de visualisation et de suivi en temps réel, et intégration d’outils de web scraping avec IA.',
      skills: ['Full-Stack', 'SIG', 'Infographie', 'Scraping & IA']
    },
  ];

  return (
    <section id="parcours" className="py-24 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F2EF] text-[#167A68] text-xs font-mono mb-4">
            <span>EXPÉRIENCES PROFESSIONNELLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E2229] tracking-tight mb-4">
            Un parcours international jalonné de réalisations complexes.
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568]">
            De l'Afrique de l'Ouest à la Tunisie, des responsabilités de pilotage technique et de conception de solutions logicielles à fort impact.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-[#167A68]/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Point de repère sur la frise */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#167A68] border-4 border-white shadow-sm group-hover:scale-125 transition-transform" />

              <div className="bg-[#FBFBFA] rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] hover:border-[#167A68]/40 transition-all shadow-xs">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-display font-bold text-[#1E2229]">
                      {exp.role}
                    </h3>
                    <div className="text-base font-medium text-[#167A68] mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#4A5568]">
                    <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-md border border-[#E2E8F0]">
                      <Calendar className="w-3.5 h-3.5 text-[#167A68]" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-md border border-[#E2E8F0]">
                      <MapPin className="w-3.5 h-3.5 text-[#D9775A]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E2E8F0]">
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-xs font-mono bg-white text-[#1E2229] px-3 py-1 rounded-md border border-[#E2E8F0] shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
