# GovLab Unisabana — Portafolio Web

Sitio web estático del **Laboratorio de Gobierno de la Universidad de La Sabana**. Presenta los proyectos, aliados, apariciones en medios y equipo del GovLab, con datos gestionados desde archivos Excel y CSV.

---

## 🗂️ Estructura del proyecto

```
Portafolio simple/
├── index.html                        # Estructura principal del sitio
├── app.js                            # Toda la lógica JS (filtros, renderizado, navegación)
├── styles.css                        # Estilos (sistema de diseño, componentes)
│
├── Portafolio_Productos_GovLab.xlsx  # Fuente de datos de proyectos y aliados
├── medios/
│   └── medios.csv                    # Fuente de datos de apariciones en medios
│
├── gen_products.py                   # Genera el array PRODUCTS en app.js desde el Excel
├── update_data.py                    # Actualización general de datos
├── update_medios.py                  # Actualización de la sección de medios
│
└── assets/
    ├── favicon.png                   # Favicon del sitio
    ├── Govlab.png                    # Logo GovLab (navbar, fallback de productos)
    ├── Universidad de la Sabana.png  # Logo Unisabana
    ├── decks/                        # PDFs de presentaciones privadas
    ├── fonts/                        # Fuentes locales (Publico Banner)
    ├── logos/                        # Logos auxiliares
    ├── photos/                       # Fotos de equipo y logos de aliados
    │   └── Aliados/                  # Logos de entidades aliadas
    └── projects/                     # Logos/imágenes de cada proyecto
```

---

## 🚀 Correr localmente

El sitio es 100% estático (HTML + CSS + JS). No requiere Node.js ni build step.

```bash
# Con Python (recomendado)
python -m http.server 8080
```

Luego abre **http://localhost:8080** en el navegador.

---

## 🔄 Actualizar contenido

### Proyectos (`Portafolio GovLab` hoja del Excel)

1. Edita la hoja **`Portafolio GovLab`** en `Portafolio_Productos_GovLab.xlsx`
2. Ejecuta el script de generación:

```bash
python gen_products.py
```

Esto reescribe el array `PRODUCTS` dentro de `app.js` con los datos actualizados.

> ⚠️ **Importante:** Si editas segmentos o tipos directamente en `app.js`, esos cambios se perderán la próxima vez que corras `gen_products.py`. Haz los cambios en el Excel.

### Medios (`medios/medios.csv`)

Añade filas al archivo `medios/medios.csv` con el formato:

```
Fecha;Medio;Titular;URL;Tipo
```

Los tipos válidos son: `Prensa`, `Internet`, `Televisión`, `Radio`.

Los nuevos registros aparecerán automáticamente en la sección **Presencia en medios**, ordenados de más reciente a más antiguo.

### Aliados

Los logos de aliados están en `assets/photos/Aliados/`. Edita directamente el `index.html` para añadir o quitar tarjetas en la sección **Entidades con las que hemos trabajado**.

---

## ⌨️ Atajos de teclado

| Atajo | Acción |
|---|---|
| `Ctrl + M` | Mostrar / ocultar botones de repositorio GitHub en las tarjetas de proyectos |

---

## 📐 Sistema de diseño

Los colores institucionales están centralizados en variables CSS en `:root` dentro de `styles.css`:

| Variable | Valor | Uso |
|---|---|---|
| `--c-blue-dark` | `#00135B` | Color principal: textos, botones primarios |
| `--c-blue-hover` | `#000e42` | Hover de botones primarios |
| `--c-blue-light` | `#00387D` | Interacciones secundarias |
| `--c-yellow` | `#f8a719` | Acento cálido |

**Tipografía:**
- Display (títulos): `Publico Banner` / `Playfair Display`
- UI y cuerpo: `Libre Franklin`
- Badges y etiquetas: `Cabinet Grotesk`

---

## 📞 Contacto

**Email:** dirgovlab@unisabana.edu.co  
**WhatsApp:** +57 315 890 5940  
**Dirección:** Campus del Puente del Común, Km. 7 Autopista Norte de Bogotá, Chía, Cundinamarca.
