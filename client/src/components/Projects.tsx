// Direction artistique : Cartographie d’impact - Études de cas détaillées avec visuels et métadonnées de projet.
import { useState } from 'react';
import { MapPin, ExternalLink, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';

export function Projects() {
  const [activeTab, setActiveTab] = useState<'all' | 'sig' | 'web' | 'mobile'>('all');

  const projects = [
    {
      id: 1,
      title: 'Système Intégré de Gestion de Projets & SIG',
      category: 'sig',
      location: 'Bénin • Burkina Faso',
      client: 'Institutions publiques & SONABEL',
      description: 'Conception et pilotage d’une solution logicielle intégrée à un SIG pour le suivi des travaux d’électrification et des activités terrain. Modélisation avancée des réseaux électriques avec ArcGIS Utility Network.',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80',
      tags: ['ArcGIS Pro', 'PostGIS', 'Spring Boot', 'Utility Network', 'Coordination'],
      impact: 'Traçabilité accrue des interventions terrain et optimisation du réseau électrique.'
    },
    {
      id: 2,
      title: 'Plateforme de Géoréférencement Pharmaceutique',
      category: 'web',
      location: 'Côte d’Ivoire',
      client: 'Secteur de la Santé',
      description: 'Développement d’une plateforme web sécurisée de géoréférencement des officines pharmaceutiques. Architecture backend Spring Boot et sécurisation des flux par JWT.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'Spring Security', 'Nginx'],
      impact: 'Centralisation et cartographie fiable des structures pharmaceutiques du territoire.'
    },
    {
      id: 3,
      title: 'Plateforme e-Visa & Rapprochement Bancaire',
      category: 'web',
      location: 'Côte d’Ivoire',
      client: 'Administration & Services',
      description: 'Développement de solutions numériques critiques : plateforme de délivrance de e-Visa et système automatisé de rapprochement et suivi bancaire.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      tags: ['Java', 'Spring Boot', 'JavaScript', 'SQL Server / PostgreSQL'],
      impact: 'Fluidification des démarches administratives et sécurisation des flux financiers.'
    },
    {
      id: 4,
      title: 'Application Mobile Éducative & Emplois du Temps',
      category: 'mobile',
      location: 'Burkina Faso',
      client: 'KAMBBA',
      description: 'Conception et développement d’une application mobile multiplateforme dédiée au suivi des élèves et à la gestion dynamique des emplois du temps.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
      tags: ['Flutter', 'Dart', 'API REST', 'UI/UX Mobile'],
      impact: 'Amélioration de la communication et de l’organisation académique au quotidien.'
    },
    {
      id: 5,
      title: 'Pilotage de Maison Intelligente connectée (IoT)',
      category: 'mobile',
      location: 'Tunisie',
      client: 'ERITECH',
      description: 'Pilotage technique et développement d’un projet de maison intelligente intégrant des capteurs IoT communicants et une interface de contrôle mobile en temps réel.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      tags: ['IoT', 'Capteurs communicants', 'Java', 'Flutter', 'API'],
      impact: 'Automatisation résidentielle et supervision interactive des équipements.'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projets" className="py-24 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F2EF] text-[#167A68] text-xs font-mono mb-4">
              <span>RÉALISATIONS MAJEURES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E2229] tracking-tight">
              Études de cas & Projets d’impact.
            </h2>
          </div>

          {/* Filtres par onglets */}
          <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-xl border border-[#E2E8F0] shadow-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'all' 
                  ? 'bg-[#167A68] text-white shadow-xs' 
                  : 'text-[#4A5568] hover:text-[#1E2229]'
              }`}
            >
              Tous les projets
            </button>
            <button
              onClick={() => setActiveTab('sig')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'sig' 
                  ? 'bg-[#167A68] text-white shadow-xs' 
                  : 'text-[#4A5568] hover:text-[#1E2229]'
              }`}
            >
              SIG & Territoire
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'web' 
                  ? 'bg-[#167A68] text-white shadow-xs' 
                  : 'text-[#4A5568] hover:text-[#1E2229]'
              }`}
            >
              Web & Plateformes
            </button>
            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'mobile' 
                  ? 'bg-[#167A68] text-white shadow-xs' 
                  : 'text-[#4A5568] hover:text-[#1E2229]'
              }`}
            >
              Mobile & IoT
            </button>
          </div>
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image du projet */}
                <div className="aspect-[16/9] overflow-hidden bg-slate-900 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Localisation badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono font-medium text-[#1E2229] flex items-center gap-1.5 shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#167A68]" />
                    <span>{project.location}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#E6F2EF] block mb-1">
                      {project.client}
                    </span>
                    <h3 className="text-xl font-display font-bold leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description et détails */}
                <div className="p-6 sm:p-8">
                  <p className="text-sm text-[#4A5568] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="bg-[#FBFBFA] p-4 rounded-xl border border-[#E2E8F0] mb-6 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#167A68] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-[#1E2229] uppercase tracking-wider mb-0.5">Impact mesuré</div>
                      <div className="text-xs text-[#4A5568]">{project.impact}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags technologiques en bas */}
              <div className="px-6 sm:px-8 pb-6 pt-0">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E2E8F0]">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-xs font-mono bg-[#E6F2EF]/60 text-[#167A68] px-2.5 py-1 rounded-md font-medium"
                    >
                      {tag}
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
