// Direction artistique : Cartographie d’impact - Pied de page professionnel.
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E2229] text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800">
          
          <div>
            <div className="font-display font-bold text-xl text-white tracking-tight flex items-center gap-2 mb-2">
              <span>Steve Sanon</span>
              <span className="text-xs font-mono font-normal text-[#167A68] bg-[#167A68]/20 px-2 py-0.5 rounded">
                Ingénieur IT & SIG
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Conception d'architectures logicielles, web, mobiles et géospatiales pour accompagner le développement numérique en Afrique.
            </p>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors"
          >
            <span>Retour en haut</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Steve Romuald Sanon. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            <span>Ouagadougou, Burkina Faso</span>
            <span>•</span>
            <span>sanonsteve1@gmail.com</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
