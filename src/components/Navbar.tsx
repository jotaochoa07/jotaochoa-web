import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onNavigate?: (route: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t.nav.about, target: 'about' },
    { label: t.nav.projects, target: 'projects' },
    { label: t.nav.humanos, target: 'humanos' },
    { label: t.nav.contact, target: 'contact' },
  ];

  const handleNavClick = (target: string) => {
    if (target === 'humanos' && onNavigate) {
      onNavigate('humanos');
      return;
    }

    const elem = document.getElementById(target);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#000000]/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-3.5">
        {/* Official Logo with Cyan Neon Glow Halo + Small Crisp Text */}
        <div
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
            {/* Cyan Neon Halo Glow behind logo */}
            <div className="absolute inset-0 bg-[#01C9C7] rounded-full blur-md opacity-60 group-hover:opacity-100 group-hover:scale-125 transition duration-300" />
            <img
              src="/j-logo.png"
              alt="Jota Ochoa Chess Logo"
              className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(1,201,199,0.8)]"
            />
          </div>

          <span className="font-extrabold tracking-wider text-xs sm:text-sm text-white font-['Montserrat'] group-hover:text-[#01C9C7] transition-colors uppercase">
            JOTA OCHOA
          </span>
        </div>

        {/* Navigation Menu + Language Switcher */}
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleNavClick(item.target)}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-[10px] sm:text-xs md:text-sm hover:text-[#01C9C7] hover:opacity-100 opacity-80 transition-all duration-200 cursor-pointer"
            >
              {item.label}
            </button>
          ))}

          {/* Minimalist Language Switcher Pill */}
          <div className="flex items-center gap-1 bg-[#1F1F1F] p-1 rounded-full border border-white/10 text-[10px] sm:text-xs font-['Montserrat'] font-bold ml-1">
            <button
              onClick={() => setLanguage('es')}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                language === 'es' ? 'bg-[#01C9C7] text-black shadow-md' : 'text-[#D7E2EA]/70 hover:text-white'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                language === 'en' ? 'bg-[#01C9C7] text-black shadow-md' : 'text-[#D7E2EA]/70 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
