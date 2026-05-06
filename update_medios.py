import csv
import json
import re

csv_path = r'c:\Users\juansoag\Downloads\Github\Portafolio simple\medios\medios.csv'
app_js_path = r'c:\Users\juansoag\Downloads\Github\Portafolio simple\app.js'

medios = []
with open(csv_path, 'r', encoding='ISO-8859-1') as f:
    reader = csv.DictReader(f, delimiter=';')
    for row in reader:
        # Some rows might have funky characters, fix encoding or replace them
        fecha = row.get('Fecha', '').strip()
        medio = row.get('Medio', '').strip()
        titular = row.get('Titular', '').strip()
        url = row.get('URL', '').strip()
        tipo = row.get('Tipo', '').strip()
        
        medios.append({
            'fecha': fecha,
            'medio': medio,
            'titular': titular,
            'url': url,
            'tipo': tipo
        })

# Ordenar: Internet primero, Prensa después
medios.sort(key=lambda x: 0 if x['tipo'].lower() == 'internet' else 1)

# Read app.js
with open(app_js_path, 'r', encoding='utf-8') as f:
    app_js_content = f.read()

# Generate the new MEDIOS array in JS format
medios_js = "const MEDIOS = [\n"
for m in medios:
    medios_js += "    {\n"
    for k, v in m.items():
        val = str(v).replace("'", "\\'")
        medios_js += f"      {k}: '{val}',\n"
    medios_js += "    },\n"
medios_js += "];\n\n"

# Check if MEDIOS already exists
if 'const MEDIOS =' in app_js_content:
    app_js_content = re.sub(r'const MEDIOS = \[.*?\];\n\n', medios_js, app_js_content, flags=re.DOTALL)
else:
    # Insert right after PRODUCTS
    app_js_content = re.sub(r'(const PRODUCTS = \[.*?\];)', r'\1\n\n' + medios_js, app_js_content, flags=re.DOTALL)

with open(app_js_path, 'w', encoding='utf-8') as f:
    f.write(app_js_content)

print("app.js updated successfully with MEDIOS array.")
