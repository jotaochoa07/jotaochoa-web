import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const DesktopSideDock: React.FC = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const sections = [
    { id: 'hero', number: '01', label: language === 'en' ? 'Home' : 'Inicio' },
    { id: 'metrics', number: '02', label: language === 'en' ? 'Metrics' : 'Métricas' },
    { id: 'humanos', number: '03', label: 'HUMANOS' },
    { id: 'about', number: '04', label: language === 'en' ? 'About Me' : 'Sobre Mí' },
    { id: 'projects', number: '05', label: language === 'en' ? 'My Lab' : 'Mi Lab' },
    { id: 'career', number: '06', label: language === 'en' ? 'Journey' : 'Trayectoria' },
    { id: 'philosophy', number: '07', label: language === 'en' ? 'Principles' : 'Manifiesto' },
    { id: 'contact', number: '08', label: language === 'en' ? 'Contact' : 'Contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -20;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-3 p-3 rounded-full bg-[#1F1F1F]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        const isHovered = hoveredId === sec.id;

        return (
          <div
            key={sec.id}
            onMouseEnter={() => setHoveredId(sec.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => scrollToSection(sec.id)}
            className="relative flex items-center justify-center p-1.5 cursor-pointer group"
          >
            {/* Minimalist Interactive Dot Indicator */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-3 h-3 bg-[#01C9C7] shadow-[0_0_15px_rgba(1,201,199,0.9)] scale-125'
                  : 'w-2 h-2 bg-white/30 hover:bg-[#01C9C7] hover:scale-125'
              }`}
            />

            {/* Floating Tooltip Tag on Hover or Active State */}
            <AnimatePresence>
              {(isHovered || (isActive && hoveredId === null)) && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-black/90 text-white font-['Montserrat'] text-[11px] font-bold whitespace-nowrap border border-[#01C9C7]/40 shadow-2xl flex items-center gap-1.5"
                >
                  <span className="text-[#01C9C7]">{sec.number}.</span>
                  <span>{sec.label}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
