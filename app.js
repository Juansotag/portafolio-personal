// app.js
const PRODUCTS = [
  {
    segment: 'Sector Público',
    type: 'ChatBots & Automatización',
    name: 'MPAChat',
    slogan: 'Tu perfil profesional para el MPA, en minutos',
    description: 'Chat con IA que analiza el CV de los interesados en la Maestría en Administración Pública (MPA / Masters in Public Administration) de la Escuela de Gobierno de la Unisabana. Genera recomendaciones personalizadas, construye un perfil del candidato y guarda su hoja de vida e información.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://mpachat-unisabana.up.railway.app/',
    githubUrl: '',
    logo: 'assets/photos/Aliados/escuela.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Observatorio Social de Zipaquirá - OSZ',
    slogan: 'Alcaldía de Zipaquirá',
    description: 'Desarrollo del primer observatorio social de la Región Sabana Centro, para el seguimiento de indicadores sociales.',
    status: 'Activo',
    demoMode: 'ppt',
    appUrl: '',
    githubUrl: '',
    logo: 'assets/projects/osz.png',
    videoUrl: '',
    pptUrl: 'assets/decks/Observatorio Social de Zipaquirá.pdf',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Cuidar la Democracia',
    slogan: 'Visualiza lo que piensa el ciudadano',
    description: 'Dashboard interactivo con datos de encuesta sobre percepciones democráticas en Colombia (INVAMER/GovLab). Filtros sociodemográficos, mapas y gráficos en tiempo real.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://cuidar-la-democracia-production.up.railway.app/',
    githubUrl: 'https://github.com/Juansotag/Cuidar-la-Democracia',
    logo: 'assets/projects/democracia.png',
    videoUrl: 'https://drive.google.com/file/d/1cGZzC2g1HsFeL4M3TziwMUL9o692WI-x/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Data Promce',
    slogan: 'Sigue cada institución, mide cada etapa',
    description: 'Plataforma de seguimiento del programa FONDECUN en IEDs de Cundinamarca. Mapa de calor, Sankey, análisis cualitativo con IA y exportación a PDF/Excel.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://fondecun-production.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/FONDECUN',
    logo: 'assets/projects/datapromce.png',
    videoUrl: 'https://drive.google.com/file/d/1TJcmWLiAGKcxoCspHzYNniXq0ip3uiFw/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Asistentes de Voz con IA',
    name: 'AlcaldesaIA',
    slogan: 'Pregúntale al municipio, él te responde',
    description: 'Asistente de voz en tiempo real sobre el Plan de Desarrollo de Cajicá 2024-2027. OpenAI Realtime API + LiveKit + WebRTC.',
    status: 'En mantenimiento',
    demoMode: 'mostrar',
    appUrl: 'https://asistente-virtual-cajica.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/cajica',
    logo: 'assets/projects/alcaldesa.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Simuladores & Comunicación Política',
    name: 'PitchLab360',
    slogan: 'Analiza el discurso, mejora el mensaje',
    description: 'Análisis de discurso político con Claude (Anthropic). Perfil comunicativo, análisis emocional, stakeholders, encuadres narrativos y potencial digital.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://pitchlab360-production.up.railway.app/',
    githubUrl: 'https://github.com/Juansotag/PitchLab360',
    logo: 'assets/projects/pitchlab360.jpg',
    videoUrl: 'https://drive.google.com/file/d/1bYLxn5TCm_Hwq6DG7-u7UYui5N5szYUm/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Simuladores & Comunicación Política',
    name: 'Polycheck',
    slogan: 'Verifica en tiempo real, no después',
    description: 'Extensión de Chrome para fact-checking en tiempo real sobre videos de YouTube. GPT-4o + Gemini + Google Search. Análisis forense del discurso político.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: '',
    githubUrl: 'https://github.com/Juansotag/Polycheck',
    logo: 'assets/projects/polycheck.jpg',
    videoUrl: 'https://drive.google.com/file/d/111GwtqEWziIQFwi8BxMgQhiR6ZT-o2YW/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Simuladores & Comunicación Política',
    name: 'GovTest',
    slogan: 'Descubre tu candidato con datos',
    description: 'Test de afinidad política por dilemas de política pública. 16 preguntas, 14 candidatos 2026, 7 arquetipos de votante. Tarjeta viral descargable.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://convergencia-electoral.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/test-dilema',
    logo: 'assets/projects/govtest.jpg',
    videoUrl: 'https://drive.google.com/file/d/1B1RWm_HmN4HlHjiIzlDzh58FqfGpITkX/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Simuladores & Comunicación Política',
    name: 'Test 9 Ejes',
    slogan: 'Tu posición en 9 ejes, tu candidato en un clic',
    description: 'Test de afinidad política por 9 ejes ideológicos. Algoritmo euclidiano, ranking de candidatos, perfil personalizado y persistencia en Supabase.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://test9ejes.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/Test_9ejes',
    logo: 'assets/projects/test9ejes.jpg',
    videoUrl: 'https://drive.google.com/file/d/1IpEH495QROwq8k3VdkaD52tjbJKX68Iv/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Simuladores & Comunicación Política',
    name: 'Test 9 Ejes Colombia',
    slogan: '50 preguntas, un perfil ideológico',
    description: 'Versión extendida del test con 50 preguntas coyunturales sobre Colombia. Modo oscuro glassmorphism, compartir en alta resolución, datos anónimos en Supabase.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://test9col.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/Test_9ejesColombia',
    logo: 'assets/projects/test9ejes.jpg',
    videoUrl: 'https://drive.google.com/file/d/1gXzEi2ZNE4daXYBnidmccgcgkWj2Db84/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Sabana Centro Sostenible',
    slogan: 'Conecta proyectos con planes de desarrollo',
    description: 'Matching entre proyectos estratégicos de Sabana Centro y planes de desarrollo municipales. Scoring semántico con IA: especificidad, visión regional e impacto.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://sabanacentrosostenible.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/SCS_V2',
    logo: 'assets/projects/scsv2.png',
    videoUrl: 'https://drive.google.com/file/d/1WARAZMkb6xri4bO8MIxiPEIVHqOUqbfo/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Privado',
    type: 'Asistentes de Voz con IA',
    name: 'ConvergenceLab',
    slogan: 'Habla con la universidad, ella te escucha',
    description: 'Asistente de voz en tiempo real para el Convergence Lab de la Unisabana. LiveKit Agents + OpenAI Realtime API + Silero VAD. Frontend Next.js.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://convergencelab.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/ConvergenceLAb',
    logo: 'assets/projects/convergence.png',
    videoUrl: 'https://drive.google.com/file/d/1r-HPmA_JXTUB45rQpJKJ7RzEZwTaReno/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Asistentes de Voz con IA',
    name: 'Gober Santander',
    slogan: 'Un asistente público para cada ciudadano',
    description: 'Asistente de voz conversacional para el sector público. Procesamiento de PQRS, visualización de datos, interfaz para funcionarios. OpenAI Realtime + LiveKit.',
    status: 'En mantenimiento',
    demoMode: 'mostrar',
    appUrl: 'https://santander-production.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/Santander',
    logo: 'assets/projects/gober.png',
    videoUrl: 'https://drive.google.com/file/d/1JZj-tysFp6FlbX3NeH5Y4pINnr_1dNzg/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Privado',
    type: 'ChatBots & Automatización',
    name: 'ExportaCheck',
    slogan: '¿Listo para exportar? Descúbrelo hoy',
    description: 'Plataforma con termómetro interactivo que evalúa el nivel de preparación exportadora de empresas. Diagnóstico por dimensiones con IA. Next.js + FastAPI + Supabase.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://exporta-facil-bot-production-e49c.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/TermoExportador',
    logo: 'assets/projects/exportacheck.jpg',
    videoUrl: 'https://drive.google.com/file/d/1X7QuSOTr0gCKC7rLTdSzvLsoyWHbyw_i/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Privado',
    type: 'ChatBots & Automatización',
    name: 'Test de sostenibilidad universitaria',
    slogan: 'Mide tu sostenibilidad, mejora tu ranking',
    description: 'Sistema de evaluación universitaria en dimensiones Gobernanza, Social y Ambiental (ESG). Dashboard comparativo entre instituciones. React + Node + Supabase.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://bot-sostenibilidad-esg.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/Universia',
    logo: 'assets/projects/sostenibilidad.jpg',
    videoUrl: 'https://drive.google.com/file/d/1GDyYWyFkWJktyAc-a9Alec8xrri4dNEU/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Privado',
    type: 'ChatBots & Automatización',
    name: 'Asistente de agente para MetaRed',
    slogan: 'Resultados de encuestas sobre sostenibilidad y agente de análisis',
    description: 'Herramienta que permite ver los resultados de la encuesta sobre políticas de sostenibilidad en instituciones de educación superior de la red iberoamericana de universidades. Tiene un chat con funciones de agente que permite correr modelos de regresión y hacer analítica descriptiva.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://metaredesg.up.railway.app/',
    githubUrl: '',
    logo: 'assets/projects/sostenibilidad.jpg',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Privado',
    type: 'Inteligencia Geoespacial',
    name: 'Geovivienda',
    slogan: 'Ubica, analiza y decide dónde vivir',
    description: 'Plataforma inmobiliaria con análisis geoespacial: scraping de FincaRaíz, distancias a Transmilenio/SITP/ciclorutas, estrato promedio 200m, mapa interactivo con Leaflet.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://geovivienda-production.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/Geovivienda',
    logo: 'assets/projects/geovivienda.png',
    videoUrl: 'https://drive.google.com/file/d/1awsOrJvFAQg4JV4zUP4_4vhpDaucnehM/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Transversal',
    type: 'Formación Profesional en IA',
    name: 'Doctorado en IA',
    slogan: 'Investiga el futuro, lidera el cambio',
    description: 'Programa doctoral de investigación en inteligencia artificial. Enfocado en soluciones para el sector público y políticas basadas en evidencia.',
    status: 'Activo',
    demoMode: 'mostrar',
    appUrl: 'https://www.unisabana.edu.co/programas/posgrados/doctorado-en-inteligencia-artificial',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Transversal',
    type: 'Formación Profesional en IA',
    name: 'Maestría en IA',
    slogan: 'Domina la IA, transforma tu sector',
    description: 'Programa de posgrado en inteligencia artificial con énfasis en aplicaciones para gobierno, política pública y gestión organizacional.',
    status: 'Activo',
    demoMode: 'mostrar',
    appUrl: 'https://www.unisabana.edu.co/programas/posgrados/maestria-en-analitica-aplicada',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Transversal',
    type: 'Formación Profesional en IA',
    name: 'Pregrado en IA',
    slogan: 'Aprende IA desde la raíz',
    description: 'Programa de pregrado en inteligencia artificial de la Universidad de La Sabana. Formación integral en datos, modelos y aplicaciones.',
    status: 'Activo',
    demoMode: 'mostrar',
    appUrl: 'https://www.unisabana.edu.co/programas/pregrados/ciencia-de-datos',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Transversal',
    type: 'Formación Profesional en IA',
    name: 'Bootcamps en IA',
    slogan: 'Habilidades reales, en tiempo récord',
    description: 'Programas de formación técnica intensiva en IA para profesionales y equipos. Orientados a aplicaciones prácticas en distintos sectores.',
    status: 'Activo',
    demoMode: 'mostrar',
    appUrl: 'https://www.unisabana.edu.co/programas/educacion-continua/curso/curso-experto-en-inteligencia-artificial-para-profesionales-innovadores',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Análisis Clínica Universidad de la Sabana',
    slogan: 'Anticipa la demanda, optimiza los recursos',
    description: 'Sistema ML para identificar y predecir el número de pacientes NO-EPS y su facturación semanal en la Clínica Universidad de la Sabana.',
    status: 'Activo',
    demoMode: 'ppt',
    appUrl: '',
    githubUrl: '',
    logo: 'assets/photos/Aliados/clinica.png',
    videoUrl: '',
    pptUrl: 'assets/decks/modelo_clínica.pdf',
  },
  {
    segment: 'Sector Público',
    type: 'Inteligencia Geoespacial',
    name: 'Geoanálisis Clínica Universidad de la Sabana',
    slogan: 'Encuentra al paciente antes de que llegue',
    description: 'Análisis predictivo geoespacial de la ubicación de potenciales clientes NO-EPS de la Clínica Universidad de la Sabana.',
    status: 'Activo',
    demoMode: 'ppt',
    appUrl: '',
    githubUrl: '',
    logo: 'assets/photos/Aliados/clinica.png',
    videoUrl: 'https://drive.google.com/file/d/1KdjNdT396zr8c9nPjeeX_xjB-99c_8Ka/view?usp=drive_link',
    pptUrl: 'assets/decks/modelo_geo_clínica.pdf',
  },
  {
    segment: 'Sector Público',
    type: 'ChatBots & Automatización',
    name: 'CAResponde',
    slogan: 'De la PQRS al ciudadano en segundos',
    description: 'Asistente en texto para la CAR Cundinamarca: recibe, categoriza, visualiza y responde PQRS automáticamente con IA.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://car-pqrs-production.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/CAR-pqrs',
    logo: 'assets/projects/caresponde.png',
    videoUrl: 'https://drive.google.com/file/d/1Z9kNrQxgHan2YKVw9oRovIzGJfLPp86j/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Privado',
    type: 'Dashboards & Analítica de datos',
    name: 'HassApp',
    slogan: 'Del campo al mundo, con datos',
    description: 'Plataforma integral para gestión de producción, cosecha, insumos y exportación de aguacate Hass. FastAPI + React + MySQL + AWS S3.',
    status: 'En mantenimiento',
    demoMode: 'mostrar',
    appUrl: 'https://heartfelt-success-production-8486.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/HassApp',
    logo: 'assets/projects/hassapp.png',
    videoUrl: 'https://drive.google.com/file/d/1WMHMOz0j_DHamcykskRayQAUyCyPpryw/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Barranquilla',
    slogan: 'Predice la criminalidad, protege la ciudad',
    description: 'App web para subir, analizar y predecir eventos de criminalidad y convivencia ciudadana. Diseñada para el Observatorio de Criminalidad de Barranquilla.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://barranquilla-production.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/Barranquilla',
    logo: 'assets/Govlab.png',
    videoUrl: 'https://drive.google.com/file/d/1X7_dn5FwxNv9XvoflFxJrNYQPzxmr8DJ/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'ChatBots & Automatización',
    name: 'AlcaldIA',
    slogan: 'El Plan de Desarrollo en tus manos',
    description: 'Asistente RAG sobre el Plan de Desarrollo Distrital de Bogotá. Búsqueda semántica con FAISS + GPT-4o. Respuestas por objetivo, programa y presupuesto.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://alcadia.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/AlcaldIA',
    logo: 'assets/Govlab.png',
    videoUrl: 'https://drive.google.com/file/d/1rfDiEcx6BD2r3HDHG5GSUVze8Bd8O9ww/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'ChatBots & Automatización',
    name: 'PoliciApp-Eco',
    slogan: 'La ley ambiental en campo',
    description: 'Asistente IA de legislación ambiental colombiana para la Policía Ambiental y Carabineros. Cubre pesca, flora, fauna, minería y recursos hídricos.',
    status: 'En mantenimiento',
    demoMode: 'mostrar',
    appUrl: '',
    githubUrl: 'https://github.com/GovLabSabana/PoliciApp-Eco2',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'ChatBots & Automatización',
    name: 'LegisCheck',
    slogan: 'Dos versiones, un solo vistazo',
    description: 'Comparación inteligente de documentos legislativos. Diff semántico con GPT-4, línea de tiempo con hitos y reportes descargables en PDF.',
    status: 'En mantenimiento',
    demoMode: 'mostrar',
    appUrl: '',
    githubUrl: 'https://github.com/GovLabSabana/Paralelo',
    logo: 'assets/projects/Legischeck.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Asistentes de Voz con IA',
    name: 'Alocandidato',
    slogan: 'La campaña que llama, nunca la que cansa',
    description: 'Video de muestra con Dapta para llamadas de voz automatizadas a ciudadanos con preguntas sobre candidatos políticos.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: '',
    githubUrl: '',
    logo: 'assets/projects/alocandidato.jpg',
    videoUrl: 'https://drive.google.com/file/d/1bOY7U-cqev5172oxBTSLvazsdPdM2hTT/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Privado',
    type: 'ChatBots & Automatización',
    name: 'Data Copilot',
    slogan: 'Pregúntale a tus datos con tu propia voz',
    description: 'Asistente de análisis de datos con LangChain + GPT-4 + Whisper. Acepta CSV/Excel, genera gráficos interactivos con Plotly, responde por texto y por voz (TTS).',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://datacopilot.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/Data_copilot',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Privado',
    type: 'Gestión Documental con IA',
    name: 'NotariaDoc',
    slogan: 'El borrador perfecto, sin esperas',
    description: 'MVP para construir borradores de escrituras, análisis de cumplimiento y chat IA para notarías.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://notariadoc-production.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/NotariaDoc',
    logo: 'assets/Govlab.png',
    videoUrl: 'https://drive.google.com/file/d/1BNngISeVJ6rFuEdgpbrmGFCxAjOLwgFE/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Privado',
    type: 'Gestión Documental con IA',
    name: 'NotariaIQ',
    slogan: 'Control total de la notaría en un panel',
    description: 'Panel de control para notarías: seguimiento de usuarios, tiempos de espera, ingresos, egresos, análisis descriptivo y pronóstico.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://notariaiq-production.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/NotariaIQ',
    logo: 'assets/Govlab.png',
    videoUrl: 'https://drive.google.com/file/d/19wx_KXzy9Byorjwu40xK5E3ymxglD_aO/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Privado',
    type: 'Gestión Documental con IA',
    name: 'Radica Notaría',
    slogan: 'Radica, revisa y aprueba sin papel',
    description: 'Suite de automatización documental para la Notaría Segunda de Zipaquirá. Formulario para constructoras + panel de digitadora con flujo de aprobación de escrituras.',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://radicanotaria-production.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/Radica_notaria',
    logo: 'assets/Govlab.png',
    videoUrl: 'https://drive.google.com/file/d/1cmOw8OCh4UhW1YzWrMBpbsMvaZZjnrSV/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'SIAG',
    slogan: 'Sigue en tiempo real a tu organización',
    description: 'Suite de seguimiento de metas institucionales en tiempo real con aplicación web, Android y IOS',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/Cardesk-Gestin/Dashboard1',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: 'https://drive.google.com/file/d/1iZEkSOuXZ5h4kMB0xZBnUOpvovll0vQx/view?usp=drive_link',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Violencia Intrafamiliar en Colombia',
    slogan: '',
    description: '',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/Datos-Polica/Violenciaintrafamiliar',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Recursos hospitalarios por cada 100.000 habitantes',
    slogan: '',
    description: '',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/Recursoshospitalariosporcada100_00habitantes-2022/Dashboard1',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Registros de la Base Única de afiliados - Adres - Mayo 2025',
    slogan: '',
    description: '',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/RegistrosdelaBasedeDatosnicadeAfiliados-ADRES-Mayo2025/Perfilesdelosafiliados',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Envejecimiento poblacional en Colombia por Sexo y Área',
    slogan: '',
    description: '',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/EnvejecimientopoblacionalenColombiaporSexoyArea/Historia1',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Panorama de la Extorsión en Colombia (2010-2024)',
    slogan: '',
    description: '',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/PanoramadelaextorsinenColombia2010-2024/Dashboard1',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Delitos Sexuales en Colombia',
    slogan: '',
    description: '',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/DelitossexualesenColombia_17300861605130/Dashboard1',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'El Panorama del envejecimiento poblacional en Colombia',
    slogan: '',
    description: '',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/ElpanoramadelenvejecimientopoblacionalenColombia/Dashboard1',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Suicidios en Colombia 2023-2024',
    slogan: '',
    description: '',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/Suicidios-2023-2024/Dashboard12',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Llamadas totales al NUSE/123 por UPZ en Bogotá',
    slogan: '',
    description: '',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/LlamadastotalesalNUSEporUPZ/Vistadistrital',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Precios y productividad del arroz - Forecasting',
    slogan: '',
    description: '',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/Dashboardarroz/Dashboard1',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Sinestralidad vial en Bogotá - Forecasting',
    slogan: '',
    description: '',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/Siniestralidadvial-2019-2023V2-forecasting/SiniestralidadvialenBogotD_C_-Modelopredictivo-2019-2023',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Sinestralidad vial en Bogotá - Siniestros',
    slogan: '',
    description: '',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/Siniestralidadvial-2019-2023V2-Siniestros/SiniestralidadvialenBogotD_C_-2019-2023',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Sinestralidad vial en Bogotá - Víctimas',
    slogan: '',
    description: '',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/Siniestralidadvial-2019-2023V2-Vctimas/VctimasdelasiniestralidadvialenBogotD_C_-2019-2023',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Sinestralidad vial en Bogotá - Análisis espacial',
    slogan: '',
    description: '',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/Siniestralidadvial-2019-2023V2-Anlisisespacial/SiniestralidadvialenBogotD_C_-2019-2023-Anlisisespacial',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
  {
    segment: 'Sector Público',
    type: 'Dashboards & Analítica de datos',
    name: 'Llamadas totales al NUSE/123 por UPZ en Bogotá - Forecasting',
    slogan: '',
    description: '',
    status: 'En línea',
    demoMode: 'mostrar',
    appUrl: 'https://public.tableau.com/app/profile/juan.sotelo.aguilar/viz/LlamadasalNUSEporUPZ/VistaporUPZ',
    githubUrl: '',
    logo: 'assets/Govlab.png',
    videoUrl: '',
    pptUrl: '',
  },
];

// MEDIOS ya no se define aquÃ­ â€” se carga dinÃ¡micamente desde medios/medios.csv



// Estado de los filtros
let activeFilters = {
  segment: 'Todos',
  type: 'Todos los tipos',
  status: 'Todos'
};

// Opciones de filtros
const filterOptions = {
  segment: [
    'Todos',
    'Sector Privado',
    'Sector Público',
    'Transversal'
  ],
  type: [
    'Todos los tipos',
    'Asistentes de Voz con IA',
    'ChatBots & Automatización',
    'Dashboards & Analítica de datos',
    'Formación Profesional en IA',
    'Gestión Documental con IA',
    'Inteligencia Geoespacial',
    'Simuladores & Comunicación Política'
  ],
  status: ['Todos', 'En línea', 'En mantenimiento', 'Activo']
};

// --- Parsear CSV con separador ';' ---
// --- Parsear CSV con separador ';' ---
function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim() !== '');
  const headers = lines[0].split(';').map(h => h.trim());
  return lines.slice(1).map(line => {
    const cols = line.split(';');
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = (cols[i] || '').trim();
    });
    return obj;
  });
}

// --- Parsear fecha DD/MM/YYYY a objeto Date ---
function parseDate(str) {
  const parts = str.trim().split('/');
  if (parts.length !== 3) return new Date(0);
  const [d, m, y] = parts;
  return new Date(Number(y), Number(m) - 1, Number(d));
}

// --- Extraer dominio raíz de una URL (sin subdominios) ---
function getDomain(url) {
  try {
    const hostname = new URL(url).hostname; // e.g. "p.eprensa.com"
    const parts = hostname.split('.');
    // Keep last 2 parts normally (eprensa.com), or last 3 if it's a ccTLD like .com.co
    const ccTLDs = ['com', 'org', 'net', 'edu', 'gob', 'gov'];
    if (parts.length >= 3 && ccTLDs.includes(parts[parts.length - 2]) && parts[parts.length - 1].length === 2) {
      return parts.slice(-3).join('.'); // e.g. algo.com.co
    }
    return parts.slice(-2).join('.'); // e.g. eprensa.com
  } catch {
    return null;
  }
}

// --- Icono visual segun tipo de medio ---
function getMediaVisual(tipo, url) {
  const t = (tipo || '').trim().toLowerCase();

  if (t === 'internet') {
    const domain = getDomain(url);
    if (domain) {
      const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
      // onload: naturalWidth<=16 significa icono generico de Google -> mostrar periodico
      return `<img src="${faviconUrl}" alt="${domain}" class="media-favicon"
                        onload="if(this.naturalWidth<=16){this.style.display='none';this.nextElementSibling.style.display='flex';}"
                        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
                    <span class="media-type-icon media-icon-prensa" style="display:none;"><i data-lucide="newspaper"></i></span>`;
    }
    // Sin dominio valido -> periodico
    return `<span class="media-type-icon media-icon-prensa"><i data-lucide="newspaper"></i></span>`;
  }

  if (t === 'prensa') {
    return `<span class="media-type-icon media-icon-prensa"><i data-lucide="newspaper"></i></span>`;
  }

  if (t === 'tv') {
    return `<span class="media-type-icon media-icon-tv"><i data-lucide="tv-2"></i></span>`;
  }

  if (t === 'radio') {
    return `<span class="media-type-icon media-icon-radio"><i data-lucide="radio"></i></span>`;
  }

  // Fallback generico -> periodico
  return `<span class="media-type-icon media-icon-prensa"><i data-lucide="newspaper"></i></span>`;
}

// --- Estado global de medios ---
let allMedios = [];
let mediosFilters = { tipo: 'Todos', anio: 'Todos', medio: '', texto: '' };

document.addEventListener('DOMContentLoaded', async () => {
  initNavigation();
  initFilters();
  renderProducts(PRODUCTS);
  initModal();
  lucide.createIcons();

  // Cargar medios dinamicamente desde CSV (encoding Windows-1252)
  try {
    const response = await fetch('medios/medios.csv');
    const buffer = await response.arrayBuffer();
    const text = new TextDecoder('windows-1252').decode(buffer);
    const medios = parseCSV(text);

    // Ordenar de mas reciente a mas antiguo
    medios.sort((a, b) => parseDate(b.Fecha) - parseDate(a.Fecha));

    allMedios = medios;
    initMediosFilters(medios);
    applyMediosFilters();
  } catch (e) {
    console.warn('No se pudo cargar medios.csv:', e);
  }
});

// --- Inicializar filtros de medios ---
function initMediosFilters(medios) {
  // Poblar dropdown de medios (unicos, ordenados A-Z)
  const medioSelect = document.getElementById('medios-select-medio');
  const mediosUnicos = [...new Set(medios.map(m => (m.Medio || '').trim()))]
    .filter(Boolean).sort((a, b) => a.localeCompare(b, 'es'));
  mediosUnicos.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m;
    opt.textContent = m;
    medioSelect.appendChild(opt);
  });
  medioSelect.addEventListener('change', () => {
    mediosFilters.medio = medioSelect.value;
    applyMediosFilters();
  });

  // Pills de Tipo
  const tipos = ['Todos', ...new Set(medios.map(m => (m.Tipo || '').trim()).filter(Boolean))];
  const tipoContainer = document.getElementById('medios-filter-tipo');
  tipos.forEach(tipo => {
    const pill = document.createElement('span');
    pill.className = 'filter-pill' + (tipo === 'Todos' ? ' active' : '');
    pill.textContent = tipo;
    pill.addEventListener('click', () => {
      tipoContainer.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      mediosFilters.tipo = tipo;
      applyMediosFilters();
    });
    tipoContainer.appendChild(pill);
  });

  // Pills de Año (extraidos de las fechas, orden descendente)
  const anios = ['Todos', ...[...new Set(
    medios.map(m => (m.Fecha || '').trim().split('/')[2]).filter(Boolean)
  )].sort((a, b) => b - a)];
  const anioContainer = document.getElementById('medios-filter-anio');
  anios.forEach(anio => {
    const pill = document.createElement('span');
    pill.className = 'filter-pill' + (anio === 'Todos' ? ' active' : '');
    pill.textContent = anio;
    pill.addEventListener('click', () => {
      anioContainer.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      mediosFilters.anio = anio;
      applyMediosFilters();
    });
    anioContainer.appendChild(pill);
  });

  // Buscador de texto
  const searchInput = document.getElementById('medios-search-input');
  searchInput.addEventListener('input', () => {
    mediosFilters.texto = searchInput.value.trim().toLowerCase();
    applyMediosFilters();
  });
}

// --- Aplicar filtros y re-renderizar ---
function applyMediosFilters() {
  const filtered = allMedios.filter(m => {
    const tipo = (m.Tipo || '').trim();
    const medio = (m.Medio || '').trim();
    const titular = (m.Titular || '').toLowerCase();
    const anio = (m.Fecha || '').trim().split('/')[2] || '';

    const matchTipo = mediosFilters.tipo === 'Todos' || tipo === mediosFilters.tipo;
    const matchAnio = mediosFilters.anio === 'Todos' || anio === mediosFilters.anio;
    const matchMedio = !mediosFilters.medio || medio === mediosFilters.medio;
    const matchTexto = !mediosFilters.texto || titular.includes(mediosFilters.texto);

    return matchTipo && matchAnio && matchMedio && matchTexto;
  });

  renderMedios(filtered);

  // Actualizar contador
  const counter = document.getElementById('medios-counter');
  if (counter) {
    const total = allMedios.length;
    const shown = filtered.length;
    counter.textContent = shown === total
      ? 'Mostrando ' + total + ' apariciones'
      : 'Mostrando ' + shown + ' de ' + total + ' apariciones';
  }
}

// --- 1. NavegaciÃ³n ---
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.page-section');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinksContainer = document.querySelector('.nav-links');
  const ctaHero = document.getElementById('cta-hero');

  function navigateTo(targetId) {
    // Actualizar active state en links
    navLinks.forEach(l => l.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-link[data-target="${targetId}"]`);
    if (activeLink) activeLink.classList.add('active');

    // Actualizar active state en secciones
    sections.forEach(s => s.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');

    // Cerrar mobile menu
    navLinksContainer.classList.remove('open');

    // Scroll top suave
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navigateTo(e.target.dataset.target);
    });
  });

  if (ctaHero) {
    ctaHero.addEventListener('click', () => {
      navigateTo('seccion-que-hacemos');
    });
  }

  hamburgerBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('open');
  });
}

// --- 2. Renderizado de Productos ---
function renderProducts(productsToRender) {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';

  productsToRender.forEach(product => {
    const isTransversal = product.segment === 'Transversal';

    let statusClass = 'status-gray';
    const st = product.status ? product.status.toLowerCase().trim() : '';
    if (st === 'en línea') statusClass = 'status-online';
    if (st === 'en mantenimiento') statusClass = 'status-down';
    if (st === 'activo') statusClass = 'status-active';

    // Badge para programas académicos
    const typeBadgeText = isTransversal ? 'Programa Académico' : product.type;

    // Botones
    let buttonsHtml = '';

    if (!isTransversal) {
      // Presentación privada (proyectos de clínica)
      if (product.demoMode === 'ppt' && product.pptUrl) {
        buttonsHtml += `<a class="btn btn-primary" href="${product.pptUrl}" target="_blank" rel="noopener noreferrer"><i data-lucide="presentation"></i> Ver presentación</a>`;
      } else if (product.demoMode === 'solicitar') {
        buttonsHtml += `<button class="btn btn-outline" onclick="openModal()"><i data-lucide="message-square"></i> Solicitar demo</button>`;
      } else {
        // Botón App / Tableau
        const isTableau = product.appUrl && product.appUrl.includes('tableau.com');
        const btnLabel = isTableau ? 'Ver Dashboard' : 'Ver App';
        const btnIcon = isTableau ? 'bar-chart-2' : 'external-link';
        const appDisabled = !product.appUrl ? 'disabled' : '';
        const appTitle = !product.appUrl
          ? 'No disponible'
          : (product.status.toLowerCase() === 'en mantenimiento' ? 'Esta aplicación puede estar temporalmente inactiva' : '');

        const btnContent = `<button class="btn btn-primary" ${appDisabled} ${product.appUrl ? `onclick="window.open('${product.appUrl}', '_blank')"` : ''}><i data-lucide="${btnIcon}"></i> ${btnLabel}</button>`;
        buttonsHtml += appTitle
          ? `<div class="tooltip-wrapper" title="${appTitle}">${btnContent}</div>`
          : btnContent;
      }

      // Botón GitHub
      if (product.githubUrl) {
        const iconGithub = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
        buttonsHtml += `<button class="btn btn-outline btn-github" onclick="window.open('${product.githubUrl}', '_blank')">${iconGithub} Código</button>`;
      }


      // Botón video demo (Drive)
      if (product.videoUrl) {
        buttonsHtml += `<button class="btn btn-outline" onclick="window.open('${product.videoUrl}', '_blank')"><i data-lucide="play-circle"></i> Ver demo</button>`;
      }
    } else if (product.appUrl) {
      // Programa académico: enlace a la página del programa
      buttonsHtml += `<a class="btn btn-primary" href="${product.appUrl}" target="_blank" rel="noopener noreferrer"><i data-lucide="external-link"></i> Ver programa</a>`;
    }

    const card = document.createElement('div');
    card.className = 'product-card module-card';
    // Logo: use product.logo, fallback to GovLab logo
    const logoSrc = product.logo || 'assets/Govlab.png';

    // Only show desc toggle if description is non-empty
    const hasDesc = product.description && product.description.trim().length > 0;
    const descToggle = hasDesc ? `
            <button class="desc-toggle" onclick="(function(btn){
                var desc = btn.previousElementSibling;
                var isOpen = desc.classList.toggle('expanded');
                btn.classList.toggle('open', isOpen);
                btn.querySelector('span').textContent = isOpen ? 'Ver menos' : 'Ver más';
            })(this)" aria-label="Expandir descripción">
                <span>Ver más</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>` : '';

    card.innerHTML = `
            <div class="card-header">
                <img src="${logoSrc}" alt="Logo ${product.name}" class="card-logo"
                     onerror="this.onerror=null;this.src='assets/Govlab.png'">
                <span class="status-badge ${statusClass}">${product.status}</span>
            </div>
            <span class="type-badge">${typeBadgeText}</span>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-slogan">${product.slogan}</p>
            <p class="product-desc">${product.description}</p>
            ${descToggle}
            <div class="card-actions">
                ${buttonsHtml}
            </div>
        `;
    grid.appendChild(card);
  });


  // Actualizar contador
  document.getElementById('results-counter').innerText = `Mostrando ${productsToRender.length} de ${PRODUCTS.length} productos`;

  // Re-iniciar iconos para los nuevos elementos en el DOM
  lucide.createIcons();

  // Aplicar visibilidad actual de los botones GitHub
  setGithubVisibility(githubVisible);
}

// --- 2.5 Renderizado de Medios ---
function renderMedios(mediosToRender) {
  const grid = document.getElementById('medios-grid');
  if (!grid) return;
  grid.innerHTML = '';

  mediosToRender.forEach(media => {
    const fecha = (media.Fecha || media.fecha || '').trim();
    const medio = (media.Medio || media.medio || '').trim();
    const titular = (media.Titular || media.titular || '').trim();
    const url = (media.URL || media.url || '').trim();
    const tipo = (media.Tipo || media.tipo || '').trim();

    const card = document.createElement('div');
    card.className = 'media-card';

    const visualContent = getMediaVisual(tipo, url);

    const btnHtml = url
      ? `<button class="btn btn-outline" onclick="window.open('${url}', '_blank')"><i data-lucide="external-link"></i> Leer articulo</button>`
      : `<button class="btn btn-outline" disabled>Sin enlace</button>`;

    // Badge de tipo con color segun categoria
    const tipoBadgeClass = {
      'internet': 'tipo-internet',
      'prensa': 'tipo-prensa',
      'tv': 'tipo-tv',
      'radio': 'tipo-radio'
    }[tipo.toLowerCase()] || 'tipo-prensa';

    card.innerHTML = `
            <div class="media-visual">
                ${visualContent}
            </div>
            <div class="media-content">
                <div class="media-meta">
                    <span class="media-tipo-badge ${tipoBadgeClass}">${tipo}</span>
                    <span class="media-date"><i data-lucide="calendar" style="width:12px;height:12px;display:inline-block;margin-right:4px;"></i>${fecha}</span>
                </div>
                <div class="media-source">${medio}</div>
                <h3 class="media-title">${titular}</h3>
                <div class="card-actions">
                    ${btnHtml}
                </div>
            </div>
        `;
    grid.appendChild(card);
  });

  lucide.createIcons();
}

// --- 3. Filtros ---
function initFilters() {
  renderFilterGroup('filter-segment', filterOptions.segment, 'segment');
  renderFilterGroup('filter-type', filterOptions.type, 'type');
  renderFilterGroup('filter-status', filterOptions.status, 'status');
}

function renderFilterGroup(containerId, options, filterKey) {
  const container = document.getElementById(containerId);

  options.forEach(option => {
    const pill = document.createElement('span');
    pill.className = `filter-pill ${activeFilters[filterKey].toLowerCase() === option.toLowerCase() ? 'active' : ''}`;
    pill.innerText = option;

    pill.addEventListener('click', () => {
      // Actualizar UI del filtro
      container.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      // Actualizar estado y filtrar
      activeFilters[filterKey] = option;
      applyFilters();
    });

    container.appendChild(pill);
  });
}

function applyFilters() {
  const filtered = PRODUCTS.filter(product => {
    const matchSegment = activeFilters.segment === 'Todos' || product.segment.toLowerCase() === activeFilters.segment.toLowerCase();
    const matchType = activeFilters.type === 'Todos los tipos' || product.type.toLowerCase() === activeFilters.type.toLowerCase();
    const matchStatus = activeFilters.status === 'Todos' || product.status.toLowerCase() === activeFilters.status.toLowerCase();

    return matchSegment && matchType && matchStatus;
  });

  renderProducts(filtered);
}

// --- 4. Modal de Video ---
function initModal() {
  const modal = document.getElementById('modal-video');
  const closeBtn = modal.querySelector('.modal-close');
  const overlay = modal.querySelector('.modal-overlay');

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

function openModal() {
  const modal = document.getElementById('modal-video');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevenir scroll
}

function closeModal() {
  const modal = document.getElementById('modal-video');
  modal.classList.add('hidden');
  document.body.style.overflow = ''; // Restaurar scroll
}

// ─── GitHub buttons: ocultos por defecto, Ctrl+M para revelar ─────────────────
let githubVisible = false;

function setGithubVisibility(visible) {
  githubVisible = visible;
  document.querySelectorAll('.btn-github').forEach(btn => {
    btn.style.display = visible ? '' : 'none';
  });
}

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'm') {
    e.preventDefault();
    setGithubVisibility(!githubVisible);
  }
});

// Ocultar al cargar (después de que se rendericen las tarjetas)
document.addEventListener('DOMContentLoaded', () => {
  // Se llama con un pequeño delay para asegurarse de que las tarjetas ya están en el DOM
  setTimeout(() => setGithubVisibility(false), 300);
});
