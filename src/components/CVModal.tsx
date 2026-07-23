import React from 'react';
import { X, Download, Briefcase, GraduationCap, Award, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const LinkedinIcon = () => (
  <svg className="w-4 h-4 text-[#01C9C7] fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const OFFICIAL_CV_PDF_URL = 'https://assets.cdn.filesafe.space/KNcNHLzH7TJbnTOPh0Md/media/6a6185b3ab5cbf799a49a4c9.pdf';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#1F1F1F] border border-white/20 rounded-3xl p-6 sm:p-10 text-white shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
        {/* Close & Download PDF Buttons */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
          <div>
            <span className="text-xs font-['Montserrat'] font-extrabold text-[#01C9C7] tracking-widest uppercase">CURRÍCULUM VITAE</span>
            <h2 className="text-2xl sm:text-4xl font-['Montserrat'] font-black uppercase">Jota Ochoa</h2>
            <p className="text-sm text-[#D7E2EA]/70">AI Solutions Architect | Agentic AI Product Builder | Growth Partner</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={OFFICIAL_CV_PDF_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#01C9C7] text-black font-['Montserrat'] font-extrabold text-xs uppercase hover:bg-[#01C9C7]/80 hover:scale-105 transition-all cursor-pointer shadow-lg"
            >
              <Download className="w-4 h-4" />
              <span>DESCARGAR PDF</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-black/50 border border-white/10 mb-8 text-xs text-[#D7E2EA]">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#01C9C7]" />
            <span>Colombia (Remoto)</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#01C9C7]" />
            <a href="mailto:jotaochoa@gmail.com" className="hover:underline">jotaochoa@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#01C9C7]" />
            <span>+57 312 567 4063</span>
          </div>
          <div className="flex items-center gap-2">
            <LinkedinIcon />
            <a href="https://linkedin.com/in/jotaochoa" target="_blank" rel="noreferrer" className="hover:underline">in/jotaochoa</a>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="mb-8">
          <h3 className="text-lg font-['Montserrat'] font-bold text-[#01C9C7] uppercase mb-2">Perfil Profesional</h3>
          <p className="text-sm text-[#D7E2EA]/80 leading-relaxed">
            Durante más de 20 años he construido negocios digitales en la intersección entre periodismo, marketing, tecnología e Inteligencia Artificial. Especializado en sistemas de IA, n8n, LLMs y automatizaciones omnicanal. Combino pensamiento estratégico con capacidad técnica para transformar capacidades agénticas en productos reales y rentables.
          </p>
        </div>

        {/* Career Timeline */}
        <div className="mb-8">
          <h3 className="text-lg font-['Montserrat'] font-bold text-[#01C9C7] uppercase mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            <span>Experiencia Profesional Destacada</span>
          </h3>

          <div className="space-y-6 border-l-2 border-[#01C9C7]/30 pl-4">
            <div>
              <div className="flex justify-between items-baseline">
                <h4 className="font-bold text-white text-base">AI Solutions Architect & Growth Partner — Jota Growth Partner / J Lab</h4>
                <span className="text-xs text-[#01C9C7]">Ene 2023 - Presente</span>
              </div>
              <p className="text-xs text-[#D7E2EA]/70 mt-1">
                Estrategias de Growth Hacking, automatización de marketing y prompts multimodales. Arquitectura de productos nativos en IA y sistemas multiagente (OpenAI, Claude, Gemini, n8n, GoHighLevel). Creador de Smart Hunter, Conserje IA, Jota Ca$h, Radar SmartHunter y Proyecto HUMANOS.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h4 className="font-bold text-white text-base">Coordinador de Experiencia Digital — Fundación Área Andina</h4>
                <span className="text-xs text-[#D7E2EA]/60">Oct 2021 - Jul 2023</span>
              </div>
              <p className="text-xs text-[#D7E2EA]/70 mt-1">
                Lideré iniciativas de experiencia de usuario (UX), adquisición digital, analítica y optimización de conversión omnicanal.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h4 className="font-bold text-white text-base">CEO & Cofundador — Amazonas Organic</h4>
                <span className="text-xs text-[#D7E2EA]/60">Jun 2017 - Jun 2021</span>
              </div>
              <p className="text-xs text-[#D7E2EA]/70 mt-1">
                Escalé una empresa internacional de e-commerce sostenible. Desarrollo de producto, branding y operaciones de exportación.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <h4 className="font-bold text-white text-base">Editor Senior — Diario La República</h4>
                <span className="text-xs text-[#D7E2EA]/60">Ene 2012 - Abr 2013</span>
              </div>
              <p className="text-xs text-[#D7E2EA]/70 mt-1">
                Lideré la planeación editorial y coordiné un equipo de más de 40 periodistas. Storytelling y estrategia de contenido.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Certs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-['Montserrat'] font-bold text-[#01C9C7] uppercase mb-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              <span>Educación</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#D7E2EA]/80">
              <li><strong>Máster en Comercio Electrónico</strong> — HEC Montréal (Canadá)</li>
              <li><strong>Máster en Periodismo</strong> — Universidad del Rosario</li>
              <li><strong>Comunicación Social y Periodismo</strong> — UJTL</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-['Montserrat'] font-bold text-[#01C9C7] uppercase mb-3 flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>Certificaciones & Idiomas</span>
            </h3>
            <ul className="space-y-2 text-xs text-[#D7E2EA]/80">
              <li><strong>Claude AI Builder Challenge</strong> — Lab10</li>
              <li><strong>Idiomas:</strong> Español (Nativo), Inglés (Profesional), Francés (B2)</li>
              <li><strong>Stack:</strong> n8n, Python, GoHighLevel, LLMs, REST APIs, Supabase</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
