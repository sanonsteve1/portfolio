// Direction artistique : Cartographie d’impact - Section de contact et conversion professionnelle.
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Veuillez remplir tous les champs du formulaire.');
      return;
    }
    setSubmitted(true);
    toast.success('Message envoyé avec succès ! Steve vous répondra rapidement.');
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Colonne de gauche : Coordonnées et message d’invitation */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6F2EF] text-[#167A68] text-xs font-mono mb-4">
              <span>CONTACT & COLLABORATION</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#1E2229] tracking-tight mb-6">
              Discutons de votre prochain projet numérique ou SIG.
            </h2>

            <p className="text-base text-[#4A5568] leading-relaxed mb-8">
              Vous avez un projet de développement logiciel, d’intégration SIG ou d’architecture IoT en Afrique de l’Ouest ou à l’international ? Je suis à votre écoute pour échanger sur vos besoins.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:sanonsteve1@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-xl bg-[#FBFBFA] border border-[#E2E8F0] hover:border-[#167A68] transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#E6F2EF] text-[#167A68] flex items-center justify-center group-hover:bg-[#167A68] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#4A5568]">Courriel direct</div>
                  <div className="text-sm font-display font-bold text-[#1E2229]">sanonsteve1@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:+22674064010" 
                className="flex items-center gap-4 p-4 rounded-xl bg-[#FBFBFA] border border-[#E2E8F0] hover:border-[#167A68] transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#E6F2EF] text-[#167A68] flex items-center justify-center group-hover:bg-[#167A68] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#4A5568]">Téléphone & WhatsApp</div>
                  <div className="text-sm font-display font-bold text-[#1E2229]">+226 74 06 40 10</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FBFBFA] border border-[#E2E8F0]">
                <div className="w-12 h-12 rounded-lg bg-[#E6F2EF] text-[#167A68] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#4A5568]">Localisation</div>
                  <div className="text-sm font-display font-bold text-[#1E2229]">Ouagadougou, Burkina Faso (Mobile)</div>
                </div>
              </div>
            </div>

          </div>

          {/* Colonne de droite : Formulaire de contact */}
          <div className="lg:col-span-7 bg-[#FBFBFA] p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] shadow-xs">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#167A68] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#1E2229] mb-3">Message bien transmis !</h3>
                <p className="text-sm text-[#4A5568] max-w-md mx-auto mb-6">
                  Merci pour votre intérêt. Steve Sanon a bien reçu votre demande et vous répondra dans les plus brefs délais à l'adresse indiquée.
                </p>
                <Button 
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                  variant="outline"
                  className="border-[#167A68] text-[#167A68] hover:bg-[#E6F2EF]"
                >
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-[#1E2229] mb-2">Envoyez un message direct</h3>
                  <p className="text-sm text-[#4A5568]">Remplissez ce formulaire pour planifier un échange ou proposer une opportunité.</p>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#4A5568] mb-2">Votre nom complet</label>
                  <input 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex. Jean Dupont"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E8F0] text-[#1E2229] text-sm focus:outline-none focus:ring-2 focus:ring-[#167A68]/20 focus:border-[#167A68]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#4A5568] mb-2">Votre adresse e-mail</label>
                  <input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Ex. jean.dupont@entreprise.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E8F0] text-[#1E2229] text-sm focus:outline-none focus:ring-2 focus:ring-[#167A68]/20 focus:border-[#167A68]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#4A5568] mb-2">Votre message ou description de projet</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Décrivez brièvement vos besoins (développement web, SIG, mission de conseil...)"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2E8F0] text-[#1E2229] text-sm focus:outline-none focus:ring-2 focus:ring-[#167A68]/20 focus:border-[#167A68]"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full py-4 bg-[#167A68] hover:bg-[#105D4F] text-white font-medium rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer le message</span>
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
