export interface Project {
  id: number;
  title: string;
  description: string;
  description_en: string;
  longDescription: string;
  longDescription_en: string;
  challenge: string;
  challenge_en: string;
  highlights: string[];
  highlights_en: string[];
  tags: string[];
  link?: string;       // GitHub
  liveLink?: string;   // URL pública
  mockups?: string[];  // rutas en /public
  type: 'software' | 'hardware' | 'data';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sadiges",
    description: "Web app para la administración completa del Programa Salas Cuna provincial: seguimiento de más de 2.000 expedientes anuales, generación automática de padrones y carga de beneficiarios con escaneo de DNI.",
    description_en: "Web app for the complete administration of the provincial Salas Cuna Program: tracking 2,000+ annual case files, automatic payroll generation, and beneficiary registration via ID scanning.",
    longDescription: "El Programa Salas Cuna gestionaba todo a mano: un Excel nuevo cada año, con formatos distintos, salas duplicadas y expedientes desaparecidos. Construí Sadiges para digitalizar y centralizar por completo el programa. La app guarda y sigue expedientes, permite la consulta de pagos, centraliza miles de documentos y facilita la carga de beneficiarios mediante escaneo de DNI. También genera automáticamente los documentos para el pago y el historial completo de cada sala.",
    longDescription_en: "The Salas Cuna Program managed everything manually: a new Excel file every year, different formats, duplicate rooms, and missing case files. I built Sadiges to fully digitize and centralize the program. The app stores and tracks case files, enables centralized payment queries, consolidates thousands of documents, and streamlines beneficiary registration via ID scanning. It also automatically generates payment documents and the complete history of each room.",
    challenge: "El punto de partida fue caótico: meses de limpieza manual de datos históricos sumados a scripts en JavaScript que validaban cada registro por estructura, longitud de cadena y caracteres específicos. Sin eso, no había forma de heredar datos íntegros al nuevo sistema. Elegí Django porque era el framework que mejor conocía, pero resultó ser la decisión correcta: su arquitectura batteries-included me permitió concentrarme en la solución sin tener que ensamblar bibliotecas externas para cada problema. Para la generación masiva de documentos, integré Celery y Redis: Celery ejecuta las tareas pesadas en segundo plano y Redis actua como broker y caché. La parte más exigente fue el compliance de seguridad: trabajé durante meses con los requerimientos del área de sistemas del Ministerio para cumplir con los estándares técnicos de un sistema que opera con datos públicos sensibles.",
    challenge_en: "The starting point was chaos: months of manual data cleanup plus JavaScript scripts validating each record by structure, string length, and specific character content. Without that groundwork, there was no way to migrate clean data into the new system. I chose Django because it was the framework I knew best, but it turned out to be the right call: its batteries-included architecture let me focus on the solution rather than assembling external libraries. For bulk document generation, I integrated Celery and Redis: Celery handles heavy tasks in the background while Redis acts as broker and cache. The most demanding part was security compliance: I spent months working through the Ministry's IT department requirements to meet the technical standards for a system handling sensitive public data.",
    highlights: [
      "+2.000 expedientes gestionados por año",
      "3 horas diarias de carga manual eliminadas",
      "+4.800 padrones anuales generados automáticamente",
      "Consulta de pagos para entidades asociadas",
      "Carga de beneficiarios con escaneo de DNI",
      "~300 entidades y +30 usuarios internos activos"
    ],
    highlights_en: [
      "2,000+ case files managed per year",
      "3 hours of daily manual entry eliminated",
      "4,800+ payrolls generated automatically per year",
      "Payment queries for partner entities",
      "Beneficiary registration via ID scanning",
      "~300 entities and 30+ internal active users"
    ],
    tags: ["Django", "PostgreSQL", "Redis", "Celery", "Google Cloud", "Looker Studio", "Hostinger"],
    mockups: ["/mockups/sadiges-1.png", "/mockups/sadiges-2.png", "/mockups/sadiges-3.png", "/mockups/sadiges-4.png"],
    type: "software",
  },
  {
    id: 2,
    title: "Mango Finanzas",
    description: "Web app y app móvil de finanzas personales. Con un atajo de iPhone cargás gastos sin salir de tu billetera. Seguimiento en pesos y dólares, análisis de empresas, presupuestos y suscripciones.",
    description_en: "Personal finance web app and mobile app. An iPhone shortcut lets you log expenses without leaving your banking app. Track spending in ARS & USD, analyze companies, manage budgets and subscriptions.",
    longDescription: "La carga de finanzas personales siempre me resultó tediosa: había que entrar a la app y recordarlo. Desarrollé Mango Finanzas para eliminar esa fricción. El diferencial es un atajo de iPhone que permite cargar el gasto directamente desde la app del banco o billetera, sin salir. Además incluye análisis financiero de empresas del mundo, seguimiento de suscripciones, presupuestos inteligentes y visualización de gastos e ingresos en pesos y dólares. Hoy lo usan familiares y amigos, con planes de expandir la base de usuarios.",
    longDescription_en: "Tracking personal finances always felt tedious — you had to open the app and remember to do it. I built Mango Finanzas to eliminate that friction. The key differentiator is an iPhone shortcut that lets you log an expense directly from your banking app or digital wallet, without switching apps. It also includes financial analysis of global companies, subscription tracking, smart budgets, and expense/income visualization in both ARS and USD. Currently used by family and friends, with plans to expand the user base.",
    challenge: "El atajo de iPhone aprovecha capacidades nativas del sistema: toma una captura de pantalla, la IA del dispositivo escanea el texto del comprobante y lo envía a un endpoint que lo parsea y carga la transacción automáticamente, con una precisión de ~90%. La app arrancó en Django, pero un stress test reveló que no iba a cumplir mis requisitos de rendimiento dentro del presupuesto que tenía en Railway: escalar el servidor costaba más de lo que tenía sentido. La solución fue migrar a TypeScript con Node.js, aprovechando su naturaleza asíncrona para manejar la misma carga con muchos menos recursos. El mayor desafío técnico fue el parser de comprobantes: cada banco y billetera virtual presenta el texto de forma diferente, y ese formato cambia con cada actualización de la app. Diseñar un sistema lo suficientemente generalizado para cubrir la mayoría de los casos, y flexible para incorporar nuevos, fue el problema de ingeniería más interesante del proyecto.",
    challenge_en: "The iPhone shortcut leverages native system capabilities: it takes a screenshot, the device's on-board AI scans the receipt text, and sends it to an API endpoint that parses and logs the transaction automatically — ~90% accuracy. The app started in Django, but a stress test revealed it wouldn't meet my performance requirements within my Railway budget: scaling the server cost more than it made sense. The solution was migrating to TypeScript and Node.js, leveraging its async nature to handle the same load with far fewer resources. The biggest technical challenge was the receipt parser: every bank and digital wallet formats text differently, and those formats change with app updates. Designing a system generalized enough to cover most cases yet flexible enough to incorporate new ones was the most interesting engineering problem in the project.",
    highlights: [
      "Atajo de iPhone para carga sin fricción",
      "Seguimiento en pesos y dólares simultáneo",
      "Análisis financiero de empresas globales",
      "Gestión de suscripciones y presupuestos",
      "Arquitectura full-stack TypeScript end-to-end",
      "App móvil React Native (iOS & Android)"
    ],
    highlights_en: [
      "iPhone shortcut for frictionless expense logging",
      "Simultaneous ARS & USD tracking",
      "Global company financial analysis",
      "Subscription & budget management",
      "End-to-end TypeScript full-stack architecture",
      "React Native mobile app (iOS & Android)"
    ],
    tags: ["TypeScript", "React Native", "Express", "PostgreSQL", "Redis", "Prisma", "Zod", "Google Cloud"],
    liveLink: "https://www.mangofinanzas.com",
    mockups: ["/mockups/mango-1.png", "/mockups/mango-2.png", "/mockups/mango-3.png", "/mockups/mango-4.png"],
    type: "software",
  },
  {
    id: 3,
    title: "Teclado Ergonómico",
    description: "Diseño y construcción de un teclado mecánico ergonómico dividido con microcontrolador Nice!Nano V2. Layout personalizado optimizado para largas sesiones de programación.",
    description_en: "Design and build of a split ergonomic mechanical keyboard with Nice!Nano V2 microcontroller. Custom layout optimized for long programming sessions.",
    longDescription: "Ningún teclado comercial se adaptaba exactamente a mis necesidades. Diseñé y construí un teclado mecánico ergonómico split con el microcontrolador Nice!Nano V2 para reducir la tensión en muñecas durante largas sesiones de programación. Cada detalle —el layout, el firmware, la distribución de teclas— fue pensado y ejecutado a medida.",
    longDescription_en: "No commercial keyboard fit exactly what I needed. I designed and built a split ergonomic mechanical keyboard with the Nice!Nano V2 microcontroller to reduce wrist strain during long programming sessions. Every detail — the layout, firmware, key distribution — was thought out and executed from scratch.",
    challenge: "El proyecto surgió de no encontrar en el mercado un teclado que se adaptara exactamente a mis necesidades ergonómicas y de programación. La solución fue diseñarlo y construirlo desde cero: el layout dividido (split), el firmware personalizado en ZMK y la distribución de teclas son decisiones propias, tomadas iterativamente.",
    challenge_en: "The project started from not finding a keyboard in the market that fit my exact ergonomic and programming needs. The solution was to design and build one from scratch: the split layout, the custom ZMK firmware, and the key distribution are all personal decisions, made iteratively.",
    highlights: [
      "Layout dividido (split) para ergonomía",
      "Firmware personalizado con ZMK",
      "Diseño y construcción desde cero",
      "Optimizado para programación"
    ],
    highlights_en: [
      "Split layout for ergonomics",
      "Custom firmware with ZMK",
      "Designed and built from scratch",
      "Optimized for programming"
    ],
    tags: ["Hardware", "Nice!Nano V2", "ZMK", "Diseño", "Ergonomía"],
    type: "hardware",
    link: "https://github.com/santimaspero2/cs-keyboard"
  }
];