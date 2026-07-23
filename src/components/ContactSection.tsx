import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const LinkedinIcon = () => (
  <svg className="w-5 h-5 text-[#01C9C7] fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="relative w-full bg-[#000000] text-white py-24 px-5 sm:px-8 md:px-10 border-t border-white/10 z-30">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40} className="w-full text-center mb-16">
          <p className="text-xs sm:text-sm font-['Montserrat'] font-extrabold tracking-widest text-[#01C9C7] uppercase mb-3">
            CONECTEMOS & CONSTRUYAMOS
          </p>
          <h2 className="hero-heading font-['Kanit'] font-black uppercase leading-none tracking-tight text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[85px]">
            HABLEMOS
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-['Montserrat'] font-extrabold text-2xl text-white">
              ¿Listo para transformar tu producto u operación con IA?
            </h3>
            <p className="text-sm text-[#D7E2EA]/80 leading-relaxed font-light">
              Escríbeme para diseñar la arquitectura agéntica de tu empresa, automatizar tus flujos de trabajo o colaborar en nuevos productos.
            </p>

            <div className="space-y-4 mt-2">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1F1F1F] border border-white/10">
                <div className="p-3 rounded-xl bg-[#01C9C7]/10 text-[#01C9C7]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#D7E2EA]/50 uppercase tracking-widest block">Ubicación</span>
                  <span className="font-bold text-sm text-white">Colombia (Remoto)</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1F1F1F] border border-white/10">
                <div className="p-3 rounded-xl bg-[#01C9C7]/10 text-[#01C9C7]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#D7E2EA]/50 uppercase tracking-widest block">Email Directo</span>
                  <a href="mailto:jotaochoa@gmail.com" className="font-bold text-sm text-white hover:text-[#01C9C7] transition-colors">
                    jotaochoa@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1F1F1F] border border-white/10">
                <div className="p-3 rounded-xl bg-[#01C9C7]/10 text-[#01C9C7]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#D7E2EA]/50 uppercase tracking-widest block">WhatsApp / Teléfono</span>
                  <a href="https://wa.me/573125674063" target="_blank" rel="noreferrer" className="font-bold text-sm text-white hover:text-[#01C9C7] transition-colors">
                    +57 312 567 4063
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1F1F1F] border border-white/10">
                <div className="p-3 rounded-xl bg-[#01C9C7]/10 text-[#01C9C7]">
                  <LinkedinIcon />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#D7E2EA]/50 uppercase tracking-widest block">LinkedIn</span>
                  <a href="https://linkedin.com/in/jotaochoa" target="_blank" rel="noreferrer" className="font-bold text-sm text-white hover:text-[#01C9C7] transition-colors">
                    in/jotaochoa
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: GoHighLevel Ready Contact Form */}
          <div className="lg:col-span-7 bg-[#1F1F1F] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-['Montserrat'] font-bold text-[#D7E2EA] uppercase mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-[#01C9C7]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-['Montserrat'] font-bold text-[#D7E2EA] uppercase mb-2">Correo Electrónico</label>
                    <input
                      type="email"
                      required
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-[#01C9C7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-['Montserrat'] font-bold text-[#D7E2EA] uppercase mb-2">Empresa / Proyecto</label>
                    <input
                      type="text"
                      placeholder="Nombre de tu marca"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-[#01C9C7]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-['Montserrat'] font-bold text-[#D7E2EA] uppercase mb-2">Detalles de tu Solicitud</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="¿Qué sistema, agente o automatización necesitas construir?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-[#01C9C7] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#01C9C7] text-black font-['Montserrat'] font-extrabold text-sm uppercase tracking-wider hover:bg-[#01C9C7]/90 transition-all cursor-pointer shadow-xl hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  <span>ENVIAR MENSAJE DIRECTO</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center flex flex-col items-center gap-4">
                <div className="p-4 rounded-full bg-[#01C9C7]/20 text-[#01C9C7]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-['Montserrat'] font-extrabold text-2xl text-white">¡Mensaje Recibido!</h4>
                <p className="text-sm text-[#D7E2EA]/80 max-w-md">
                  Gracias por escribir. Te responderé en menos de 24 horas para agendar nuestra llamada estratégica.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D7E2EA]/50 font-['Montserrat']">
          <p>© {new Date().getFullYear()} Jota Ochoa — AI Builder. Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0">Diseñado e implementado con arquitectura Agéntica & React.</p>
        </div>
      </div>
    </footer>
  );
};
