# Portafolio Personal — Juan Sotelo Aguilar

**Data Scientist & Coordinador de Analítica e IA**

Portafolio web personal que presenta mis proyectos, habilidades y experiencia en datos e inteligencia artificial, con un chatbot bilingüe (ES/EN) integrado usando Claude.

---

## 🌐 Demo

> Próximamente en Railway

📧 juansotag1@hotmail.com  
📱 +57 315 890 5940  
🔗 [LinkedIn](https://www.linkedin.com/in/juan-diego-sotelo-aguilar-b421741a3/) · [GitHub](https://github.com/Juansotag)

---

## 🗂️ Estructura

```
portafolio-personal/
├── index.html                    # Sitio principal + widget chatbot
├── styles.css                    # Sistema de diseño (paleta propia)
├── app.js                        # Lógica del portafolio (filtros, productos)
├── server.js                     # Servidor Express + proxy Claude API
├── package.json
├── .env                          # (local, no en Git) ANTHROPIC_API_KEY
├── CV_Juan_Diego_Sotelo_ES.pdf
├── CV_Juan_Diego_Sotelo_EN.pdf
└── assets/
    ├── photos/                   # Fotos personales y de eventos
    ├── projects/                 # Logos e imágenes de proyectos
    ├── fonts/                    # Fuentes locales (Publico Banner)
    └── decks/                    # Presentaciones en PDF
```

---

## 🚀 Correr localmente

### Requisitos
- Node.js ≥ 18 ([nodejs.org](https://nodejs.org))
- API Key de Anthropic ([console.anthropic.com](https://console.anthropic.com))

### Pasos

```bash
# 1. Instalar dependencias
npm install

# 2. Crear .env con tu API key
echo "ANTHROPIC_API_KEY=sk-ant-..." > .env

# 3. Levantar el servidor
node server.js
# → http://localhost:3000
```

---

## 🚂 Deploy en Railway

1. Conectar este repositorio en [railway.app](https://railway.app)
2. Añadir variable de entorno: `ANTHROPIC_API_KEY=sk-ant-...`
3. Railway detecta `package.json` y corre `npm start` automáticamente

---

## 🤖 Chatbot

El widget flotante (esquina inferior izquierda) usa **Claude 3.5 Haiku**:

- Responde preguntas sobre mi perfil profesional
- Detecta el idioma automáticamente (ES / EN)
- Entrega el CV en PDF según el idioma
- Rate limit: 15 mensajes/min por IP
- La API key **nunca llega al frontend** — el proxy corre en el servidor

---

## 🎨 Paleta de colores

| Variable | Hex | Uso |
|----------|-----|-----|
| `--c-blue-dark` | `#001f54` | Principal: textos, fondos oscuros |
| `--c-blue-hover` | `#0a1128` | Hover / estado más oscuro |
| `--c-blue-light` | `#034078` | Interacciones, focus |
| `--c-blue-soft` | `#1282a2` | Acento teal |
| `--c-cream` | `#fefcfb` | Blanco cálido, tarjetas |

---

## 📄 Actualizar productos

Los proyectos del portafolio están en el array `PRODUCTS` dentro de `app.js`. Para regenerarlos desde el Excel:

```bash
python gen_products.py
```
