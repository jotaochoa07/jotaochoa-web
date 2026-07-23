import React, { useEffect, useRef } from 'react';
import { X, Sparkles } from 'lucide-react';

interface VoiceAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VoiceAgentModal: React.FC<VoiceAgentModalProps> = ({ isOpen, onClose }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !mountRef.current) return;

    // Clear container to prevent duplicate script tags
    mountRef.current.innerHTML = '';

    // Create and append the exact GHL widget script into the modal mount container
    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '6a6151dbcbb3de01dd68b796');
    script.async = true;

    mountRef.current.appendChild(script);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
      <div className="relative w-full max-w-lg bg-[#000000]/95 border border-[#01C9C7]/40 rounded-[36px] p-6 sm:p-8 text-white shadow-[0_0_80px_rgba(1,201,199,0.3)] flex flex-col items-center text-center overflow-hidden">
        {/* Ambient Neon Glow Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#01C9C7]/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-20 hover:scale-110"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F1F1F] border border-[#01C9C7]/40 text-[#01C9C7] text-xs font-['Montserrat'] font-extrabold tracking-widest uppercase mb-3 shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-[#01C9C7] animate-ping" />
          <span>JOTA AI — EN VIVO</span>
        </div>

        {/* Title */}
        <h3 className="font-['Kanit'] font-black uppercase text-2xl sm:text-3xl text-white tracking-tight mb-1">
          AGENTE DE VOZ
        </h3>
        <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-['Inter'] font-light leading-relaxed mb-4 max-w-sm">
          Mi gemelo digital impulsado por IA agéntica. Haz clic en la cápsula para iniciar la llamada de voz.
        </p>

        {/* Dedicated Mount Point for GHL Widget Script */}
        <div className="relative w-full min-h-[300px] flex flex-col items-center justify-center my-2 p-4 rounded-3xl bg-[#1F1F1F]/60 border border-white/10 backdrop-blur-md overflow-hidden">
          <div ref={mountRef} className="z-10 flex items-center justify-center w-full min-h-[260px]" />
        </div>

        {/* Footer Tagline */}
        <div className="mt-4 pt-3 border-t border-white/10 w-full flex items-center justify-center gap-2 text-xs text-[#D7E2EA]/60 font-['Montserrat'] font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#01C9C7]" />
          <span>Experiencia Agéntica Interactiva — Jota Ochoa</span>
        </div>
      </div>
    </div>
  );
};
