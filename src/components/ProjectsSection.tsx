import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Play, ExternalLink, Bot, Layers, CheckCircle2, HelpCircle, Lightbulb } from 'lucide-react';

export interface AIProject {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  problem: string;
  motivation: string;
  differentiator: string;
  tags: string[];
  agentSuite?: { name: string; role: string }[];
  videoUrl?: string;
  demoUrl?: string;
  inDevelopment?: boolean;
  imgLeft1: string;
  imgLeft2: string;
  imgRight: string;
  fallbackLeft1: string;
  fallbackLeft2: string;
  fallbackRight: string;
}

function getYouTubeEmbedUrl(url?: string): string | null {
  if (!url) return null;
  let videoId = '';
  if (url.includes('shorts/')) {
    videoId = url.split('shorts/')[1]?.split('?')[0];
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0];
  } else if (url.includes('v=')) {
    videoId = url.split('v=')[1]?.split('&')[0];
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0` : null;
}

const AI_PROJECTS: AIProject[] = [
  {
    id: 'agent-01',
    number: '01',
    category: 'PROSPECCIÓN & SALES TECH',
    title: 'Smart Hunter',
    description: 'Plataforma de prospección comercial impulsada por Inteligencia Artificial. Descubrimiento automatizado de prospectos, enriquecimiento de datos de contacto y sincronización inteligente con CRM',
    problem: 'Los equipos de ventas pierden horas buscando prospectos manualmente en Google y directorios',
    motivation: 'Diseñé Smart Hunter para automatizar la prospección geolocalizada y enriquecer contactos en segundos',
    differentiator: 'Extracción agéntica directa con validación de datos en tiempo real y sincronización omnicanal',
    tags: ['Google Maps API', 'n8n', 'Lead Scraping', 'CRM Sync', 'OpenAI'],
    demoUrl: 'https://www.smarthunter.co/',
    imgLeft1: '/agents/smarthunter-1.png',
    imgLeft2: '/agents/smarthunter-2.png',
    imgRight: '/agents/smarthunter-main.png',
    fallbackLeft1: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    fallbackLeft2: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    fallbackRight: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'agent-02',
    number: '02',
    category: 'SISTEMA DOCUMENTAL MULTI-AGENTE',
    title: 'HUMANOS — Archivo & Historias',
    description: 'No documentamos empresas. Documentamos a los humanos que las hicieron posibles. Ocho agentes de IA trabajan como una mesa editorial para investigar, contrastar y producir historias que revelan cómo nacen las ideas que cambian el mundo',
    problem: 'Producir periodismo de profundidad e historias de calidad exige días de investigación dispersa',
    motivation: 'Orquesté una mesa editorial agéntica inspirada en los mejores autores de la historia',
    differentiator: '8 agentes autónomos con roles hiperespecíficos desde Borges hasta Gabo y Veritas',
    tags: ['Multi-Agent System', 'Claude', 'n8n', 'Storytelling', 'Audio AI'],
    agentSuite: [
      { name: 'Borges', role: 'Investigación & Arquitectura narrativa' },
      { name: 'Gabo', role: 'Escritura Creativa y Copies' },
      { name: 'Veritas', role: 'Fact-checking' },
      { name: 'Moore', role: 'Storyboard' },
      { name: 'Curie', role: 'Bibliotecaria de assets' },
      { name: 'Leonardo', role: 'Director de Arte' },
      { name: 'Mark', role: 'Data Analyser & Publisher' },
      { name: 'Talese', role: 'Mentor & Editor Jefe' },
    ],
    videoUrl: 'https://youtube.com/shorts/7MAvFSAI8mY?si=Xujebnp-cEmxkxDW',
    demoUrl: 'humanos',
    imgLeft1: '/agents/humanos_1.png',
    imgLeft2: '/humanos/jan-koum.png',
    imgRight: '/humanos/james-dyson.png',
    fallbackLeft1: '/humanos/jan-koum.png',
    fallbackLeft2: '/humanos/hedy-lamarr.png',
    fallbackRight: '/humanos/james-dyson.png',
  },
  {
    id: 'agent-03',
    number: '03',
    category: 'HOSPITALIDAD & CONSERJERÍA IA',
    title: 'Conserje IA',
    description: 'Asistente conversacional omnicanal para hoteles y negocios de hospitalidad. Integración directa con WhatsApp, automatización CRM y atención 24/7 en múltiples idiomas',
    problem: 'Hoteles pierden reservas directas fuera de horario por falta de respuesta inmediata',
    motivation: 'Construí un conserje digital multilingüe enfocado en conversión inmediata y servicio 5 estrellas',
    differentiator: 'Manejo contextual de itinerarios, reservas y soporte omnicanal directo a WhatsApp',
    tags: ['WhatsApp Business API', 'GoHighLevel', 'Conversational AI', 'CRM'],
    videoUrl: 'https://youtu.be/6TJfa4I-7sc?si=kaLFx2xt_ZI8kqYs',
    demoUrl: 'https://hotels.smarthunter.co/conserje-ia-v2',
    imgLeft1: '/agents/conserje-1.png',
    imgLeft2: '/agents/conserje-2.png',
    imgRight: '/agents/conserje-1.png',
    fallbackLeft1: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    fallbackLeft2: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
    fallbackRight: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'agent-04',
    number: '04',
    category: 'AGENTE FINANCIERO',
    title: 'Jota Ca$h',
    description: 'Asistente financiero personal conversacional. Diseñado para guiar la toma de decisiones presupuestales, control de gastos y construcción de patrimonio sostenible',
    problem: 'La mayoría de personas no llevan control de gastos por la fricción de apps complejas',
    motivation: 'Creé un agente de voz y texto con lenguaje natural para auditar hábitos de consumo en segundos',
    differentiator: 'Interacción conversacional fluida sin planillas complicadas y con alertas inteligentes',
    tags: ['Financial AI', 'Voice Assistant', 'LLM Prompting', 'Personal Wealth'],
    videoUrl: 'https://youtu.be/AXewxFyA1Wg?si=7AHZavb3eeffIk7m',
    demoUrl: 'https://app.agentejota.com/cash-test',
    imgLeft1: '/agents/cash-1.png',
    imgLeft2: '/agents/cash-2.png',
    imgRight: '/agents/cash-3.png',
    fallbackLeft1: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop',
    fallbackLeft2: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
    fallbackRight: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'agent-05',
    number: '05',
    category: 'REPUTACIÓN ONLINE & REVIEWS',
    title: 'Radar SmartHunter',
    description: 'Monitoreo de Google Reviews, análisis de sentimiento de clientes y generación automática de respuestas con el tono de marca en tiempo real',
    problem: 'Reseñas negativas sin responder a tiempo destruyen la conversión de negocios locales',
    motivation: 'Automatizar la supervisión de reputación para proteger marcas de forma continua',
    differentiator: 'Generación de respuestas con tono personalizado y análisis de sentimiento automatizado',
    tags: ['Sentiment Analysis', 'Google Reviews API', 'Reputation AI'],
    demoUrl: 'https://radar.smarthunter.co/',
    imgLeft1: '/agents/radar-1.png',
    imgLeft2: '/agents/radar-2.png',
    imgRight: '/agents/radar-main.png',
    fallbackLeft1: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop',
    fallbackLeft2: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop',
    fallbackRight: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'agent-06',
    number: '06',
    category: 'PROPTECH & INMOBILIARIO',
    title: 'Real Estate AI',
    description: 'Asistente conversacional inmobiliario para captura y calificación automática de compradores, agendamiento directo de visitas y recorridos virtuales',
    problem: 'Compradores de propiedad raíz exigen atención inmediata fuera de horario de oficina',
    motivation: 'Construir un calificador inmobiliario capaz de perfilar presupuesto e intención de compra',
    differentiator: 'Filtro automático de leads y agendamiento sincronizado directamente al calendario',
    tags: ['PropTech', 'Lead Qualification', 'WhatsApp API', 'Real Estate'],
    demoUrl: 'https://invest.smarthunter.co/real-estate--ia-services-page',
    imgLeft1: '/agents/realestate-1.png',
    imgLeft2: '/agents/realestate-1.png',
    imgRight: '/agents/realestate-main.png',
    fallbackLeft1: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
    fallbackLeft2: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
    fallbackRight: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'agent-07',
    number: '07',
    category: 'GIMNASIO DE CREATIVIDAD CON IA',
    title: 'Creativity Lab / Creator Lab',
    description: 'Gimnasio interactivo donde un Mentor IA entrena tus habilidades en artes, escritura y storytelling. Funciona como un portafolio vivo con loops de aprendizaje agéntico que evolucionan a medida que lo usas',
    problem: 'Estancamiento en la creación de contenido sin retroalimentación continua ni evolución de estilo',
    motivation: 'Crear un Mentor IA vivo que evalúa, retroalimenta y optimiza el proceso creativo del usuario',
    differentiator: 'Loops de aprendizaje agéntico personalizados que convierten la práctica en tu portafolio vivo',
    tags: ['Claude Code', 'Creativity Gym', 'Storytelling AI', 'In Development'],
    inDevelopment: true,
    demoUrl: '#',
    imgLeft1: '/agents/creativity-main.png',
    imgLeft2: '/agents/creativity-main.png',
    imgRight: '/agents/creativity-main.png',
    fallbackLeft1: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
    fallbackLeft2: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    fallbackRight: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'agent-08',
    number: '08',
    category: 'DISEÑO ESTRATÉGICO AGENT-FIRST',
    title: 'Redesign Client Platforms',
    description: 'Rediseño integral de plataformas web y marcas como Invisa y Amarte bajo el principio Agent-First: interfaces ultrarrápidas, diseño dark premium y agentes conversacionales nativos',
    problem: 'Sitios web tradicionales estáticos con baja conversión y sin integración agéntica',
    motivation: 'Demostrar que una web moderna debe ser una experiencia viva, agéntica y conversacional',
    differentiator: 'Arquitectura nativa en IA, estética oscura estilo Linear/Stripe e integración directa de chatbots',
    tags: ['Agent-First UI', 'React', 'Tailwind', 'Brand Strategy', 'Invisa & Amarte'],
    demoUrl: '#',
    imgLeft1: '/agents/redesign-1.png',
    imgLeft2: '/agents/redesign-2.png',
    imgRight: '/agents/redesign-main.png',
    fallbackLeft1: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
    fallbackLeft2: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    fallbackRight: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
  },
];

interface ProjectsSectionProps {
  onNavigate?: (route: string) => void;
  onOpenVideo?: (url: string, title: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onNavigate, onOpenVideo }) => {
  const [activeAgentId, setActiveAgentId] = useState<string>('agent-01');

  useEffect(() => {
    const handleScrollSync = () => {
      const scrollPosition = window.scrollY + 250;
      for (const proj of AI_PROJECTS) {
        const elem = document.getElementById(proj.id);
        if (elem) {
          const top = elem.getBoundingClientRect().top + window.pageYOffset;
          const height = elem.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveAgentId(proj.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSync, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSync);
  }, []);

  const scrollToAgent = (id: string) => {
    setActiveAgentId(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="projects" className="relative bg-[#000000] text-white pt-24 pb-64 rounded-t-[40px] sm:rounded-t-[60px] -mt-10 sm:-mt-12 z-30">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        <FadeIn delay={0} y={40} className="w-full text-center mb-10">
          <p className="text-xs sm:text-sm font-['Montserrat'] font-extrabold tracking-widest text-[#01C9C7] uppercase mb-3">
            PROYECTOS Y SOLUCIONES IA
          </p>
          <h2 className="hero-heading font-['Kanit'] font-black uppercase leading-none tracking-tight text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[90px]">
            MI LAB
          </h2>
        </FadeIn>

        {/* Synchronized Quick Number Menu */}
        <div className="sticky top-16 md:top-20 z-40 bg-[#000000]/95 backdrop-blur-md py-3 px-4 rounded-2xl border border-white/10 mb-20 shadow-2xl overflow-x-auto flex items-center justify-between gap-2 max-w-full no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs font-['Montserrat'] font-bold text-[#01C9C7] mr-2 flex-shrink-0">
            <Layers className="w-4 h-4" />
            <span className="hidden sm:inline">AGENTES:</span>
          </div>

          <div className="flex items-center gap-2 flex-1 overflow-x-auto no-scrollbar">
            {AI_PROJECTS.map((proj) => {
              const isActive = activeAgentId === proj.id;
              return (
                <button
                  key={proj.id}
                  onClick={() => scrollToAgent(proj.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-['Montserrat'] font-bold text-xs transition-all cursor-pointer flex-shrink-0 ${
                    isActive
                      ? 'bg-[#01C9C7] text-black shadow-[0_0_20px_rgba(1,201,199,0.6)] scale-105 border border-[#01C9C7]'
                      : 'bg-[#1F1F1F] text-[#D7E2EA]/80 hover:text-white hover:border-[#01C9C7]/50 border border-white/10'
                  }`}
                >
                  <span className="font-['Kanit'] font-black">{proj.number}</span>
                  <span className="hidden sm:inline">{proj.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stacking Cards Container with Generous Scroll Spacing */}
        <div className="flex flex-col gap-24 md:gap-56">
          {AI_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={AI_PROJECTS.length}
              isActive={activeAgentId === project.id}
              onNavigate={onNavigate}
              onOpenVideo={onOpenVideo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: AIProject;
  index: number;
  total: number;
  isActive: boolean;
  onNavigate?: (route: string) => void;
  onOpenVideo?: (url: string, title: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, total, isActive, onNavigate, onOpenVideo }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - 1 - index) * 0.012]);
  const embedUrl = getYouTubeEmbedUrl(project.videoUrl);

  return (
    <motion.div
      id={project.id}
      ref={containerRef}
      style={{ scale }}
      className={`relative md:sticky md:top-28 w-full bg-[#000000] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] p-6 sm:p-10 md:p-12 shadow-2xl overflow-hidden min-h-[580px] mb-12 md:mb-[65vh] transition-all duration-500 border-2 scroll-mt-36 ${
        isActive
          ? 'border-[#01C9C7] shadow-[0_0_35px_rgba(1,201,199,0.35)]'
          : 'border-white/20 hover:border-[#01C9C7]/60'
      }`}
    >
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <span className="font-['Kanit'] font-black text-4xl sm:text-6xl text-[#01C9C7]">
            {project.number}
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-['Montserrat'] font-bold text-[#D7E2EA]/60 tracking-widest uppercase">
                {project.category}
              </span>
              {project.inDevelopment && (
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40 uppercase">
                  EN DESARROLLO
                </span>
              )}
            </div>
            <h3 className="font-['Montserrat'] font-extrabold text-2xl sm:text-4xl text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {project.videoUrl && (
            <button
              onClick={() => onOpenVideo && onOpenVideo(project.videoUrl!, project.title)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#01C9C7]/10 hover:bg-[#01C9C7] text-[#01C9C7] hover:text-black font-['Montserrat'] font-bold text-xs uppercase tracking-wider transition-all border border-[#01C9C7]/40 cursor-pointer shadow-lg hover:scale-105"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>VER DEMO EN VIDEO</span>
            </button>
          )}

          {project.demoUrl && project.demoUrl !== '#' && (
            <button
              onClick={() => {
                if (project.demoUrl === 'humanos' && onNavigate) {
                  onNavigate('humanos');
                } else {
                  window.open(project.demoUrl, '_blank');
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 hover:border-[#01C9C7] hover:text-[#01C9C7] text-white font-['Montserrat'] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer hover:scale-105"
            >
              <span>IR A PROYECTO</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      <p className="text-sm sm:text-base text-[#D7E2EA]/90 font-light mb-6 max-w-4xl leading-relaxed">
        {project.description}
      </p>

      {/* Narrative Section: Problem, Motivation & Differentiator */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 sm:p-5 rounded-2xl bg-[#1F1F1F]/60 border border-white/10 text-xs">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 font-bold text-[#F59E0B] font-['Montserrat'] uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Problema que resuelve</span>
          </div>
          <p className="text-[#D7E2EA]/80 font-light leading-relaxed">{project.problem}</p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 font-bold text-[#01C9C7] font-['Montserrat'] uppercase">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Por qué lo construí</span>
          </div>
          <p className="text-[#D7E2EA]/80 font-light leading-relaxed">{project.motivation}</p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 font-bold text-emerald-400 font-['Montserrat'] uppercase">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Qué lo hace diferente</span>
          </div>
          <p className="text-[#D7E2EA]/80 font-light leading-relaxed">{project.differentiator}</p>
        </div>
      </div>

      {/* HUMANOS Special Agent Suite Badge Grid */}
      {project.agentSuite && (
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[#1F1F1F]/80 border border-[#01C9C7]/30">
          <div className="flex items-center gap-2 text-xs font-['Montserrat'] font-bold text-[#01C9C7] uppercase tracking-wider mb-3">
            <Bot className="w-4 h-4 text-[#01C9C7]" />
            <span>AGENCIA DE 8 AGENTES ESPECIALIZADOS QUE INTERVIENEN:</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
            {project.agentSuite.map((ag) => (
              <div key={ag.name} className="p-2.5 rounded-xl bg-black/70 border border-white/10 flex flex-col">
                <span className="font-bold text-[#01C9C7] font-['Montserrat']">{ag.name}</span>
                <span className="text-[10px] text-[#D7E2EA]/70">{ag.role}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-[#1F1F1F] border border-white/10 text-[#D7E2EA]">
            {tag}
          </span>
        ))}
      </div>

      {/* Grid Images / Embedded YouTube Media */}
      <div className="flex flex-col md:grid md:grid-cols-12 gap-4 sm:gap-6">
        {/* Main Media Block: Video or Main Image (Order-1 on Mobile, Order-2 / col-7 on Desktop) */}
        <div className="order-1 md:order-2 md:col-span-7 w-full h-full">
          {embedUrl ? (
            <div className="w-full h-full min-h-[300px] sm:min-h-[400px] rounded-[24px] overflow-hidden border border-[#01C9C7]/40 shadow-[0_0_25px_rgba(1,201,199,0.25)] bg-black">
              <iframe
                src={embedUrl}
                title={`${project.title} Video Preview`}
                className="w-full h-full min-h-[300px] sm:min-h-[400px] border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <img
              src={project.imgRight}
              alt={project.title}
              onError={(e) => { (e.target as HTMLImageElement).src = project.fallbackRight; }}
              className="w-full h-full min-h-[280px] sm:min-h-[400px] object-cover rounded-[24px] border border-white/10"
            />
          )}
        </div>

        {/* Secondary Images Block (Order-2 on Mobile, Order-1 / col-5 on Desktop) */}
        <div className="order-2 md:order-1 md:col-span-5 flex flex-col gap-4 sm:gap-6">
          <img
            src={project.imgLeft1}
            alt={project.title}
            onError={(e) => { (e.target as HTMLImageElement).src = project.fallbackLeft1; }}
            className="w-full h-[160px] sm:h-[200px] object-cover rounded-[24px] border border-white/10"
          />
          <img
            src={project.imgLeft2}
            alt={project.title}
            onError={(e) => { (e.target as HTMLImageElement).src = project.fallbackLeft2; }}
            className="w-full h-[200px] sm:h-[240px] object-cover rounded-[24px] border border-white/10"
          />
        </div>
      </div>
    </motion.div>
  );
};
