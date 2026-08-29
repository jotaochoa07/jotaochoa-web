export type LocalServicesEvent =
  | 'landing_visit'
  | 'whatsapp_click'
  | 'pricing_view'
  | 'video_play'
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
