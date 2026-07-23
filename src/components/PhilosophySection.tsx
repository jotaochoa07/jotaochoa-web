import React from 'react';
import { FadeIn } from './FadeIn';
import { Sparkles, Hammer, Box, Cpu, Palette } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PhilosophySection: React.FC = () => {
  const { t } = useLanguage();

  const principles = [
    {
      icon: Hammer,
      title: 'Construyo antes que opinar',
      text: 'Menos teoría y más ejecución. La mejor forma de validar una idea es ponerla a funcionar',
    },
    {
      icon: Box,
      title: 'No construyo demos; construyo productos',
      text: 'Cada sistema está diseñado para operar en el mundo real, resolver dolores verdaderos y generar valor',
    },
    {
      icon: Cpu,
      title: 'La IA amplifica el talento humano',
      text: 'La tecnología no reemplaza la visión; multiplica por 100x la capacidad de quienes lideran con propósito',
    },
    {
      icon: Palette,
      title: 'La creatividad siempre viene primero',
      text: 'El código y la infraestructura son vehículos. El verdadero impacto nace del storytelling y la estrategia',
    },
  ];

  return (
    <section id="philosophy" className="relative bg-[#000000] text-white py-24 border-t border-white/10 overflow-hidden z-30">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        <FadeIn delay={0} y={40} className="w-full text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#01C9C7]/10 border border-[#01C9C7]/30 text-[#01C9C7] text-xs font-['Montserrat'] font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.philosophy.badge}</span>
          </div>
          <h2 className="hero-heading font-['Kanit'] font-black uppercase leading-none tracking-tight text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[75px]">
            {t.philosophy.title}
          </h2>
        </FadeIn>

        {/* Manifesto Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <FadeIn key={p.title} delay={idx * 0.12} y={30}>
                <div className="p-8 rounded-3xl bg-[#1F1F1F]/60 border border-white/10 hover:border-[#01C9C7] transition-all duration-300 group flex flex-col justify-between h-full shadow-xl">
                  <div>
                    <div className="p-3.5 rounded-2xl bg-[#000000] border border-white/10 w-fit mb-5 text-[#01C9C7] group-hover:scale-110 group-hover:bg-[#01C9C7]/10 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-['Montserrat'] font-extrabold text-xl sm:text-2xl text-white group-hover:text-[#01C9C7] transition-colors leading-snug mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#D7E2EA]/75 font-light leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
