import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './Buttons';
import {
  FileText,
  Cpu,
  Workflow,
  MessageSquare,
  Zap,
  Globe,
  Mic,
  Code2,
  Database,
  Layers,
  Sparkles,
  Search,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutSectionProps {
  onOpenCV?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCV }) => {
  const { language, t } = useLanguage();
  const isEn = language === 'en';

  const techStack = [
    { name: 'OpenAI / Claude / Gemini', icon: Cpu },
    { name: isEn ? 'Multi-Agent Systems' : 'Sistemas Multi-Agente', icon: Workflow },
    { name: 'n8n & Webhooks', icon: Zap },
    { name: 'GoHighLevel CRM', icon: Globe },
    { name: isEn ? 'Conversational & Voice AI' : 'IA Conversacional & Voz', icon: Mic },
    { name: 'Python & FastAPI', icon: Code2 },
    { name: 'RAG & Vector DBs (Pinecone)', icon: Database },
    { name: 'React / Vite / TypeScript', icon: Layers },
    { name: 'Tailwind & Framer Motion', icon: Sparkles },
    { name: isEn ? 'Prompt Engineering & Fine-Tuning' : 'Diseño de Prompts & Fine-Tuning', icon: MessageSquare },
    { name: isEn ? 'Lead Scraping & Data Enrichment' : 'Lead Scraping & Enriquecimiento', icon: Search },
  ];

  return (
    <section id="about" className="relative min-h-[85vh] w-full flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-24 bg-[#000000] text-white overflow-hidden border-t border-white/10">
      {/* Subtle Ambient Background Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#01C9C7]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl w-full flex flex-col items-center text-center">
        <FadeIn delay={0} y={40} className="mb-8">
          <p className="text-xs sm:text-sm font-['Montserrat'] font-extrabold tracking-widest text-[#01C9C7] uppercase mb-2">
            {t.about.badge}
          </p>
          <h2 className="hero-heading font-['Kanit'] font-black uppercase leading-none tracking-tight text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[90px]">
            {t.about.title}
          </h2>
        </FadeIn>

        {/* Persuasive Bio Paragraph with ample bottom spacing */}
        <div className="max-w-[840px] text-[#D7E2EA] font-['Inter'] font-medium text-base sm:text-xl md:text-2xl leading-relaxed mb-12 sm:mb-16">
          <AnimatedText text={t.about.bio} />
        </div>

        {/* Infinite Auto-Scrolling Tech Stack Marquee (One Single Smooth Running Line) */}
        <FadeIn delay={0.3} y={20} className="w-full max-w-full overflow-hidden mb-12 py-3 border-y border-white/10 bg-[#000000]">
          <div className="flex animate-marquee-slow items-center gap-4">
            {[...techStack, ...techStack].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.name}-${idx}`}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#1F1F1F] border border-white/10 text-xs sm:text-sm text-[#D7E2EA] font-['Montserrat'] font-semibold hover:border-[#01C9C7] hover:text-[#01C9C7] hover:bg-[#01C9C7]/10 transition-all flex-shrink-0 cursor-default"
                >
                  <Icon className="w-4 h-4 text-[#01C9C7]" />
                  <span className="whitespace-nowrap">{tech.name}</span>
                </div>
              );
            })}
          </div>
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
