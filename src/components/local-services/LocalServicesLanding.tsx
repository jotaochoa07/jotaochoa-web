import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  ArrowDown, ArrowRight, BarChart3, Bot, Building2, Check, CheckCircle2,
  ChevronDown, ChevronRight, FileCheck2, ImageIcon,
  MonitorSmartphone, Search, ShieldCheck, Smartphone, Users, Workflow, X, type LucideProps,
} from 'lucide-react';
import { getWhatsAppUrl, localServicesConfig, services } from '../../data/localServices';
import { trackLocalServicesEvent, type LocalServicesEvent } from '../../lib/analytics';
import { AnimatedStopwatch } from './AnimatedStopwatch';
import { LocalServicesVideo } from './LocalServicesVideo';
import { MetaPixel } from './MetaPixel';

const MAIN_VIDEO = 'https://youtube.com/shorts/77BcVhsR58E?feature=share';
const AGENT_FIRST_VIDEO = 'https://youtu.be/wiDRwcgXR6U?si=UhcXPd8YDkhGhoKU';
const COTI_VIDEO = 'https://youtu.be/Q8eo2bV0Ovc?si=da_GIHQOxGIMClH5';

const WhatsAppMark = ({ tone = 'black', size = 22, className = '' }: { tone?: 'black' | 'white'; size?: number; className?: string }) => (
  <img
    src={tone === 'white' ? '/local-services/whatsapp-white-icon.svg' : '/local-services/whatsapp-black-icon.svg'}
    alt=""
    aria-hidden="true"
    width={size}
    height={size}
    className={`shrink-0 object-contain ${className}`}
  />
);

const valueItems = [
  { icon: MonitorSmartphone, label: 'Una página profesional para tu negocio' },
  { icon: Smartphone, label: 'Se ve bien en celular, tablet y computador' },
  { icon: Search, label: 'Te encuentran en Google' },
  { icon: ShieldCheck, label: 'Tu propio dominio + seguridad' },
  { icon: ({ className, size }: LucideProps) => <WhatsAppMark tone="white" size={typeof size === 'number' ? size : 24} className={className} />, label: 'Contacto directo por WhatsApp' },
  { icon: BarChart3, label: 'Diseñada para generar oportunidades' },
];

const searchExamples = ['hotel en Armenia', 'contador en Guadalajara', 'odontólogo cerca de mí', 'floristería en Monterrey'];

const valueLadder = ['Presencia', 'Captación', 'Atención', 'Automatización', 'Sistemas comerciales'];

const projects = [
  {
    name: 'SAI WATER',
    quote: 'Jota nos armó las cotizaciones con IA y el seguimiento comercial. El equipo dejó el Excel y ahora cotiza más rápido, sin perder clientes por el camino.',
    image: '/local-services/sai-water-white.svg',
    imageClass: 'object-contain p-3',
  },
  {
    name: 'Amarte Suite',
    quote: 'La página y el agente virtual nos quitaron de encima las reservas a toda hora. El huésped llega informado y nosotros atendemos lo que sí necesita una persona.',
    image: '/agents/img-ajustadas/redesign-1.png',
    imageClass: 'object-cover',
  },
  {
    name: 'Invisa México',
    quote: 'El agente virtual orienta el trámite de visa y deja las consultas claras. La gente llega a WhatsApp entendiendo el proceso, no preguntando lo mismo una y otra vez.',
    image: '/agents/img-ajustadas/redesign-main.png',
    imageClass: 'object-cover',
  },
  {
    name: 'Joyerías en Fusagasugá',
    quote: 'Pusimos las cuatro casas en Internet con una página seria. Cuando alguien busca joyería en Fusagasugá nos encuentra, y el WhatsApp sí arranca con clientes reales.',
    image: '/local-services/work-joyerias.jpg',
    imageClass: 'object-cover object-top',
  },
];

const realWorks = [
  {
    name: 'Joyerías en Fusagasugá',
    description: 'Presencia digital para cuatro casas comerciales.',
    image: '/local-services/work-joyerias.jpg',
  },
  {
    name: 'Pleno Centro',
    description: 'Inmueble comercial en el centro de Fusagasugá.',
    image: '/local-services/work-pleno-centro.jpg',
  },
  {
    name: 'SAI Water',
    description: 'Sistemas de cotización, gestión y automatización comercial.',
    image: '/local-services/work-sai-water.jpg',
  },
  {
    name: 'Amarte Suite',
    description: 'Hospitalidad con agente virtual de reservas.',
    image: '/local-services/work-amarte.jpg',
  },
  {
    name: 'Invisa México',
    description: 'Orientación del trámite de visa con agente virtual.',
    image: '/local-services/work-invisa.jpg',
  },
];

const processSteps = [
  'Me cuentas qué necesitas',
  'Me envías la información',
  'Yo lo construyo',
  'Lo revisamos juntos',
  'Sales a Internet',
];

const faqs = [
  { question: '¿Qué necesito enviarte?', answer: 'Nombre y descripción del negocio, servicios, datos de contacto, horarios, ubicación, redes, logo y las fotografías o videos disponibles. Te entregaré una lista clara para que no se te escape nada.' },
  { question: '¿Desde cuándo cuentan las 48 horas?', answer: 'El plazo de Web Express empieza cuando recibimos el pago confirmado y todo el material necesario: información, logo, fotografías y datos del negocio.' },
  { question: '¿Qué pasa si no tengo fotos?', answer: 'Puedes contratar Contenido Express: una visita para crear fotografías y clips con celular, preparados para uso digital. El valor depende del desplazamiento y alcance.' },
  { question: '¿Puedo usar mi WhatsApp de siempre?', answer: 'Sí. La página lleva a los visitantes directamente al mismo número de WhatsApp que ya usas; no necesitas cambiar tu forma de atender.' },
  { question: '¿Qué pasa si ya tengo una página?', answer: 'Podemos revisar si conviene mejorarla, reemplazarla o conectarla con herramientas que te ayuden a responder y trabajar mejor. El traslado de contenido se cotiza según el caso.' },
  { question: '¿Hay algún costo mensual?', answer: 'Web Express tiene un servicio desde $49.900 al mes a partir del segundo mes. Incluye operación, seguridad, monitoreo, copias de respaldo y actualizaciones menores. Los servicios adicionales se cotizan según lo que necesites.' },
];

type WhatsAppPlacement = 'header' | 'hero' | 'web_express' | 'floating' | 'final';
const whatsappEvents: Record<WhatsAppPlacement, LocalServicesEvent> = {
  header: 'click_whatsapp_header',
  hero: 'click_whatsapp_hero',
  web_express: 'click_whatsapp_web_express',
  floating: 'click_whatsapp_floating',
  final: 'click_whatsapp_final',
};

const WhatsAppLink = ({
  placement,
  children,
  className,
  ariaLabel,
  service,
  id,
  onChoose,
}: {
  placement: WhatsAppPlacement;
  children: ReactNode;
  className: string;
  ariaLabel?: string;
  service?: string;
  id?: string;
  onChoose?: (service: string) => void;
}) => (
  <a
    id={id}
    href={getWhatsAppUrl(service)}
    target="_blank"
    rel="noreferrer"
    className={className}
    aria-label={ariaLabel}
    onClick={() => {
      if (service) onChoose?.(service);
      trackLocalServicesEvent(whatsappEvents[placement], { placement, service: service || undefined });
    }}
  >
    {children}
  </a>
);

export const LocalServicesLanding = () => {
  const [selectedService, setSelectedService] = useState('');
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [othersOpen, setOthersOpen] = useState(false);
  const [showDock, setShowDock] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    trackLocalServicesEvent('landing_visit');
    document.documentElement.lang = 'es';
    document.title = 'Páginas web y tecnología para negocios | Jota Ochoa';
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = localServicesConfig.canonicalUrl;

    const pricing = document.querySelector('#web-express');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        trackLocalServicesEvent('pricing_view');
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    if (pricing) observer.observe(pricing);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const heroCta = document.getElementById('cta-whatsapp-hero');
    if (!heroCta) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      setShowDock(!entry.isIntersecting);
    }, { threshold: 0 });
    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  const chooseService = (service: string) => {
    setSelectedService(service);
    trackLocalServicesEvent('select_service', { service });
  };

  return (
    <div className="ls-landing min-h-screen bg-[#020607] pb-24 text-white font-['Montserrat'] selection:bg-[#f4e900] selection:text-black sm:pb-0">
      <MetaPixel />
      <a href="#contenido" className="sr-only z-50 bg-white px-4 py-3 text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Saltar al contenido</a>

      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="/" className="flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#18d5e5]" aria-label="Ir al inicio de Jota Ochoa">
            <img src="/j-logo.png" alt="" className="h-10 w-10 object-contain" />
            <span className="text-sm font-black uppercase tracking-[0.16em] leading-tight">Jota Ochoa <span className="block text-[#18d5e5]">AI Builder</span></span>
          </a>
          <div className="flex items-center gap-3"><a href="#otros-servicios" className="inline-flex rounded-full px-3 py-2 text-[11px] font-black uppercase tracking-wider text-white/75 transition hover:text-[#18d5e5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4e900] sm:text-xs">Otros servicios</a><WhatsAppLink placement="header" className="hidden rounded-full border border-[#25D366]/70 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-[#25D366] transition hover:bg-[#25D366] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4e900] sm:inline-flex">Hablemos por WhatsApp</WhatsAppLink></div>
        </div>
      </header>

      <main id="contenido">
        <section className="relative isolate overflow-hidden pt-24 lg:flex lg:min-h-[100svh] lg:items-center">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_76%_38%,rgba(24,213,229,0.15),transparent_32%),linear-gradient(180deg,#020607_0%,#020607_76%,#061215_100%)]" />
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#18d5e5]"><Search size={16} aria-hidden="true" /> Cuando te buscan, debes aparecer</div>
              <h1 className="max-w-3xl text-[clamp(2.85rem,8.2vw,6.35rem)] font-black uppercase leading-[0.86] tracking-[-0.065em]">
                <span className="block">El que</span>
                <span className="block text-[#f4e900]">no está</span>
                <span className="block">en Internet,</span>
                <span className="block text-[#18d5e5]">no existe</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg font-semibold uppercase leading-snug text-white/75 sm:text-2xl">Hagamos que tu negocio <span className="text-[#18d5e5]">exista y crezca.</span></p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <WhatsAppLink id="cta-whatsapp-hero" placement="hero" className="ls-whatsapp-button">Hablemos por WhatsApp <WhatsAppMark size={20} /></WhatsAppLink>
                <a href="#video" className="ls-secondary-button">Te lo explico <ArrowDown size={18} aria-hidden="true" /></a>
              </div>
              <p className="mt-5 max-w-xl text-base font-bold leading-relaxed text-white/75">Página + Google + WhatsApp. Sin complicarte con tecnología.</p>
              <div className="mt-8 flex justify-center lg:hidden"><AnimatedStopwatch /></div>
            </div>
            <div className="hidden lg:block" aria-hidden="true"><AnimatedStopwatch /></div>
          </div>
        </section>

        <LocalServicesVideo url={import.meta.env.VITE_LOCAL_SERVICES_VIDEO_URL || MAIN_VIDEO} posterImage="/local-services/miniatura-local-services.png" vertical playLabel="Ver el video: tu negocio sí puede existir en Internet →" />

        <section id="como-funciona" className="border-y border-white/10 bg-[#050a0b] px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div><span className="ls-kicker">Tu historia importa</span><h2 className="ls-heading mt-5">Tu negocio ya existe <span className="block text-[#18d5e5]">Internet todavía no lo sabe</span></h2></div>
              <div className="text-lg leading-relaxed text-white/70">
                <p>Cuando alguien busca lo que haces y encuentra primero a otros negocios, probablemente ni siquiera llega a preguntarte el precio.</p>
                <p className="mt-5 font-semibold text-white">Internet no reemplaza lo que ya construiste. Hace que más personas puedan encontrarlo, entenderlo y confiar en él.</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">{searchExamples.map((example) => <div key={example} className="flex items-center gap-3 rounded-full border border-white/10 bg-black/45 px-4 py-3 text-base"><Search size={17} className="shrink-0 text-[#18d5e5]" aria-hidden="true" /><span>“{example}”</span></div>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl py-4 text-center"><span className="ls-kicker">Todo trabaja junto</span><h2 className="ls-heading-soft mt-6">WhatsApp no reemplaza tu página <span className="block text-[#18d5e5]">Tu página lleva clientes a WhatsApp</span></h2><p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/70">Si ya usas WhatsApp, Instagram o Facebook, perfecto. No queremos reemplazarlos: queremos que trabajen juntos.</p></div>
            <div className="mt-14 grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-center">
              {['Google', 'Tu página', 'Confianza', 'WhatsApp', 'Cliente'].map((step, index) => <div key={step} className="contents"><div className="rounded-2xl border border-[#18d5e5]/25 bg-[#071012] px-4 py-6 text-center text-sm font-black uppercase">{step}</div>{index < 4 && <ArrowRight className="mx-auto rotate-90 text-[#f4e900] sm:rotate-0" size={22} aria-hidden="true" />}</div>)}
            </div>

            <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {valueItems.map(({ icon: Icon, label }) => <div key={label} className="flex min-h-56 flex-col justify-between rounded-3xl border border-white/10 bg-[#071012] p-7 transition hover:border-[#18d5e5]/45 hover:bg-[#0b181a]"><div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#18d5e5]/10"><Icon className="text-[#18d5e5]" size={42} strokeWidth={1.6} aria-hidden="true" /></div><span className="mt-8 text-base font-extrabold uppercase leading-tight">{label}</span></div>)}
            </div>
            <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-[#25D366]/45 bg-[#07150d] p-7 sm:flex-row sm:items-center sm:p-9">
              <div><h3 className="text-2xl font-black uppercase sm:text-3xl">Hablar con Jota por WhatsApp</h3><p className="mt-2 text-lg text-white/70">Cuéntame qué necesitas. Sin compromiso.</p></div>
              <WhatsAppLink placement="hero" className="ls-whatsapp-button ls-whatsapp-button-large w-full sm:w-auto"><WhatsAppMark size={26} /> Hablar con Jota por WhatsApp</WhatsAppLink>
            </div>
          </div>
        </section>

        <section id="web-express" className="px-5 pb-24 sm:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#18d5e5]/30 bg-[linear-gradient(135deg,rgba(24,213,229,0.1),rgba(255,255,255,0.025)_55%)] p-6 sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr]">
              <div><span className="ls-kicker">La forma más sencilla de empezar</span><h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">Web Express</h2><p className="mt-4 text-xl font-bold uppercase text-[#18d5e5]">Tu negocio profesional en Internet</p><p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">Ideal si todavía no tienes página, dependes solamente de redes sociales o necesitas una presencia clara que genere confianza.</p>
                <div className="mt-9 grid gap-3 sm:grid-cols-2">{['Hasta 5 secciones claras', 'Se ve bien en cualquier pantalla', 'Botón directo a WhatsApp', 'Formulario para recibir consultas', 'Ubicación en Google Maps', 'Enlaces a tus redes sociales', 'Tu dominio el primer año, según condiciones', 'Seguridad incluida', 'Ayuda para aparecer en Google', 'Textos preparados contigo', 'Copias de seguridad y monitoreo', 'Hasta 4 actualizaciones menores al año'].map((item) => <span key={item} className="flex items-start gap-2 text-base font-semibold leading-relaxed text-white/75"><Check size={18} className="mt-1 shrink-0 text-[#18d5e5]" aria-hidden="true" />{item}</span>)}</div>
              </div>
              <div className="rounded-[2rem] bg-white p-7 text-black sm:p-10"><p className="text-xs font-black uppercase tracking-widest text-black/55">Puesta en marcha</p><p className="mt-2 text-5xl font-black tracking-[-0.06em]">$499.000</p><p className="mt-1 text-sm font-semibold">Configuración inicial</p><div className="my-7 h-px bg-black/15" /><p className="text-xs font-black uppercase tracking-widest text-black/55">Servicio desde el segundo mes</p><p className="mt-2 text-3xl font-black">$49.900/mes</p><div className="mt-7 -rotate-1 rounded-xl bg-[#f4e900] p-5"><p className="text-xs font-black uppercase tracking-wider">Promo de lanzamiento</p><p className="mt-1 text-3xl font-black">$900.000 primer año</p><p className="mt-1 text-xs font-semibold">Puesta en marcha + primer año de servicio. Vigencia sujeta a disponibilidad.</p></div><WhatsAppLink placement="web_express" service="Web Express" className="ls-whatsapp-button mt-7 w-full">Quiero poner mi negocio en Internet <WhatsAppMark size={20} /></WhatsAppLink></div>
            </div>
            <p className="mt-8 text-xs leading-relaxed text-white/45">Precio estimado en COP. El valor final depende del alcance y requerimientos. No incluye fotografía, video, tienda en línea, inventarios, cambios estructurales ni conexiones complejas.</p>
          </div>
        </section>

        <details
          id="otros-servicios"
          className="ls-others border-y border-[#f4e900]/25 bg-[#090d0e]"
          onToggle={(event) => setOthersOpen((event.currentTarget as HTMLDetailsElement).open)}
        >
          <summary className="ls-others-summary mx-auto flex max-w-7xl cursor-pointer list-none flex-col items-start gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f4e900]">¿Ya tienes página, o quieres ir más allá?</p>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] sm:text-5xl">Otros servicios y sistemas</h2>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/70">Asistentes, cotizaciones, automatización, Web Negocio, Contenido Express y el resto del catálogo.</p>
            </div>
            <span className="ls-others-toggle inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-2 rounded-full border-2 border-[#f4e900] bg-[#f4e900] px-6 py-3 text-sm font-black uppercase tracking-wider text-black sm:w-auto">
              {othersOpen ? 'Cerrar catálogo' : 'Ver más servicios'}
              <ChevronDown size={22} className={`transition-transform ${othersOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </span>
          </summary>

          <div>
        <section className="px-5 pb-16 sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-9 rounded-3xl border border-[#f4e900]/35 bg-[#f4e900]/[0.06] p-7 md:flex-row md:items-center sm:p-10"><div className="flex max-w-3xl gap-5"><ImageIcon className="mt-1 hidden shrink-0 text-[#f4e900] sm:block" size={42} /><div><p className="text-base font-black uppercase tracking-widest text-[#f4e900]">Contenido Express</p><h2 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl">¿No tienes buenas fotos? También te ayudo con eso</h2><p className="mt-4 text-lg leading-relaxed text-white/70">Creo fotos y clips para mostrar tu fachada, productos, instalaciones y equipo, con edición ligera para uso digital.</p></div></div><div className="shrink-0 md:text-right"><strong className="text-3xl font-black">$150.000 – $250.000</strong><span className="mt-2 block text-base text-white/60">Según desplazamiento y alcance</span></div></div>
        </section>

        <section className="bg-[#f4e900] px-5 py-16 text-black sm:px-8"><div className="mx-auto max-w-7xl"><p className="text-sm font-black uppercase tracking-[0.18em]">Capacidades que crecen contigo</p><h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] sm:text-5xl">Una página que atiende, cotiza y automatiza</h2><div className="mt-10 grid gap-8 md:grid-cols-3">{[{ icon: Bot, title: 'Chatbots y asistentes de IA', copy: 'Responden preguntas y atienden incluso cuando estás ocupado.', service: 'Asistente IA + Voice Chat' }, { icon: Users, title: 'Organización de clientes', copy: 'Mantén contactos y oportunidades en un solo lugar.', service: 'CRM' }, { icon: Workflow, title: 'Automatizaciones', copy: 'Reduce tareas repetitivas y ahorra tiempo.', service: 'Automatización' }].map(({ icon: Icon, title, copy, service }) => <div key={title} className="border-l-4 border-black pl-5"><Icon size={38} /><h3 className="mt-5 text-2xl font-black uppercase">{title}</h3><p className="mt-2 font-semibold text-black/70">{copy}</p><WhatsAppLink placement="hero" service={service} className="mt-5 inline-flex items-center gap-1 text-xs font-black uppercase underline decoration-2 underline-offset-4 text-black" onChoose={chooseService}>Quiero saber más <ChevronRight size={15} /></WhatsAppLink></div>)}</div></div></section>

        <section id="servicios" className="border-b border-white/10 bg-[#050a0b] px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl"><span className="ls-kicker">Tecnología que crece contigo</span><h2 className="ls-heading-soft mt-5 max-w-4xl">Empieza por lo que necesitas hoy</h2><p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">Después podemos agregar atención con IA, automatizaciones, sistemas comerciales y más. No tienes que contratarlo todo para empezar.</p>
            <div className="mt-10 flex flex-wrap items-center gap-3">{valueLadder.map((step, index) => <div key={step} className="flex items-center gap-3"><span className="rounded-full border border-[#18d5e5]/30 bg-[#071012] px-4 py-2 text-xs font-black uppercase text-white/75">{step}</span>{index < valueLadder.length - 1 && <ChevronRight size={16} className="text-[#f4e900]" />}</div>)}</div>
            <div ref={servicesRef} onScroll={(event) => { const cards = [...event.currentTarget.children] as HTMLElement[]; const center = event.currentTarget.getBoundingClientRect().left + event.currentTarget.clientWidth / 2; const nearest = cards.reduce((best, card, index) => Math.abs(card.getBoundingClientRect().left + card.offsetWidth / 2 - center) < Math.abs(cards[best].getBoundingClientRect().left + cards[best].offsetWidth / 2 - center) ? index : best, 0); setActiveServiceIndex(nearest); }} className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.filter((service) => service.name !== 'Web Express').map((service, index) => <article key={service.name} className={`group flex min-h-[25rem] flex-col rounded-[1.75rem] border p-7 transition hover:-translate-y-1 ${service.featured ? 'border-[#18d5e5]/60 bg-[#07191c]' : 'border-white/12 bg-white/[0.025] hover:border-[#18d5e5]/35'} ${activeServiceIndex === index ? 'ls-service-active' : ''}`}><div className="flex items-center justify-between"><span className="font-['Kanit'] text-base font-bold text-white/40">0{index + 1}</span>{service.featured && <span className="rounded-full bg-[#18d5e5] px-3 py-1 text-xs font-black uppercase text-black">Para empezar</span>}</div><h3 className="mt-8 text-2xl font-black uppercase leading-tight">{service.name}</h3><p className="mt-2 text-base font-bold uppercase text-[#18d5e5]">{service.claim}</p><p className="mt-5 text-base leading-relaxed text-white/65">{service.description}</p><div className="mt-auto pt-8"><p className="text-3xl font-black">{service.setup}</p><p className="mt-1 text-base font-semibold text-white/60">Puesta en marcha · {service.monthly}</p></div><WhatsAppLink placement="hero" service={service.name} className="mt-6 inline-flex items-center gap-2 text-base font-black uppercase text-[#18d5e5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4e900]" onChoose={chooseService}>Quiero saber más <ChevronRight size={17} className="transition group-hover:translate-x-1" /></WhatsAppLink></article>)}</div>
            <div className="mt-10 grid gap-6 rounded-3xl border border-[#18d5e5]/25 bg-[#071012] p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><span className="ls-kicker">Agent-First</span><h3 className="mt-4 text-3xl font-black uppercase leading-tight">Web + IA / Automatización</h3><p className="mt-4 text-lg leading-relaxed text-white/70">Mira cómo una página Agent-First puede atender consultas y automatizar el servicio al cliente para que tu negocio responda mejor.</p></div>{othersOpen && <LocalServicesVideo url={import.meta.env.VITE_AGENT_FIRST_VIDEO_URL || AGENT_FIRST_VIDEO} kind="intro" posterImage="/local-services/agent-first-video-thumbnail.png" title="Páginas Agent-First para automatizar el servicio al cliente" playLabel="Ver cómo funciona" compact />}</div><div className="ls-carousel-helper mt-8 flex items-center justify-between gap-3 text-sm font-black uppercase tracking-wide text-[#18d5e5] md:hidden"><span>Desliza para ver todos los servicios</span><div className="flex gap-2"><button type="button" aria-label="Servicio anterior" onClick={() => servicesRef.current?.scrollBy({ left: -servicesRef.current.clientWidth * 0.88, behavior: 'smooth' })} className="ls-carousel-arrow">←</button><button type="button" aria-label="Siguiente servicio" onClick={() => servicesRef.current?.scrollBy({ left: servicesRef.current.clientWidth * 0.88, behavior: 'smooth' })} className="ls-carousel-arrow">→</button></div></div>
            <p className="mt-6 text-xs text-white/40">Precios base estimados en COP. El valor final depende del alcance. Los consumos de inteligencia artificial, voz, telefonía, WhatsApp o servicios externos se cobran cuando corresponda.</p>
          </div>
        </section>

        <section id="coti" className="px-5 py-24 sm:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center"><div><span className="ls-kicker"><FileCheck2 size={17} /> Coti App</span><h2 className="ls-heading mt-5">Cotizaciones que <span className="text-[#f4e900]">cierran negocios</span></h2><p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">Coti App integra IA para que puedas dictarle lo que necesita el cliente y generar una cotización profesional. Encuentra los productos en el catálogo que ya cargaste, prepara el documento y mantiene el seguimiento comercial en un solo lugar.</p><div className="mt-8"><strong className="text-4xl font-black">Desde $2.500.000</strong><span className="mt-1 block text-base text-white/60">Puesta en marcha · $69.900/mes + consumo de IA</span></div><div className="mt-8 grid grid-cols-2 gap-3">{['Clientes organizados', 'Catálogo inteligente', 'Cotizaciones con IA', 'Seguimiento comercial'].map((item) => <span key={item} className="flex items-center gap-2 text-base font-bold text-white/70"><CheckCircle2 size={18} className="shrink-0 text-[#18d5e5]" />{item}</span>)}</div></div>{othersOpen && <LocalServicesVideo url={import.meta.env.VITE_COTI_VIDEO_URL || COTI_VIDEO} kind="coti" posterImage="/local-services/coti-video-thumbnail.png" title="Demostración de Coti App" playLabel="Ver cómo funciona en 5 minutos →" compact />}</div></section>
          </div>
        </details>

        <section className="px-5 py-24 sm:px-8"><div className="mx-auto max-w-7xl"><span className="ls-kicker"><Building2 size={17} /> Experiencia</span><h2 className="ls-heading-soft mt-5">Nuestra experiencia y casos de éxito nos respaldan</h2><div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{projects.map((project) => <article key={project.name} className="rounded-3xl border border-white/10 bg-[#071012] p-6"><div className="flex items-center gap-4"><div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/15 bg-[#041014]"><img src={project.image} alt="" loading="lazy" className={`h-full w-full ${project.imageClass}`} /></div><div><h3 className="text-lg font-black uppercase leading-tight">{project.name}</h3><p className="mt-1 text-base tracking-wide text-[#f4e900]" aria-label="Cinco estrellas">★★★★★</p></div></div><p className="mt-5 text-base leading-relaxed text-white/70">“{project.quote}”</p></article>)}</div>
          <div className="ls-real-works mt-12">{realWorks.map((item, index) => <figure key={item.name}><img src={item.image} alt={`Trabajo para ${item.name}`} width={960} height={600} loading={index < 2 ? 'eager' : 'lazy'} decoding="async" /><figcaption><strong>{item.name}</strong><span>{item.description}</span></figcaption></figure>)}</div></div></section>

        <section className="border-y border-white/10 bg-[#050a0b] px-5 py-24 sm:px-8"><div className="mx-auto max-w-7xl"><div className="mx-auto max-w-3xl text-center"><span className="ls-kicker">Así de sencillo</span><h2 className="ls-heading-soft mt-5">Esto no será complicado</h2></div><ol className="mt-14 grid gap-4 md:grid-cols-5">{processSteps.map((step, index) => <li key={step} className="relative rounded-2xl border border-white/10 bg-[#071012] p-6"><span className="text-4xl font-black text-[#18d5e5]/40">{index + 1}</span><p className="mt-8 text-base font-black uppercase leading-tight">{step}</p>{index < processSteps.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden text-[#f4e900] md:block" size={22} />}</li>)}</ol></div></section>

        <section id="contacto" className="px-5 py-24 sm:px-8"><div className="mx-auto max-w-3xl"><span className="ls-kicker">Conversemos</span><h2 className="ls-heading-soft mt-5">Hablemos por WhatsApp</h2><p className="mt-6 text-lg leading-relaxed text-white/70">Cuéntame qué negocio tienes. Yo te digo qué haría, sin compromiso.</p><WhatsAppLink placement="final" service={selectedService || undefined} className="ls-whatsapp-button mt-8 w-full justify-center">Hablemos por WhatsApp <WhatsAppMark size={20} /></WhatsAppLink></div></section>

        <section className="border-t border-white/10 bg-[#050a0b] px-5 py-24 sm:px-8"><div className="mx-auto max-w-4xl"><span className="ls-kicker">Preguntas frecuentes</span><h2 className="ls-heading-soft mt-5">Antes de empezar</h2><div className="mt-10 divide-y divide-white/10 border-y border-white/10">{faqs.map(({ question, answer }) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#18d5e5]">{question}<span className="text-[#18d5e5] group-open:hidden">+</span><X size={18} className="hidden shrink-0 text-[#18d5e5] group-open:block" /></summary><p className="mt-4 max-w-3xl text-base leading-relaxed text-white/70">{answer}</p></details>)}</div></div></section>

        <section className="bg-[#18d5e5] px-5 py-20 text-black sm:px-8"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-9 lg:flex-row lg:items-center"><div><p className="text-base font-black uppercase tracking-[0.18em]">Trabajo remoto · donde esté tu negocio</p><h2 className="mt-3 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-7xl">Tu negocio merece ser encontrado</h2><p className="mt-5 text-lg font-semibold text-black/70">Cuéntame qué negocio tienes. Yo te digo qué haría.</p></div><WhatsAppLink placement="final" className="inline-flex min-h-20 w-full shrink-0 items-center justify-center gap-3 rounded-md bg-[#25D366] px-8 py-6 text-lg font-black uppercase text-black shadow-xl transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black lg:w-auto"><WhatsAppMark size={28} /> Hablemos por WhatsApp</WhatsAppLink></div></section>
      </main>

      <footer className="px-5 py-12 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 text-sm text-white/55 md:flex-row md:items-end"><div><img src="/j-logo.png" alt="Jota Ochoa" className="h-12 w-12 object-contain" /><p className="mt-4 font-black uppercase text-white">Jota Ochoa · AI Builder</p><p className="mt-1">Colombia · trabajo remoto</p></div><address className="not-italic md:text-right"><a href="tel:+573011360508" className="block hover:text-[#18d5e5]">301 136 0508</a><a href="mailto:jotaochoa@gmail.com" className="mt-1 block hover:text-[#18d5e5]">jotaochoa@gmail.com</a><a href="https://agentejota.com" className="mt-1 block hover:text-[#18d5e5]">agentejota.com</a></address></div></footer>

      <WhatsAppLink placement="floating" ariaLabel="Hablar por WhatsApp" className="fixed bottom-5 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4e900] sm:inline-flex"><WhatsAppMark size={27} /></WhatsAppLink>
      <WhatsAppLink placement="floating" ariaLabel="Hablar por WhatsApp" className={`fixed inset-x-0 bottom-0 z-50 min-h-16 items-center justify-center gap-3 border-t border-black/15 bg-[#25D366] px-5 py-4 text-base font-black uppercase text-black shadow-[0_-8px_30px_rgba(0,0,0,0.3)] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-black sm:hidden ${showDock ? 'flex' : 'hidden'}`}><WhatsAppMark size={24} /> Hablar por WhatsApp</WhatsAppLink>
    </div>
  );
};

