import React from 'react';
import { FadeIn } from './FadeIn';
import { Briefcase, GraduationCap, Award, FileText, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CareerSectionProps {
  onOpenCV?: () => void;
}

export function getExperiences(language: 'es' | 'en') {
  const isEn = language === 'en';
  return [
    {
      num: '01',
      period: isEn ? 'Jan 2023 — Present' : 'Ene 2023 — Presente',
      role: 'AI Solutions Architect & Growth Partner',
      company: 'Jota Growth Partner / J Lab',
      highlights: isEn
        ? [
            'Growth Hacking strategies, marketing automation, and custom multimodal prompt engineering.',
            'Native AI product design and multi-agent system architecture (OpenAI, Claude, Gemini, n8n, GoHighLevel).',
            'Creator of Smart Hunter, Concierge AI, Jota Ca$h, Radar SmartHunter, and Project HUMANS.',
          ]
        : [
            'Estrategias de Growth Hacking, automatización de marketing y diseño de prompts multimodales a medida.',
            'Diseño de productos nativos en IA y arquitectura de sistemas multiagente (OpenAI, Claude, Gemini, n8n, GoHighLevel).',
            'Creador de Smart Hunter, Conserje IA, Jota Ca$h, Radar SmartHunter y Proyecto HUMANOS.',
          ],
    },
    {
      num: '02',
      period: isEn ? 'Oct 2021 — Jul 2023' : 'Oct 2021 — Jul 2023',
      role: isEn ? 'Digital Experience Coordinator' : 'Coordinador de Experiencia Digital',
      company: 'Fundación Universitaria del Área Andina',
      highlights: isEn
        ? [
            'Led user experience (UX) optimization, digital acquisition, analytics, and omnichannel conversion.',
          ]
        : [
            'Lideré la optimización de experiencia de usuario (UX), adquisición digital, analítica y conversión omnicanal.',
          ],
    },
    {
      num: '03',
      period: isEn ? 'Jun 2017 — Jun 2021' : 'Jun 2017 — Jun 2021',
      role: isEn ? 'CEO & Co-Founder' : 'CEO & Cofundador',
      company: 'Amazonas Organic',
      highlights: isEn
        ? [
            'Founded and scaled an international sustainable e-commerce brand. Export logistics and brand building.',
          ]
        : [
            'Fundé y escalé una empresa internacional de e-commerce sostenible. Logística de exportación y branding.',
          ],
    },
    {
      num: '04',
      period: isEn ? 'Jan 2012 — Apr 2013' : 'Ene 2012 — Abr 2013',
      role: isEn ? 'Senior Editor' : 'Editor Senior',
      company: isEn ? 'La República Financial Newspaper' : 'Diario La República',
      highlights: isEn
        ? [
            'Directed editorial strategy and managed a team of 40+ journalists. Content operations and storytelling.',
          ]
        : [
            'Dirigí la estrategia editorial y lideré un equipo de más de 40 periodistas. Operación de contenidos y storytelling.',
          ],
    },
  ];
}

export function getEducation(language: 'es' | 'en') {
  const isEn = language === 'en';
  return [
    {
      num: '01',
      degree: isEn ? 'Master in E-Commerce' : 'Máster en Comercio Electrónico',
      institution: isEn ? 'HEC Montréal — Canada' : 'HEC Montréal — Canadá',
      tag: isEn ? 'International Master' : 'Posgrado Internacional',
    },
    {
      num: '02',
      degree: isEn ? 'Master in Journalism' : 'Máster en Periodismo',
      institution: isEn ? 'Rosario University — Colombia' : 'Universidad del Rosario — Colombia',
      tag: isEn ? 'Postgraduate Degree' : 'Posgrado',
    },
    {
      num: '03',
      degree: isEn ? 'B.A. in Journalism & Mass Communication' : 'Profesional en Comunicación Social y Periodismo',
      institution: 'Universidad Jorge Tadeo Lozano',
      tag: isEn ? 'Bachelor Degree' : 'Pregrado',
    },
  ];
}

export const CareerSection: React.FC<CareerSectionProps> = ({ onOpenCV }) => {
  const { language, t } = useLanguage();
  const experiences = getExperiences(language);
  const education = getEducation(language);

  return (
    <section id="career" className="relative w-full bg-[#1F1F1F] text-white rounded-t-[40px] sm:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-24 border-t border-white/10 z-35">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Title */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm font-['Montserrat'] font-extrabold tracking-widest text-[#01C9C7] uppercase mb-3">
            {t.career.badge}
          </p>
          <h2 className="font-['Kanit'] font-black uppercase leading-none tracking-tight text-[9vw] sm:text-[7vw] md:text-[5.5vw] lg:text-[80px] text-white">
            {t.career.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
          {/* Left Column: Numbered Experience Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3 text-lg font-['Montserrat'] font-bold text-[#01C9C7] uppercase border-b border-white/10 pb-3 mb-2">
              <Briefcase className="w-5 h-5 text-[#01C9C7]" />
              <span>{t.career.expTitle}</span>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <FadeIn key={exp.role} delay={idx * 0.12} y={20}>
                  <div className="p-6 rounded-2xl bg-[#000000] border border-white/10 hover:border-[#01C9C7] transition-all flex items-start gap-5 group">
                    <span className="font-['Kanit'] font-black text-3xl sm:text-4xl text-[#01C9C7] group-hover:scale-110 transition-transform">
                      {exp.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h3 className="font-['Montserrat'] font-extrabold text-lg text-white group-hover:text-[#01C9C7] transition-colors">{exp.role}</h3>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#1F1F1F] text-[#D7E2EA]/80 border border-white/10 inline-block w-fit">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#01C9C7] mb-2 flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                      </p>
                      <ul className="space-y-1 text-xs text-[#D7E2EA]/70 font-light list-disc list-inside">
                        {exp.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right Column: Numbered Education & Certification */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3 text-lg font-['Montserrat'] font-bold text-[#01C9C7] uppercase border-b border-white/10 pb-3 mb-2">
              <GraduationCap className="w-5 h-5 text-[#01C9C7]" />
              <span>{t.career.eduTitle}</span>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <FadeIn key={edu.degree} delay={idx * 0.12} y={20}>
                  <div className="p-5 rounded-2xl bg-[#000000] border border-white/10 flex items-start gap-4">
                    <span className="font-['Kanit'] font-black text-2xl text-[#01C9C7]">{edu.num}</span>
                    <div>
                      <span className="text-[10px] font-bold text-[#01C9C7] uppercase tracking-wider block">{edu.tag}</span>
                      <h4 className="font-['Montserrat'] font-bold text-sm text-white">{edu.degree}</h4>
                      <p className="text-xs text-[#D7E2EA]/70">{edu.institution}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}

              <FadeIn delay={0.4} y={20}>
                <div className="p-5 rounded-2xl bg-[#000000] border border-[#01C9C7]/40 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#01C9C7]/10 text-[#01C9C7]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-['Montserrat'] font-bold text-sm text-white">Claude AI Builder Challenge</h4>
                    <p className="text-xs text-[#D7E2EA]/70">
                      {language === 'en' ? 'Lab10 — Agentic Architecture Certification' : 'Lab10 — Certificación de Arquitectura de Agentes'}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* CV Download CTA */}
            <FadeIn delay={0.5} y={20} className="mt-4">
              <button
                onClick={onOpenCV}
                className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#01C9C7] text-black font-['Montserrat'] font-extrabold text-sm uppercase tracking-wider hover:bg-[#01C9C7]/90 transition-all cursor-pointer shadow-xl"
              >
                <FileText className="w-5 h-5" />
                <span>{t.about.cvBtn}</span>
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
