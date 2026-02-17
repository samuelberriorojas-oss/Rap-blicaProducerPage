export const SERVICE_CATEGORIES = [
  { id: 'beats', label: 'Beats', step: '01' },
  { id: 'recording', label: 'Grabación', step: '02' },
  { id: 'mix-master', label: 'Mezcla & Master', step: '03' },
  { id: 'packages', label: 'Paquetes', step: '04' },
  { id: 'extras', label: 'Adicionales', step: '05' },
];

export const SERVICES = [
  // ═══════════════════════════════════════
  //  BEATS — Producción Musical
  // ═══════════════════════════════════════
  {
    id: 'beat-lease',
    category: 'beats',
    title: 'Beat con Licencia',
    priceUSD: 35,
    priceCOP: 150000,
    description:
      'Ideal si quiere empezar a crear sin una gran inversión. Usted recibe el beat en alta calidad para usar en su canción, mientras el instrumental sigue disponible para otros artistas. Es la forma más accesible de trabajar con producción profesional.',
    features: [
      'Entrega en formato MP3 y WAV de alta calidad.',
      'Uso permitido en plataformas digitales (Spotify, Apple Music, YouTube, etc.).',
      'El beat permanece en catálogo y puede ser adquirido por otros artistas.',
      'Ideal para singles, demos o primeros lanzamientos.',
    ],
    whatsappMsg:
      '¡Hola! Estoy interesado en adquirir un beat con licencia. Me gustaría conocer el catálogo disponible y los términos de uso.',
  },
  {
    id: 'beat-exclusive',
    category: 'beats',
    title: 'Beat Exclusivo',
    priceUSD: 85,
    priceCOP: 350000,
    badge: 'Popular',
    description:
      'El beat se crea o se reserva exclusivamente para usted. Se retira del catálogo y nadie más podrá usarlo. Recibe todos los archivos separados (stems) para que su ingeniero de mezcla o usted mismo tenga control total del sonido.',
    features: [
      'Beat 100% exclusivo — se retira de catálogo tras la compra.',
      'Entrega en WAV, MP3 y stems separados (pistas individuales).',
      'Sesión de ajustes incluida: tempo, estructura o cambios menores.',
      'Derechos completos de uso comercial sin límites de reproducciones.',
    ],
    whatsappMsg:
      '¡Hola! Me interesa un beat exclusivo para mi proyecto. ¿Podemos hablar sobre estilos, referencias y disponibilidad?',
  },
  {
    id: 'beat-premium',
    category: 'beats',
    title: 'Beat Premium',
    priceUSD: 120,
    priceCOP: 500000,
    description:
      'La experiencia completa de producción. Trabajamos juntos desde cero: usted comparte sus referencias, ideas y visión, y construimos el beat en sesiones personalizadas. Incluye revisiones ilimitadas hasta que el sonido sea exactamente lo que busca.',
    features: [
      'Producción a medida con sesiones presenciales o remotas.',
      'Revisiones ilimitadas hasta su aprobación final.',
      'Entrega completa: WAV, MP3, stems y proyecto editable.',
      'Asesoría creativa incluida: estructura, arreglos y sonido.',
    ],
    whatsappMsg:
      '¡Hola! Quiero crear un beat premium totalmente personalizado. Me gustaría agendar una sesión para conversar sobre mi visión y referencias.',
  },

  // ═══════════════════════════════════════
  //  GRABACIÓN
  // ═══════════════════════════════════════
  {
    id: 'studio-hour',
    category: 'recording',
    title: 'Sesión por Hora',
    priceUSD: 20,
    priceCOP: 80000,
    priceLabel: '/hora',
    description:
      'Tiempo de estudio con ingeniero incluido. Usted llega con su beat y su letra, y nosotros nos encargamos de que todo suene bien en cabina. Perfecto para artistas que necesitan grabar varias canciones en una sola visita o que ya tienen experiencia en estudio.',
    features: [
      'Cabina de grabación tratada acústicamente + ingeniero de sonido.',
      'Edición básica de tomas en tiempo real (cortes y limpieza).',
      'Sin límite de canciones — grabe todo lo que alcance en su tiempo.',
      'Ideal para sesiones largas, freestyles o proyectos con varias pistas.',
    ],
    whatsappMsg:
      '¡Hola! Me gustaría reservar una sesión de estudio por horas. ¿Cuál es la disponibilidad? Tengo varias canciones para grabar.',
  },
  {
    id: 'voice-recording',
    category: 'recording',
    title: 'Grabación de Voces',
    priceUSD: 35,
    priceCOP: 150000,
    description:
      'Sesión completa de grabación para una canción. Incluye dirección en cabina, corrección de tono y edición de las tomas. Usted llega con su beat y su letra, nosotros nos encargamos de que su voz suene profesional y lista para mezclar.',
    features: [
      'Grabación en cabina profesional con micrófono de condensador.',
      'Dirección vocal: le guiamos en interpretación, energía y tono.',
      'Edición de tomas: cortes, alineación y corrección de pitch.',
      'Entrega del archivo de voces editado, listo para mezcla.',
    ],
    whatsappMsg:
      '¡Hola! Me interesa una sesión de grabación de voces para una canción. ¿Hay disponibilidad? Me gustaría conocer el proceso.',
  },
  {
    id: 'recording-full',
    category: 'recording',
    title: 'Grabación + Mezcla + Master',
    priceUSD: 60,
    priceCOP: 250000,
    badge: 'Completo',
    description:
      'El servicio de grabación más completo. Grabe su canción en el estudio y reciba el track totalmente terminado: mezclado y masterizado, listo para subir a plataformas. No necesita buscar otro ingeniero — todo se hace aquí, de principio a fin.',
    features: [
      'Grabación profesional en cabina + dirección vocal.',
      'Mezcla completa: balance, ecualización, efectos y espacialidad.',
      'Masterización final optimizada para plataformas digitales.',
      'Entrega en WAV y MP3, listo para publicar en Spotify, Apple Music, etc.',
    ],
    whatsappMsg:
      '¡Hola! Quiero grabar una canción con mezcla y master incluidos. ¿Podemos coordinar fecha y horario? Me gustaría saber más del proceso.',
  },

  // ═══════════════════════════════════════
  //  MEZCLA & MASTER
  // ═══════════════════════════════════════
  {
    id: 'mixing',
    category: 'mix-master',
    title: 'Mezcla Profesional',
    priceUSD: 35,
    priceCOP: 150000,
    tag: 'Disponible remoto',
    description:
      'Envíe sus archivos desde cualquier lugar y reciba su canción mezclada profesionalmente. Trabajamos el balance entre voces e instrumental, ecualización, compresión, efectos y panorámica para que cada elemento suene claro, definido y con presencia.',
    features: [
      'Balance de niveles entre voces, ad-libs, coros e instrumental.',
      'Ecualización, compresión y procesamiento de cada pista.',
      'Efectos creativos: reverb, delay, chorus y automatizaciones.',
      'Hasta 2 revisiones incluidas para ajustes finales.',
    ],
    whatsappMsg:
      '¡Hola! Necesito una mezcla profesional para mi canción. Tengo los stems listos. ¿Cuál es el proceso para enviar los archivos?',
  },
  {
    id: 'mastering',
    category: 'mix-master',
    title: 'Masterización',
    priceUSD: 20,
    priceCOP: 80000,
    tag: 'Disponible remoto',
    description:
      'El paso final antes de publicar. Tomamos su canción ya mezclada y la optimizamos en volumen, claridad y compatibilidad para que suene competitiva en todas las plataformas: Spotify, Apple Music, YouTube, y cualquier sistema de sonido.',
    features: [
      'Optimización de volumen según estándares de streaming (-14 LUFS).',
      'Ecualización correctiva y realce final del sonido.',
      'Limitación y maximización profesional sin distorsión.',
      'Entrega en WAV (master) y MP3 (distribución).',
    ],
    whatsappMsg:
      '¡Hola! Tengo una canción mezclada y necesito masterización. ¿Puedo enviarles el archivo? Me gustaría conocer el proceso.',
  },
  {
    id: 'mix-master-combo',
    category: 'mix-master',
    title: 'Mezcla + Master',
    priceUSD: 50,
    priceCOP: 200000,
    badge: 'Mejor precio',
    tag: 'Disponible remoto',
    description:
      'El combo completo de postproducción. Envíe sus stems (pistas separadas) y reciba su canción totalmente terminada: mezclada y masterizada, lista para publicar. Ideal para artistas que graban en casa o en otro estudio y buscan un acabado profesional.',
    features: [
      'Mezcla profesional completa + masterización final.',
      'Ahorro de $30,000 COP respecto a contratar ambos por separado.',
      'Proceso 100% remoto — trabaje desde cualquier ciudad o país.',
      'Entrega en WAV y MP3, optimizado para todas las plataformas.',
    ],
    whatsappMsg:
      '¡Hola! Me interesa el combo de mezcla y master. Tengo los stems de mi canción. ¿Cómo puedo enviarles los archivos?',
  },

  // ═══════════════════════════════════════
  //  PAQUETES
  // ═══════════════════════════════════════
  {
    id: 'new-artist',
    category: 'packages',
    title: 'Paquete Artista Nuevo',
    priceUSD: 60,
    priceCOP: 250000,
    badge: 'Para empezar',
    description:
      'Diseñado para quien nunca ha grabado o está dando sus primeros pasos. Incluye un beat con licencia, sesión de grabación con dirección vocal, mezcla y masterización. Todo lo que necesita para tener su primera canción profesional lista para el mundo.',
    features: [
      'Beat con licencia incluido (del catálogo disponible).',
      'Sesión de grabación con dirección y guía en cabina.',
      'Mezcla profesional + masterización final.',
      'Canción entregada lista para subir a plataformas digitales.',
    ],
    whatsappMsg:
      '¡Hola! Soy artista nuevo y me interesa el paquete para empezar. Nunca he grabado en estudio y me gustaría conocer cómo funciona el proceso.',
  },
  {
    id: 'full-song',
    category: 'packages',
    title: 'Canción Completa',
    priceUSD: 110,
    priceCOP: 450000,
    badge: 'Más vendido',
    featured: true,
    description:
      'Nuestro servicio estrella. Creamos su beat exclusivo desde cero, grabamos sus voces en el estudio y entregamos la canción completamente mezclada y masterizada. Desde la primera idea hasta el archivo final listo para publicar — todo en un solo lugar, con acompañamiento en cada paso.',
    features: [
      'Beat exclusivo personalizado (se retira de catálogo).',
      'Sesión de grabación con dirección vocal completa.',
      'Mezcla profesional + masterización final incluida.',
      'Entrega en WAV y MP3, listo para Spotify, Apple Music, YouTube, etc.',
    ],
    whatsappMsg:
      '¡Hola! Me gustaría realizar una canción completa desde cero (beat exclusivo + grabación + mezcla + master). ¿Podemos coordinar? Quiero conocer todo el proceso.',
  },
  {
    id: 'ep-package',
    category: 'packages',
    title: 'Paquete EP (3 Canciones)',
    priceUSD: 270,
    priceCOP: 1100000,
    description:
      'Para el artista que piensa en grande. Tres canciones completas con beat exclusivo, grabación, mezcla y master de cada una. Ahorre más de $250,000 COP comparado con contratar cada canción por separado. Ideal para lanzar un EP, un proyecto conceptual o arrancar con fuerza.',
    features: [
      '3 beats exclusivos personalizados para su proyecto.',
      '3 sesiones de grabación con dirección vocal.',
      'Mezcla profesional + master de las 3 canciones.',
      'Ahorro de ~$250,000 COP vs. contratar cada canción individual.',
    ],
    whatsappMsg:
      '¡Hola! Estoy interesado en el paquete EP de 3 canciones. Quiero lanzar un proyecto completo y me gustaría coordinar fechas y conocer el proceso.',
  },

  // ═══════════════════════════════════════
  //  SERVICIOS ADICIONALES
  // ═══════════════════════════════════════
  {
    id: 'songwriting',
    category: 'extras',
    title: 'Composición y Letra',
    priceUSD: 25,
    priceCOP: 100000,
    description:
      'Si tiene la idea pero no sabe cómo plasmarla, le ayudamos. Trabajamos juntos en la estructura de la canción, la letra, las melodías y el flow. No importa si llega con una frase o con una página entera — construimos su canción paso a paso.',
    features: [
      'Sesión de composición: estructura, versos, coros y melodía.',
      'Asesoría en flow, métrica y rima adaptada a su estilo.',
      'Puede traer una idea, una referencia o empezar desde cero.',
      'El resultado es una letra completa lista para grabar.',
    ],
    whatsappMsg:
      '¡Hola! Necesito ayuda con la composición y letra de mi canción. Tengo algunas ideas pero me gustaría trabajarlo con ustedes.',
  },
  {
    id: 'artistic-direction',
    category: 'extras',
    title: 'Dirección Artística',
    priceUSD: 20,
    priceCOP: 80000,
    description:
      'Guía profesional durante su sesión de grabación. Le ayudamos con la interpretación, la energía, las melodías, el tono y los detalles que hacen que una grabación suene auténtica y con carácter. Ideal si siente que le falta seguridad o dirección en cabina.',
    features: [
      'Dirección de interpretación vocal en tiempo real.',
      'Guía de melodías, ad-libs, coros y capas de voz.',
      'Retroalimentación honesta para sacar lo mejor de su voz.',
      'Se puede agregar a cualquier sesión de grabación.',
    ],
    whatsappMsg:
      '¡Hola! Me interesa el servicio de dirección artística para mi próxima grabación. Quiero sonar lo mejor posible y me gustaría tener guía profesional.',
  },
  {
    id: 'distribution',
    category: 'extras',
    title: 'Distribución Digital',
    priceUSD: 12,
    priceCOP: 50000,
    description:
      'Le ayudamos a subir su canción a todas las plataformas de streaming: Spotify, Apple Music, Deezer, YouTube Music, Amazon Music, Tidal y más. Configuramos su perfil de artista, los metadatos y dejamos todo listo para que su música esté disponible en todo el mundo.',
    features: [
      'Subida a Spotify, Apple Music, YouTube Music, Deezer, Tidal y más.',
      'Configuración de perfil de artista y metadatos (créditos, género, etc.).',
      'Asesoría en fecha de lanzamiento y estrategia básica.',
      'Su música disponible en +150 plataformas a nivel mundial.',
    ],
    whatsappMsg:
      '¡Hola! Tengo mi canción lista y quiero subirla a plataformas de streaming. ¿Me pueden ayudar con la distribución digital?',
  },
];
