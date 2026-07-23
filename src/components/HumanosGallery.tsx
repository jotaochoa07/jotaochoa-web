import React from 'react';
import { FadeIn } from './FadeIn';
import { Play, Sparkles } from 'lucide-react';

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export interface Episode {
  number: string;
  title: string;
  subject: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
}

export const HUMANOS_EPISODES: Episode[] = [
  {
    number: 'EP 01',
    title: 'Jan Koum',
    subject: 'El creador de WhatsApp y la resiliencia radical',
    description: 'De recibir cupones de comida en Ucrania a rechazar la publicidad masiva y construir la plataforma de mensajería más grande del mundo.',
    videoUrl: 'https://www.youtube.com/shorts/ksGK8pmgIvI',
    thumbnail: '/humanos/jan-koum.png',
  },
  {
    number: 'EP 02',
    title: 'Hedy Lamarr',
    subject: 'La actriz genio detrás del Wi-Fi y Bluetooth',
    description: 'Estrella de Hollywood de día e inventora de comunicaciones por salto de frecuencia de noche. La mujer que cambió la tecnología moderna.',
    videoUrl: 'https://www.youtube.com/shorts/ewDlJO-aFfQ',
    thumbnail: '/humanos/hedy-lamarr.png',
  },
  {
    number: 'EP 03',
    title: 'James Dyson',
    subject: '5.127 prototipos fallidos antes del éxito',
    description: 'Quince años de obsesión y quiebra financiera antes de revolucionar la ingeniería industrial y crear una marca billonaria.',
    videoUrl: 'https://www.youtube.com/shorts/7MAvFSAI8mY',
    thumbnail: '/humanos/james-dyson.png',
  },
];

interface HumanosGalleryProps {
  onNavigate?: (route: string) => void;
}

export const HumanosGallery: React.FC<HumanosGalleryProps> = () => {
  return (
    <section className="bg-[#000000] py-20 border-y border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#01C9C7]/10 border border-[#01C9C7]/30 text-[#01C9C7] text-xs font-['Montserrat'] font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROYECTO EDITORIAL</span>
            </div>
            <h2 className="font-['Kanit'] font-black uppercase text-3xl sm:text-5xl text-white tracking-tight">
              HUMANOS — EPISODIOS
            </h2>
          </div>

          <a
            href="https://www.youtube.com/@JotaGrowth"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#FF0000] hover:bg-[#CC0000] text-white font-['Montserrat'] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg hover:scale-105"
          >
            <YoutubeIcon />
            <span>SUSCRIBIRSE EN YOUTUBE @JotaGrowth</span>
          </a>
        </div>

        {/* Dynamic Episodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {HUMANOS_EPISODES.map((ep, idx) => (
            <FadeIn key={ep.number} delay={idx * 0.15} y={30}>
              <div
                onClick={() => window.open(ep.videoUrl, '_blank')}
                className="group bg-[#1F1F1F] border border-white/10 hover:border-[#01C9C7] rounded-3xl p-4 overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between h-full shadow-2xl"
              >
                <div>
                  <div className="relative h-[260px] w-full rounded-2xl overflow-hidden mb-4 bg-black border border-white/10">
                    <img
                      src={ep.thumbnail}
                      alt={ep.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    
                    <span className="absolute top-3 left-3 bg-[#000000]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-['Montserrat'] font-extrabold text-[#01C9C7] border border-white/10">
                      {ep.number}
                    </span>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-4 rounded-full bg-[#01C9C7] text-black group-hover:scale-110 transition-transform shadow-xl">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-['Montserrat'] font-bold text-[#01C9C7] uppercase tracking-widest block mb-1">
                    {ep.subject}
                  </span>
                  <h3 className="font-['Montserrat'] font-extrabold text-xl text-white group-hover:text-[#01C9C7] transition-colors leading-snug mb-2">
                    {ep.title}
                  </h3>
                  <p className="text-xs text-[#D7E2EA]/70 leading-relaxed font-light">
                    {ep.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-['Montserrat'] font-semibold text-white group-hover:text-[#01C9C7] transition-colors">
                  <span>VER SHORTS EN YOUTUBE</span>
                  <Play className="w-3.5 h-3.5 fill-current" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
