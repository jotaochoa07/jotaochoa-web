import React from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './Buttons';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

interface ClosingSectionProps {
  onOpenContact?: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();

  const socialLinks = [
    { name: 'Twitter / X', url: 'https://x.com/JotaOchoa', icon: TwitterIcon },
    { name: 'Instagram', url: 'https://www.instagram.com/jotaochoa.oficial/', icon: InstagramIcon },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/jotaochoa', icon: LinkedinIcon },
    { name: 'YouTube', url: 'https://www.youtube.com/@JotaGrowth', icon: YoutubeIcon },
  ];

  return (
    <section className="relative min-h-[85vh] w-full bg-[#000000] text-white flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-28 border-t border-white/10 overflow-hidden z-30">
      {/* Background Animated Neon Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#01C9C7]/15 via-transparent to-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
        <FadeIn delay={0} y={30}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#01C9C7]/10 border border-[#01C9C7]/30 text-[#01C9C7] text-xs font-['Montserrat'] font-extrabold tracking-widest uppercase mb-4">
            <Sparkles className="w-4 h-4 text-[#01C9C7]" />
            <span>{t.closing.badge}</span>
          </div>
        </FadeIn>

        {/* High-Impact Statement without full stop */}
        <FadeIn delay={0.15} y={40}>
          <h2 className="font-['Kanit'] font-black uppercase text-[11vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[88px] leading-[0.95] tracking-tight text-white">
            EL FUTURO PERTENECE A <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-[#01C9C7] to-emerald-400 bg-clip-text text-transparent">
              QUIENES CONSTRUYEN
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="max-w-2xl">
          <p className="text-base sm:text-xl text-[#D7E2EA]/80 font-['Inter'] font-light leading-relaxed">
            No es solo desarrollo de IA. Es la capacidad de diseñar sistemas agénticos, construir productos reales y contar historias que inspiran acción
          </p>
        </FadeIn>

        <FadeIn delay={0.45} y={20} className="mt-4 flex flex-col sm:flex-row items-center gap-4">
          <ContactButton
            label="DISEÑEMOS TU SISTEMA DE IA"
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                const elem = document.getElementById('contact');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />

          <a
            href="https://linkedin.com/in/jotaochoa"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1F1F1F] border border-white/20 hover:border-[#01C9C7] text-white font-['Montserrat'] font-extrabold text-sm uppercase tracking-wider transition-all cursor-pointer hover:scale-105"
          >
            <span>CONECTAR EN LINKEDIN</span>
            <ArrowUpRight className="w-4 h-4 text-[#01C9C7]" />
          </a>
        </FadeIn>

        {/* Social Links Row in Closing Section */}
        <FadeIn delay={0.55} y={20} className="mt-4 flex items-center gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                title={social.name}
                className="p-3 rounded-full bg-[#1F1F1F] border border-white/10 text-[#D7E2EA] hover:text-[#01C9C7] hover:border-[#01C9C7] hover:bg-[#01C9C7]/10 transition-all duration-300 shadow-md cursor-pointer hover:scale-110"
              >
                <Icon />
              </a>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
};
