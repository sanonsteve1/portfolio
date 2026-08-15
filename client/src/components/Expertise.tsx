// Direction artistique : Cartographie d’impact - Grille d’expertises structurée par blocs thématiques.
import { Code, Map, Cpu, ShieldCheck, Server, Briefcase, Database, Smartphone } from 'lucide-react';

export function Expertise() {
  const expertises = [
    {
      icon: Code,
      title: 'Développement Full-Stack',
      description: 'Conception et développement d’applications web robustes et scalables avec Java, Spring Boot, JavaScript, Angular et TypeScript.',
      tags: ['Spring Boot', 'Angular', 'TypeScript', 'Java']
    },
    {
      icon: Smartphone,
      title: 'Développement Mobile',
      description: 'Création d’applications mobiles multiplateformes fluides et performantes pour le suivi des étudiants et des activités terrain.',
      tags: ['Flutter', 'Java Mobile', 'UI/UX Mobile']
    },
    {
      icon: Map,
      title: 'SIG & Données Spatiales',
      description: 'Intégration de Systèmes d’Information Géographique pour les réseaux électriques et la santé (ArcGIS Pro, QGIS, PostGIS, Utility Network).',
      tags: ['ArcGIS Pro', 'PostGIS', 'QGIS', 'Utility Network']
    },
    {
      icon: Cpu,
      title: 'IoT & Intelligence Artificielle',
      description: 'Pilotage de projets de maison intelligente, capteurs connectés, solutions de web scraping et reconnaissance d’objets.',
      tags: ['Capteurs IoT', 'Web Scraping', 'Machine Learning']
    },
    {
      icon: ShieldCheck,
      title: 'Sécurité & Déploiement',
      description: 'Mise en place de politiques de sécurité applicative et déploiement sur serveurs de production Linux avec Nginx.',
      tags: ['Spring Security', 'JWT', 'Linux', 'Nginx']
    },
    {
      icon: Briefcase,
      title: 'Gestion de Projet & Conseil',
      description: 'Pilotage de projets en méthodologie Agile, analyse des besoins fonctionnels et techniques, et coordination des équipes.',
      tags: ['Agile', 'Coordination', 'Cahier des charges']
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F2EF] text-[#167A68] text-xs font-mono mb-4">
            <span>DOMAINES DE COMPÉTENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E2229] tracking-tight mb-4">
            Une expertise technique transversale, du code au terrain.
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568]">
            Mon parcours d'ingénieur associe la rigueur du développement logiciel aux exigences des systèmes géospatiaux et de l'IoT en Afrique.
          </p>
        </div>

        {/* Grille des expertises */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertises.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-[#FBFBFA] border border-[#E2E8F0] hover:border-[#167A68]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E6F2EF] text-[#167A68] flex items-center justify-center mb-6 group-hover:bg-[#167A68] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#1E2229] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E2E8F0]">
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-xs font-mono bg-white text-[#1E2229] px-2.5 py-1 rounded-md border border-[#E2E8F0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
