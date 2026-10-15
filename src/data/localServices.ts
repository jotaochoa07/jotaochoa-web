export const localServicesConfig = {
  canonicalUrl: 'https://agentejota.com/servicios-locales',
  whatsappNumber: '573011360508',
  whatsappMessage:
    'Hola Jota, vi tus servicios para negocios y quiero saber qué opción me conviene.',
  attribution: {
    source: 'local-services',
  },
} as const;

export type LandingAttribution = {
  source: typeof localServicesConfig.attribution.source;
  campaign?: string;
};

export const resolveLandingAttribution = (
  search = typeof window === 'undefined' ? '' : window.location.search,
): LandingAttribution => {
  const params = new URLSearchParams(search);
  const raw = params.get('utm_campaign') ?? params.get('campaign');
  const campaign = raw?.trim() || undefined;

  return {
    source: localServicesConfig.attribution.source,
    ...(campaign ? { campaign } : {}),
  };
};

export const getWhatsAppUrl = (service?: string, search?: string) => {
  const { source, campaign } = resolveLandingAttribution(search);
  const serviceLine = service ? `\nServicio: ${service}` : '';
  const campaignLine = campaign ? `\nCampaña: ${campaign}` : '';
  return `https://wa.me/${localServicesConfig.whatsappNumber}?text=${encodeURIComponent(
    `${localServicesConfig.whatsappMessage}${serviceLine}\n\nFuente: ${source}${campaignLine}`,
  )}`;
};

export type Service = {
  name: string;
  claim: string;
  setup: string;
  monthly: string;
  description: string;
  featured?: boolean;
  event: 'pricing_view' | 'coti_interest' | 'assistant_interest' | 'automation_interest';
};

export const services: Service[] = [
  {
    name: 'Web Express',
    claim: 'Presencia profesional',
    setup: '$499.000',
    monthly: '$49.900/mes',
    description: 'Una página clara para que te encuentren, entiendan lo que haces y te escriban.',
    featured: true,
    event: 'pricing_view',
  },
  {
    name: 'Web Negocio',
    claim: 'Más impacto, más conversiones',
    setup: '$750.000',
    monthly: '$59.900/mes',
    description: 'Más contenido y una presentación más completa para negocios que quieren vender activamente.',
    event: 'pricing_view',
  },
  {
    name: 'Web + IA / Automatización',
    claim: 'Inteligencia que trabaja por ti',
    setup: '$1.800.000',
    monthly: '$99.900/mes',
    description: 'Una página que recibe información, responde mejor y ayuda con tareas del negocio.',
    event: 'automation_interest',
  },
  {
    name: 'Coti App',
    claim: 'Cotizaciones que cierran negocios',
    setup: '$2.500.000',
    monthly: '$69.900/mes + consumo IA',
    description: 'Prepara, envía y sigue cotizaciones desde un solo lugar, con ayuda inteligente.',
    event: 'coti_interest',
  },
  {
    name: 'Asistente IA + Voice Chat',
    claim: 'Tu equipo 24/7',
    setup: '$850.000',
    monthly: '$99.900/mes + consumo IA',
    description: 'Un asistente que puede responder por texto o voz y recoger datos de personas interesadas.',
    event: 'assistant_interest',
  },
  {
    name: 'Automatización',
    claim: 'Menos trabajo, más resultados',
    setup: '$650.000',
    monthly: '$49.900/mes',
    description: 'Reduce tareas repetitivas entre formularios, mensajes, clientes y notificaciones.',
    event: 'automation_interest',
  },
];
