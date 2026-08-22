import React, { useEffect, useState } from 'react';
import { Ambulance, ArrowUpRight, Check, ChevronDown, ExternalLink, Flame, Phone, ShieldCheck, Siren } from 'lucide-react';
import {
  AFFECTED_AREAS,
  COLLECTION_CENTER_ZONES,
  HELP_CHANNELS,
  LAST_EDITORIAL_VERIFICATION,
  NO_VERIFIED_CENTERS_MESSAGE,
} from '../data/ayudaData';

const PAGE_TITLE = 'Ayuda por el terremoto en Colombia | HUMANOS';
const PAGE_DESCRIPTION =
  'Canales verificados para apoyar a las personas afectadas por el terremoto de Colombia del 10 de agosto de 2026.';
const CANONICAL_URL = 'https://www.agentejota.com/humanos/ayuda';
const MAP_MARKERS: Record<string, { left: string; top: string; labelClassName: string }> = {
  'Cali, Valle del Cauca': { left: '34%', top: '59%', labelClassName: '-left-8 top-8' },
  'Pereira, Risaralda': { left: '38%', top: '51%', labelClassName: '-left-10 top-8' },
  'Manizales, Caldas': { left: '43%', top: '46%', labelClassName: 'left-3 top-8' },
  Chocó: { left: '31%', top: '40%', labelClassName: '-left-7 -top-8' },
  'Medellín, Antioquia': { left: '43%', top: '36%', labelClassName: 'left-3 -top-8' },
  'Bogotá, Cundinamarca': { left: '54%', top: '55%', labelClassName: 'left-3 top-8' },
};

const EMERGENCY_CONTACTS = [
  { number: '123 SOS', label: 'Policía, Bomberos, Ambulancia y Defensa Civil.', icon: Siren },
  { number: '119', label: 'Bomberos Bogotá.', icon: Flame },
  { number: '125', label: 'Ambulancias.', icon: Ambulance },
  { number: '112', label: 'Policía Nacional.', icon: ShieldCheck },
  { number: '132', label: 'Cruz Roja.', icon: Phone },
  { number: '144', label: 'Defensa Civil.', icon: Phone },
  { number: '111', label: 'Atención a desastres.', icon: Siren },
  { number: '127', label: 'Policía de tránsito.', icon: ShieldCheck },
  { number: '126', label: 'Policía Carreteras.', icon: ShieldCheck },
  { number: '165/147', label: 'Gaula (anti-secuestro).', icon: Phone },
] as const;

const COLLECTION_CENTER_BY_AREA = new Map(COLLECTION_CENTER_ZONES.map((zone) => [zone.area, zone]));

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function getMapLabel(area: string) {
  return area.split(',')[0].trim();
}

export const HumanosAyuda: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const toggleArea = (area: string) => {
    setSelectedArea((currentArea) => (currentArea === area ? null : area));
  };

  useEffect(() => {
    document.title = PAGE_TITLE;
    setMeta('meta[name="description"]', 'name', 'description', PAGE_DESCRIPTION);
    setMeta('meta[property="og:title"]', 'property', 'og:title', PAGE_TITLE);
    setMeta('meta[property="og:description"]', 'property', 'og:description', PAGE_DESCRIPTION);
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMeta('meta[property="og:url"]', 'property', 'og:url', CANONICAL_URL);
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary');
    setMeta('meta[name="twitter:url"]', 'name', 'twitter:url', CANONICAL_URL);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', PAGE_TITLE);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', PAGE_DESCRIPTION);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = CANONICAL_URL;
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f8f6] font-['Inter'] text-[#18262d] selection:bg-[#b9e9e4]">
      <header className="border-b border-[#d9e2e1] bg-white px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <span className="font-['Kanit'] text-lg font-black tracking-[0.18em] text-[#01C9C7]">HUMANOS</span>
          <span className="flex items-center gap-2 text-right text-xs font-bold uppercase tracking-[0.12em] text-[#176d69]">
            <Check className="h-4 w-4" aria-hidden="true" /> Información verificada
          </span>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
          <div>
            <div className="mb-10 w-full sm:mb-14">
              <img
                src="/assets/humanos/registro-sismico-corazon.png"
                alt="Registro sísmico que forma un corazón en los colores de Colombia"
                className="mx-auto block w-full max-w-5xl opacity-90"
              />
            </div>
            <div className="max-w-4xl">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#176d69]">
                Terremoto en Colombia · 10 de agosto de 2026
              </p>
              <h1 className="font-['Kanit'] text-5xl font-black leading-[0.95] tracking-tight text-[#14252c] sm:text-7xl lg:text-8xl">
                Colombia necesita ayuda
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#40525a] sm:text-2xl">
                Orientación clara para apoyar a las personas afectadas por el terremoto.
              </p>
              <div className="mt-8 flex max-w-3xl gap-3 rounded-xl border border-[#b9d9d5] bg-[#eaf5f2] p-4 text-sm leading-relaxed text-[#29474a] sm:text-base">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#176d69]" aria-hidden="true" />
                <p><strong className="text-[#163d3d]">HUMANOS no recibe dinero ni intermedia donaciones.</strong> Cada enlace conduce directamente a la organización correspondiente.</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="help-options" className="border-y border-[#d9e2e1] bg-white">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#176d69]">Rutas directas</p>
              <h2 id="help-options" className="mt-2 font-['Kanit'] text-3xl font-bold text-[#14252c] sm:text-5xl">Elige cómo ayudar</h2>
              <p className="mt-4 text-base leading-relaxed text-[#52636a]">Selecciona una tarjeta para ir al sitio oficial de cada organización.</p>
            </div>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HELP_CHANNELS.map((channel, index) => (
                <a
                  key={channel.url}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-56 flex-col rounded-2xl border border-[#d6e1df] bg-[#fbfcfb] p-5 shadow-[0_4px_16px_rgba(23,62,61,0.06)] transition hover:-translate-y-0.5 hover:border-[#71b9b2] hover:shadow-[0_8px_24px_rgba(23,62,61,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176d69]"
                  aria-label={`${channel.category}: ${channel.organization}. Abre el sitio oficial en una pestaña nueva.`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dff1ee] text-sm font-bold text-[#176d69]">{String(index + 1).padStart(2, '0')}</span>
                    <ArrowUpRight className="h-5 w-5 text-[#176d69] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </div>
                  <span className="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-[#66777b]">{channel.category}</span>
                  <span className="mt-2 text-xl font-bold leading-tight text-[#1c3439]">{channel.organization}</span>
                  <span className="mt-2 text-sm leading-relaxed text-[#52636a]">{channel.description}</span>
                  <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-bold text-[#176d69]">Ir al sitio oficial <ExternalLink className="h-4 w-4" aria-hidden="true" /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="affected-areas" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#176d69]">PUNTOS DE AYUDA</p>
            <h2 id="affected-areas" className="mt-2 font-['Kanit'] text-3xl font-bold text-[#14252c] sm:text-5xl">Encuentra dónde donar</h2>
            <p className="mt-4 text-base leading-relaxed text-[#52636a]">Centros de acopio verificados para entregar ayuda presencialmente.</p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
            <div className="rounded-2xl border border-[#d6e1df] bg-white p-4 shadow-[0_4px_16px_rgba(23,62,61,0.06)] sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-sm font-bold text-[#29474a]">Mapa de Colombia</span>
                <span className="text-xs font-semibold text-[#718084]">Marcadores aproximados</span>
              </div>
              <figure className="relative overflow-hidden rounded-xl border border-[#cce0dd] bg-[#eef7f5] p-4 sm:p-7">
                <div className="relative mx-auto aspect-square w-full max-w-2xl">
                  <img
                    src="/assets/humanos/mapa-colombia-png.png"
                    alt="Silueta estilizada de Colombia con marcadores para las zonas afectadas reportadas"
                    className="block h-full w-full object-contain"
                  />
                  {AFFECTED_AREAS.map((area) => {
                    const marker = MAP_MARKERS[area];
                    if (!marker) return null;
                  const active = selectedArea === area;
                  return (
                    <div
                      key={area}
                      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                      style={{ left: marker.left, top: marker.top }}
                    >
                      <button
                        type="button"
                        onClick={() => toggleArea(area)}
                        aria-label={`${active ? 'Ocultar' : 'Mostrar'} información de ${area}`}
                        aria-pressed={active}
                        className={`flex h-7 w-7 items-center justify-center rounded-full border-4 border-white shadow-md transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176d69] ${active ? 'scale-125 bg-[#176d69]' : 'bg-[#d97845] hover:scale-110'}`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                      </button>
                      <span className={`pointer-events-none absolute whitespace-nowrap rounded bg-white/90 px-1.5 py-0.5 text-[10px] font-bold leading-none text-[#29474a] shadow-sm sm:text-xs ${marker.labelClassName}`} aria-hidden="true">
                        {getMapLabel(area)}
                      </span>
                    </div>
                  );
                  })}
                </div>
                <figcaption className="sr-only">Selecciona un marcador para ver la información disponible de cada zona reportada.</figcaption>
              </figure>
            </div>

            <div className="space-y-3" aria-live="polite">
              {AFFECTED_AREAS.map((area, index) => {
                const active = selectedArea === area;
                const detailsId = `area-details-${index}`;
                const zone = COLLECTION_CENTER_BY_AREA.get(area);
                const verifiedCenters = zone?.centers.filter((center) => center.status === 'verified') ?? [];
                const pendingCenters = zone?.centers.filter((center) => center.status === 'pending') ?? [];
                return <div key={area} className={`rounded-xl border bg-white transition ${active ? 'border-[#71b9b2] shadow-[0_5px_18px_rgba(23,62,61,0.1)]' : 'border-[#d6e1df]'}`}>
                  <button type="button" onClick={() => toggleArea(area)} aria-expanded={active} aria-controls={detailsId} className="flex min-h-16 w-full items-center gap-3 px-4 py-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176d69]">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f8e5d9] text-xs font-bold text-[#9d4e25]">{index + 1}</span>
                    <span className="flex-1 text-sm font-semibold leading-snug text-[#29474a]">{area}</span>
                    <span className="rounded-full bg-[#eaf5f2] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#176d69]">Actualizado 13 AGO</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-[#176d69] transition ${active ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  {active && <div id={detailsId} className="border-t border-[#e1e9e7] px-4 py-4">
                    {verifiedCenters.length > 0 ? (
                      <ul className="space-y-3">
                        {verifiedCenters.map((center) => (
                          <li key={center.name} className="rounded-lg border border-[#dce9e6] bg-[#fbfcfb] p-3">
                            <div className="flex items-start gap-2">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#176d69]" aria-label="Verificado" />
                              <div className="min-w-0">
                                <p className="text-sm font-bold text-[#1c3439]">{center.name}</p>
                                {center.location ? <p className="mt-1 text-xs leading-relaxed text-[#52636a]">{center.location}</p> : null}
                                <p className="mt-2 text-xs font-semibold text-[#176d69]">{center.category}</p>
                                {center.acceptedItems ? <p className="mt-1 text-xs leading-relaxed text-[#52636a]">Reciben: {center.acceptedItems}</p> : null}
                                <p className="mt-1 text-xs text-[#66777b]">Fuente: {center.source}</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : <p className="text-sm text-[#52636a]">{NO_VERIFIED_CENTERS_MESSAGE}</p>}
                    {zone?.officialMapUrl ? (
                      <div className="mt-4">
                        <a
                          href={zone.officialMapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Ver mapa oficial actualizado. Abre el sitio oficial de Bogotá en una pestaña nueva."
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#176d69] underline decoration-[#71b9b2] underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176d69]"
                        >
                          Ver mapa oficial actualizado <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </a>
                        <p className="mt-1 text-xs leading-relaxed text-[#66777b]">Abre el sitio oficial de Bogotá para consultar el mapa actualizado.</p>
                      </div>
                    ) : null}
                    {pendingCenters.length > 0 ? <div className="mt-4 border-t border-dashed border-[#d6e1df] pt-3 text-[#718084]"><p className="text-xs font-bold uppercase tracking-[0.1em]">Pendiente de verificación</p><ul className="mt-2 space-y-1 text-xs">{pendingCenters.map((center) => <li key={center.name}>{center.name}</li>)}</ul></div> : null}
                  </div>}
                </div>;
              })}
            </div>
          </div>
        </section>

        <section aria-labelledby="emergency-contacts" className="border-t border-[#d9e2e1] bg-[#edf4f2]">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#176d69]">En una emergencia</p>
              <h2 id="emergency-contacts" className="mt-2 font-['Kanit'] text-3xl font-bold text-[#14252c] sm:text-5xl">Líneas de atención inmediata</h2>
              <p className="mt-4 text-base leading-relaxed text-[#52636a]">Comunícate con la línea que corresponda a la situación.</p>
            </div>
            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {EMERGENCY_CONTACTS.map(({ number, label, icon: Icon }) => (
                <li key={number} className="flex items-start gap-3 border-b border-[#d5e1df] py-3 text-sm leading-relaxed text-[#40525a]">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#176d69]" aria-hidden="true" />
                  <span><strong className="font-bold text-[#1c3439]">{number}</strong> {label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d9e2e1] bg-white px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-2 text-sm font-bold text-[#29474a]"><Check className="h-5 w-5 text-[#176d69]" aria-hidden="true" /> Última verificación: {LAST_EDITORIAL_VERIFICATION}</p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-[#66777b]">Las necesidades y la información operativa pueden cambiar durante una emergencia. Antes de donar, confirma los datos en el sitio oficial de cada organización.</p>
        </div>
      </footer>
    </div>
  );
};
