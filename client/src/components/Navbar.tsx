// Direction artistique : Cartographie d’impact - Navigation fixe, épurée avec repères de coordonnées et logo marque.
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download, MapPin, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projets & SIG', href: '#projets' },
    { name: 'Parcours', href: '#parcours' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FBFBFA]/90 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs py-3.5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo & Coordonnées */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-[#167A68] flex items-center justify-center text-white shadow-sm group-hover:bg-[#105D4F] transition-colors">
            <img 
              src="/manus-storage/steve-sanon-mark_c54ffa16.png" 
              alt="Logo Steve Sanon" 
              className="w-6 h-6 object-contain invert brightness-0"
              onError={(e) => {
                // Fallback si l’image n’est pas encore chargée
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div>
            <div className="font-display font-bold text-[#1E2229] tracking-tight text-base sm:text-lg flex items-center gap-2">
              <span>Steve Sanon</span>
              <span className="hidden sm:inline-block text-xs font-mono font-normal text-[#167A68] bg-[#E6F2EF] px-1.5 py-0.5 rounded">
                06°22'N / 01°31'W
              </span>
            </div>
            <div className="text-xs text-[#4A5568] font-mono tracking-wide">
              Ingénieur Logiciel & Consultant SIG
            </div>
          </div>
        </a>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#4A5568] hover:text-[#167A68] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-[#167A68] hover:bg-[#105D4F] shadow-xs transition-all"
          >
            Discuter d’un projet
          </a>
        </div>

        {/* Bouton Menu Mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#1E2229] hover:bg-slate-200/60 transition-colors"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#FBFBFA] border-b border-[#E2E8F0] shadow-lg py-6 px-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1E2229] hover:text-[#167A68] py-1 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-lg text-white bg-[#167A68] hover:bg-[#105D4F] shadow-xs"
              >
                Discuter d’un projet
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
