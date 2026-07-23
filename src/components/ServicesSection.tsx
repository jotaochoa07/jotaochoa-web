import React from 'react';
import { FadeIn } from './FadeIn';

interface AgentItem {
  number: string;
  name: string;
  badge: string;
  description: string;
  accentColor: string;
  link?: string;
}

const AGENTS: AgentItem[] = [
  {
    number: '01',
    name: 'J CASH',
    badge: 'FINANCIAL AGENT',
    description: 'Gestor financiero inteligente y asistente patrimonial. Diseñado para tomar decisiones claras, control y prosperidad sustentable.',
    accentColor: '#22C55E',
  },
  {
    number: '02',
    name: 'CONSERJE IA',
    badge: 'HOSPITALITY AGENT',
    description: 'Atención al cliente personalizada, conserjería multilingüe y gestión de reservas en tiempo real para hoteles y negocios.',
    accentColor: '#01C9C7',
  },
  {
    number: '03',
    name: 'SMART HUNTER',
    badge: 'RECRUITMENT AGENT',
    description: 'Headhunting impulsado por IA. Análisis de perfiles, evaluación de competencias y filtrado de talento estratégico a alta velocidad.',
    accentColor: '#3B82F6',
  },
  {
    number: '04',
    name: 'RADAR SMART HUNTER',
    badge: 'TALENT RADAR',
    description: 'Monitoreo 24/7 del mercado laboral y redes profesionales para detectar candidatos pasivos y oportunidades clave antes que nadie.',
    accentColor: '#9945FF',
  },
  {
    number: '05',
    name: 'REAL ESTATE AI',
    badge: 'PROPTECH AGENT',
    description: 'Calificación automática de compradores e inquilinos, recorridos virtuales guiados y agendamiento directo de visitas.',
    accentColor: '#F59E0B',
  },
  {
    number: '06',
    name: 'HUMANOS',
    badge: 'STORIES & NEWSLETTER',
    description: 'Archivo vivo de historias cinematográficas y newsletter de investigación. Narrativas profundas producidas con inteligencia artificial.',
    accentColor: '#01C9C7',
    link: 'humanos',
  },
];

interface ServicesSectionProps {
  onNavigate?: (route: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  return (
    <section id="j-lab" className="relative w-full bg-[#1F1F1F] text-white rounded-t-[40px] sm:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 border-t border-white/10 z-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Title */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
          <p className="text-xs sm:text-sm font-['Montserrat'] font-extrabold tracking-widest text-[#01C9C7] uppercase mb-3">
            CATÁLOGO DE AGENTES AUTÓNOMOS
          </p>
          <h2 className="font-['Kanit'] font-black uppercase leading-none tracking-tight text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[90px] text-white">
            J LAB AGENTS
          </h2>
        </FadeIn>

        {/* Agents List */}
        <div className="w-full flex flex-col divide-y divide-white/10">
          {AGENTS.map((agent, i) => (
            <FadeIn key={agent.number} delay={i * 0.1} y={30} className="w-full">
              <div
                onClick={() => {
                  if (agent.link && onNavigate) onNavigate(agent.link);
                }}
                className={`group py-8 sm:py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300 ${
                  agent.link ? 'cursor-pointer' : ''
                }`}
              >
                {/* Left: Number & Title */}
                <div className="flex items-baseline gap-6 sm:gap-10">
                  <span className="font-['Kanit'] font-black text-4xl sm:text-6xl md:text-7xl text-white/30 group-hover:text-white transition-colors duration-300">
                    {agent.number}
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-['Montserrat'] font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white group-hover:text-[#01C9C7] transition-colors duration-300">
                        {agent.name}
                      </h3>
                      <span
                        className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20"
                        style={{ color: agent.accentColor, borderColor: `${agent.accentColor}40` }}
                      >
                        {agent.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Description & Action */}
                <div className="md:max-w-md flex flex-col gap-2">
                  <p className="text-[#D7E2EA]/70 font-light text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                    {agent.description}
                  </p>
                  {agent.link && (
                    <span className="text-xs font-bold tracking-widest text-[#01C9C7] uppercase flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200 mt-1">
                      VER EMBUDO / CAPTURA &rarr;
                    </span>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
