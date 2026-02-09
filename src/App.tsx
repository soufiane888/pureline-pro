import { useState } from 'react';
import { 
  Sparkles, Building2, Home, CheckCircle2, 
  Phone, MapPin, Menu, X,
  Star, ArrowRight, ShieldCheck, Zap, Quote
} from 'lucide-react';

// 1. COMPOSANT CARTE DE SERVICE
const ServiceCard = ({ title, desc, icon: Icon }) => (
  <div className="p-8 bg-white border border-gray-100 rounded-[16px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
      <Icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2 font-manrope">{title}</h3>
    <p className="text-gray-500 text-sm mb-6 leading-relaxed">{desc}</p>
    <a href="#devis" className="text-blue-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-wider">
      Demander un devis <ArrowRight size={16} />
    </a>
  </div>
);

export default function PurelineSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction de scroll fluide qui ferme le menu mobile
  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter text-gray-600 selection:bg-blue-100 selection:text-blue-600">
      
      {/* --- TOP BAR (Desktop uniquement) --- */}
      <div className="bg-[#111827] text-white py-2 px-6 hidden md:flex justify-between items-center text-xs uppercase tracking-widest font-medium">
        <div className="flex gap-4">
          <span className="flex items-center gap-2 text-emerald-400">
            <Zap size={14} fill="currentColor" /> Devis gratuit — Réponse sous 2h
          </span>
        </div>
        <div className="flex gap-6 items-center font-bold">
          <span className="flex items-center gap-2"><Phone size={14} className="text-blue-400" /> +33 6 30 30 30 30</span>
          <span className="flex items-center gap-2"><MapPin size={14} className="text-blue-400" /> Paris & Alentours</span>
        </div>
      </div>

      {/* --- HEADER & NAVIGATION --- */}
      <header className="sticky top-0 z-[100] bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div 
            className="text-2xl font-extrabold font-manrope text-[#111827] cursor-pointer" 
            onClick={() => window.scrollTo({top:0, behavior:'smooth'})}
          >
            PURELINE <span className="text-blue-600 font-black tracking-tighter">PRO™️</span>
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center gap-8 text-[13px] font-bold text-gray-900 uppercase tracking-tight">
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-600 transition-colors">Services</button>
            <button onClick={() => scrollToSection('entreprises')} className="hover:text-blue-600 transition-colors">Entreprises</button>
            <button onClick={() => scrollToSection('particuliers')} className="hover:text-blue-600 transition-colors">Particuliers</button>
            <button onClick={() => scrollToSection('methode')} className="hover:text-blue-600 transition-colors">Méthode</button>
            <button onClick={() => scrollToSection('avis')} className="hover:text-blue-600 transition-colors text-emerald-600">Avis ★</button>
            <button 
                onClick={() => scrollToSection('devis')} 
                className="bg-blue-600 text-white px-6 py-3 rounded-[14px] font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95"
            >
              Obtenir un devis
            </button>
          </div>

         {/* Burger Button */}
         <button 
            className="lg:hidden relative z-[2000] p-2" // Augmentation du z-index pour rester au-dessus du menu ouvert
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={30} className="text-slate-900" /> : <Menu size={30} className="text-slate-900" />}
          </button>
        </nav>

        {/* --- MENU MOBILE (CORRECTIONS APPLIQUÉES) --- */}
        <div className={`fixed inset-0 w-full h-screen bg-white z-[1500] lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
          {/* Fond blanc solide forcé */}
          <div className="absolute inset-0 bg-white" /> 
          
          <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
            {['Services', 'Entreprises', 'Particuliers', 'Avis', 'Devis'].map((item, index) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-4xl font-black tracking-tighter text-slate-900 transform transition-all duration-500 delay-[${index * 50}ms] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                {item === 'Devis' ? <span className="text-blue-600">{item}</span> : item}
              </button>
            ))}
            
            <div className="pt-10 flex flex-col items-center gap-4 border-t border-slate-100 w-64">
               <a href="tel:0630303030" className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:scale-105 transition-all active:scale-95">
  <Phone size={20} fill="currentColor" />
  <span>Appeler</span>
</a>
            </div>
          </div>
        </div>
      </header>
      {/* --- HERO SECTION --- */}
      <section className="relative pt-12 pb-24 overflow-hidden bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 py-2 px-4 bg-emerald-50 text-emerald-700 rounded-full text-[11px] font-bold uppercase tracking-wider mb-8 border border-emerald-100">
              <ShieldCheck size={14} /> Service de Nettoyage Certifié Premium
            </span>
            <h1 className="text-5xl md:text-7xl font-manrope font-extrabold text-[#111827] leading-[1.05] mb-8 tracking-tight">
              Un nettoyage impeccable. <br/><span className="text-blue-600">Un service fiable.</span>
            </h1>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Bureaux, commerces, immeubles, locations, maisons. Intervention ponctuelle ou régulière avec <span className="text-blue-600 font-semibold underline underline-offset-4 decoration-blue-200">contrôle qualité systématique</span>.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <button onClick={() => scrollToSection('devis')} className="bg-blue-600 text-white px-10 py-5 rounded-[16px] font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:-translate-y-1">
                Obtenir un devis
              </button>
              <button onClick={() => scrollToSection('services')} className="bg-white border-2 border-gray-100 text-gray-900 px-10 py-5 rounded-[16px] font-bold text-lg hover:border-blue-600 transition-all">
                Voir les services
              </button>
            </div>
          </div>
          <div className="relative group hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-emerald-50 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Bureau premium" className="w-full h-[550px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-manrope font-bold text-[#111827] mb-4 tracking-tight">Nos services</h2>
            <p className="text-gray-500 text-lg">Du quotidien à l'ultra spécifique, toujours proprement.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard icon={Building2} title="Nettoyage de bureaux" desc="Quotidien / Hebdo pour un environnement de travail sain." />
            <ServiceCard icon={Sparkles} title="Commerces & Vitrines" desc="Image impeccable pour accueillir vos clients." />
            <ServiceCard icon={Home} title="Immeubles" desc="Halls, escaliers et ascenseurs toujours soignés." />
            <ServiceCard icon={Star} title="Airbnb / Locations" desc="Turnover rapide avec un niveau d'exigence hôtelier." />
          </div>
        </div>
      </section>

      {/* --- ENTREPRISES --- */}
      <section id="entreprises" className="py-24 bg-blue-50/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" className="rounded-[32px] shadow-2xl shadow-blue-100" alt="Bureaux" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-manrope font-bold text-[#111827] mb-6 tracking-tight">Pour les entreprises</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">Des locaux propres sont le reflet de votre professionnalisme.</p>
            <div className="space-y-6 mb-10">
              {[
                {t: "Contrat régulier", d: "Planning fixe + contrôle qualité mensuel inclus."},
                {t: "Sites sensibles", d: "Protocoles de désinfection renforcés (santé, luxe)."}
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-blue-100">
                  <CheckCircle2 className="text-blue-600 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900">{item.t}</h4>
                    <p className="text-sm text-gray-500">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => scrollToSection('devis')} className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-[14px] font-bold shadow-lg hover:shadow-blue-200 transition-all">
              Consulter nos offres B2B
            </button>
          </div>
        </div>
      </section>

      {/* --- PARTICULIERS --- */}
      <section id="particuliers" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-manrope font-bold text-[#111827] mb-4 tracking-tight">Pour les particuliers</h2>
              <p className="text-gray-500 text-lg">Retrouvez le plaisir d'un foyer parfaitement entretenu.</p>
            </div>
            <button onClick={() => scrollToSection('devis')} className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all">Réserver un créneau</button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {t: "Ménage régulier", p: "À partir de 29€/h", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400"},
              {t: "Grand nettoyage", p: "Saisonnier / Printemps", img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=400"},
              {t: "Déménagement", p: "Remise à neuf complète", img: "https://images.unsplash.com/photo-1560067174-c5a3a8f37060?auto=format&fit=crop&q=80&w=400"}
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="rounded-2xl overflow-hidden mb-6 h-64 shadow-lg border border-gray-100">
                  <img src={item.img} alt={item.t} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.t}</h3>
                <p className="text-blue-600 font-bold">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MÉTHODE (CLAIRE) --- */}
      <section id="methode" className="py-24 bg-slate-50 text-gray-900 scroll-mt-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-manrope font-bold mb-16 text-[#111827]">Notre méthode <span className="text-blue-600">PURELINE</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {t: "Brief", d: "Besoin, surface, fréquence", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=200"},
              {t: "Devis clair", d: "Détail précis des tâches", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=200"},
              {t: "Planification", d: "Créneaux à votre convenance", img: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=200"},
              {t: "Intervention", d: "Checklist de suivi rigoureuse", img: "https://images.unsplash.com/photo-1581578731522-aa7987994406?auto=format&fit=crop&q=80&w=200"},
              {t: "Contrôle", d: "Retour & ajustements immédiats", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=200"}
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden mb-6 bg-white shadow-xl">
                  <img src={step.img} alt={step.t} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-[#111827]">{step.t}</h4>
                <p className="text-gray-500 text-xs px-4 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AVIS --- */}
      <section id="avis" className="py-24 bg-white scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-manrope font-bold text-[#111827] mb-4">Ils nous font confiance</h2>
            <div className="flex justify-center items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#F59E0B" className="text-amber-500" />)}
            </div>
            <p className="text-gray-500 font-bold underline decoration-emerald-400 underline-offset-4 italic">Note globale 4.8/5</p>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
            {[
              {n: "Bureaux TechLog", a: "Bureaux impeccables chaque semaine. Ponctualité exemplaire.", p: "Gérant Immobilier"},
              {n: "Sophie L.", a: "Le turnover de mon Airbnb est parfait. Les voyageurs remarquent la propreté.", p: "Hôte Particulier"},
              {n: "Cabinet Dr. Rey", a: "Protocoles de désinfection sérieux. On se sent en sécurité.", p: "Santé"},
              {n: "Marc D.", a: "Enfin une entreprise qui contrôle vraiment ses chantiers.", p: "Commerçant"}
            ].map((avis, i) => (
              <div key={i} className="min-w-[320px] bg-blue-50/50 p-8 rounded-[24px] snap-center border border-blue-100">
                <Quote size={32} className="text-blue-200 mb-4" />
                <p className="text-gray-700 font-medium mb-6 leading-relaxed italic">"{avis.a}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{avis.n}</h4>
                  <p className="text-sm text-blue-600 font-bold">{avis.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FORMULAIRE DE DEVIS --- */}
      <section id="devis" className="py-24 bg-blue-600 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border-8 border-blue-500/30">
            <div className="lg:w-2/5 bg-[#111827] p-12 text-white">
              <h2 className="text-4xl font-bold mb-8">Recevez votre devis <span className="text-blue-500">gratuit</span>.</h2>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-blue-400"><Zap /></div>
                  <p className="font-bold">Réponse ultra-rapide <br/><span className="text-xs text-gray-400">sous 2h ouvrées</span></p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-emerald-400"><ShieldCheck /></div>
                  <p className="font-bold">Sans engagement <br/><span className="text-xs text-gray-400">Annulation libre</span></p>
                </div>
              </div>
            </div>
            
            <form className="lg:w-3/5 p-12 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-black uppercase text-gray-400 mb-2 block">Vous êtes</label>
                  <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-blue-600">
                    <option>Une Entreprise</option>
                    <option>Un Particulier</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-black uppercase text-gray-400 mb-2 block">Type de lieu</label>
                  <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-blue-600">
                    <option>Bureaux</option>
                    <option>Commerce</option>
                    <option>Résidence / Maison</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Surface approx (m²)" className="p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-blue-600" />
                <input type="text" placeholder="Ville" className="p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-blue-600" />
              </div>
              <input type="email" placeholder="Email de contact" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-blue-600" />
              <textarea placeholder="Votre message..." rows={3} className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-blue-600"></textarea>
              <button className="w-full bg-blue-600 text-white font-black text-lg py-5 rounded-2xl shadow-xl hover:bg-blue-700 transition-all uppercase tracking-widest">
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#111827] text-white pt-20 pb-32 lg:pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-black font-manrope mb-6">
                PURELINE <span className="text-blue-500 tracking-tighter">PRO™️</span>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed">
                Standard hôtelier pour vos espaces de travail et de vie. Disponible 6j/7 à Paris et en Île-de-France.
              </p>
            </div>
            <div>
              <h5 className="font-black mb-6 text-sm uppercase text-blue-500">Navigation</h5>
              <ul className="space-y-4 text-gray-400 text-sm font-bold">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-white">Services</button></li>
              <li><button onClick={() => scrollToSection('entreprises')} className="hover:text-white">Entreprises</button></li>
              <li><button onClick={() => scrollToSection('particuliers')} className="hover:text-white">Particuliers</button></li>
              <li><button onClick={() => scrollToSection('methode')} className="hover:text-white">Méthodes</button></li>
              <li><button onClick={() => scrollToSection('avis')} className="hover:text-white">Avis</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black mb-6 text-sm uppercase text-blue-500">Contact</h5>
              <ul className="space-y-4 text-gray-400 text-sm font-bold">
                <li>+33 6 30 30 30 30</li>
                <li>contact@purelinepro.fr</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-[10px] text-gray-500 uppercase tracking-widest font-bold">
            © 2026 PURELINE PRO™️ — TOUS DROITS RÉSERVÉS
          </div>
        </div>
      </footer>

      {/* --- MOBILE STICKY CTA --- */}
      <div className="fixed bottom-0 left-0 right-0 grid grid-cols-2 lg:hidden z-50 p-2 gap-2 bg-white/90 backdrop-blur-md border-t border-gray-100">
        <a href="tel:+33630303030" className="bg-gray-900 text-white text-center py-4 rounded-xl font-black flex items-center justify-center gap-2 uppercase text-[10px] tracking-widest">
          <Phone size={14} /> Appeler
        </a>
        <button onClick={() => scrollToSection('devis')} className="bg-blue-600 text-white py-4 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-lg shadow-blue-100">
          Devis Rapide
        </button>
      </div>

    </div>
  );
}