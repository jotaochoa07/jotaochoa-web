export const localServicesConfig = {
  canonicalUrl: 'https://agentejota.com/servicios-locales',
  whatsappNumber: '573011360508',
  whatsappMessage:
    'Hola Jota, vi tus servicios para negocios y quiero saber qué opción me conviene.',
  attribution: {
    source: 'local-services',
    campaign: 'volante-fusa',
  },
} as const;

export const getWhatsAppUrl = () =>
  `https://wa.me/${localServicesConfig.whatsappNumber}?text=${encodeURIComponent(
    localServicesConfig.whatsappMessage,
  )}`;

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
    description: 'Una página profesional, rápida y clara para que te encuentren y contacten.',
    featured: true,
    event: 'pricing_view',
  },
  {
    name: 'Web Negocio',
    claim: 'Más impacto, más conversiones',
    setup: '$750.000',
    monthly: '$59.900/mes',
    description: 'Más contenido, mayor elaboración visual y una estructura orientada a convertir.',
    event: 'pricing_view',
  },
  {
    name: 'Web + IA / Automatización',
    claim: 'Inteligencia que trabaja por ti',
    setup: '$1.800.000',
    monthly: '$99.900/mes',
    description: 'Una web que captura información, se integra y empieza a ejecutar tareas.',
    event: 'automation_interest',
  },
  {
    name: 'Coti App',
    claim: 'Cotizaciones que cierran negocios',
    setup: '$2.500.000',
    monthly: '$69.900/mes + consumo IA',
    description: 'Clientes, catálogo, cotizaciones digitales, IA y seguimiento comercial.',
    event: 'coti_interest',
  },
  {
    name: 'Asistente IA + Voice Chat',
    claim: 'Tu equipo 24/7',
    setup: '$850.000',
    monthly: '$99.900/mes + consumo IA',
    description: 'Atención inicial por texto o voz, captura de leads, agenda y conexión con CRM.',
    event: 'assistant_interest',
  },
  {
    name: 'Automatización',
    claim: 'Menos trabajo, más resultados',
    setup: '$650.000',
    monthly: '$49.900/mes',
    description: 'Conecta formularios, leads, mensajes y tareas que hoy alguien hace manualmente.',
    event: 'automation_interest',
  },
];
