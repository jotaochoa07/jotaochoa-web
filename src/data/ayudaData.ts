export interface HelpChannel {
  category: string;
  organization: string;
  description: string;
  url: string;
}

export type CollectionCenterStatus = 'verified' | 'pending';

export interface CollectionCenter {
  name: string;
  location?: string;
  category: string;
  source: string;
  status: CollectionCenterStatus;
  acceptedItems?: string;
}

export interface CollectionCenterZone {
  area: string;
  centers: CollectionCenter[];
  officialMapUrl?: string;
}

export const LAST_EDITORIAL_VERIFICATION =
  '13 de agosto de 2026 · 9:29 a. m. COT';

export const HELP_CHANNELS: HelpChannel[] = [
  {
    category: 'Donar ahora',
    organization: 'Cruz Roja Colombiana',
    description: 'Canal oficial de emergencia',
    url: 'https://ayuda.cruzrojacolombiana.org/emergencia-colombia-terremoto',
  },
  {
    category: 'Alimentos e insumos',
    organization: 'ABACO — Asociación de Bancos de Alimentos de Colombia',
    description: 'Donaciones y puntos de acopio',
    url: 'https://donahoy.abaco.org.co/colombia2026',
  },
  {
    category: 'Ayudar desde el exterior',
    organization: 'World Central Kitchen',
    description: 'Donación internacional para apoyar la labor humanitaria de WCK',
    url: 'https://donate.wck.org/campaign/831452/donate?c_src=site-slider-rlf192&_gl=1*11hp1ov*_gcl_au*MzkwODgwNTk1LjE3ODY2NTI4NzM.*_ga*MTE2OTgzMzY3Ni4xNzg2NjUyODcz*_ga_5WKVY8503C*czE3ODY2NTI4NzMkbzEkZzEkdDE3ODY2NTI4OTQkajM5JGwwJGgw',
  },
  {
    category: 'Información oficial',
    organization: 'UNGRD',
    description: 'Actualizaciones oficiales de la emergencia',
    url: 'https://portal.gestiondelriesgo.gov.co/',
  },
  {
    category: 'Personas desaparecidas',
    organization: 'Asociación Colombiana de Ciudades Capitales — Asocapitales',
    description: 'Canal oficial de información sobre personas desaparecidas',
    url: 'https://asocapitales.co/terremoto-colombia.html',
  },
];

export const AFFECTED_AREAS = [
  'Cali, Valle del Cauca',
  'Pereira, Risaralda',
  'Manizales, Caldas',
  'Chocó',
  'Medellín, Antioquia',
  'Bogotá, Cundinamarca',
] as const;

export const NO_VERIFIED_CENTERS_MESSAGE = 'Aún no hay centros de acopio verificados publicados para esta zona.';
export const BOGOTA_OFFICIAL_MAP_URL = 'https://bogota.gov.co/';

export const COLLECTION_CENTER_ZONES: CollectionCenterZone[] = [
  {
    area: 'Cali, Valle del Cauca',
    centers: [
      { name: 'Plazoleta Jairo Varela', category: 'Alimentos e insumos', source: 'Alcaldía de Cali', status: 'verified' },
      { name: 'Escuela Nacional del Deporte', category: 'Alimentos e insumos', source: 'Alcaldía de Cali', status: 'pending' },
      { name: 'Parque de la Caña', category: 'Alimentos e insumos', source: 'Alcaldía de Cali', status: 'pending' },
      { name: 'Ciudadela Petronio Álvarez', category: 'Alimentos e insumos', source: 'Alcaldía de Cali', status: 'pending' },
    ],
  },
  {
    area: 'Pereira, Risaralda',
    centers: [
      { name: 'Café Consota', location: 'Manzanas 7 y 8, Villa Consota, Cuba', category: 'Alimentos e insumos', source: 'Alcaldía de Pereira', status: 'verified' },
      { name: 'Café Perla del Otún', location: 'diagonal a la iglesia de los 2.500 Lotes, Cuba', category: 'Alimentos e insumos', source: 'Alcaldía de Pereira', status: 'verified' },
      { name: 'Café El Remanso', location: 'avenida principal, junto al Centro de Salud', category: 'Alimentos e insumos', source: 'Alcaldía de Pereira', status: 'verified' },
      { name: 'Café Kennedy', location: 'parque principal', category: 'Alimentos e insumos', source: 'Alcaldía de Pereira', status: 'verified' },
      { name: 'Café Ormaza', location: 'Calle 3 Bis #5-38, Avenida del Río', category: 'Alimentos e insumos', source: 'Alcaldía de Pereira', status: 'verified' },
      { name: 'Café San Nicolás', location: 'Carrera 14 Bis #28-38, antigua estación de Policía', category: 'Alimentos e insumos', source: 'Alcaldía de Pereira', status: 'verified' },
      { name: 'Café Comuna del Café', location: 'Carrera 3 con Calle 59A, sector A del Parque Industrial', category: 'Alimentos e insumos', source: 'Alcaldía de Pereira', status: 'verified' },
    ],
  },
  {
    area: 'Manizales, Caldas',
    centers: [
      { name: 'Coliseo Menor', category: 'Alimentos e insumos', source: 'Alcaldía de Manizales', status: 'verified' },
      { name: 'Banco de Alimentos de Manizales', category: 'Alimentos e insumos', source: 'ABACO', status: 'verified' },
    ],
  },
  {
    area: 'Chocó',
    centers: [
      { name: 'Gobernación del Chocó', category: 'Alimentos e insumos', source: 'Gobernación del Chocó / reporte de emergencia', status: 'verified' },
      { name: 'Centro Logístico Humanitario del departamento del Chocó', category: 'Alimentos e insumos', source: 'Gobernación del Chocó / reporte de emergencia', status: 'verified' },
      { name: 'Fundación Banco de Alimentos', category: 'Alimentos e insumos', source: 'Diócesis de Quibdó', status: 'pending' },
      { name: 'Convento de Quibdó', category: 'Alimentos e insumos', source: 'Diócesis de Quibdó', status: 'pending' },
    ],
  },
  {
    area: 'Medellín, Antioquia',
    centers: [
      { name: 'Parque Biblioteca Belén', category: 'Alimentos e insumos y primera necesidad', source: 'Alcaldía de Medellín / ABACO', status: 'verified', acceptedItems: 'Agua, alimentos no perecederos y de canasta básica, artículos de higiene, pañales, colchones y cobijas.' },
      { name: 'Parque Biblioteca San Javier', category: 'Alimentos e insumos y primera necesidad', source: 'Alcaldía de Medellín / ABACO', status: 'verified', acceptedItems: 'Agua, alimentos no perecederos y de canasta básica, artículos de higiene, pañales, colchones y cobijas.' },
      { name: 'Parque Biblioteca Gabriel García Márquez', category: 'Alimentos e insumos y primera necesidad', source: 'Alcaldía de Medellín / ABACO', status: 'verified', acceptedItems: 'Agua, alimentos no perecederos y de canasta básica, artículos de higiene, pañales, colchones y cobijas.' },
      { name: 'Parque Biblioteca León de Greiff', category: 'Alimentos e insumos y primera necesidad', source: 'Alcaldía de Medellín / ABACO', status: 'verified', acceptedItems: 'Agua, alimentos no perecederos y de canasta básica, artículos de higiene, pañales, colchones y cobijas.' },
      { name: 'Biblioteca Pública El Poblado', category: 'Alimentos e insumos y primera necesidad', source: 'Alcaldía de Medellín / ABACO', status: 'verified', acceptedItems: 'Agua, alimentos no perecederos y de canasta básica, artículos de higiene, pañales, colchones y cobijas.' },
    ],
  },
  {
    area: 'Bogotá, Cundinamarca',
    officialMapUrl: BOGOTA_OFFICIAL_MAP_URL,
    centers: [
      { name: 'SAMU Sur', location: 'Av. Carrera 68 #31-41 Sur', category: 'Alimentos e insumos', source: 'Cruz Roja Colombiana / Alcaldía de Bogotá', status: 'verified' },
      { name: 'SAMU Norte', location: 'Calle 134 / Carrera 7B Bis #132-31', category: 'Alimentos e insumos', source: 'Cruz Roja Colombiana / Alcaldía de Bogotá', status: 'verified' },
      { name: 'Centro de Salvamento Acuático', location: 'Av. La Esmeralda #63-81', category: 'Alimentos e insumos', source: 'Cruz Roja Colombiana / Alcaldía de Bogotá', status: 'verified' },
      { name: 'sede administrativa Cruz Roja', location: 'Carrera 24 #73-38', category: 'Alimentos e insumos', source: 'Cruz Roja Colombiana / Alcaldía de Bogotá', status: 'verified' },
      { name: 'bodega Cruz Roja', location: 'Diagonal 79B #62-53', category: 'Alimentos e insumos', source: 'Cruz Roja Colombiana / Alcaldía de Bogotá', status: 'verified' },
      { name: 'Palacio de los Deportes', location: 'Calle 63 #59A-06', category: 'Alimentos e insumos', source: 'Cruz Roja Colombiana / Alcaldía de Bogotá', status: 'verified' },
    ],
  },
];
