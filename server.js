const express = require('express');
const path = require('path');
const Anthropic = require('@anthropic-ai/sdk');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const fs = require('fs');

// Cargar .env manualmente si existe (para desarrollo local sin dotenv)
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...vals] = trimmed.split('=');
      if (key && vals.length) process.env[key.trim()] = vals.join('=').trim();
    }
  }
}


const app = express();
const PORT = process.env.PORT || 3000;

// ── Anthropic client ──────────────────────────────────────────────────────────
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

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

Notable projects (portfolio):
- ZipaData: Social Observatory for Zipaquirá municipality (public sector)
- Forecast models for agricultural demand (CorpoHass)
- Clinical analytics dashboard for Clínica Universidad de La Sabana
- AI voice assistants and chatbots for government and private clients
- Geospatial monitoring platforms for CAR Cundinamarca and environmental agencies

CV / Resume:
- Spanish CV: /CV_Juan_Diego_Sotelo_ES.pdf
- English CV: /CV_Juan_Diego_Sotelo_EN.pdf

BEHAVIOR RULES:
1. Keep answers short and direct (2–4 sentences max unless a detailed list is needed).
2. If someone asks for the CV or resume: provide the direct download link based on their language (Spanish → ES, English → EN). Format it as a clickable markdown link.
3. If asked something outside Juan's professional profile (politics, opinions, unrelated topics), politely redirect: "I'm only able to answer questions about Juan's professional profile. Is there anything specific about his work or skills I can help you with?"
4. Never invent information not listed above.
5. Always refer to Juan in third person when describing him, or use "Juan" — not "I".
6. If the user wants to contact Juan, provide his email or WhatsApp: https://wa.me/573158905940`;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json({ limit: '10kb' }));

// Rate limiter: max 15 requests per IP per minute
const chatLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 15,
  message: { error: 'Too many requests. Please wait a moment.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// ── Static files ──────────────────────────────────────────────────────────────
app.use(express.static(path.join(__dirname), {
  index: 'index.html',
  extensions: ['html'],
}));

// ── Chat endpoint ─────────────────────────────────────────────────────────────
app.post('/api/chat', chatLimiter, async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'messages array is required' });
    }

    // Validate message format and limit history to last 20 turns
    const sanitized = messages
      .slice(-20)
      .filter(m => m.role && m.content && typeof m.content === 'string')
      .map(m => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.content.slice(0, 2000), // cap individual message length
      }));

    if (sanitized.length === 0) {
      return res.status(400).json({ error: 'No valid messages provided' });
    }

    const response = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: sanitized,
    });

    const reply = response.content[0]?.text ?? '';
    res.json({ reply });

  } catch (err) {
    console.error('Claude API error:', err.message);
    if (err.status === 401) {
      return res.status(500).json({ error: 'API key not configured.' });
    }
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

// ── Fallback: serve index.html for any unknown route ─────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  Servidor corriendo en http://localhost:${PORT}`);
  if (!process.env.ANTHROPIC_API_KEY) {
    console.warn('⚠️   ANTHROPIC_API_KEY no está configurada. El chat no funcionará.');
  }
});
