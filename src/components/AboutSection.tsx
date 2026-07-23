import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './Buttons';
import { FileText, Cpu, Workflow, MessageSquare, Zap, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutSectionProps {
  onOpenCV?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCV }) => {
  const { t } = useLanguage();

  const techStack = [
    { name: 'OpenAI / Claude / Gemini', icon: Cpu },
    { name: 'Sistemas Multi-Agente', icon: Workflow },
    { name: 'n8n & Webhooks', icon: Zap },
    { name: 'GoHighLevel CRM', icon: Globe },
    { name: 'IA Conversacional', icon: MessageSquare },
  ];

  return (
    <section id="about" className="relative min-h-[85vh] w-full flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-24 bg-[#000000] text-white overflow-hidden border-t border-white/10">
      {/* Subtle Ambient Background Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#01C9C7]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 max-w-4xl flex flex-col items-center text-center gap-8 sm:gap-10">
        <FadeIn delay={0} y={40}>
          <p className="text-xs sm:text-sm font-['Montserrat'] font-extrabold tracking-widest text-[#01C9C7] uppercase mb-2">
            {t.about.badge}
          </p>
          <h2 className="hero-heading font-['Kanit'] font-black uppercase leading-none tracking-tight text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[90px]">
            {t.about.title}
          </h2>
        </FadeIn>

        {/* Persuasive Bio Paragraph */}
        <div className="max-w-[820px] text-[#D7E2EA] font-['Inter'] font-medium text-base sm:text-xl md:text-2xl leading-relaxed">
          <AnimatedText text={t.about.p1} />
        </div>

        {/* Tech Stack Pills */}
        <FadeIn delay={0.3} y={20} className="w-full flex flex-wrap justify-center gap-3 my-2">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F1F1F] border border-white/10 text-xs sm:text-sm text-[#D7E2EA] font-['Montserrat'] font-semibold hover:border-[#01C9C7] hover:text-[#01C9C7] transition-all"
              >
                <Icon className="w-4 h-4 text-[#01C9C7]" />
                <span>{tech.name}</span>
              </div>
            );
          })}
        </FadeIn>

        {/* Actions */}
        <FadeIn delay={0.4} y={20} className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <button
            onClick={onOpenCV}
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#1F1F1F] border border-[#01C9C7]/50 hover:bg-[#01C9C7] hover:text-black text-[#01C9C7] font-['Montserrat'] font-extrabold text-sm uppercase tracking-wider transition-all cursor-pointer shadow-lg hover:scale-105"
          >
            <FileText className="w-5 h-5" />
            <span>{t.about.cvBtn}</span>
          </button>

          <ContactButton
            label="HABLEMOS DE TU PROYECTO"
            onClick={() => {
              const elem = document.getElementById('contact');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </FadeIn>
      </div>
    </section>
  );
};
