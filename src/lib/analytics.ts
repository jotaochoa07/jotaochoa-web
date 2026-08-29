export type LocalServicesEvent =
  | 'landing_visit'
  | 'click_whatsapp_hero'
  | 'click_whatsapp_header'
  | 'click_whatsapp_floating'
  | 'click_whatsapp_web_express'
  | 'click_whatsapp_final'
  | 'click_whatsapp_form'
  | 'pricing_view'
  | 'play_intro_video'
  | 'play_coti_video'
  | 'click_voice_ai'
  | 'submit_lead_form'
  | 'select_service'
  | 'coti_interest'
  | 'assistant_interest'
  | 'automation_interest';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export const trackLocalServicesEvent = (
  event: LocalServicesEvent,
  detail: Record<string, unknown> = {},
) => {
  const payload = {
    event,
    source: 'local-services',
    campaign: 'volante-fusa',
    ...detail,
  };

  window.dataLayer?.push(payload);
  window.dispatchEvent(new CustomEvent('local-services:analytics', { detail: payload }));
};
