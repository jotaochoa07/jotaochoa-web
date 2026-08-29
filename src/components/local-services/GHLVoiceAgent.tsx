import { useEffect, useState, type ReactNode } from 'react';
import { Mic2, ShieldCheck, Sparkles } from 'lucide-react';
import { trackLocalServicesEvent } from '../../lib/analytics';

type GHLVoiceAgentProps = {
  scriptUrl?: string;
  widgetId?: string;
  embed?: ReactNode;
};

export const GHLVoiceAgent = ({ scriptUrl, widgetId, embed }: GHLVoiceAgentProps) => {
  const [scriptFailed, setScriptFailed] = useState(false);

  useEffect(() => {
    if (!scriptUrl || !widgetId) return;

    const existing = document.querySelector<HTMLScriptElement>(`script[data-ghl-voice-widget="${widgetId}"]`);
    if (existing) return;

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    script.dataset.ghlVoiceWidget = widgetId;
    script.onerror = () => setScriptFailed(true);
    document.body.appendChild(script);

    return () => {
      script.onerror = null;
    };
  }, [scriptUrl, widgetId]);

  const configured = Boolean(scriptUrl && widgetId && embed && !scriptFailed);

  return (
    <section id="asistente" className="ls-grid-bg border-y border-[#18d5e5]/20 bg-[#041014] px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="ls-kicker"><Mic2 size={17} aria-hidden="true" /> Demo interactiva</span>
          <h2 className="ls-heading mt-5">Habla con mi <span className="text-[#18d5e5]">asistente de IA</span></h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Descubre cómo un asistente podría atender preguntas, orientar clientes y ayudar a capturar oportunidades para tu negocio.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-white/70">
            <span className="inline-flex items-center gap-2"><Sparkles size={17} className="text-[#f4e900]" /> Texto y voz</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck size={17} className="text-[#18d5e5]" /> Integración segura con GHL</span>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#18d5e5]/35 bg-black/60 p-6 shadow-[0_0_60px_rgba(24,213,229,0.09)] sm:p-10">
          {configured ? (
            <div onClick={() => trackLocalServicesEvent('assistant_interest')} data-ghl-widget-id={widgetId}>
              {embed}
            </div>
          ) : (
            <div className="flex min-h-80 flex-col items-center justify-center text-center">
              <div className="ls-voice-orb mb-7 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#18d5e5] bg-[#071a1d]">
                <Mic2 size={38} className="text-[#18d5e5]" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-black uppercase">Prueba nuestro asistente de IA</h3>
              <p className="mt-3 max-w-md text-white/60">
                Habla con él y descubre cómo podría atender a tus propios clientes.
              </p>
              <span className="mt-7 rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/45">
                Demo de voz próximamente
              </span>
              {scriptFailed && <p className="mt-4 text-sm text-[#f4e900]">La demo no cargó, pero el resto de la página sigue disponible.</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
