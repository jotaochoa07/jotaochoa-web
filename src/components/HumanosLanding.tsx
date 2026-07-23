import React, { useEffect } from 'react';
import { Sparkles, ArrowLeft, ShieldCheck, Film, FileText } from 'lucide-react';
import { HUMANOS_EPISODES } from './HumanosGallery';

export interface HumanosLandingProps {
  onBackToPortfolio?: () => void;
}

export const HumanosLanding: React.FC<HumanosLandingProps> = ({ onBackToPortfolio }) => {
  useEffect(() => {
    // Load GoHighLevel form_embed.js script
    const scriptId = 'ghl-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.ghlespanol.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-white font-['Inter'] selection:bg-[#01C9C7] selection:text-black">
      {/* Top Header Bar */}
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <button
          onClick={() => {
            if (onBackToPortfolio) onBackToPortfolio();
            else window.location.href = '/';
          }}
          className="inline-flex items-center gap-2 text-xs font-['Montserrat'] font-bold text-[#D7E2EA] hover:text-[#01C9C7] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#01C9C7]" />
          <span>VOLVER AL PORTAFOLIO DE JOTA</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-['Montserrat'] font-extrabold text-[#01C9C7]">
          <Sparkles className="w-4 h-4" />
          <span>PROYECTO EDITORIAL HUMANOS</span>
        </div>
      </header>

      {/* Hero Section - Clean Pure Media Without Boxes */}
      <section className="py-12 sm:py-16 px-5 sm:px-8 max-w-5xl mx-auto flex flex-col items-center text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#01C9C7]/10 text-[#01C9C7] border border-[#01C9C7]/30 text-xs font-['Montserrat'] font-extrabold tracking-widest uppercase mb-4 shadow-lg">
          NUEVO EPISODIO CADA SEMANA
        </span>

        {/* Requested Headline */}
        <h1 className="font-['Kanit'] font-black uppercase text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-none mb-4 max-w-4xl">
          HISTORIAS DE RESILIENCIA QUE CAMBIARON EL MUNDO
        </h1>

        {/* Requested Subheadline */}
        <p className="text-lg sm:text-2xl font-['Montserrat'] font-extrabold text-[#01C9C7] mb-4 max-w-3xl leading-snug">
          Las empresas no cambian el mundo. Las personas que las construyen sí.
        </p>

        {/* Requested Body Text */}
        <p className="text-base sm:text-lg text-[#D7E2EA]/85 font-light leading-relaxed mb-10 max-w-2xl">
          Cada semana exploramos la vida, las decisiones, los fracasos y la resiliencia de los hombres y mujeres detrás de las compañías y los inventos más influyentes de la historia.
        </p>

        {/* Pure Hero Image Without Box/Cards */}
        <div className="w-full max-w-4xl rounded-3xl overflow-hidden mb-16 shadow-[0_0_60px_rgba(1,201,199,0.25)]">
          <img
            src="/agents/humanos-landing.png"
            alt="HUMANOS Editorial Project Banner"
            className="w-full h-auto max-h-[550px] object-cover"
          />
        </div>

        {/* Newsletter Section - Pure Open Layout Without Boxes */}
        <div className="w-full max-w-4xl text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-['Montserrat'] font-bold text-[#01C9C7] uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            <span>LO QUE RECIBIRÁS AL SUSCRIBIRTE AL NEWSLETTER DE HUMANOS</span>
          </div>

          <h2 className="font-['Kanit'] font-black uppercase text-3xl sm:text-5xl text-white mb-10">
            CONTENIDO EXCLUSIVO DIRECTO A TU BANDEJA
          </h2>

          {/* 3 Value Pillars - Pure Open Typography & Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 text-center">
            <div className="flex flex-col items-center gap-2">
              <FileText className="w-8 h-8 text-[#01C9C7] mb-1" />
              <h3 className="font-bold text-base text-white font-['Montserrat']">Historias Extensas</h3>
              <p className="text-xs text-[#D7E2EA]/75 font-light leading-relaxed">
                Acceso a las entregas de profundidad periodística redactadas sin recortes.
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Film className="w-8 h-8 text-[#01C9C7] mb-1" />
              <h3 className="font-bold text-base text-white font-['Montserrat']">Behind The Scenes</h3>
              <p className="text-xs text-[#D7E2EA]/75 font-light leading-relaxed">
                Mira paso a paso cómo se investiga y produce cada capítulo del proyecto.
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-8 h-8 text-[#01C9C7] mb-1" />
              <h3 className="font-bold text-base text-white font-['Montserrat']">Contenido Privado</h3>
              <p className="text-xs text-[#D7E2EA]/75 font-light leading-relaxed">
                Archivos, audios y documentos inéditos que no se publican en redes abiertas.
              </p>
            </div>
          </div>

          {/* Wide Horizontal GoHighLevel Embedded Form Container */}
          <div className="w-full max-w-4xl mx-auto min-h-[140px] flex items-center justify-center my-4 overflow-hidden rounded-2xl">
            <iframe
              src="https://link.ghlespanol.com/widget/form/NKSGFdFvYKcOzejf7xYK"
              style={{ width: '100%', height: '160px', border: 'none', background: 'transparent' }}
              id="inline-NKSGFdFvYKcOzejf7xYK"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Suscriptor Landing Humanos"
              data-height="160"
              data-layout-iframe-id="inline-NKSGFdFvYKcOzejf7xYK"
              data-form-id="NKSGFdFvYKcOzejf7xYK"
              title="Suscriptor Landing Humanos"
            />
          </div>
        </div>
      </section>

      {/* Featured Episodes Grid */}
      <section className="py-16 border-t border-white/10 max-w-7xl mx-auto px-5 sm:px-8">
        <h2 className="font-['Kanit'] font-black uppercase text-2xl sm:text-4xl text-white mb-10 text-center">
          EPISODIOS DESTACADOS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HUMANOS_EPISODES.map((ep) => (
            <div
              key={ep.number}
              onClick={() => window.open(ep.videoUrl, '_blank')}
              className="bg-[#1F1F1F] border border-white/10 hover:border-[#01C9C7] rounded-3xl p-5 transition-all cursor-pointer group hover:scale-102"
            >
              <img
                src={ep.thumbnail}
                alt={ep.title}
                className="w-full h-[220px] object-cover rounded-2xl mb-4"
              />
              <span className="text-xs font-bold text-[#01C9C7] uppercase tracking-wider font-['Montserrat']">{ep.number} — {ep.subject}</span>
              <h3 className="font-bold text-lg text-white group-hover:text-[#01C9C7] transition-colors mt-1 mb-2">{ep.title}</h3>
              <p className="text-xs text-[#D7E2EA]/70 leading-relaxed">{ep.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
