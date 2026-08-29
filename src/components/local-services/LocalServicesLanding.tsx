import { useEffect, type ReactNode } from 'react';
import {
  ArrowDown, ArrowRight, BarChart3, Bot, Check, CheckCircle2, ChevronRight,
  Clock3, CloudCog, FileCheck2, Gauge, MapPin, MenuSquare, MessageCircle,
  MonitorSmartphone, Quote, RefreshCw, ShieldCheck, Sparkles, Users, Workflow, X,
} from 'lucide-react';
import { getWhatsAppUrl, localServicesConfig, services } from '../../data/localServices';
import { trackLocalServicesEvent } from '../../lib/analytics';
import { GHLVoiceAgent } from './GHLVoiceAgent';
import { LocalServicesLeadCapture } from './LocalServicesLeadCapture';
import { LocalServicesVideo } from './LocalServicesVideo';

const valueItems = [
  { icon: MonitorSmartphone, label: 'Página web profesional' },
  { icon: MessageCircle, label: 'WhatsApp directo' },
  { icon: MapPin, label: 'Google Maps + SEO local' },
  { icon: ShieldCheck, label: 'Dominio + SSL seguros' },
  { icon: Gauge, label: 'Rápido y sin complicaciones' },
  { icon: BarChart3, label: 'Diseñado para generar más' },
];

const recurringItems = ['Hosting administrado', 'SSL', 'Backups', 'Monitoreo', 'Mantenimiento técnico', 'Soporte', 'Dominio según plan', 'Cambios menores con límites claros'];

const faqs = [
  { question: '¿Las 48 horas empiezan desde el primer contacto?', answer: 'No. El plazo empieza cuando recibimos el pago confirmado y todo el material necesario: información, logo, fotografías y datos del negocio.' },
  { question: '¿Qué debo entregar para crear mi página?', answer: 'Nombre y descripción del negocio, servicios, datos de contacto, horarios, ubicación, redes, logo y el material visual disponible. Te ayudamos a organizarlo.' },
  { question: '¿La mensualidad es solamente hosting?', answer: 'No. Es tranquilidad operacional: hosting, SSL, backups, monitoreo, mantenimiento técnico, soporte y cambios menores según el plan.' },
  { question: '¿Las fotos y videos están incluidos?', answer: 'No están incluidos en el plan base. Puedes entregar tu material o cotizar Contenido Express, una producción móvil para uso digital entre $150.000 y $250.000 según desplazamiento y alcance.' },
  { question: '¿Todos los proyectos incluyen IA, voz o CRM?', answer: 'No. Esas capacidades se definen según la necesidad y el alcance. Los consumos de IA, voz, telefonía, WhatsApp y servicios externos se cobran cuando corresponde.' },
];

const WhatsAppLink = ({ placement, children, className, ariaLabel }: { placement: string; children: ReactNode; className: string; ariaLabel?: string }) => (
  <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className={className} aria-label={ariaLabel} onClick={() => trackLocalServicesEvent('whatsapp_click', { placement })}>
    {children}
  </a>
);

export const LocalServicesLanding = () => {
  useEffect(() => {
    trackLocalServicesEvent('landing_visit');
    document.documentElement.lang = 'es';
    document.title = 'Páginas web y tecnología para negocios en Fusagasugá | Jota Ochoa';
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = localServicesConfig.canonicalUrl;

    const pricing = document.querySelector('#servicios');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackLocalServicesEvent('pricing_view');
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    if (pricing) observer.observe(pricing);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#020607] text-white font-['Montserrat'] selection:bg-[#f4e900] selection:text-black">
      <a href="#contenido" className="sr-only z-50 bg-white px-4 py-3 text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Saltar al contenido</a>
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="/" className="flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#18d5e5]" aria-label="Ir al inicio de Jota Ochoa">
            <img src="/j-logo.png" alt="" className="h-10 w-10 object-contain" />
            <span className="text-sm font-black uppercase tracking-[0.16em] leading-tight">Jota Ochoa <span className="block text-[#18d5e5]">AI Builder</span></span>
          </a>
          <WhatsAppLink placement="header" className="hidden rounded-full border border-[#18d5e5]/60 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-[#18d5e5] transition hover:bg-[#18d5e5] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4e900] sm:inline-flex">Hablemos</WhatsAppLink>
        </div>
      </header>

      <main id="contenido">
        <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_76%_38%,rgba(24,213,229,0.16),transparent_30%),linear-gradient(180deg,#020607_0%,#020607_75%,#061215_100%)]" />
          <div className="absolute right-[-10rem] top-[15%] -z-10 h-[28rem] w-[28rem] rounded-full border border-[#18d5e5]/20 shadow-[0_0_90px_rgba(24,213,229,0.18)] sm:right-[4%] sm:h-[36rem] sm:w-[36rem]" />
          <div className="absolute right-[-5rem] top-[22%] -z-10 h-[18rem] w-[18rem] rounded-full border-[3px] border-[#18d5e5]/45 sm:right-[10%] sm:h-[27rem] sm:w-[27rem]" />
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
            <div>
              <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#18d5e5]"><MapPin size={16} aria-hidden="true" /> Fusagasugá y la región</div>
              <h1 className="max-w-4xl text-[clamp(3.15rem,10vw,7.5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]"><span className="block">El que</span><span className="block text-[#f4e900]">no está</span><span className="block">en Internet,</span><span className="block text-[#18d5e5]">no existe</span></h1>
              <p className="mt-7 max-w-xl text-lg font-semibold uppercase leading-snug text-white/75 sm:text-2xl">Hagamos que tu negocio <span className="text-[#18d5e5]">exista y crezca.</span></p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <WhatsAppLink placement="hero" className="ls-primary-button">Hablemos por WhatsApp <ArrowRight size={18} aria-hidden="true" /></WhatsAppLink>
                <a href="#como-funciona" className="ls-secondary-button">Conoce cómo funciona <ArrowDown size={18} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-square rounded-full border border-[#18d5e5]/30 bg-black/40 p-8 shadow-[0_0_100px_rgba(24,213,229,0.16)]">
                <div className="flex h-full flex-col items-center justify-center rounded-full border-[6px] border-[#18d5e5] bg-[#031014] text-center shadow-[inset_0_0_60px_rgba(24,213,229,0.15),0_0_28px_rgba(24,213,229,0.45)]">
                  <Clock3 className="mb-2 text-[#f4e900]" size={42} strokeWidth={2.5} aria-hidden="true" /><strong className="text-[clamp(4.5rem,18vw,9rem)] font-black leading-none tracking-[-0.08em]">48</strong><span className="-rotate-2 bg-[#f4e900] px-5 py-2 text-xl font-black uppercase text-black sm:text-3xl">horas</span>
                </div>
              </div>
              <p className="mt-5 text-center text-sm font-semibold text-white/65">Una vez recibamos toda tu información, material y el pago confirmado.</p>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="border-y border-white/10 bg-[#050a0b] px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div><span className="ls-kicker">Tu historia importa</span><h2 className="ls-heading mt-5">Has trabajado duro para construir tu negocio.</h2></div>
              <div className="text-lg leading-relaxed text-white/70 sm:text-xl"><p>Pero si hoy nadie te encuentra en Internet, muchas oportunidades se pierden.</p><p className="mt-5 font-semibold text-white">Creamos una presencia digital profesional para que te encuentren, confíen en ti, entiendan lo que haces y puedan contactarte.</p></div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3 lg:grid-cols-6">
              {valueItems.map(({ icon: Icon, label }) => <div key={label} className="flex min-h-44 flex-col justify-between bg-[#071012] p-5 transition hover:bg-[#0b181a]"><Icon className="text-[#18d5e5]" size={30} strokeWidth={1.8} aria-hidden="true" /><span className="text-sm font-extrabold uppercase leading-tight">{label}</span></div>)}
            </div>
          </div>
        </section>

        <LocalServicesVideo url={import.meta.env.VITE_LOCAL_SERVICES_VIDEO_URL} />

        <section id="web-express" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#18d5e5]/30 bg-[linear-gradient(135deg,rgba(24,213,229,0.1),rgba(255,255,255,0.025)_55%)] p-6 sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr]">
              <div><span className="ls-kicker">Producto principal</span><h2 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">Web Express</h2><p className="mt-4 text-xl font-bold uppercase text-[#18d5e5]">Presencia digital profesional</p><p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">Ideal si tu negocio no tiene página, depende solamente de redes sociales o necesita una presencia clara que genere confianza.</p>
                <div className="mt-9 grid gap-3 sm:grid-cols-2">{['Hasta 5 secciones', 'Responsive', 'WhatsApp y formulario', 'Google Maps', 'Dominio primer año', 'SSL', 'SEO básico/local', 'Textos asistidos con IA', 'Publicación', 'Backups y monitoreo', 'Soporte técnico', '4 actualizaciones menores/año'].map((item) => <span key={item} className="flex items-start gap-2 text-sm font-semibold text-white/75"><Check size={17} className="mt-0.5 shrink-0 text-[#18d5e5]" aria-hidden="true" />{item}</span>)}</div>
              </div>
              <div className="rounded-[2rem] bg-white p-7 text-black sm:p-10"><p className="text-xs font-black uppercase tracking-widest text-black/55">Implementación</p><p className="mt-2 text-5xl font-black tracking-[-0.06em]">$499.000</p><p className="mt-1 text-sm font-semibold">Pago único</p><div className="my-7 h-px bg-black/15" /><p className="text-xs font-black uppercase tracking-widest text-black/55">Servicio desde el segundo mes</p><p className="mt-2 text-3xl font-black">$49.900/mes</p><p className="mt-2 text-sm">O <strong>$548.900/año</strong> — 11 meses + 1 gratis.</p>
                <div className="mt-7 -rotate-1 rounded-xl bg-[#f4e900] p-5"><p className="text-xs font-black uppercase tracking-wider">Promo de lanzamiento</p><p className="mt-1 text-3xl font-black">$900.000 primer año</p><p className="mt-1 text-xs font-semibold">Implementación + primer año de servicio. Vigencia sujeta a disponibilidad.</p></div>
                <WhatsAppLink placement="web_express" className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-sm bg-black px-6 py-4 text-sm font-black uppercase text-white transition hover:bg-[#0c4f55] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#18d5e5]">Quiero mi página <ArrowRight size={18} /></WhatsAppLink>
              </div>
            </div>
            <p className="mt-8 text-xs leading-relaxed text-white/45">Precio estimado en COP. El valor final depende del alcance y requerimientos. No incluye fotografía, video, ecommerce, inventarios, cambios estructurales ni integraciones complejas.</p>
          </div>
        </section>

        <section id="servicios" className="border-y border-white/10 bg-[#050a0b] px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl"><span className="ls-kicker">Portafolio</span><h2 className="ls-heading mt-5 max-w-4xl">Tecnología que crece con tu negocio</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <article key={service.name} className={`group flex min-h-[25rem] flex-col rounded-[1.75rem] border p-7 transition hover:-translate-y-1 ${service.featured ? 'border-[#18d5e5]/60 bg-[#07191c]' : 'border-white/12 bg-white/[0.025] hover:border-[#18d5e5]/35'}`}><div className="flex items-center justify-between"><span className="font-['Kanit'] text-sm font-bold text-white/35">0{index + 1}</span>{service.featured && <span className="rounded-full bg-[#18d5e5] px-3 py-1 text-[10px] font-black uppercase text-black">Más solicitado</span>}</div><h3 className="mt-8 text-2xl font-black uppercase leading-tight">{service.name}</h3><p className="mt-2 text-sm font-bold uppercase text-[#18d5e5]">{service.claim}</p><p className="mt-5 text-sm leading-relaxed text-white/60">{service.description}</p><div className="mt-auto pt-8"><p className="text-3xl font-black">{service.setup}</p><p className="mt-1 text-sm font-semibold text-white/55">Setup · {service.monthly}</p></div><a href="#contacto" onClick={() => trackLocalServicesEvent(service.event, { service: service.name })} className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-[#18d5e5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4e900]">Me interesa <ChevronRight size={17} className="transition group-hover:translate-x-1" /></a></article>)}</div>
            <p className="mt-6 text-xs text-white/40">Precios base estimados en COP. El valor final depende del alcance. Consumos externos de IA, voz, telefonía, APIs, WhatsApp o terceros se cobran cuando corresponda.</p>
          </div>
        </section>

        <section id="coti" className="px-5 py-24 sm:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center"><div><span className="ls-kicker"><Quote size={17} /> Producto de mayor valor</span><h2 className="ls-heading mt-5">Cotizaciones que <span className="text-[#f4e900]">cierran negocios</span></h2><p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">Coti App no es un simple generador de PDF. Es un sistema para responder más rápido, presentar mejor y hacer seguimiento comercial.</p><div className="mt-8"><strong className="text-4xl font-black">$2.500.000</strong><span className="block mt-1 text-sm text-white/55">Setup · $69.900/mes + consumo de IA</span></div></div><div className="grid grid-cols-2 gap-3">{[{ icon: Users, t: 'Clientes y contactos' }, { icon: MenuSquare, t: 'Catálogo reutilizable' }, { icon: FileCheck2, t: 'Cotizaciones digitales' }, { icon: Sparkles, t: 'IA integrada' }, { icon: RefreshCw, t: 'Seguimiento y estados' }, { icon: BarChart3, t: 'Dashboard comercial' }].map(({ icon: Icon, t }) => <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6"><Icon size={25} className="text-[#18d5e5]" /><p className="mt-5 text-sm font-black uppercase">{t}</p></div>)}</div></div></section>

        <section className="bg-[#f4e900] px-5 py-16 text-black sm:px-8"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-black uppercase tracking-[-0.04em] sm:text-5xl">Otros servicios profesionales</h2><div className="mt-10 grid gap-8 md:grid-cols-3">{[{ icon: Bot, title: 'Chatbots', copy: 'Atiende y convierte 24/7' }, { icon: Users, title: 'CRM', copy: 'Gestiona clientes y ventas' }, { icon: Workflow, title: 'Automatizaciones', copy: 'Ahorra tiempo y optimiza procesos' }].map(({ icon: Icon, title, copy }) => <div key={title} className="border-l-4 border-black pl-5"><Icon size={34} /><h3 className="mt-5 text-2xl font-black uppercase">{title}</h3><p className="mt-2 font-semibold text-black/70">{copy}</p></div>)}</div></div></section>

        <GHLVoiceAgent scriptUrl={import.meta.env.VITE_GHL_VOICE_WIDGET_SCRIPT_URL} widgetId={import.meta.env.VITE_GHL_VOICE_WIDGET_ID} />

        <section className="px-5 py-24 sm:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><span className="ls-kicker"><CloudCog size={17} /> Servicio recurrente</span><h2 className="ls-heading mt-5">Nosotros nos encargamos de que siga funcionando</h2><p className="mt-6 text-white/65">La mensualidad no es simplemente hosting. Es tranquilidad operacional, con un alcance claro y sin promesas ilimitadas.</p></div><div className="grid gap-3 sm:grid-cols-2">{recurringItems.map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm font-bold"><CheckCircle2 size={19} className="shrink-0 text-[#18d5e5]" />{item}</div>)}</div></div></section>

        <section className="border-y border-white/10 bg-[#050a0b] px-5 py-16 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-sm font-black uppercase tracking-widest text-[#f4e900]">¿No tienes fotos ni videos?</p><h2 className="mt-3 text-3xl font-black uppercase">Contenido Express</h2><p className="mt-3 max-w-2xl text-white/60">Producción móvil para uso digital: fachada, productos, equipo, instalaciones y clips verticales con edición ligera.</p></div><div className="shrink-0 md:text-right"><strong className="text-3xl font-black">$150.000 – $250.000</strong><span className="mt-1 block text-xs text-white/45">Según desplazamiento y alcance</span></div></div></section>

        <section id="contacto" className="px-5 py-24 sm:px-8"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><span className="ls-kicker">Hablemos de tu negocio</span><h2 className="ls-heading mt-5">Cuéntame qué necesitas</h2><p className="mt-6 text-lg leading-relaxed text-white/65">Completa los datos y continuaremos por WhatsApp. Cuando GHL esté configurado, este mismo punto se conectará al CRM sin cambiar la experiencia.</p></div><LocalServicesLeadCapture /></div></section>

        <section className="border-t border-white/10 bg-[#050a0b] px-5 py-24 sm:px-8"><div className="mx-auto max-w-4xl"><span className="ls-kicker">Preguntas frecuentes</span><h2 className="ls-heading mt-5">Antes de empezar</h2><div className="mt-10 divide-y divide-white/10 border-y border-white/10">{faqs.map(({ question, answer }) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-black uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#18d5e5]">{question}<span className="text-[#18d5e5] group-open:hidden">+</span><X size={18} className="hidden shrink-0 text-[#18d5e5] group-open:block" /></summary><p className="mt-4 max-w-3xl leading-relaxed text-white/60">{answer}</p></details>)}</div></div></section>

        <section className="bg-[#18d5e5] px-5 py-20 text-black sm:px-8"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"><div><p className="text-sm font-black uppercase tracking-[0.18em]">Tecnología para negocios reales</p><h2 className="mt-3 max-w-4xl text-4xl font-black uppercase leading-none tracking-[-0.05em] sm:text-6xl">Tu negocio merece ser encontrado</h2></div><WhatsAppLink placement="final" className="inline-flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-sm bg-black px-7 py-4 text-sm font-black uppercase text-white transition hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">Hablemos de tu negocio <ArrowRight size={18} /></WhatsAppLink></div></section>
      </main>

      <footer className="px-5 py-12 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 text-sm text-white/55 md:flex-row md:items-end"><div><img src="/j-logo.png" alt="Jota Ochoa" className="h-12 w-12 object-contain" /><p className="mt-4 font-black uppercase text-white">Jota Ochoa · AI Builder</p><p className="mt-1">Fusagasugá, Colombia</p></div><address className="not-italic md:text-right"><a href="tel:+573011360508" className="block hover:text-[#18d5e5]">301 136 0508</a><a href="mailto:jotaochoa@gmail.com" className="mt-1 block hover:text-[#18d5e5]">jotaochoa@gmail.com</a><a href="https://agentejota.com" className="mt-1 block hover:text-[#18d5e5]">agentejota.com</a></address></div></footer>

      <WhatsAppLink placement="floating_mobile" ariaLabel="Hablar por WhatsApp" className="fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#18d5e5] text-black shadow-[0_8px_30px_rgba(24,213,229,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4e900] sm:hidden"><MessageCircle size={26} fill="currentColor" /></WhatsAppLink>
    </div>
  );
};
