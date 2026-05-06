# 🏛️ GovLab Portfolio — Master Build Document (Vanilla Web)
> **Para el agente de IA Antigravity**  
> Este documento contiene TODA la información necesaria para construir el portafolio web del Laboratorio de Gobierno (GovLab). Léelo completo antes de escribir una sola línea de código.

### 📎 Documentos de referencia complementarios (leer ANTES de codificar)
| Archivo | Contenido |
|---|---|
| `VISUAL_STACK.md` | **Manual de identidad visual completo**: tipografías, paleta de colores institucional UniSabana, estilos de botones, tarjetas e inputs. Fuente de verdad para todas las decisiones de diseño. |

---

## 0. RESUMEN EJECUTIVO

Construir un sitio web de portafolio institucional para el **GovLab (Laboratorio de Gobierno)** de la Universidad de La Sabana.

**Stack:** HTML + CSS + JavaScript vanilla. Sin frameworks, sin npm, sin build steps.  
**Resultado:** 3 archivos entregables (`index.html`, `styles.css`, `app.js`) + carpeta `assets/`.  
**Para abrir:** Doble clic en `index.html`. Funciona sin servidor.  
**Diseño:** Seguir fielmente las especificaciones de `VISUAL_STACK.md`.  
**Idioma:** Español. Solo nombres de tecnologías en inglés.

---

## 1. ESTRUCTURA DE ARCHIVOS

```
govlab-portfolio/
├── index.html              ← Único archivo HTML. Contiene las 3 secciones.
├── styles.css              ← Todo el CSS: variables, layout, componentes, responsive.
├── app.js                  ← Toda la lógica: navegación, filtros, datos, modales.
└── assets/
    ├── logo-govlab.svg     ← ⚠️ Logo real del GovLab (ya disponible)
    ├── logo-unisabana.svg  ← ⚠️ Logo real de la Universidad de La Sabana (ya disponible)
    └── logos/              ← Logos de productos (placeholders SVG por ahora)
        └── placeholder.svg ← Un SVG genérico que se usa para todos los productos
```

> **Nota:** Los logos reales de GovLab y Unisabana están en `assets/`. Usarlos directamente. Para los logos de productos individuales, generar un único `placeholder.svg` y usarlo para todos — el cliente subirá los logos reales después.

---

## 2. IDENTIDAD VISUAL Y DISEÑO

> ⚠️ **La fuente de verdad para todo lo visual es `VISUAL_STACK.md`.** Implementar sin desviaciones: paleta de colores UniSabana (hex exactos), tres familias tipográficas, estilos de botones, tarjetas e inputs.

### Resumen rápido de variables CSS (definir en `:root` en `styles.css`)

```css
:root {
  /* Colores institucionales UniSabana */
  --c-blue-dark:   #00135B;   /* Principal: texto, botones primarios */
  --c-blue-light:  #00387D;   /* Focus, interacciones */
  --c-blue-soft:   #93AAC9;   /* Botones secundarios */
  --c-blue-tint:   #D9E1EF;   /* Bordes, hover backgrounds */
  --c-cream:       #F7EFD9;   /* Acento cálido */

  /* Semánticos */
  --bg-main:       #EEF2F8;   /* Fondo de la página */
  --bg-card:       #ffffff;   /* Fondo de tarjetas */
  --text-primary:  #00135B;
  --text-secondary:#374151;
  --text-muted:    #64748b;
  --border-color:  #D9E1EF;

  /* Acentos */
  --c-yellow:      #f8a719;
  --c-red:         #d51437;
  --c-orange:      #fb6f1a;

  /* Estados de producto */
  --status-online: #10B981;   /* En línea → verde */
  --status-down:   #fb6f1a;   /* Caído → naranja */
  --status-active: #00387D;   /* Activo → azul */
  --status-na:     #94A3B8;   /* NA → gris */

  /* Tipografía */
  --font-display:  'Playfair Display', serif;      /* H1, H2 */
  --font-main:     'Libre Franklin', sans-serif;   /* Body, UI, botones */
  --font-label:    'Cabinet Grotesk', sans-serif;  /* H3, H4, badges */

  /* Tamaños */
  --fs-sm:  0.72rem;
  --fs-md:  0.875rem;
  --fs-lg:  1.25rem;
  --lh:     1.75;

  /* Espaciado */
  --radius: 12px;
  --shadow: 0 2px 8px rgba(0, 32, 91, 0.12);
  --shadow-hover: 0 8px 24px rgba(0, 32, 91, 0.18);
}
```

### Fuentes (cargar en `<head>` del HTML)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Libre+Franklin:wght@400;500;600&display=swap" rel="stylesheet">
<link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@700&display=swap" rel="stylesheet">
```

### Íconos
Usar **Lucide Icons** vía CDN (SVG inline, sin dependencias):
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```
Llamar `lucide.createIcons()` al final del `app.js`. Usar atributo `data-lucide="github"` etc. en los elementos HTML.

---

## 3. ESTRUCTURA DEL HTML (`index.html`)

El HTML tiene una sola página con tres secciones. La navegación muestra/oculta secciones con JS — no hay recarga de página.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GovLab — Laboratorio de Gobierno · Universidad de La Sabana</title>
  <!-- Fuentes -->
  <!-- Lucide Icons -->
  <!-- styles.css -->
</head>
<body>

  <!-- NAVBAR -->
  <header id="navbar">...</header>

  <!-- SECCIÓN 1: ¿Qué es el GovLab? -->
  <section id="seccion-que-es" class="page-section active">...</section>

  <!-- SECCIÓN 2: ¿Qué hacemos? -->
  <section id="seccion-que-hacemos" class="page-section">...</section>

  <!-- SECCIÓN 3: ¿Quiénes somos? -->
  <section id="seccion-quienes-somos" class="page-section">...</section>

  <!-- FOOTER -->
  <footer id="footer">...</footer>

  <!-- MODAL (Video demo) -->
  <div id="modal-video" class="modal hidden">...</div>

  <!-- app.js -->
</body>
</html>
```

La clase `active` controla qué sección es visible. El JS la mueve entre secciones al hacer clic en la navegación.

---

## 4. NAVEGACIÓN (`#navbar`)

```
[ Logo GovLab ]  [ Logo Unisabana ]     [ ¿Qué es el GovLab? | ¿Qué hacemos? | ¿Quiénes somos? ]
```

- **Sticky** (`position: sticky; top: 0`), fondo blanco, `box-shadow` sutil.
- El tab activo tiene `border-bottom: 3px solid var(--c-blue-dark)`.
- En mobile (< 768px): hamburger button que despliega el menú verticalmente.
- Al hacer clic en un tab: ocultar todas las `.page-section`, mostrar la correspondiente, actualizar tab activo.

---

## 5. SECCIÓN 1: ¿QUÉ ES EL GOVLAB?

### 5.1 Hero
- Fondo: gradiente `linear-gradient(135deg, #00135B 0%, #00387D 100%)`
- Texto en blanco
- Contenido:
  - **H1:** "Laboratorio de Gobierno"
  - **Subtítulo (font-label):** "GovLab · Universidad de La Sabana"
  - **Tagline:** "Soluciones reales a problemas públicos, con datos, co-creación e innovación intersectorial."
  - **Botón CTA** (`.btn-giant-primary` según VISUAL_STACK.md): "Conoce nuestros productos" → al hacer clic, navega a la sección ¿Qué hacemos?

### 5.2 Descripción institucional
**Párrafo:**
> El GovLab es un laboratorio de innovación de la Universidad de La Sabana, clasificado como **proyecto H3 de proyección social**, adscrito a la Dirección de Proyección Social Engagement. Su propósito es la búsqueda de soluciones a problemas públicos a través de diferentes técnicas, métodos y enfoques soportados en la analítica de datos, la co-creación y la colaboración intersectorial.

**Badge destacado:** "Proyecto H3 · Proyección Social · Universidad de La Sabana"

### 5.3 Objetivos (4 cards en grid 2×2)
Cada card tiene un ícono Lucide, un título y descripción:

| Ícono Lucide | Título | Descripción |
|---|---|---|
| `search` | Explorar e innovar | Explorar y probar diferentes métodos, técnicas y herramientas innovadoras para entender y proponer alternativas de solución a los problemas públicos. |
| `database` | Soluciones basadas en datos | Desarrollar soluciones basadas en datos a través del uso de nuevas tecnologías de la información para la obtención de aprendizajes soportados en evidencia. |
| `users` | Liderazgo colectivo | Fortalecer el liderazgo colectivo, la co-creación y el trabajo colaborativo intersectorial para una mejor toma de decisiones en respuesta a los problemas públicos. |
| `flask-conical` | Metodologías propias | Desarrollar metodologías e instrumentos propios para analizar los problemas públicos y las alternativas de solución. |

### 5.4 Impacto en números (stats bar)
Franja de fondo `var(--c-blue-dark)`, texto blanco. 6 métricas en fila horizontal (scroll horizontal en mobile):

| Número | Etiqueta |
|---|---|
| 30+ | Productos desarrollados |
| 6+ | Proyectos activos 2025 |
| USD 37K+ | En proyectos 2025 |
| USD 1M+ | En valor de prensa |
| 4+ | Instituciones atendidas |
| 450K+ | Registros analizados |

### 5.5 Aliados / Partners
Grid de chips/badges con el nombre de cada aliado. Fondo `var(--bg-card)`, borde `var(--border-color)`. Agrupar por categoría con un subtítulo pequeño:

**Medios:** Caracol TV · El Tiempo · RCN · Infobae  
**Entidades públicas:** CAR Cundinamarca · Alcaldía de Cajicá · Gobernación de Santander · Municipio de Zipaquirá · Alcaldía de Barranquilla · Secretaría de Movilidad de Bogotá · ICBF  
**Internacional:** UNICEF · BID  
**Academia:** Universidad de La Sabana · Clínica Universidad de La Sabana · Convergence Lab  
**Sector privado:** Adrianople Group (Virginia, USA)

> El cliente añadirá los logos reales más adelante. Por ahora mostrar solo el nombre en chip estilizado.

---

## 6. SECCIÓN 2: ¿QUÉ HACEMOS?

### 6.1 Header de sección
- **H2:** "Nuestro Portafolio de Productos"
- **Subtítulo:** "Más de 30 soluciones digitales para el sector público y privado"

### 6.2 Filtros interactivos
Tres grupos de filtros tipo pill/chip clicables. Al hacer clic se filtra el grid de productos en tiempo real. Mostrar contador: `"Mostrando X de 30 productos"`.

**Segmento:**
- `Todos` (default activo)
- `Público`
- `Otras Industrias`
- `Transversal`

**Tipo:**
- `Todos los tipos` (default)
- `Dashboards & Analítica`
- `Automatización con IA`
- `Simuladores & Comunicación Política`
- `Matching & Análisis Estratégico`
- `Asistentes de Voz`
- `ChatBots & Automatización`
- `Inteligencia Geoespacial`
- `Analítica & ML`
- `Gestión Documental`
- `Formación en IA`

**Estado:**
- `Todos`
- `En línea`
- `Caído`
- `Activo`
- `NA`

### 6.3 Grid de producto cards
Grid CSS: `grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))`.

Cada `.product-card` contiene:
1. **Header de card:** logo del producto (img desde `assets/logos/placeholder.svg`) a la izquierda + badge de estado a la derecha
2. **Badge de tipo** (small, debajo del logo)
3. **Nombre** (H3, `font-display`)
4. **Lema** (párrafo pequeño, cursiva, `text-muted`)
5. **Descripción** (2-3 líneas, `overflow: hidden`, `display: -webkit-box`, `-webkit-line-clamp: 3`)
6. **Fila de botones:**
   - **Ver App** → abre `appUrl` en nueva pestaña (deshabilitado + tooltip "No disponible" si es `null`)
   - **GitHub** → abre `githubUrl` en nueva pestaña (oculto si es `null`)
   - **▶ Demo** → abre modal con "Video próximamente disponible" (siempre visible)

**Casos especiales:**
- Productos **TRANSVERSAL** (formación): sin botón GitHub, sin botón App. Solo badge "Programa Académico" y descripción.
- **SCS_V2**: botón "Solicitar demo" en lugar de "Ver App" (el campo Demo en el CSV dice "Hablar", no "Mostrar").
- **Estado "Caído"**: mostrar badge naranja. El botón Ver App sigue activo pero con tooltip "Puede estar temporalmente inactivo".

### 6.4 Datos de productos (definir en `app.js` como array de objetos)

```javascript
const PRODUCTS = [
  {
    id: 'cuidar-la-democracia',
    segment: 'PÚBLICO',
    type: 'Dashboards & Analítica de datos',
    name: 'Cuidar la Democracia',
    slogan: 'Visualiza lo que piensa el ciudadano',
    description: 'Dashboard interactivo con datos de encuesta sobre percepciones democráticas en Colombia (INVAMER/GovLab). Filtros sociodemográficos, mapas y gráficos en tiempo real.',
    status: 'En línea',
    appUrl: 'https://cuidar-la-democracia-production.up.railway.app/',
    githubUrl: 'https://github.com/Juansotag/Cuidar-la-Democracia',
  },
  {
    id: 'fondecun',
    segment: 'PÚBLICO',
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
    segment: 'PÚBLICO',
    type: 'Dashboards & Analítica de datos',
    name: 'Barranquilla',
    slogan: 'Predice la criminalidad, protege la ciudad',
    description: 'App web para subir, analizar y predecir eventos de criminalidad y convivencia ciudadana. Diseñada para el Observatorio de Criminalidad de Barranquilla.',
    status: 'En línea',
    appUrl: 'https://barranquilla-production.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/Barranquilla',
  },
  {
    id: 'appclinica',
    segment: 'PÚBLICO',
    type: 'Dashboards & Analítica de datos',
    name: 'AppClínica (SCH3)',
    slogan: 'Anticipa la demanda, optimiza los recursos',
    description: 'Sistema ML para identificar y predecir el número de pacientes NO-EPS y su facturación semanal en la Clínica Universidad de la Sabana.',
    status: 'NA',
    appUrl: null,
    githubUrl: 'https://github.com/GovLabSabana/AppClinica',
  },
  {
    id: 'geoanalisis-clinica',
    segment: 'PÚBLICO',
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
    segment: 'PÚBLICO',
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
    segment: 'PÚBLICO',
    type: 'Automatización con IA',
    name: 'AlcaldIA',
    slogan: 'El Plan de Desarrollo en tus manos',
    description: 'Asistente RAG sobre el Plan de Desarrollo Distrital de Bogotá. Búsqueda semántica con FAISS + GPT-4o. Respuestas por objetivo, programa y presupuesto.',
    status: 'En línea',
    appUrl: 'https://alcadia.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/AlcaldIA',
  },
  {
    id: 'cajica',
    segment: 'PÚBLICO',
    type: 'Automatización con IA',
    name: 'Asistente IA Cajicá',
    slogan: 'Pregúntale al municipio, él te responde',
    description: 'Asistente de voz en tiempo real sobre el Plan de Desarrollo de Cajicá 2024-2027. OpenAI Realtime API + LiveKit + WebRTC.',
    status: 'Caído',
    appUrl: 'https://asistente-virtual-cajica.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/cajica',
  },
  {
    id: 'policiapp-eco',
    segment: 'PÚBLICO',
    type: 'Automatización con IA',
    name: 'PoliciApp-Eco',
    slogan: 'La ley ambiental en campo',
    description: 'Asistente IA de legislación ambiental colombiana para la Policía Ambiental y Carabineros. Cubre pesca, flora, fauna, minería y recursos hídricos.',
    status: 'Caído',
    appUrl: 'https://policiaambiental-production.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/PoliciApp-Eco2',
  },
  {
    id: 'legischeck',
    segment: 'PÚBLICO',
    type: 'Automatización con IA',
    name: 'LegisCheck',
    slogan: 'Dos versiones, un solo vistazo',
    description: 'Comparación inteligente de documentos legislativos. Diff semántico con GPT-4, línea de tiempo con hitos y reportes descargables en PDF.',
    status: 'Caído',
    appUrl: null,
    githubUrl: 'https://github.com/GovLabSabana/Paralelo',
  },
  {
    id: 'pitchlab360',
    segment: 'PÚBLICO',
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
    segment: 'PÚBLICO',
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
    segment: 'PÚBLICO',
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
    segment: 'PÚBLICO',
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
    segment: 'PÚBLICO',
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
    segment: 'PÚBLICO',
    type: 'Matching & Análisis Estratégico',
    name: 'SCS_V2',
    slogan: 'Conecta proyectos con planes de desarrollo',
    description: 'Matching entre proyectos estratégicos de Sabana Centro y planes de desarrollo municipales. Scoring semántico con IA: especificidad, visión regional e impacto.',
    status: 'En línea',
    appUrl: null,
    githubUrl: 'https://github.com/GovLabSabana/SCS_V2',
    demoMode: 'solicitar', // ← botón especial "Solicitar demo"
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
    id: 'asistente-campana',
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
  },
  {
    id: 'data-copilot',
    segment: 'OTRAS INDUSTRIAS',
    type: 'Analítica de Datos & ML',
    name: 'Data Copilot',
    slogan: 'Pregúntale a tus datos con tu propia voz',
    description: 'Asistente de análisis de datos con LangChain + GPT-4 + Whisper. Acepta CSV/Excel, genera gráficos interactivos con Plotly, responde por texto y voz (TTS).',
    status: 'En línea',
    appUrl: 'https://datacopilot.up.railway.app/',
    githubUrl: 'https://github.com/GovLabSabana/Data_copilot',
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
    id: 'radica-notaria',
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
    id: 'doctorado-ia',
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
    id: 'maestria-ia',
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
    id: 'pregrado-ia',
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
    id: 'bootcamps-ia',
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
```

---

## 7. SECCIÓN 3: ¿QUIÉNES SOMOS?

### 7.1 Header
- **H2:** "Nuestro Equipo"
- **Subtítulo:** "Las personas detrás de las soluciones"

### 7.2 Cards del equipo

Dos cards grandes, una por persona. Diseño horizontal en desktop (foto izquierda, info derecha), vertical en mobile.

---

#### Omar Oróstegui Restrepo — Director Ejecutivo

**Avatar:** Iniciales "OR" sobre fondo `var(--c-blue-dark)` (no hay foto disponible aún)  
**Cargo:** Director Ejecutivo del GovLab  
**Institución:** Universidad de La Sabana  
**Bio:**
> Politólogo de la Pontificia Universidad Javeriana, con maestría en Estudios para el Desarrollo de la Universidad de Manchester, Reino Unido. Candidato al doctorado en Desarrollo Sostenible de la Universidad de Loyola. Posee una amplia experiencia profesional en análisis y evaluación de políticas públicas urbanas y proyectos sociales con énfasis en procesos de sostenibilidad, comunicación estratégica y aprendizajes soportados en evidencia. Profesor universitario y columnista semanal del periódico El Tiempo. Autor del libro *La nueva anormalidad*. Actualmente se desempeña como profesor de planta y director ejecutivo del Laboratorio de Gobierno de la Universidad de La Sabana.

**Tags:** `Políticas Públicas` · `Innovación Social` · `Sostenibilidad` · `Comunicación Estratégica`  
**Email:** omar.orostegui@unisabana.edu.co

---

#### Juan Diego Sotelo Aguilar — Coordinador Técnico

**Avatar:** Iniciales "JS" sobre fondo `var(--c-blue-light)` (no hay foto disponible aún)  
**Cargo:** Coordinador Técnico de Analítica de Datos e IA  
**Institución:** Universidad de La Sabana  
**Bio:**
> Politólogo y Economista (Finanzas Internacionales) de la Universidad de La Sabana, candidato a Magíster en Analítica Aplicada de la misma institución (GPA 4.7/5.0). Consultor en Analítica de Datos e Inteligencia Artificial con más de 2 años de experiencia en proyectos de consultoría nacional e internacional para el sector público y privado. Profesor catedrático de Economía e Ingeniería Informática, donde enseña analítica aplicada, econometría y machine learning. Ha liderado el desarrollo de más de 30 soluciones digitales generando más de USD 1M en valor de prensa y USD 37K en proyectos activos en 2025. Cuenta con 2 desarrollos de software registrados ante la DNDA y certificación AWS Academy Educator.

**Tags:** `Python` · `Power BI` · `Machine Learning` · `SQL` · `LLMs` · `Consultoría` · `Docencia`  
**Email:** juansotag1@hotmail.com  
**GitHub:** https://github.com/Juansotag  
**LinkedIn:** https://linkedin.com/in/juandiegosoteloaguilar  
**Teléfono:** +57 315 890 5940

---

### 7.3 Sección de contacto (al final)
- **H2:** "¿Trabajamos juntos?"
- **Subtítulo:** "Escríbenos para explorar soluciones a tus desafíos públicos o privados."
- **Email grande:** `omar.orostegui@unisabana.edu.co`
- **Botón:** "Enviar correo" → `mailto:omar.orostegui@unisabana.edu.co`
- **Redes sociales (íconos Lucide + links reales):**
  - 🌐 `https://www.unisabana.edu.co/proyeccion-social/laboratorio-de-gobierno`
  - 🔗 Linktree: `https://linktr.ee/dirgovlabunisabana`
  - ▶️ YouTube: `https://www.youtube.com/@GovlabUnisabana`
  - 📸 Instagram: `https://www.instagram.com/govlab_unisabana`
  - 𝕏 X: `https://x.com/govlabunisabana`

---

## 8. FOOTER

```
[ Logo GovLab ]  [ Logo Unisabana ]

© 2025 Laboratorio de Gobierno — Universidad de La Sabana
Campus del Puente del Común, Km. 7, Autopista Norte de Bogotá. Chía, Cundinamarca, Colombia.
omar.orostegui@unisabana.edu.co

[ Web ] [ Linktree ] [ YouTube ] [ Instagram ] [ X ]
```

---

## 9. LÓGICA DE JAVASCRIPT (`app.js`)

El archivo `app.js` debe manejar todo el comportamiento dinámico:

```javascript
// 1. NAVEGACIÓN ENTRE SECCIONES
// - Al cargar: mostrar sección 1, ocultar 2 y 3
// - Al clic en tab: toggle clase 'active' en .page-section
// - Scroll suave al inicio de la sección al cambiar de tab

// 2. RENDERIZADO DE PRODUCTOS
// - Al cargar: renderizar todos los productos del array PRODUCTS en el grid
// - Función renderProducts(filteredList) que genera el HTML de cada card
// - Función getStatusBadge(status) que retorna el HTML del badge con color correcto

// 3. FILTROS
// - Estado del filtro: { segment: 'Todos', type: 'Todos los tipos', status: 'Todos' }
// - Al clic en pill: actualizar estado, llamar filterProducts(), llamar renderProducts()
// - filterProducts(): filtra PRODUCTS según estado actual de filtros
// - Actualizar contador: "Mostrando X de 30 productos"

// 4. MODAL DE VIDEO
// - openModal(): mostrar #modal-video, deshabilitar scroll del body
// - closeModal(): ocultar #modal-video, habilitar scroll
// - Cerrar con clic en overlay o botón X

// 5. HAMBURGER MENU (mobile)
// - Toggle clase 'open' en el nav al clic en #hamburger-btn
// - Cerrar al seleccionar un tab

// 6. ÍCONOS LUCIDE
// - Al final del script: lucide.createIcons()
```

---

## 10. COMPORTAMIENTO RESPONSIVE

| Breakpoint | Comportamiento |
|---|---|
| Mobile (< 640px) | Navbar: hamburger. Cards: 1 columna. Stats: scroll horizontal. Team cards: vertical. |
| Tablet (640–1024px) | Navbar: tabs visibles. Cards: 2 columnas. Team cards: horizontal. |
| Desktop (> 1024px) | Cards: 3 columnas. Filtros en fila. |

---

## 11. MODAL DE VIDEO

```html
<div id="modal-video" class="modal hidden">
  <div class="modal-overlay"></div>
  <div class="modal-content">
    <button class="modal-close" aria-label="Cerrar">✕</button>
    <h3>Video demo</h3>
    <p>Este video estará disponible próximamente.</p>
    <p>Para una demo en vivo, escríbenos a <a href="mailto:omar.orostegui@unisabana.edu.co">omar.orostegui@unisabana.edu.co</a></p>
  </div>
</div>
```

---

## 12. NOTAS IMPORTANTES PARA EL AGENTE

1. **Sin servidor requerido.** El sitio abre con doble clic en `index.html`. No usar `fetch()` para cargar datos locales (CORS error sin servidor). Todos los datos van hardcodeados en `app.js`.

2. **Logos de productos.** Usar un único `assets/logos/placeholder.svg` para todos los productos. No crear 30 archivos SVG individuales. El `src` de la imagen del logo en cada card apunta siempre a `assets/logos/placeholder.svg`.

3. **Fotos del equipo.** No disponibles. Usar divs con iniciales estilizadas (CSS puro, círculo de color + texto blanco centrado).

4. **Videos.** Ningún producto tiene video. El botón "Demo" abre siempre el modal de "Próximamente".

5. **Productos TRANSVERSAL.** Son programas académicos. No mostrar botones de App ni GitHub. Mostrar badge "Programa Académico". Mostrar solo nombre, lema, descripción y estado.

6. **SCS_V2.** El botón de acción dice "Solicitar demo" y abre el modal en lugar de ir a una URL.

7. **Links externos.** Siempre `target="_blank" rel="noopener noreferrer"`.

8. **Accesibilidad.** `aria-label` en todos los botones de íconos. Contraste adecuado según VISUAL_STACK.md. `lang="es"` en el `<html>`.

9. **GitHub del laboratorio.** Los repos están distribuidos entre `github.com/Juansotag` (proyectos personales de Juan Diego) y `github.com/GovLabSabana` (organización del lab). Ambas URLs son correctas.

10. **Estado "Caído".** Mostrar badge naranja. Mantener el botón "Ver App" activo con tooltip: "Esta aplicación puede estar temporalmente inactiva."

---

## 13. CHECKLIST FINAL

- [ ] `index.html` + `styles.css` + `app.js` existen y están enlazados correctamente
- [ ] La carpeta `assets/` tiene `logo-govlab.svg`, `logo-unisabana.svg` y `logos/placeholder.svg`
- [ ] La navegación entre las 3 secciones funciona sin recarga
- [ ] Los 30 productos aparecen en el grid
- [ ] Los filtros por Segmento, Tipo y Estado funcionan y actualizan el contador
- [ ] Cada product card tiene sus 3 botones (App, GitHub, Demo)
- [ ] El modal de video funciona y se puede cerrar
- [ ] Los 2 perfiles del equipo están completos con bio, tags y links
- [ ] Las redes sociales del footer tienen los links reales
- [ ] El sitio es responsive en mobile y desktop
- [ ] Los links externos abren en nueva pestaña
- [ ] No hay errores en consola del navegador
- [ ] `lucide.createIcons()` está llamado y los íconos renderizan

---

*Documento generado el 6 de mayo de 2026 para el proyecto GovLab Portfolio.*  
*Cliente: Juan Diego Sotelo Aguilar — GovLab, Universidad de La Sabana.*  
*Agente ejecutor: Antigravity.*
