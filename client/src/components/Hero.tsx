// Direction artistique : Cartographie d’impact - Hero asymétrique avec illustration de réseau, coordonnées et double appel à l’action.
import { ArrowRight, Download, MapPin, Layers, Cpu, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-topo-grid">
      {/* Halo lumineux décoratif subtil */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#167A68]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#D9775A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Colonne de gauche : Texte et positionnement */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Badge de statut cartographique */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6F2EF] border border-[#167A68]/20 text-[#167A68] text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-[#167A68] animate-pulse" />
              <span>Disponible pour missions internationales & consulting IT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#1E2229] tracking-tight leading-[1.1] mb-6">
              Concevoir l’infrastructure <span className="text-[#167A68]">numérique & géospatiale</span> de l’Afrique.
            </h1>

            <p className="text-lg sm:text-xl text-[#4A5568] max-w-2xl mb-8 leading-relaxed font-normal">
              Ingénieur Logiciel et Consultant IT, je traduis des problématiques complexes en solutions logicielles robustes — du développement Full-Stack (Java, Spring Boot, Angular, Flutter) aux Systèmes d’Information Géographique (SIG) et architectures IoT.
            </p>

            {/* Boutons d'action principaux */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a
                href="#projets"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white bg-[#167A68] hover:bg-[#105D4F] font-medium shadow-sm transition-all hover:translate-y-[-1px]"
              >
                <span>Explorer les projets</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-[#1E2229] bg-white border border-[#E2E8F0] hover:bg-slate-50 font-medium shadow-2xs transition-all hover:border-[#167A68]/40"
              >
                <span>Me contacter</span>
              </a>
            </div>

            {/* Métriques / Piliers clés en bas */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#E2E8F0] w-full">
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-[#1E2229]">3+</div>
                <div className="text-xs sm:text-sm text-[#4A5568] mt-0.5">Années d'expérience</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-[#167A68]">SIG & IoT</div>
                <div className="text-xs sm:text-sm text-[#4A5568] mt-0.5">Spécialité technique</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-[#1E2229]">CI / BF / BJ</div>
                <div className="text-xs sm:text-sm text-[#4A5568] mt-0.5">Projets internationaux</div>
              </div>
            </div>

          </div>

          {/* Colonne de droite : Visuel de carte / infrastructure */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xl bg-white p-2">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs flex items-center gap-2 font-mono text-xs text-[#1E2229]">
                <MapPin className="w-3.5 h-3.5 text-[#167A68]" />
                <span>Base : Ouagadougou / Missions Afrique de l'Ouest</span>
              </div>
              
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 relative">
                <img 
                  src="/manus-storage/steve-sanon-hero-map_617a2365.png" 
                  alt="Cartographie et infrastructure numérique" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Étiquette flottante de stack */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                  <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-[#167A68]" /> Spring Boot • Angular • Flutter • ArcGIS
                  </span>
                  <span className="bg-[#167A68] text-white px-2 py-1 rounded font-bold">
                    ACTIF
                  </span>
                </div>
              </div>
            </div>

            {/* Élément décoratif d'annotation */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-[#E2E8F0] shadow-lg rounded-xl p-4 hidden sm:block max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E6F2EF] text-[#167A68] flex items-center justify-center font-bold text-xs">
                  SIG
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1E2229]">Modélisation de réseaux</div>
                  <div className="text-[11px] text-[#4A5568]">SONABEL • ArcGIS Utility Network</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
