// Direction artistique : Cartographie d’impact - Formations, certifications et langues.
import { GraduationCap, Award, Globe, CheckCircle } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'Licence en Génie Logiciel & Systèmes d’Information',
      institution: 'ESPIN Sfax, Tunisie',
      year: '2023',
      description: 'Formation approfondie en conception d’architectures logicielles, bases de données avancées, génie logiciel et programmation orientée objet.'
    },
    {
      degree: 'Baccalauréat série D',
      institution: 'Ouagadougou, Burkina Faso',
      year: '2017',
      description: 'Socle scientifique fondamental.'
    }
  ];

  const certifications = [
    { title: 'Python Essentials 1', issuer: 'Cisco', type: 'Programmation' },
    { title: 'NDG Linux Unhatched', issuer: 'Cisco', type: 'Système & DevOps' },
    { title: 'HTML & CSS', issuer: 'OpenClassrooms', type: 'Web Front-End' },
    { title: 'IA en Médecine', issuer: 'JETAIM’3', type: 'Intelligence Artificielle' }
  ];

  const languages = [
    { name: 'Français', level: 'Langue maternelle (Courant)' },
    { name: 'Anglais', level: 'Niveau débutant (Technique)' }
  ];

  const softSkills = [
    'Travail en équipe', 'Adaptabilité', 'Organisation', 
    'Gestion du stress', 'Respect des délais', 'Communication claire', 'Esprit de synthèse'
  ];

  return (
    <section id="certifications" className="py-24 bg-[#FBFBFA] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F2EF] text-[#167A68] text-xs font-mono mb-4">
            <span>SOCLE ACADÉMIQUE & QUALITÉS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E2229] tracking-tight mb-4">
            Formations, certifications et aptitudes.
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568]">
            Un apprentissage continu pour rester à la pointe des technologies logicielles et géospatiales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Formations */}
          <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#E6F2EF] text-[#167A68] flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-bold text-[#1E2229]">Formation</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="pb-6 border-b border-[#E2E8F0] last:border-0 last:pb-0">
                  <div className="text-xs font-mono text-[#167A68] font-medium mb-1">{edu.year}</div>
                  <h4 className="text-base font-display font-bold text-[#1E2229] mb-1">{edu.degree}</h4>
                  <div className="text-sm font-medium text-[#4A5568] mb-2">{edu.institution}</div>
                  <p className="text-xs text-[#4A5568] leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#E6F2EF] text-[#167A68] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-bold text-[#1E2229]">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FBFBFA] border border-[#E2E8F0] flex items-center justify-between">
                  <div>
                    <div className="text-sm font-display font-bold text-[#1E2229]">{cert.title}</div>
                    <div className="text-xs text-[#4A5568] mt-0.5">{cert.issuer}</div>
                  </div>
                  <span className="text-[11px] font-mono bg-[#E6F2EF] text-[#167A68] px-2 py-1 rounded">
                    {cert.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Langues & Soft Skills */}
          <div className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E6F2EF] text-[#167A68] flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-[#1E2229]">Langues & Soft Skills</h3>
              </div>

              {/* Langues */}
              <div className="space-y-3 mb-8">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm py-2 border-b border-[#E2E8F0]">
                    <span className="font-medium text-[#1E2229]">{lang.name}</span>
                    <span className="text-xs text-[#4A5568] font-mono">{lang.level}</span>
                  </div>
                ))}
              </div>

              {/* Soft Skills */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#4A5568] mb-3">Qualités professionnelles</div>
                <div className="flex flex-wrap gap-1.5">
                  {softSkills.map((skill, idx) => (
                    <span key={idx} className="text-xs bg-[#FBFBFA] text-[#1E2229] px-3 py-1.5 rounded-lg border border-[#E2E8F0] font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Infos complémentaires */}
            <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
              <div className="text-xs font-mono text-[#167A68] font-medium mb-1">INFORMATIONS COMPLÉMENTAIRES</div>
              <div className="text-xs text-[#4A5568]">Permis de conduire : catégorie C • Mobilité : Afrique de l'Ouest & missions internationales</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
