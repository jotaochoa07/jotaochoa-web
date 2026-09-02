import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Mic2, ShieldCheck, Sparkles } from 'lucide-react';
import { trackLocalServicesEvent } from '../../lib/analytics';

type GHLVoiceAgentProps = {
  scriptUrl?: string;
  resourcesUrl?: string;
  widgetId?: string;
  embed?: ReactNode;
};

export const GHLVoiceAgent = ({ scriptUrl, resourcesUrl, widgetId, embed }: GHLVoiceAgentProps) => {
  const [scriptFailed, setScriptFailed] = useState(false);
  const widgetHostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scriptUrl || !widgetId) return;

    const existing = document.querySelector<HTMLScriptElement>(`script[data-widget-id="${widgetId}"], script[data-ghl-voice-widget="${widgetId}"]`);
    if (existing) return;

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    if (resourcesUrl) script.dataset.resourcesUrl = resourcesUrl;
    script.dataset.widgetId = widgetId;
    script.dataset.ghlVoiceWidget = widgetId;
    script.onerror = () => setScriptFailed(true);
    document.body.appendChild(script);

    return () => {
      script.onerror = null;
    };
  }, [scriptUrl, widgetId]);

  useEffect(() => {
    if (!widgetId) return;
    const moveWidget = () => {
      const widget = document.querySelector('chat-widget');
      if (widget && widgetHostRef.current && !widgetHostRef.current.contains(widget)) widgetHostRef.current.appendChild(widget);
    };
    moveWidget();
    const timer = window.setInterval(moveWidget, 500);
    return () => window.clearInterval(timer);
  }, [widgetId]);

  const configured = Boolean(scriptUrl && widgetId && !scriptFailed);

  return (
    <section id="asistente" className="ls-grid-bg border-y border-[#18d5e5]/20 bg-[#041014] px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="ls-kicker"><Mic2 size={17} aria-hidden="true" /> Demostración</span>
          <h2 className="ls-heading-soft mt-5">¿Y si tu negocio pudiera contestar clientes <span className="text-[#18d5e5]">aunque tú estés ocupado?</span></h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Prueba aquí mismo cómo podría atender un asistente que habla con los clientes de tu negocio.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-white/70">
            <span className="inline-flex items-center gap-2"><Sparkles size={17} className="text-[#f4e900]" /> Responde por texto y voz</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck size={17} className="text-[#18d5e5]" /> Funciona sin interrumpir tu trabajo</span>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#18d5e5]/35 bg-black/60 p-6 shadow-[0_0_60px_rgba(24,213,229,0.09)] sm:p-10">
          {configured ? (
            <div onClick={() => trackLocalServicesEvent('click_voice_ai')} data-ghl-widget-id={widgetId}>
              {embed ?? <div ref={widgetHostRef} className="min-h-80"><div className="flex min-h-80 flex-col items-center justify-center text-center"><div className="ls-voice-orb mb-7 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#18d5e5] bg-[#071a1d]"><Mic2 size={38} className="text-[#18d5e5]" aria-hidden="true" /></div><h3 className="text-2xl font-black uppercase">🎙️ Pruébalo ahora</h3></div></div>}
            </div>
          ) : (
            <div className="flex min-h-80 flex-col items-center justify-center text-center">
              <div className="ls-voice-orb mb-7 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#18d5e5] bg-[#071a1d]">
                <Mic2 size={38} className="text-[#18d5e5]" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-black uppercase">Hablar con el asistente</h3>
              <p className="mt-3 max-w-md text-white/60">
                Habla con él y descubre cómo podría atender a tus propios clientes.
              </p>
              <button type="button" disabled onClick={() => trackLocalServicesEvent('click_voice_ai')} className="mt-7 rounded-md bg-[#f4e900] px-8 py-5 text-lg font-black uppercase tracking-wide text-black disabled:cursor-not-allowed disabled:opacity-70">🎙️ Pruébalo ahora</button>
              <p className="mt-5 max-w-md text-base font-semibold leading-relaxed text-white/75">Pregúntale horarios, precios o servicios como si este fuera tu negocio.</p>
              {scriptFailed && <p className="mt-4 text-sm text-[#f4e900]">La demo no cargó, pero el resto de la página sigue disponible.</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
