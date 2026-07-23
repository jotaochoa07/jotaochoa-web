export interface TranslationContent {
  nav: {
    about: string;
    projects: string;
    humanos: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    copy: string;
    micPill: string;
    tagline: string;
  };
  metrics: {
    m1Label: string;
    m1Sub: string;
    m2Label: string;
    m2Sub: string;
    m3Label: string;
    m3Sub: string;
    m4Label: string;
    m4Sub: string;
  };
  humanosGallery: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    cvBtn: string;
  };
  projects: {
    badge: string;
    title: string;
    problemLabel: string;
    motivationLabel: string;
    differentiatorLabel: string;
    demoBtn: string;
    projectBtn: string;
    agentSuiteLabel: string;
  };
  career: {
    badge: string;
    title: string;
    expTitle: string;
    eduTitle: string;
  };
  philosophy: {
    badge: string;
    title: string;
  };
  closing: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    locationLabel: string;
    locationVal: string;
    emailLabel: string;
    phoneLabel: string;
  };
}

export const translations: Record<'es' | 'en', TranslationContent> = {
  es: {
    nav: {
      about: 'SOBRE MÍ',
      projects: 'MI LAB',
      humanos: 'HUMANOS',
      contact: 'CONTACTO',
    },
    hero: {
      badge: 'AI SOLUTIONS ARCHITECT & AGENTIC PRODUCT BUILDER',
      title: 'HOLA, SOY JOTA',
      copy: '20+ años construyendo productos y negocios digitales. Especializado en sistemas de IA y automatizaciones omnicanal',
      micPill: 'Habla con Jota AI',
      tagline: 'Creativity + AI = 70X Better',
    },
    metrics: {
      m1Label: 'Productos & Agentes',
      m1Sub: 'Diseñados e implementados',
      m2Label: 'Años construyendo',
      m2Sub: 'Negocios digitales & IA',
      m3Label: 'Idiomas',
      m3Sub: 'Español, Inglés, Francés',
      m4Label: 'Obsesión',
      m4Sub: 'Construir productos reales',
    },
    humanosGallery: {
      badge: 'PROYECTO EDITORIAL',
      title: 'HUMANOS — Archivo & Historias',
      subtitle: 'No documentamos empresas. Documentamos a los humanos que las hicieron posibles.',
      cta: 'EXPLORAR HISTORIAS DE HUMANOS',
    },
    about: {
      badge: 'AI BUILDER & ESTRATEGA DE PRODUCTO',
      title: 'SOBRE MÍ',
      p1: 'Con más de 20 años de experiencia liderando innovación digital, e-commerce y estrategia de producto, combino arquitectura de software agéntico con visión de negocio de alto nivel.',
      p2: 'Mi enfoque se centra en construir sistemas de Inteligencia Artificial reales que eliminen la fricción operativa, optimicen procesos comerciales y generen impacto cuantificable.',
      p3: 'Manejo fluido de Español, Inglés y Francés para colaborar con equipos multidisciplinarios a nivel global.',
      cvBtn: 'DESCARGAR CV OFICIAL (PDF)',
    },
    projects: {
      badge: 'PROYECTOS Y SOLUCIONES IA',
      title: 'MI LAB',
      problemLabel: 'Problema que resuelve',
      motivationLabel: 'Por qué lo construí',
      differentiatorLabel: 'Qué lo hace diferente',
      demoBtn: 'VER DEMO EN VIDEO',
      projectBtn: 'IR A PROYECTO',
      agentSuiteLabel: 'AGENCIA DE 8 AGENTES ESPECIALIZADOS QUE INTERVIENEN:',
    },
    career: {
      badge: 'TRAYECTORIA & FORMACIÓN',
      title: 'MI CAMINO',
      expTitle: 'EXPERIENCIA LÍDER',
      eduTitle: 'EDUCACIÓN & POSGRADOS',
    },
    philosophy: {
      badge: 'PRINCIPIOS & FILOSOFÍA',
      title: 'LO QUE CREO',
    },
    closing: {
      badge: 'ARQUITECTURA AGÉNTICA',
      title: 'EL FUTURO SE CONSTRUYE HOY',
      subtitle: '¿Listo para diseñar la arquitectura agéntica de tu empresa o escalar tus sistemas con IA?',
      cta: 'INICIAR PROYECTO',
    },
    contact: {
      badge: 'CONECTEMOS & CONSTRUYAMOS',
      title: 'HABLEMOS',
      subtitle: '¿Listo para transformar tu producto u operación con IA?',
      locationLabel: 'Ubicación',
      locationVal: 'Colombia (Remoto)',
      emailLabel: 'Email Directo',
      phoneLabel: 'WhatsApp / Teléfono',
    },
  },
  en: {
    nav: {
      about: 'ABOUT ME',
      projects: 'MY LAB',
      humanos: 'HUMANS',
      contact: 'CONTACT',
    },
    hero: {
      badge: 'AI SOLUTIONS ARCHITECT & AGENTIC PRODUCT BUILDER',
      title: "HI, I'M JOTA",
      copy: '20+ years building digital products and businesses. Specialized in AI systems and omnichannel automation',
      micPill: 'Talk to Jota AI',
      tagline: 'Creativity + AI = 70X Better',
    },
    metrics: {
      m1Label: 'Products & Agents',
      m1Sub: 'Designed and deployed',
      m2Label: 'Years Building',
      m2Sub: 'Digital business & AI',
      m3Label: 'Languages',
      m3Sub: 'Spanish, English, French',
      m4Label: 'Obsession',
      m4Sub: 'Building real products',
    },
    humanosGallery: {
      badge: 'EDITORIAL PROJECT',
      title: 'HUMANS — Archive & Stories',
      subtitle: "We don't document companies. We document the humans who made them possible.",
      cta: 'EXPLORE HUMANS STORIES',
    },
    about: {
      badge: 'AI BUILDER & PRODUCT STRATEGIST',
      title: 'ABOUT ME',
      p1: 'With 20+ years of experience leading digital innovation, e-commerce, and product strategy, I combine agentic software architecture with high-level business vision.',
      p2: 'My focus is on building real AI systems that eliminate operational friction, optimize sales workflows, and deliver measurable impact.',
      p3: 'Fluent in Spanish, English, and French to collaborate with global cross-functional teams.',
      cvBtn: 'DOWNLOAD OFFICIAL CV (PDF)',
    },
    projects: {
      badge: 'AI PROJECTS & SOLUTIONS',
      title: 'MY LAB',
      problemLabel: 'Problem Solved',
      motivationLabel: 'Why I Built It',
      differentiatorLabel: 'Key Differentiator',
      demoBtn: 'WATCH DEMO VIDEO',
      projectBtn: 'GO TO PROJECT',
      agentSuiteLabel: 'AGENCY OF 8 SPECIALIZED AGENTS INVOLVED:',
    },
    career: {
      badge: 'CAREER & EDUCATION',
      title: 'MY JOURNEY',
      expTitle: 'LEADERSHIP EXPERIENCE',
      eduTitle: 'EDUCATION & DEGREES',
    },
    philosophy: {
      badge: 'PRINCIPLES & PHILOSOPHY',
      title: 'WHAT I BELIEVE',
    },
    closing: {
      badge: 'AGENTIC ARCHITECTURE',
      title: 'THE FUTURE IS BUILT TODAY',
      subtitle: 'Ready to design your company’s agentic architecture or scale your AI systems?',
      cta: 'START A PROJECT',
    },
    contact: {
      badge: 'CONNECT & BUILD',
      title: "LET'S TALK",
      subtitle: 'Ready to transform your product or operation with AI?',
      locationLabel: 'Location',
      locationVal: 'Colombia (Remote)',
      emailLabel: 'Direct Email',
      phoneLabel: 'WhatsApp / Phone',
    },
  },
};
