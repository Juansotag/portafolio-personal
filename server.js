const express = require('express');
const path    = require('path');
const fs      = require('fs');

// Polyfill fetch para Node < 18
if (typeof fetch === 'undefined') {
  global.fetch = require('node-fetch');
}




// ── Cargar .env en local (no necesario en Railway) ────────────────────────────
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const idx = trimmed.indexOf('=');
      if (idx > 0) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim();
        if (!process.env[key]) process.env[key] = val;
      }
    }
  });
}

const app  = express();
const PORT = process.env.PORT || 3000;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

// Railway usa reverse proxy → confiar en X-Forwarded-For
app.set('trust proxy', 1);
app.use(express.json({ limit: '10kb' }));

// ── Rate limiter simple (sin dependencias extra) ───────────────────────────────
const requests = new Map(); // ip → { count, resetAt }
function rateLimited(ip) {
  const now = Date.now();
  const entry = requests.get(ip);
  if (!entry || now > entry.resetAt) {
    requests.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  if (entry.count >= 15) return true;
  entry.count++;
  return false;
}

// ── System prompt ─────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are Juan Sotelo Aguilar's personal assistant embedded in his professional portfolio website. You answer questions about Juan in a warm, concise, and professional tone.

LANGUAGE RULE: Always respond in the same language the user writes in. If they write in English, respond in English. If they write in Spanish, respond in Spanish. Do not mix languages.

ABOUT JUAN SOTELO AGUILAR:

Personal:
- Full name: Juan Sotelo Aguilar (also known as Juan Diego Sotelo Aguilar)
- Location: Sopó, Cundinamarca, Colombia
- Phone: +57 315 890 5940
- Email: juansotag1@hotmail.com
- LinkedIn: https://www.linkedin.com/in/juan-diego-sotelo-aguilar-b421741a3/
- GitHub: https://github.com/Juansotag

Professional identity:
- Data Scientist & Technical Coordinator of Analytics and AI
- Works at GovLab — Laboratorio de Gobierno, Universidad de La Sabana
- ~3 years of experience converting data into business decisions for national and international clients
- Has designed and put into production 30+ digital solutions for the public and private sector
- Built dashboards and analyses that reached national media (El Tiempo, Canal Capital) and international (Forbes), generating over USD 1 million in earned media in 2025
- 3 software registrations before the DNDA (Colombia's copyright office)
- Winner of BID and Secretaría de Movilidad de Bogotá innovation award
- Certified AWS Academy Educator
- English C1 certified (IELTS)

Education:
- B.A. Political Science + B.A. Economics (International Finance) — Universidad de La Sabana
- MSc. Applied Analytics candidate — Universidad de La Sabana (GPA: 4.7/5.0)

Technical skills:
- Languages: Python (Pandas, NumPy, Scikit-learn, TensorFlow), SQL, R
- Visualization: Power BI, Tableau
- Machine Learning: XGBoost, Random Forest, LSTM, Prophet, ARIMA, regression models
- AI & LLMs: LangChain, RAG pipelines, AI agents, real-time voice assistants
- Geospatial: GeoPandas, Folium, QGIS
- Cloud: AWS (certified), Railway, GitHub Actions
- Other: FastAPI, Express.js, web scraping, ETL pipelines

Areas of expertise:
1. Data Analytics — dashboards, KPIs, forecasting, time series
2. Artificial Intelligence — LLM apps, chatbots, voice assistants, document automation
3. Geospatial Intelligence — maps, territorial analysis, environmental data
4. Political Communication Simulators

Notable projects:
- ZipaData: Social Observatory for Zipaquirá municipality
- Forecast models for agricultural demand (CorpoHass)
- Clinical analytics dashboard for Clínica Universidad de La Sabana
- AI voice assistants and chatbots for government and private clients
- Geospatial monitoring platforms for CAR Cundinamarca

CV / Resume — IMPORTANT: Use EXACTLY these full URLs as clickable links, do not shorten or modify them:
- Spanish CV: [Descargar CV en Español](https://juansotag.up.railway.app/CV_Juan_Diego_Sotelo_ES.pdf)
- English CV: [Download CV in English](https://juansotag.up.railway.app/CV_Juan_Diego_Sotelo_EN.pdf)

BEHAVIOR RULES:
1. Keep answers short and direct (2-4 sentences max unless a detailed list is needed).
2. If someone asks for the CV or resume: provide the direct download link based on their language (Spanish -> ES, English -> EN). Format it as a clickable markdown link.
3. If asked something outside Juan's professional profile, politely redirect.
4. Never invent information not listed above.
5. Always refer to Juan in third person — not "I".
6. If the user wants to contact Juan: email juansotag1@hotmail.com or WhatsApp https://wa.me/573158905940`;

// ── Static files ──────────────────────────────────────────────────────────────
app.use(express.static(path.join(__dirname), {
  index: 'index.html',
}));

// ── Chat endpoint ─────────────────────────────────────────────────────────────
app.post('/api/chat', async (req, res) => {
  const ip = req.ip || 'unknown';

  if (rateLimited(ip)) {
    return res.status(429).json({ error: 'Demasiadas solicitudes. Espera un momento.' });
  }

  if (!ANTHROPIC_API_KEY) {
    console.error('ERROR: ANTHROPIC_API_KEY no está configurada');
    return res.status(500).json({ error: 'El chatbot no está configurado. Contacta al administrador.' });
  }

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  // Sanitize: keep last 20, ensure strings, strip leading assistant messages
  let sanitized = messages
    .slice(-20)
    .filter(m => m.role && typeof m.content === 'string' && m.content.trim())
    .map(m => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: m.content.slice(0, 2000),
    }));

  // Claude API requires first message to be 'user'
  while (sanitized.length > 0 && sanitized[0].role === 'assistant') {
    sanitized.shift();
  }

  if (sanitized.length === 0) {
    return res.status(400).json({ error: 'No valid user messages' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type':      'application/json',
        'x-api-key':         ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model:      'claude-sonnet-4-5-20250929',
        max_tokens: 512,
        system:     SYSTEM_PROMPT,
        messages:   sanitized,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const errMsg = data?.error?.message || JSON.stringify(data);
      console.error('Anthropic API error:', response.status, errMsg);
      return res.status(500).json({ error: `Error Anthropic (${response.status}): ${errMsg}` });
    }

    const reply = data.content?.[0]?.text ?? '';
    res.json({ reply });

  } catch (err) {
    console.error('Fetch error:', err.message);
    res.status(500).json({ error: 'Error de red al contactar Claude.' });
  }
});

// ── Fallback ──────────────────────────────────────────────────────────────────
app.get('*', (req, res) => {
  // Don't serve index.html for file-like paths
  if (req.path.includes('.')) {
    return res.status(404).send('File not found: ' + req.path);
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});


// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
  console.log(`ANTHROPIC_API_KEY: ${ANTHROPIC_API_KEY ? 'OK (' + ANTHROPIC_API_KEY.slice(0,12) + '...)' : 'NO CONFIGURADA'}`);
});
