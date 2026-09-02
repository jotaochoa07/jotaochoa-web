import { useEffect, useState } from 'react';
import { localServicesConfig } from '../../data/localServices';

const GHL_FORM_ID = '3kwoqFYs5XIHIUuKqSb3';
const GHL_FORM_URL = 'https://link.ghlespanol.com/widget/form/3kwoqFYs5XIHIUuKqSb3';
const GHL_FORM_SCRIPT = 'https://link.ghlespanol.com/js/form_embed.js';

export const LocalServicesLeadCapture = (_props: { selectedInterest?: string }) => {
  const [scriptFailed, setScriptFailed] = useState(false);

  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(`script[data-ghl-form="${GHL_FORM_ID}"]`);
    if (existing) return;

    const script = document.createElement('script');
    script.src = GHL_FORM_SCRIPT;
    script.async = true;
    script.dataset.ghlForm = GHL_FORM_ID;
    script.onerror = () => setScriptFailed(true);
    document.body.appendChild(script);

    return () => {
      script.onerror = null;
    };
  }, []);

  const formUrl = `${GHL_FORM_URL}?source=${encodeURIComponent(localServicesConfig.attribution.source)}&campaign=${encodeURIComponent(localServicesConfig.attribution.campaign)}`;

  return (
    <div className="rounded-[2rem] border border-white/15 bg-white/[0.04] p-3 sm:p-5">
      <iframe
        src={formUrl}
        style={{ width: '100%', minHeight: '720px', border: 'none', borderRadius: '8px' }}
        id={`inline-${GHL_FORM_ID}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form Local Services agentejota.com"
        data-height="undefined"
        data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
        data-form-id={GHL_FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Formulario Local Services agentejota.com"
      />
      {scriptFailed && <p className="px-3 pb-3 text-sm text-[#f4e900]">El formulario está disponible, pero su ajuste automático no cargó. Puedes completarlo normalmente.</p>}
    </div>
  );
};
