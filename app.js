// app.js

const PRODUCTS = [
    {
      id: 'cuidar-la-democracia',
      segment: 'PÚBLICO (Educación y Salud)',
      type: 'Dashboards & Analítica de datos',
      name: 'Cuidar la Democracia',
      slogan: 'Visualiza lo que piensa el ciudadano',
      description: 'Dashboard interactivo con datos de encuesta sobre percepciones democráticas en Colombia (INVAMER/GovLab). Filtros sociodemográficos, mapas y gráficos en tiempo real.',
      status: 'En línea',
      appUrl: 'https://cuidar-la-democracia-production.up.railway.app/',
      githubUrl: 'https://github.com/Juansotag/Cuidar-la-Democracia',
    },
    {
      id: 'data-promce-fondecun',
      segment: 'PÚBLICO (Educación y Salud)',
      type: 'Dashboards & Analítica de datos',
      name: 'Data Promce (Fondecun)',
      slogan: 'Sigue cada institución, mide cada etapa',
      description: 'Plataforma de seguimiento del programa FONDECUN en IEDs de Cundinamarca. Mapa de calor, Sankey, análisis cualitativo con IA y exportación a PDF/Excel.',
      status: 'En línea',
      appUrl: 'https://fondecun-production.up.railway.app/',
      githubUrl: 'https://github.com/GovLabSabana/FONDECUN',
    },
    {
      id: 'barranquilla',
      segment: 'PÚBLICO (Educación y Salud)',
      type: 'Dashboards & Analítica de datos',
      name: 'Barranquilla',
      slogan: 'Predice la criminalidad, protege la ciudad',
      description: 'App web para subir, analizar y predecir eventos de criminalidad y convivencia ciudadana. Diseñada para el Observatorio de Criminalidad de Barranquilla.',
      status: 'En línea',
      appUrl: 'https://barranquilla-production.up.railway.app/',
      githubUrl: 'https://github.com/GovLabSabana/Barranquilla',
    },
    {
      id: 'appclínica-sch3',
      segment: 'PÚBLICO (Educación y Salud)',
      type: 'Dashboards & Analítica de datos',
      name: 'AppClínica (SCH3)',
      slogan: 'Anticipa la demanda, optimiza los recursos',
      description: 'Sistema ML para identificar y predecir el número de pacientes NO-EPS y su facturación semanal en la Clínica Universidad de la Sabana.',
      status: 'NA',
      appUrl: null,
      githubUrl: 'https://github.com/GovLabSabana/AppClinica',
    },
    {
      id: 'geoanálisis-clínica',
      segment: 'PÚBLICO (Educación y Salud)',
      type: 'Dashboards & Analítica de datos',
      name: 'Geoanálisis Clínica',
      slogan: 'Encuentra al paciente antes de que llegue',
      description: 'Análisis predictivo geoespacial de la ubicación de potenciales clientes NO-EPS de la Clínica Universidad de la Sabana.',
      status: 'NA',
      appUrl: null,
      githubUrl: 'https://github.com/GovLabSabana/Geoanalisis_clinica',
    },
    {
      id: 'car-pqrs',
      segment: 'PÚBLICO (Educación y Salud)',
      type: 'Automatización con IA',
      name: 'CAR-PQRS',
      slogan: 'De la PQRS al ciudadano en segundos',
      description: 'Asistente en texto para la CAR Cundinamarca: recibe, categoriza, visualiza y responde PQRS automáticamente con IA.',
      status: 'En línea',
      appUrl: 'https://car-pqrs-production.up.railway.app/',
      githubUrl: 'https://github.com/GovLabSabana/CAR-pqrs',
    },
    {
      id: 'alcaldia',
      segment: 'PÚBLICO (Educación y Salud)',
      type: 'Automatización con IA',
      name: 'AlcaldIA',
      slogan: 'El Plan de Desarrollo en tus manos',
      description: 'Asistente RAG sobre el Plan de Desarrollo Distrital de Bogotá. Búsqueda semántica con FAISS + GPT-4o. Respuestas por objetivo, programa y presupuesto.',
      status: 'En línea',
      appUrl: 'https://alcadia.up.railway.app/',
      githubUrl: 'https://github.com/GovLabSabana/AlcaldIA',
    },
    {
      id: 'asistente-ia-cajicá',
      segment: 'PÚBLICO (Educación y Salud)',
      type: 'Automatización con IA',
      name: 'Asistente IA Cajicá',
      slogan: 'Pregúntale al municipio, él te responde',
      description: 'Asistente de voz en tiempo real sobre el Plan de Desarrollo de Cajicá 2024-2027. OpenAI Realtime API + LiveKit + WebRTC.',
      status: 'En mantenimiento',
      appUrl: 'https://asistente-virtual-cajica.up.railway.app/',
      githubUrl: 'https://github.com/GovLabSabana/cajica',
    },
    {
      id: 'policiapp-eco',
      segment: 'PÚBLICO (Educación y Salud)',
      type: 'Automatización con IA',
      name: 'PoliciApp-Eco',
      slogan: 'La ley ambiental en campo',
      description: 'Asistente IA de legislación ambiental colombiana para la Policía Ambiental y Carabineros. Cubre pesca, flora, fauna, minería y recursos hídricos.',
      status: 'En mantenimiento',
      appUrl: 'https://policiaambiental-production.up.railway.app/',
      githubUrl: 'https://github.com/GovLabSabana/PoliciApp-Eco2',
    },
    {
      id: 'legischeck',
      segment: 'PÚBLICO (Educación y Salud)',
      type: 'Automatización con IA',
      name: 'LegisCheck',
      slogan: 'Dos versiones, un solo vistazo',
      description: 'Comparación inteligente de documentos legislativos. Diff semántico con GPT-4, línea de tiempo con hitos y reportes descargables en PDF.',
      status: 'En mantenimiento',
      appUrl: null,
      githubUrl: 'https://github.com/GovLabSabana/Paralelo',
    },
    {
      id: 'pitchlab360',
      segment: 'PÚBLICO (Educación y Salud)',
      type: 'Simuladores & Comunicación Política',
      name: 'PitchLab360',
      slogan: 'Analiza el discurso, mejora el mensaje',
      description: 'Análisis de discurso político con Claude (Anthropic). Perfil comunicativo, análisis emocional, stakeholders, encuadres narrativos y potencial digital.',
      status: 'En línea',
      appUrl: 'https://pitchlab360-production.up.railway.app/',
      githubUrl: 'https://github.com/Juansotag/PitchLab360',
    },
    {
      id: 'polycheck',
      segment: 'PÚBLICO (Educación y Salud)',
      type: 'Simuladores & Comunicación Política',
      name: 'Polycheck',
      slogan: 'Verifica en tiempo real, no después',
      description: 'Extensión de Chrome para fact-checking en tiempo real sobre videos de YouTube. GPT-4o + Gemini + Google Search. Análisis forense del discurso político.',
      status: 'En línea',
      appUrl: null,
      githubUrl: 'https://github.com/Juansotag/Polycheck',
    },
    {
      id: 'test-dilema',
      segment: 'PÚBLICO (Educación y Salud)',
      type: 'Simuladores & Comunicación Política',
      name: 'Test Dilema',
      slogan: 'Descubre tu candidato con datos',
      description: 'Test de afinidad política por dilemas de política pública. 16 preguntas, 14 candidatos 2026, 7 arquetipos de votante. Tarjeta viral descargable.',
      status: 'En línea',
      appUrl: 'https://convergencia-electoral.up.railway.app/',
      githubUrl: 'https://github.com/GovLabSabana/test-dilema',
    },
    {
      id: 'test-9-ejes',
      segment: 'PÚBLICO (Educación y Salud)',
      type: 'Simuladores & Comunicación Política',
      name: 'Test 9 Ejes',
      slogan: 'Tu posición en 9 ejes, tu candidato en un clic',
      description: 'Test de afinidad política por 9 ejes ideológicos. Algoritmo euclidiano, ranking de candidatos, perfil personalizado y persistencia en Supabase.',
      status: 'En línea',
      appUrl: 'https://test9ejes.up.railway.app/',
      githubUrl: 'https://github.com/GovLabSabana/Test_9ejes',
    },
    {
      id: 'test-9-ejes-colombia',
      segment: 'PÚBLICO (Educación y Salud)',
      type: 'Simuladores & Comunicación Política',
      name: 'Test 9 Ejes Colombia',
      slogan: '50 preguntas, un perfil ideológico',
      description: 'Versión extendida del test con 50 preguntas coyunturales sobre Colombia. Modo oscuro glassmorphism, compartir en alta resolución, datos anónimos en Supabase.',
      status: 'En línea',
      appUrl: 'https://test9col.up.railway.app/',
      githubUrl: 'https://github.com/GovLabSabana/Test_9ejesColombia',
    },
    {
      id: 'scs-v2',
      segment: 'PÚBLICO (Educación y Salud)',
      type: 'Matching & Análisis Estratégico',
      name: 'SCS_V2',
      slogan: 'Conecta proyectos con planes de desarrollo',
      description: 'Matching entre proyectos estratégicos de Sabana Centro y planes de desarrollo municipales. Scoring semántico con IA: especificidad, visión regional e impacto.',
      status: 'En línea',
      appUrl: null,
      githubUrl: 'https://github.com/GovLabSabana/SCS_V2',
      demoMode: 'solicitar',
    },
    {
      id: 'convergencelab',
      segment: 'OTRAS INDUSTRIAS',
      type: 'Asistentes de Voz con IA',
      name: 'ConvergenceLab',
      slogan: 'Habla con la universidad, ella te escucha',
      description: 'Asistente de voz en tiempo real para el Convergence Lab de la Unisabana. LiveKit Agents + OpenAI Realtime API + Silero VAD. Frontend Next.js.',
      status: 'En línea',
      appUrl: 'https://convergencelab.up.railway.app/',
      githubUrl: 'https://github.com/GovLabSabana/ConvergenceLAb',
    },
    {
      id: 'santander-govi',
      segment: 'OTRAS INDUSTRIAS',
      type: 'Asistentes de Voz con IA',
      name: 'Santander (Govi)',
      slogan: 'Un asistente público para cada ciudadano',
      description: 'Asistente de voz conversacional para el sector público. Procesamiento de PQRS, visualización de datos, interfaz para funcionarios. OpenAI Realtime + LiveKit.',
      status: 'En línea',
      appUrl: null,
      githubUrl: 'https://github.com/GovLabSabana/Santander',
    },
    {
      id: 'asistente-de-campaña',
      segment: 'OTRAS INDUSTRIAS',
      type: 'Asistentes de Voz con IA',
      name: 'Asistente de Campaña',
      slogan: 'La campaña que llama, nunca la que cansa',
      description: 'Video de muestra con Dapta para llamadas de voz automatizadas a ciudadanos con preguntas sobre candidatos políticos.',
      status: 'NA',
      appUrl: null,
      githubUrl: null,
    },
    {
      id: 'termoexportador',
      segment: 'OTRAS INDUSTRIAS',
      type: 'ChatBots & Automatización',
      name: 'TermoExportador',
      slogan: '¿Listo para exportar? Descúbrelo hoy',
      description: 'Plataforma con termómetro interactivo que evalúa el nivel de preparación exportadora de empresas. Diagnóstico por dimensiones con IA. Next.js + FastAPI + Supabase.',
      status: 'En línea',
      appUrl: 'https://exporta-facil-bot-production-e49c.up.railway.app/',
      githubUrl: 'https://github.com/GovLabSabana/TermoExportador',
    },
    {
      id: 'universia',
      segment: 'OTRAS INDUSTRIAS',
      type: 'ChatBots & Automatización',
      name: 'Universia',
      slogan: 'Mide tu sostenibilidad, mejora tu ranking',
      description: 'Sistema de evaluación universitaria en dimensiones Gobernanza, Social y Ambiental (ESG). Dashboard comparativo entre instituciones. React + Node + Supabase.',
      status: 'En línea',
      appUrl: 'https://bot-sostenibilidad-esg.up.railway.app/',
      githubUrl: 'https://github.com/GovLabSabana/Universia',
      demoMode: 'solicitar',
    },
    {
      id: 'geovivienda',
      segment: 'OTRAS INDUSTRIAS',
      type: 'Inteligencia Geoespacial',
      name: 'Geovivienda',
      slogan: 'Ubica, analiza y decide dónde vivir',
      description: 'Plataforma inmobiliaria con análisis geoespacial: scraping de FincaRaíz, distancias a Transmilenio/SITP/ciclorutas, estrato promedio 200m, mapa interactivo con Leaflet.',
      status: 'En línea',
      appUrl: 'https://geovivienda-production.up.railway.app/',
      githubUrl: 'https://github.com/GovLabSabana/Geovivienda',
      demoMode: 'solicitar',
    },
    {
      id: 'data-copilot',
      segment: 'OTRAS INDUSTRIAS',
      type: 'Analítica de Datos & ML',
      name: 'Data Copilot',
      slogan: 'Pregúntale a tus datos con tu propia voz',
      description: 'Asistente de análisis de datos con LangChain + GPT-4 + Whisper. Acepta CSV/Excel, genera gráficos interactivos con Plotly, responde por texto y por voz (TTS).',
      status: 'En línea',
      appUrl: 'https://datacopilot.up.railway.app/',
      githubUrl: 'https://github.com/GovLabSabana/Data_copilot',
      demoMode: 'solicitar',
    },
    {
      id: 'hassapp',
      segment: 'OTRAS INDUSTRIAS',
      type: 'Analítica de Datos & ML',
      name: 'HassApp',
      slogan: 'Del campo al mundo, con datos',
      description: 'Plataforma integral para gestión de producción, cosecha, insumos y exportación de aguacate Hass. FastAPI + React + MySQL + AWS S3.',
      status: 'En línea',
      appUrl: 'https://heartfelt-success-production-8486.up.railway.app/',
      githubUrl: 'https://github.com/GovLabSabana/HassApp',
      demoMode: 'solicitar',
    },
    {
      id: 'notariadoc',
      segment: 'OTRAS INDUSTRIAS',
      type: 'Gestión Documental con IA',
      name: 'NotariaDoc',
      slogan: 'El borrador perfecto, sin esperas',
      description: 'MVP para construir borradores de escrituras, análisis de cumplimiento y chat IA para notarías.',
      status: 'En línea',
      appUrl: 'https://notariadoc-production.up.railway.app/',
      githubUrl: 'https://github.com/GovLabSabana/NotariaDoc',
    },
    {
      id: 'notariaiq',
      segment: 'OTRAS INDUSTRIAS',
      type: 'Gestión Documental con IA',
      name: 'NotariaIQ',
      slogan: 'Control total de la notaría en un panel',
      description: 'Panel de control para notarías: seguimiento de usuarios, tiempos de espera, ingresos, egresos, análisis descriptivo y pronóstico.',
      status: 'En línea',
      appUrl: 'https://notariaiq-production.up.railway.app/',
      githubUrl: 'https://github.com/GovLabSabana/NotariaIQ',
    },
    {
      id: 'radica-notaría',
      segment: 'OTRAS INDUSTRIAS',
      type: 'Gestión Documental con IA',
      name: 'Radica Notaría',
      slogan: 'Radica, revisa y aprueba sin papel',
      description: 'Suite de automatización documental para la Notaría Segunda de Zipaquirá. Formulario para constructoras + panel de digitadora con flujo de aprobación de escrituras.',
      status: 'En línea',
      appUrl: 'https://radicanotaria-production.up.railway.app/',
      githubUrl: 'https://github.com/GovLabSabana/Radica_notaria',
    },
    {
      id: 'doctorado-en-ia',
      segment: 'TRANSVERSAL',
      type: 'Formación Profesional en IA',
      name: 'Doctorado en IA',
      slogan: 'Investiga el futuro, lidera el cambio',
      description: 'Programa doctoral de investigación en inteligencia artificial. Enfocado en soluciones para el sector público y políticas basadas en evidencia.',
      status: 'Activo',
      appUrl: null,
      githubUrl: null,
    },
    {
      id: 'maestría-en-ia',
      segment: 'TRANSVERSAL',
      type: 'Formación Profesional en IA',
      name: 'Maestría en IA',
      slogan: 'Domina la IA, transforma tu sector',
      description: 'Programa de posgrado en inteligencia artificial con énfasis en aplicaciones para gobierno, política pública y gestión organizacional.',
      status: 'Activo',
      appUrl: null,
      githubUrl: null,
    },
    {
      id: 'pregrado-en-ia',
      segment: 'TRANSVERSAL',
      type: 'Formación Profesional en IA',
      name: 'Pregrado en IA',
      slogan: 'Aprende IA desde la raíz',
      description: 'Programa de pregrado en inteligencia artificial de la Universidad de La Sabana. Formación integral en datos, modelos y aplicaciones.',
      status: 'Activo',
      appUrl: null,
      githubUrl: null,
    },
    {
      id: 'bootcamps-en-ia',
      segment: 'TRANSVERSAL',
      type: 'Formación Profesional en IA',
      name: 'Bootcamps en IA',
      slogan: 'Habilidades reales, en tiempo récord',
      description: 'Programas de formación técnica intensiva en IA para profesionales y equipos. Orientados a aplicaciones prácticas en distintos sectores.',
      status: 'Activo',
      appUrl: null,
      githubUrl: null,
    },
];

const MEDIOS = [
    {
      fecha: '24/02/2025',
      medio: 'eltiempo.com',
      titular: 'Opinión Omar Oróstegui | Galán versus Petro: una pelea con muchas batallas por delante',
      url: 'https://www.eltiempo.com/bogota/columna-de-ppinion-omar-orostegui-galan-versus-petro-una-pelea-con-muchas-batallas-por-delante-3429649',
      tipo: 'Internet',
    },
    {
      fecha: '16/02/2025',
      medio: 'eltiempo.com',
      titular: 'Aumento de la tarifa de gas: un golpe duro a la economía bogotana',
      url: 'https://www.eltiempo.com/bogota/aumento-de-la-tarifa-de-gas-un-golpe-duro-a-la-economia-bogotana-3427489',
      tipo: 'Internet',
    },
    {
      fecha: '15/02/2025',
      medio: 'eltiempo.com',
      titular: 'Gas natural: el nuevo golpe al bolsillo de los bogotanos',
      url: 'https://www.eltiempo.com/bogota/alzas-de-los-costos-del-gas-natural-el-nuevo-golpe-al-bolsillo-de-los-bogotanos-3427275',
      tipo: 'Internet',
    },
    {
      fecha: '9/03/2025',
      medio: 'eltiempo.com',
      titular: 'La estrategia de Galán por recuperar el espacio público y regular las ventas ambulantes / Opinión',
      url: 'https://www.eltiempo.com/bogota/la-estrategia-de-galan-por-recuperar-el-espacio-publico-y-regular-las-ventas-ambulantes-3433788',
      tipo: 'Internet',
    },
    {
      fecha: '10/03/2025',
      medio: 'eltiempo.com',
      titular: 'Presidente Petro decidió que Ecopetrol intervendrá la importación de gas y comprará a Catar: ¿por qué?',
      url: 'https://www.eltiempo.com/politica/gobierno/presidente-petro-ordena-a-ecopetrol-comprar-gas-a-catar-el-monopolio-de-la-importacion-se-acaba-3434027',
      tipo: 'Internet',
    },
    {
      fecha: '16/03/2025',
      medio: 'eltiempo.com',
      titular: 'Opinión Omar Oróstegui | San Bernardo, una de las varias zonas donde el poder criminal desafía al Estado',
      url: 'https://www.eltiempo.com/bogota/opinion-omar-orostegui-san-bernardo-una-de-las-varias-zonas-donde-el-poder-criminal-desafia-al-estado-3435912',
      tipo: 'Internet',
    },
    {
      fecha: '30/03/2025',
      medio: 'eltiempo.com',
      titular: 'Columna de opinión Omar Oróstegui:Bogotá, inundada por la acumulación de basuras.',
      url: 'https://www.eltiempo.com/bogota/bogota-inundada-por-la-acumulacion-de-basuras-en-las-calles-3439867',
      tipo: 'Internet',
    },
    {
      fecha: '6/04/2025',
      medio: 'eltiempo.com',
      titular: 'Parques públicos: entre juegos y excrementos / Opinión',
      url: 'https://www.eltiempo.com/bogota/parques-publicos-entre-juegos-y-excrementos-3442206',
      tipo: 'Internet',
    },
    {
      fecha: '7/04/2025',
      medio: 'eltiempo.com',
      titular: 'El reproche del presidente Petro a Ricardo Roa por importación de gas de Ecopetrol: \'Hermano, no entiendo\'',
      url: 'https://www.eltiempo.com/politica/gobierno/el-reproche-del-presidente-petro-a-ricardo-roa-por-importacion-de-gas-de-ecopetrol-hermano-no-entiendo-3442637',
      tipo: 'Internet',
    },
    {
      fecha: '19/04/2025',
      medio: 'eltiempo.com',
      titular: 'El riesgoso aumento de ciclomotores, vehículos pequeños y hechizos para la seguridad vial en la ciudad',
      url: 'https://www.eltiempo.com/bogota/el-riesgoso-aumento-de-ciclomotores-vehiculos-pequenos-y-hechizos-para-la-seguridad-vial-en-la-ciudad-3446043',
      tipo: 'Internet',
    },
    {
      fecha: '23/04/2025',
      medio: 'eltiempo.com',
      titular: 'Pobreza multidimensional en Bogotá: hay 148.000 personas más en esa condición, ¿cuáles son las causas del aumento?',
      url: 'https://www.eltiempo.com/bogota/pobreza-multidimensional-en-bogota-hay-184-000-personas-mas-en-esa-condicion-cuales-son-las-causas-3447431',
      tipo: 'Internet',
    },
    {
      fecha: '27/04/2025',
      medio: 'eltiempo.com',
      titular: 'Columna de opinión: ¿rumba hasta las 5 a. m.? Una decisión que merece algo más que entusiasmo',
      url: 'https://www.eltiempo.com/bogota/columna-de-opinion-rumba-hasta-las-5-a-m-una-decision-que-merece-algo-mas-que-entusiasmo-3448509',
      tipo: 'Internet',
    },
    {
      fecha: '3/05/2025',
      medio: 'eltiempo.com',
      titular: 'Bogotá 24 horas: una apuesta que no cuaja',
      url: 'https://www.eltiempo.com/bogota/bogota-24-horas-una-apuesta-que-no-cuaja-3450299',
      tipo: 'Internet',
    },
    {
      fecha: '3/05/2025',
      medio: 'eltiempo.com',
      titular: '¿Qué está pasando en Bogotá? Galán, metro, cortes de energía y rumba',
      url: 'https://www.eltiempo.com/videos-eltiempo/que-esta-pasando-en-bogota-galan-metro-cortes-de-energia-y-rumba-3450285',
      tipo: 'Internet',
    },
    {
      fecha: '4/05/2025',
      medio: 'eltiempo.com',
      titular: 'Columna de opinión: conciertos impulsan a Bogotá, pero falta estrategia para aprovechar su potencial',
      url: 'https://www.eltiempo.com/bogota/columna-de-opinion-conciertos-impulsan-a-bogota-pero-falta-estrategia-para-aprovechar-su-potencial-3450441',
      tipo: 'Internet',
    },
    {
      fecha: '5/05/2025',
      medio: 'eltiempo.com',
      titular: 'Una masacre y un asalto a ciclistas se suman a crisis de seguridad de Bogotá, ¿qué está pasando?',
      url: 'https://www.eltiempo.com/bogota/una-masacre-y-un-asalto-a-ciclistas-se-suman-a-crisis-de-seguridad-de-bogota-que-esta-pasando-3450830',
      tipo: 'Internet',
    },
    {
      fecha: '11/05/2025',
      medio: 'eltiempo.com',
      titular: 'Opinión | Ellas solas: la otra cara de los hogares bogotanos',
      url: 'https://www.eltiempo.com/bogota/ellas-solas-la-otra-cara-de-los-hogares-bogotanos-3452713',
      tipo: 'Internet',
    },
    {
      fecha: '18/05/2025',
      medio: 'eltiempo.com',
      titular: 'Opinión| El metro como galería: una oportunidad para el grafiti bogotano',
      url: 'https://www.eltiempo.com/bogota/opinion-el-metro-como-galeria-una-oportunidad-para-el-grafiti-bogotano-3454985',
      tipo: 'Internet',
    },
    {
      fecha: '24/05/2025',
      medio: 'eltiempo.com',
      titular: 'Bogotá es una ciudad ruidosa: cerca de 1.000 reportes al día al 123 lo confirman',
      url: '',
      tipo: 'Internet',
    },
    {
      fecha: '8/06/2025',
      medio: 'eltiempo.com',
      titular: 'Columna de opinión Omar Oróstegui |La violencia irrumpe en la campaña política',
      url: 'https://www.eltiempo.com/bogota/la-violencia-irrumpe-en-la-campana-politica-3461460',
      tipo: 'Internet',
    },
    {
      fecha: '6/07/2025',
      medio: 'eltiempo.com',
      titular: 'Micromovilidad sin reglas claras: una ley que llega tarde y complica más de lo que resu',
      url: 'https://www.eltiempo.com/bogota/micromovilidad-sin-reglas-claras-una-ley-que-llega-tarde-y-complica-mas-de-lo-que-resuelve-3469438',
      tipo: 'Internet',
    },
    {
      fecha: '13/07/2025',
      medio: 'eltiempo.com',
      titular: 'Columna de opinión | El lío con los Emberás y el silencio del Gobierno nacional',
      url: 'https://www.eltiempo.com/bogota/el-lio-con-los-emberas-y-el-silencio-del-gobierno-nacional-3471596',
      tipo: 'Internet',
    },
    {
      fecha: '3/08/2025',
      medio: 'eltiempo.com',
      titular: 'Opinión: Los regalos que Bogotá se merece',
      url: 'https://www.eltiempo.com/bogota/opinion-los-regalos-que-bogota-se-merece-3477977',
      tipo: 'Internet',
    },
    {
      fecha: '6/08/2025',
      medio: 'eltiempo.com',
      titular: 'Tres años del gobierno Petro: una relación de tensiones frecuentes y poco apoyo a Bogotá',
      url: '',
      tipo: 'Internet',
    },
    {
      fecha: '10/08/2025',
      medio: 'eltiempo.com',
      titular: 'Columna de opinión | Alumbrado público: el debate que nunca se apaga',
      url: 'https://www.eltiempo.com/bogota/alumbrado-publico-el-debate-que-nunca-se-apaga-3480004',
      tipo: 'Internet',
    },
    {
      fecha: '18/08/2025',
      medio: 'eltiempo.com',
      titular: 'Opinión: El costo de no tener baños públicos',
      url: 'https://www.eltiempo.com/bogota/opinion-el-costo-de-no-tener-banos-publicos-3482423',
      tipo: 'Internet',
    },
    {
      fecha: '22/08/2025',
      medio: 'eltiempo.com',
      titular: 'Patinetas eléctricas en Bogotá: entre el riesgo por la inseguridad y el aumento de usuarios',
      url: 'https://www.eltiempo.com/bogota/patinetas-electricas-en-bogota-entre-el-riesgo-por-la-inseguridad-y-el-aumento-de-usuarios-3483984',
      tipo: 'Internet',
    },
    {
      fecha: '7/09/2025',
      medio: 'eltiempo.com',
      titular: 'Columna de opinión Ómar Oróstegui | Bogotá, atrapada en el tráfico',
      url: 'https://www.eltiempo.com/bogota/columna-de-opinion-omar-orostegui-bogota-atrapada-en-el-trafico-3488528',
      tipo: 'Internet',
    },
    {
      fecha: '21/09/2025',
      medio: 'eltiempo.com',
      titular: 'Opinión | Manifestaciones de moteros, presión política disfrazada de protesta ciudadana',
      url: 'https://www.eltiempo.com/bogota/opinion-manifestaciones-de-moteros-presion-politica-disfrazada-de-protesta-ciudadana-3492698',
      tipo: 'Internet',
    },
    {
      fecha: '20/09/2025',
      medio: 'eltiempo.com',
      titular: 'Así se mueve el gremio de moteros que protestó y bloqueó varias vías en Bogotá: coordinan hostigamientos y agresiones',
      url: 'https://www.eltiempo.com/bogota/asi-se-mueve-el-gremio-de-moteros-que-protesto-y-bloqueo-varias-vias-en-bogota-coordinan-hostigamientos-y-agresiones-3492467',
      tipo: 'Internet',
    },
    {
      fecha: '17/09/2025',
      medio: 'eltiempo.com',
      titular: 'Duros cuestionamientos a las alcaldías locales: ¿Qué hay detrás del debate?, ¿llegó el momento de repensar esas figuras?',
      url: 'https://www.eltiempo.com/bogota/duros-cuestionamientos-a-las-alcaldias-locales-que-hay-detras-del-debate-llego-el-momento-de-repensar-esas-figuras-3491698',
      tipo: 'Internet',
    },
    {
      fecha: '14/09/2025',
      medio: 'eltiempo.com',
      titular: 'Opinión | El retorno de los Emberás: un regreso con fecha de vencimiento',
      url: 'https://www.eltiempo.com/bogota/opinion-el-retorno-de-los-emberas-un-regreso-con-fecha-de-vencimiento-3490627',
      tipo: 'Internet',
    },
    {
      fecha: '5/10/2025',
      medio: 'eltiempo.com',
      titular: '¿Guardianes o gestores? El dilema detrás de la nueva apuesta por la convivencia',
      url: 'https://www.eltiempo.com/bogota/opinion-guardianes-o-gestores-el-dilema-detras-de-la-nueva-apuesta-por-la-convivencia-3497002',
      tipo: 'Internet',
    },
    {
      fecha: '6/10/2025',
      medio: 'eltiempo.com',
      titular: 'Homicidios en Bosa, San Cristóbal y Santa Fe, la radiografía de la violencia por intolerancia en Bogotá: alcaldía lanzó campaña para prevenir crímenes',
      url: 'https://www.eltiempo.com/bogota/homicidios-en-bosa-san-cristobal-y-santa-fe-la-radiografia-de-la-violencia-por-intolerancia-en-bogota-alcaldia-lanzo-campana-para-prevenir-crimenes-3497329',
      tipo: 'Internet',
    },
    {
      fecha: '19/10/2025',
      medio: 'eltiempo.com',
      titular: 'Opinión | La deuda histórica con los jóvenes bogotanos',
      url: 'https://www.eltiempo.com/bogota/opinion-la-deuda-historica-con-los-jovenes-bogotanos-3501144',
      tipo: 'Internet',
    },
    {
      fecha: '3/11/2025',
      medio: 'eltiempo.com',
      titular: 'Opinión| Las lecciones de las prohibiciones a los motociclistas el fin de semana',
      url: 'https://www.eltiempo.com/bogota/opinion-las-lecciones-de-las-prohibiciones-a-los-motociclistas-el-fin-de-semana-3505655',
      tipo: 'Internet',
    },
    {
      fecha: '1/12/2025',
      medio: 'eltiempo.com',
      titular: 'Presupuesto 2026: más recaudo y más deuda',
      url: 'https://www.eltiempo.com/bogota/presupuesto-2026-mas-recaudo-y-mas-deuda-3513170',
      tipo: 'Internet',
    },
    {
      fecha: '23/11/2025',
      medio: 'eltiempo.com',
      titular: 'Opinión | Metrópolis: el laboratorio de la nueva renovación urbana',
      url: 'https://www.eltiempo.com/bogota/metropolis-el-laboratorio-de-la-nueva-renovacion-urbana-3511151',
      tipo: 'Internet',
    },
    {
      fecha: '17/11/2025',
      medio: 'eltiempo.com',
      titular: 'Opinión | ¿Movilidad o recaudo? Lo que esconde el nuevo pico y placa',
      url: 'https://www.eltiempo.com/bogota/opinion-movilidad-o-recaudo-lo-que-esconde-el-nuevo-pico-y-placa-3509573',
      tipo: 'Internet',
    },
    {
      fecha: '9/11/2025',
      medio: 'eltiempo.com',
      titular: 'Opinión | Entre el bienestar y la realidad: el debate sobre horarios escolares',
      url: 'https://www.eltiempo.com/bogota/opinion-entre-el-bienestar-y-la-realidad-el-debate-sobre-horarios-escolares-3507418',
      tipo: 'Internet',
    },
    {
      fecha: '15/11/2025',
      medio: 'eltiempo.com',
      titular: 'Nueva medida del pico y placa en Bogotá: ¿quiénes ganan y quiénes pierden con la reciente decisión de la Alcaldía?',
      url: 'https://www.eltiempo.com/bogota/nueva-medida-del-pico-y-placa-en-bogota-quienes-ganan-y-quienes-pierden-con-la-reciente-decision-de-la-alcaldia-3509175',
      tipo: 'Internet',
    },
    {
      fecha: '30/09/2025',
      medio: 'El Tiempo',
      titular: 'Rechazo a actos vandálicos y mensajes de odio',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1555158820',
      tipo: 'Internet',
    },
    {
      fecha: '25/03/2025',
      medio: 'El Tiempo',
      titular: 'Guardianes del orden, una buena idea con mucha improvisación',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1418305144',
      tipo: 'Internet',
    },
    {
      fecha: '6/01/2025',
      medio: 'eltiempo.com',
      titular: 'Opinión | Operación retorno y congestión vehicular',
      url: 'https://www.eltiempo.com/bogota/opinion-operacion-retorno-y-congestion-vehicular-3415127',
      tipo: 'Internet',
    },
    {
      fecha: '30/01/2025',
      medio: 'eltiempo.com',
      titular: '¿Por qué Bogotá le sigue diciendo no a los cobros por descongestión mientras grandes ciudades implementan el modelo?',
      url: 'https://www.eltiempo.com/bogota/por-que-bogota-le-sigue-diciendo-no-a-los-cobros-por-descongestion-mientras-grandes-ciudades-implementan-el-modelo-3422331',
      tipo: 'Internet',
    },
    {
      fecha: '12/01/2025',
      medio: 'eltiempo.com',
      titular: 'Columna de opinión Omar Oróstegui | Migración venezolana en Bogotá',
      url: 'https://www.eltiempo.com/bogota/columna-de-opinion-omar-orostegui-migracion-venezolana-en-bogota-3416791',
      tipo: 'Internet',
    },
    {
      fecha: '26/01/2025',
      medio: 'eltiempo.com',
      titular: 'Columna de opinión de Ómar Oróstegui | El caos de las ciclorrutas',
      url: 'https://www.eltiempo.com/bogota/columna-de-opinion-omar-orostegui-el-caos-de-las-ciclorrutas-3421031',
      tipo: 'Internet',
    },
    {
      fecha: '19/01/2025',
      medio: 'eltiempo.com',
      titular: 'Opinión| Reducir homicidio, extorsión y violencia intrafamiliar, los retos de Galán en el 2025',
      url: 'https://www.eltiempo.com/bogota/opinion-reducir-homicidio-extorsion-y-violencia-intrafamiliar-los-retos-de-galan-en-el-2025-3418864',
      tipo: 'Internet',
    },
    {
      fecha: '20/01/2025',
      medio: 'eltiempo.com',
      titular: 'Reducir homicidio, extorsión y violencia intrafamiliar, los retos de Galán en el 2025 | Columna de opinión de Omar',
      url: 'https://www.eltiempo.com/bogota/reducir-homicidio-extorsion-y-violencia-intrafamiliar-los-retos-de-galan-en-el-2025-columna-de-opinion-de-omar-orostegui-3418864',
      tipo: 'Internet',
    },
    {
      fecha: '15/09/2025',
      medio: 'El Tiempo',
      titular: 'El retorno de los emberás: un regreso con fecha de vencimiento',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1543990612',
      tipo: 'Internet',
    },
    {
      fecha: '4/11/2025',
      medio: 'El Tiempo',
      titular: 'Las lecciones de las prohibiciones a los motociclistas el fin de semana',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1580167263',
      tipo: 'Internet',
    },
    {
      fecha: '1/09/2025',
      medio: 'El Tiempo',
      titular: 'COLUMNA DE OPINION-Alcaldías locales: poder sin control en Bogotá',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1533552459',
      tipo: 'Internet',
    },
    {
      fecha: '1/12/2025',
      medio: 'El Tiempo',
      titular: 'Presupuesto 2026: más recaudo y más deuda',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1597903887',
      tipo: 'Internet',
    },
    {
      fecha: '7/04/2025',
      medio: 'El Tiempo',
      titular: 'Parques públicos: entre juegos y excrementos',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1428266318',
      tipo: 'Internet',
    },
    {
      fecha: '18/11/2025',
      medio: 'El Tiempo',
      titular: '¿Movilidad o recaudo? Lo que esconde el nuevo pico y placa',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1589374448',
      tipo: 'Internet',
    },
    {
      fecha: '5/05/2025',
      medio: 'El Tiempo',
      titular: 'Conciertos impulsan a Bogotá, pero falta estrategia para aprovechar su potencial',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1447525569',
      tipo: 'Internet',
    },
    {
      fecha: '24/11/2025',
      medio: 'El Tiempo',
      titular: 'Metrópolis: el laboratorio de la nueva renovación urbana',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1593322756',
      tipo: 'Internet',
    },
    {
      fecha: '7/07/2025',
      medio: 'El Tiempo',
      titular: 'OPINIÓN Micromovilidad sin reglas claras: una ley que llega tarde y complica más de lo que resuelve',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1494482710',
      tipo: 'Internet',
    },
    {
      fecha: '22/09/2025',
      medio: 'El Tiempo',
      titular: 'Manifestaciones de moteros, presión política disfrazada de protesta ciudadana',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1548969276',
      tipo: 'Internet',
    },
    {
      fecha: '8/04/2025',
      medio: 'Infobae.com',
      titular: 'Petro cuestiona a Roa porque Ecopetrol no está importando gas: "Hermano, no entiendo por qué no lo están haciendo"',
      url: 'https://www.infobae.com/colombia/2025/04/08/petro-cuestiona-a-roa-porque-ecopetrol-no-esta-importando-gas-hermano-no-entiendo-por-que-no-lo-estan-haciendo',
      tipo: 'Internet',
    },
    {
      fecha: '4/05/2025',
      medio: 'Infobae.com',
      titular: 'Lejos de multarlo, Policía grabó a motociclista que practicaba Stunt en vía principal de Bogotá',
      url: 'https://www.infobae.com/colombia/2025/05/04/lejos-de-multarlo-policia-grabo-a-motociclista-que-practicaba-stunt-en-via-principal-de-bogota/',
      tipo: 'Internet',
    },
    {
      fecha: '26/05/2025',
      medio: 'Infobae.com',
      titular: '?En video quedó el ataque de peatón a motociclista en Bogotá: lo hizo caer tras golpearlo en la cara',
      url: 'https://www.infobae.com/colombia/2025/05/26/en-video-quedo-el-ataque-de-peaton-a-motociclista-en-bogota-lo-hizo-caer-tras-golpearlo-en-la-cara/',
      tipo: 'Internet',
    },
    {
      fecha: '28/04/2025',
      medio: 'El Tiempo',
      titular: '¿Rumba hasta las 5 a. m.? Una decisión que merece algo más que entusiasmo',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1442695637',
      tipo: 'Internet',
    },
    {
      fecha: '16/06/2025',
      medio: 'El Tiempo',
      titular: 'OPINIÓN La violencia como mecanismo de resolución de conflictos',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1479447675',
      tipo: 'Internet',
    },
    {
      fecha: '6/10/2025',
      medio: 'El Tiempo',
      titular: 'OPINIÓN: ¿Guardianes o gestores?, el dilema detrás de la nueva apuesta por la convivencia',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1559929763',
      tipo: 'Internet',
    },
    {
      fecha: '13/01/2025',
      medio: 'El Tiempo',
      titular: 'Migración venezolana en Bogotá',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1365564713',
      tipo: 'Internet',
    },
    {
      fecha: '10/03/2025',
      medio: 'El Tiempo',
      titular: 'OPINIÓN  -  La estrategia de Galán por recuperar el espacio público y regular las ventas ambulantes',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1407010258',
      tipo: 'Internet',
    },
    {
      fecha: '20/09/2025',
      medio: 'Infobae.com',
      titular: 'Bloqueos, sabotajes y la batalla por el control vial: revelan cómo el gremio motero intenta imponerse en Bogotá',
      url: 'https://www.infobae.com/colombia/2025/09/20/bloqueos-sabotajes-y-la-batalla-por-el-control-vial-revelan-como-el-gremio-motero-intenta-imponerse-en-bogota',
      tipo: 'Internet',
    },
    {
      fecha: '19/08/2025',
      medio: 'El Tiempo',
      titular: 'OPINIÓN El costo de no tener baños públicos',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1524870287',
      tipo: 'Internet',
    },
    {
      fecha: '11/08/2025',
      medio: 'El Tiempo',
      titular: 'OPINIÓN Alumbrado público: el debate que nunca se apaga',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1519920396',
      tipo: 'Internet',
    },
    {
      fecha: '25/02/2025',
      medio: 'El Tiempo',
      titular: 'Galán versus Petro: una pelea con muchas batallas por delante',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1397492906',
      tipo: 'Internet',
    },
    {
      fecha: '29/09/2025',
      medio: 'El Tiempo',
      titular: 'Bogotá late distinto cuando el arte la habita',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1554298926',
      tipo: 'Internet',
    },
    {
      fecha: '3/06/2025',
      medio: 'El Tiempo',
      titular: 'Zonas libres de drogas: Bogotá avanza en la señalización del espacio público',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1469389345',
      tipo: 'Internet',
    },
    {
      fecha: '11/04/2025',
      medio: 'redmas.com.co',
      titular: 'Racionamiento de agua en Bogotá está de cumpleaños: cumple un añito y expertos explican las lecciones que deja la medida',
      url: 'https://redmas.com.co/colombia/Racionamiento-de-agua-en-Bogota-esta-de-cumpleanos-cumple-un-anito-y-expertos-explican-las-lecciones-que-deja-la-medida-20250410-0026.html',
      tipo: 'Internet',
    },
    {
      fecha: '26/05/2025',
      medio: 'El Tiempo',
      titular: 'El reversazo de Galán con la carrera 7.a',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1463460664',
      tipo: 'Internet',
    },
    {
      fecha: '10/02/2025',
      medio: 'El Tiempo',
      titular: 'OPINIÓN - Ruido, un problema invisible en Bogotá',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1386242374',
      tipo: 'Internet',
    },
    {
      fecha: '5/08/2025',
      medio: 'El Tiempo',
      titular: 'OPINIÓN Los regalos que Bogotá se merece',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1516032776',
      tipo: 'Internet',
    },
    {
      fecha: '30/01/2025',
      medio: 'pulzo.com',
      titular: 'Proponen cobro a conductores de Bogotá, aunque idea no termina de cuajar con Galán"',
      url: 'https://www.pulzo.com/nacion/bogota/proponen-cobros-por-descongestion-bogota-para-aliviar-pico-placa-trancon-PP4276821',
      tipo: 'Internet',
    },
    {
      fecha: '21/06/2025',
      medio: 'La República',
      titular: 'SERVICIOS DE VIGILANCIA SON DE CARACTERÍSTICAS TÉCNICAS UNIFORMES - Asuntos Legales',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1484037593',
      tipo: 'Internet',
    },
    {
      fecha: '7/03/2025',
      medio: 'Vanguardia',
      titular: 'Así cambiará la población de Santander en el 2 0 3 5',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1405393275',
      tipo: 'Internet',
    },
    {
      fecha: '30/01/2025',
      medio: 'portafolio.co',
      titular: 'Cobros por descongestión: ¿por qué este modelo aún no se ha implementado en Bogotá?',
      url: 'https://www.portafolio.co/economia/regiones/por-que-el-cobro-por-descongestion-aun-no-se-ha-implementado-en-bogota-622847',
      tipo: 'Internet',
    },
    {
      fecha: '28/03/2025',
      medio: 'Canal Red Mas',
      titular: 'Comerciantes de Bogotá se quejan por millonarias pérdidas ante obras viales   ( Mención Metro de Bogotá  - Transmilenio  - Fenalco ) ( Concejo de Bogotá  Julian Uscategui )  ( Dario Hidalgo Universidad Javeriana )   ( Omar Orostegui Universidad de La Sabana )',
      url: 'https://a.eprensa.com/view_pdf.php?sid=23130&cid=1421492199',
      tipo: 'Internet',
    },
    {
      fecha: '4/06/2025',
      medio: 'Portafolio',
      titular: 'Líder que grita, organización que se marchita',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1470315068',
      tipo: 'Internet',
    },
    {
      fecha: '6/03/2025',
      medio: 'caracol.com.co',
      titular: '¿Piensa tener hijos? Un estudio de la Uni.Sabana afirma que en 2035 la natalidad estará en 12 %',
      url: 'https://caracol.com.co/2025/03/06/piensa-tener-hijos-un-estudio-de-la-unisabana-afirma-que-en-2035-la-natalidad-estara-en-12/',
      tipo: 'Internet',
    },
    {
      fecha: '7/03/2025',
      medio: 'Qhubo Bucaramanga',
      titular: '¿Cómo se vivirá en 10 años?',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1405632618',
      tipo: 'Internet',
    },
    {
      fecha: '20/01/2025',
      medio: 'Extra Bogotá',
      titular: 'CONCEJAL ENCONTRADO MUERTO',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1370643741',
      tipo: 'Internet',
    },
    {
      fecha: '8/11/2025',
      medio: 'La República',
      titular: 'La Sabana y Blend serán aliados en tecnología',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1583272009',
      tipo: 'Internet',
    },
    {
      fecha: '5/03/2025',
      medio: 'Canal Capital',
      titular: 'Alcaldia de Bogotá  anunció que tomará acciones legales contra Gobierno Nacional  si no replantea  resolución en la que cambia la delimitación de las zonas de la Sabana de Bogotá ( Alcaldia de Bogotá  Carlos Fernando Galán ) ( Secretaria Distrital de Planeación de Bogotá Úrsula Ablanque ) ( Secretaria de Habitat de Bogotá  Vanessa Velasco )  ( Secretaria Distrital de Desarrollo Económico de Bogotá Maria del Pilar Uribe ) ( Secretaria de Ambiente de Bogotá Adriana Soto ) (  Universidad EAN  Brigitte Baptiste ) ( Camacol Guillermo Herrera ) ( Ex Ministerio de Ambiente Manuel Rodriguez ) ( Universidad de La Sabana Omar Orostegui ) ( Gobernación de Cundinamarca Jorge Rey )',
      url: 'https://a.eprensa.com/view_pdf.php?sid=23130&cid=1404157236',
      tipo: 'Internet',
    },
    {
      fecha: '6/03/2025',
      medio: 'vanguardia.com',
      titular: 'En estos municipios de Santander vivirá la gente más joven y más vieja en 2035',
      url: 'https://www.vanguardia.com/area-metropolitana/bucaramanga/2025/03/06/en-estos-municipios-de-santander-vivira-la-gente-mas-joven-y-mas-vieja-en-2035/',
      tipo: 'Internet',
    },
    {
      fecha: '3/06/2025',
      medio: 'portafolio.co',
      titular: 'Líder que grita, organización que se marchita',
      url: 'https://www.portafolio.co/opinion/analisis/lider-que-grita-organizacion-que-se-marchita-631903',
      tipo: 'Internet',
    },
    {
      fecha: '12/06/2025',
      medio: 'forbes.co',
      titular: 'Mecanismo bursátil para corregir las distorsiones del mercado de combustibles en Colombia',
      url: 'https://forbes.co/2025/06/12/red-forbes/mecanismo-bursatil-para-corregir-las-distorsiones-del-mercado-de-combustibles-en-colombia',
      tipo: 'Internet',
    },
    {
      fecha: '24/06/2025',
      medio: 'forbes.co',
      titular: 'La reconstrucción fiscal que le espera al próximo Presidente',
      url: 'https://forbes.co/2025/06/24/red-forbes/la-reconstruccion-fiscal-que-le-espera-al-proximo-presidente',
      tipo: 'Internet',
    },
    {
      fecha: '11/11/2025',
      medio: 'portafolio.co',
      titular: 'Blend y la Universidad de La Sabana impulsan alianza para fortalecer la formación e innovación y en IA',
      url: 'https://www.portafolio.co/tecnologia/blend-y-la-universidad-de-la-sabana-impulsan-alianza-para-fortalecer-la-formacion-e-innovacion-y-en-ia-482962',
      tipo: 'Internet',
    },
    {
      fecha: '25/03/2025',
      medio: 'eluniversal.com.co',
      titular: '¿Habrá más hombres que mujeres en Cartagena en 2035? Estudio lo dice',
      url: 'https://www.eluniversal.com.co/cartagena/2025/03/25/cartagena-tendra-mas-mujeres-que-hombres-para-2035-segun-proyeccion/',
      tipo: 'Internet',
    },
    {
      fecha: '18/11/2025',
      medio: 'Teleantioquia',
      titular: 'La cifra informativa de hoy 91.6% son los casos de siniestros viales que quedan sin respuesta judicial.',
      url: 'https://a.eprensa.com/view_pdf.php?sid=23130&cid=1589471497',
      tipo: 'Internet',
    },
    {
      fecha: '5/01/2025',
      medio: 'Extra Bogotá',
      titular: 'FUE ENCONTRADO SIN VIDA',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1361480828',
      tipo: 'Internet',
    },
    {
      fecha: '6/03/2025',
      medio: 'Caracol Radio Bogotá',
      titular: 'La natalidad en Colombia se redujo un 12%, según un estudio de la Universidad de La Sabana',
      url: 'https://a.eprensa.com/view_pdf.php?sid=23130&cid=1405388375',
      tipo: 'Internet',
    },
    {
      fecha: '13/01/2025',
      medio: 'Canal Capital',
      titular: 'La mayor frustración del gobierno distrital fue el aumento de homicidios, el número de asesinatos creció casi 12% y por eso el año 2024 fue el más violento de los últimos 8 años ( Omar orostegui Universidad de la Sabana - Felipe Mariño Bogotá Cómo Vamos - Cesar Restrepo Secretaria de Seguridad de Bogotá )',
      url: 'https://a.eprensa.com/view_pdf.php?sid=23130&cid=1366139467',
      tipo: 'Internet',
    },
    {
      fecha: '13/11/2025',
      medio: 'lanotaeconomica.com.co',
      titular: 'La Inteligencia Artificial al servicio del país: Blend y Universidad de La Sabana unen fuerzas para resolver retos públicos',
      url: 'https://lanotaeconomica.com.co/movidas-empresarial/la-inteligencia-artificial-al-servicio-del-pais-blend-y-universidad-de-la-sabana-unen-fuerzas-para-resolver-retos-publicos',
      tipo: 'Internet',
    },
    {
      fecha: '10/03/2025',
      medio: 'Canal Capital',
      titular: 'En Bogotá se ha visto un positivo avance en materia de inclusión de mujeres al mercado laboral  ( Secretaría  Distrital de Desarrollo Económico de Bogotá  Maria del Pilar Lopez  )  ( Universidad La Sabana  Juan Sotelo )  ( Fondo Mujer Maria Fernanda Reyes )',
      url: 'https://a.eprensa.com/view_pdf.php?sid=23130&cid=1407588655',
      tipo: 'Internet',
    },
    {
      fecha: '11/06/2025',
      medio: 'asuntoslegales.com.co',
      titular: 'Un estado, en estado de naturaleza |',
      url: 'https://asuntoslegales.com.co/analisis/sergio-andres-morales-barreto-3905762/un-estado-en-estado-de-naturaleza-4155310',
      tipo: 'Internet',
    },
    {
      fecha: '25/06/2025',
      medio: 'asuntoslegales.com.co',
      titular: 'Iván Felipe Unigarro Dorado, Análisis legal, judicial y el impacto de las leyes de Colombia | Asuntoslegales.com.co',
      url: 'https://www.asuntoslegales.com.co/analisis/ivan-felipe-unigarro-dorado-4164753',
      tipo: 'Internet',
    },
    {
      fecha: '21/06/2025',
      medio: 'asuntoslegales.com.co',
      titular: 'Los servicios de vigilancia y seguridad privada son de características técnicas uniformes |',
      url: 'https://www.asuntoslegales.com.co/consultorio/los-servicios-de-vigilancia-y-seguridad-privada-son-de-caracteristicas-tecnicas-uniformes-4162992',
      tipo: 'Internet',
    },
    {
      fecha: '8/04/2025',
      medio: 'chicanoticias.com',
      titular: 'Petro propone importar gas de Panamá por los cables de energía y le llueven críticas y memes',
      url: 'https://www.chicanoticias.com/2025/04/08/cables-gas-panama/',
      tipo: 'Internet',
    },
    {
      fecha: '3/06/2025',
      medio: 'El Observatorio de la Universidad Colombiana',
      titular: '¿Por qué es importante la doctrina social de la iglesia para los universitarios?: Felipe Cárdenas',
      url: 'https://www.universidad.edu.co/por-que-es-importante-la-doctrina-social-de-la-iglesia-para-los-universitarios-felipe-cardenas',
      tipo: 'Internet',
    },
    {
      fecha: '13/11/2025',
      medio: 'portalgeek.co',
      titular: 'Blend y Universidad de La Sabana impulsan la Inteligencia Artificial para resolver retos públicos en Colombia',
      url: 'https://portalgeek.co/educacion/blend-universidad-de-la-sabana',
      tipo: 'Internet',
    },
    {
      fecha: '7/11/2025',
      medio: 'unisabana.edu.co',
      titular: 'Universidad de La Sabana y Blend sellan alianza para potenciar el desarrollo de proyectos en inteligencia artificial y analítica de datos con soporte de AWS',
      url: 'https://www.unisabana.edu.co/noticias/paso-en-la-sabana/universidad-de-la-sabana-y-blend-sellan-alianza-para-potenciar-el-desarrollo-de-proyectos-en',
      tipo: 'Internet',
    },
    {
      fecha: '13/11/2025',
      medio: 'setechnota.com',
      titular: 'La Inteligencia Artificial al servicio del país: Blend y Universidad de La Sabana unen fuerzas para resolver retos públicos',
      url: 'https://setechnota.com/2025/11/13/la-inteligencia-artificial-al-servicio-del-pais-blend-y-universidad-de-la-sabana-unen-fuerzas-para-resolver-retos-publicos',
      tipo: 'Internet',
    },
    {
      fecha: '14/10/2025',
      medio: 'Radio 1040',
      titular: 'Para el mes Internacional de Prevención del Suicidio es laboratorio de Gobierno de la Universidad de La Sabana. Reportó las tasas de suicidio en el país',
      url: 'https://a.eprensa.com/view_pdf.php?sid=23130&cid=1565518090',
      tipo: 'Internet',
    },
    {
      fecha: '24/08/2025',
      medio: 'El Tiempo',
      titular: 'Patinetas eléctricas: entre el riesgo por la inseguridad y el aumento de usuarios',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1528372473',
      tipo: 'Prensa',
    },
    {
      fecha: '16/11/2025',
      medio: 'El Tiempo',
      titular: 'Ganadores y perdedores con el pico y placa para los carros de fuera de la ciudad',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1588553128',
      tipo: 'Prensa',
    },
    {
      fecha: '20/04/2025',
      medio: 'El Tiempo',
      titular: 'El riesgoso aumento de ciclomotores, vehículos pequeños y hechizos',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1436579631',
      tipo: 'Prensa',
    },
    {
      fecha: '25/05/2025',
      medio: 'El Tiempo',
      titular: 'Al día hay cerca de 1.000 reportes por ruido al 123',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1462981964',
      tipo: 'Prensa',
    },
    {
      fecha: '16/02/2025',
      medio: 'El Tiempo',
      titular: 'Alzas de los costos del gas natural, el nuevo golpe al bolsillo de los bogotanos',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1391088577',
      tipo: 'Prensa',
    },
    {
      fecha: '6/05/2025',
      medio: 'El Tiempo',
      titular: 'Aunque se registra baja de delitos, homicidios siguen siendo muy preocupantes',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1448241931',
      tipo: 'Prensa',
    },
    {
      fecha: '24/04/2025',
      medio: 'El Tiempo',
      titular: 'Hay 148.000 personas más en la capital en pobreza multidimensional',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1440180675',
      tipo: 'Prensa',
    },
    {
      fecha: '7/08/2025',
      medio: 'El Tiempo',
      titular: 'Tres años del gobierno Petro: mucha tensión y poco acuerdo',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1517805927',
      tipo: 'Prensa',
    },
    {
      fecha: '21/09/2025',
      medio: 'El Tiempo',
      titular: 'Así funciona el gremio de moteros que protestó y bloqueó varias vías',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1548556938',
      tipo: 'Prensa',
    },
    {
      fecha: '4/05/2025',
      medio: 'El Tiempo',
      titular: 'Bogotá 24 horas: una apuesta que no cuaja',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1447040645',
      tipo: 'Prensa',
    },
    {
      fecha: '30/01/2025',
      medio: 'El Tiempo',
      titular: 'La capital sigue sin acoger los pagos por descongestión',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1378511938',
      tipo: 'Prensa',
    },
    {
      fecha: '18/09/2025',
      medio: 'El Tiempo',
      titular: 'Los duros cuestionamientos a las alcaldías locales y sus problemas de ejecución',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1546429316',
      tipo: 'Prensa',
    },
    {
      fecha: '26/05/2025',
      medio: 'La FM Radio',
      titular: 'Polémica  Hoy comenzarán a multar a conductores que invadan el carril de buses en la carrera Séptima en Bogotá / Diario el Tiempo -Alcaldía Mayor De Bogotá- Carlos Fernando Galán - Policía Nacional -',
      url: 'https://a.eprensa.com/view_pdf.php?sid=23130&cid=1463535216',
      tipo: 'Prensa',
    },
    {
      fecha: '19/05/2025',
      medio: 'El Tiempo',
      titular: 'El metro como galería: una oportunidad para el grafiti bogotano',
      url: 'https://p.eprensa.com/view_pdf.php?sid=23129&cid=1457843809',
      tipo: 'Prensa',
    },
];



// Estado de los filtros
let activeFilters = {
    segment: 'Todos',
    type: 'Todos los tipos',
    status: 'Todos'
};

// Opciones de filtros
const filterOptions = {
    segment: ['Todos', 'Público', 'Otras Industrias', 'Transversal'],
    type: [
        'Todos los tipos',
        'Dashboards & Analítica de datos',
        'Automatización con IA',
        'Simuladores & Comunicación Política',
        'Matching & Análisis Estratégico',
        'Asistentes de Voz con IA',
        'ChatBots & Automatización',
        'Inteligencia Geoespacial',
        'Analítica de Datos & ML',
        'Gestión Documental con IA',
        'Formación Profesional en IA'
    ],
    status: ['Todos', 'En línea', 'En mantenimiento', 'Activo', 'NA']
};

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initFilters();
    renderProducts(PRODUCTS);
    if (typeof MEDIOS !== 'undefined') {
        renderMedios(MEDIOS);
    }
    initModal();
    lucide.createIcons();
});

// --- 1. Navegación ---
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
        if(activeLink) activeLink.classList.add('active');

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

    if(ctaHero) {
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
        const isTransversal = product.segment.toUpperCase() === 'TRANSVERSAL';
        
        let statusClass = 'status-na';
        if(product.status.toLowerCase() === 'en línea') statusClass = 'status-online';
        if(product.status.toLowerCase() === 'en mantenimiento') statusClass = 'status-down';
        if(product.status.toLowerCase() === 'activo') statusClass = 'status-active';

        // Badge especial para programas académicos
        const typeBadgeText = isTransversal ? 'Programa Académico' : product.type;

        // Botones
        let buttonsHtml = '';
        
        if (!isTransversal) {
            // Botón App
            if (product.demoMode === 'solicitar') {
                buttonsHtml += `<button class="btn btn-outline" onclick="openModal()"><i data-lucide="message-square"></i> Solicitar demo</button>`;
            } else {
                const appDisabled = !product.appUrl ? 'disabled' : '';
                const appTitle = !product.appUrl ? 'No disponible' : (product.status.toLowerCase() === 'en mantenimiento' ? 'Esta aplicación puede estar temporalmente inactiva' : '');
                
                const btnContent = `<button class="btn btn-primary" ${appDisabled} ${product.appUrl ? `onclick="window.open('${product.appUrl}', '_blank')"` : ''}><i data-lucide="external-link"></i> Ver App</button>`;
                
                if (appTitle) {
                    buttonsHtml += `<div class="tooltip-wrapper" title="${appTitle}">${btnContent}</div>`;
                } else {
                    buttonsHtml += btnContent;
                }
            }

            // Botón GitHub
            if (product.githubUrl) {
                const iconGithub = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
                buttonsHtml += `<button class="btn btn-outline" onclick="window.open('${product.githubUrl}', '_blank')">${iconGithub} Código</button>`;
            }
        }

        // Siempre mostrar demo
        buttonsHtml += `<button class="btn btn-outline" onclick="openModal()"><i data-lucide="play-circle"></i> Demo</button>`;

        const card = document.createElement('div');
        card.className = 'product-card module-card';
        card.innerHTML = `
            <div class="card-header">
                <img src="assets/logos/placeholder.svg" alt="Logo ${product.name}" class="card-logo">
                <span class="status-badge ${statusClass}">${product.status}</span>
            </div>
            <span class="type-badge">${typeBadgeText}</span>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-slogan">${product.slogan}</p>
            <p class="product-desc" title="${product.description}">${product.description}</p>
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
}

// --- 2.5 Renderizado de Medios ---
function renderMedios(mediosToRender) {
    const grid = document.getElementById('medios-grid');
    if (!grid) return;
    grid.innerHTML = '';

    mediosToRender.forEach(media => {
        const card = document.createElement('div');
        card.className = 'media-card';
        
        let visualContent = '';
        if (media.tipo && media.tipo.toLowerCase() === 'internet') {
            visualContent = `<img src="assets/Govlab.png" alt="Previsualización web">`;
        } else {
            visualContent = `<i data-lucide="newspaper" class="media-visual-icon"></i>`;
        }

        card.innerHTML = `
            <div class="media-visual">
                ${visualContent}
            </div>
            <div class="media-content">
                <div class="media-date"><i data-lucide="calendar" style="width:12px;height:12px;display:inline-block;margin-right:4px;"></i> ${media.fecha}</div>
                <div class="media-source">${media.medio}</div>
                <h3 class="media-title">${media.titular}</h3>
                <div class="card-actions">
                    <button class="btn btn-outline" onclick="window.open('${media.url}', '_blank')"><i data-lucide="external-link"></i> Leer artículo</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
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
