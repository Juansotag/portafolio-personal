# Manual de Identidad Visual y Estilo - PitchLab360 / GovLab (Universidad de La Sabana)

Este documento detalla las indicaciones de estilo extraídas del proyecto, alineadas con el manual de marca de la Universidad de La Sabana.

## 1. Tipografías

El proyecto utiliza un máximo de 3 familias tipográficas, cada una con un propósito específico:

- **Display Editorial (`--font-display`)**: `'Publico Banner'`, `'Playfair Display'`, serif.
  - **Uso**: Títulos principales (H1, H2), encabezados grandes.
  - **Estilo**: `font-weight: 800`.
- **Principal (`--font-main`)**: `'Libre Franklin'`, sans-serif.
  - **Uso**: Cuerpo del texto, interfaz de usuario (UI), botones.
  - **Estilo**: `font-weight: normal` a `600`.
- **Apoyo (`--font-label`)**: `'Cabinet Grotesk'`, sans-serif.
  - **Uso**: Subtítulos (H3, H4), etiquetas, encabezados de módulos o secciones pequeñas.
  - **Estilo**: `font-weight: 700`.

## 2. Tamaños Tipográficos

Se manejan 3 tamaños tipográficos base para mantener consistencia:

- **Pequeño (`--fs-sm`):** `0.72rem` (Etiquetas, badges, notas al pie).
- **Mediano (`--fs-md`):** `0.875rem` (Cuerpo del texto, descripciones, inputs).
- **Grande (`--fs-lg`):** `1.25rem` (Títulos, encabezados de sección).

*Nota: El interlineado base (`--lh`) en toda la plataforma es de `1.75`.*

## 3. Paleta de Colores

### Colores Institucionales (UniSabana Blue)
- **UniSabana Blue Oscuro (`--c-blue-dark`)**: `#00135B` (PANTONE 281). *Color principal para texto, botones primarios y bordes de acento.*
- **UniSabana Blue Medio (`--c-blue-light`)**: `#00387D` (PANTONE 286). *Color para estados de focus e interacciones.*
- **UniSabana Blue Claro (`--c-blue-soft`)**: `#93AAC9` (PANTONE 292). *Color para botones de advertencia o acciones secundarias.*
- **UniSabana Blue Tenue (`--c-blue-tint`)**: `#D9E1EF` (PANTONE 2707). *Usado para bordes (`--border-color`) y fondos de hover.*
- **UniSabana Cream (`--c-cream`)**: `#F7EFD9` (PANTONE 7499).

### Colores Secundarios / Acentos (PitchLab360)
- **Amarillo (`--c-yellow`)**: `#f8a719`
- **Rojo (`--c-red`)**: `#d51437`
- **Naranja (`--c-orange`)**: `#fb6f1a`
- *Nota: El color morado (`--c-purple`) fue reemplazado por el azul institucional medio (`#00387D`).*

### Colores Semánticos (Fondos y Textos)
- **Fondo de la App (`--bg-main`)**: `#EEF2F8` (Azul institucional muy tenue).
- **Fondo Sidebar y Tarjetas (`--bg-sidebar`, `--bg-card`)**: `#ffffff` (Blanco).
- **Texto Principal (`--text-primary`)**: `#00135B` (UniSabana Blue oscuro).
- **Texto Secundario (`--text-secondary`)**: `#374151` (Gris oscuro).
- **Texto Atenuado (`--text-muted`)**: `#64748b` (Gris azulado, para descripciones e iconos).

## 4. Elementos de Interfaz (UI)

### Botones (`.btn`)
- **Primario Gigante (`.btn-giant-primary`)**: Fondo `#00135B`, texto blanco. Sombra `0 4px 14px rgba(0, 32, 91, 0.3)`. Hover en `#001840`.
- **Primario (`.btn-primary`)**: Fondo `#00135B`, texto blanco.
- **Advertencia / Secundario (`.btn-warning`)**: Fondo `#93AAC9` (Azul claro), texto `#00135B`. Al hacer hover, se invierten o oscurecen a fondo `#00135B` y texto blanco.
- **Outline (`.btn-outline`)**: Fondo blanco, borde y texto `#00135B`. Hover con fondo tenue (`#D9E1EF`).

### Tarjetas y Módulos (`.module-card`)
- **Fondo**: Blanco (`#ffffff`).
- **Borde**: `#D9E1EF`, se oscurece a `#00135B` al hacer hover.
- **Sombras**: Ligeras en hover (`0 2px 8px rgba(0, 32, 91, 0.12)`).
- **Acentos Laterales**:
  - *Métricas*: Borde izquierdo de 4px color gris azulado (`#64748b`).
  - *LLM / IA*: Borde izquierdo de 4px color azul oscuro (`#00135B`).

### Inputs y Formularios
- **Bordes**: `1px solid #D9E1EF`.
- **Focus**: Borde `#00387D` con un resplandor `box-shadow: 0 0 0 3px rgba(50, 119, 195, 0.1)`.
