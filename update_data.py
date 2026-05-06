import csv
import json
import re

csv_path = r'c:\Users\juansoag\Downloads\Github\Portafolio simple\Indicaciones\Portafolio_Productos_GovLab.csv'
app_js_path = r'c:\Users\juansoag\Downloads\Github\Portafolio simple\app.js'

products = []
with open(csv_path, 'r', encoding='utf-8-sig') as f:
    reader = csv.DictReader(f, delimiter=';')
    for row in reader:
        segment = row['Segmento'].replace('\n', ' ').strip()
        type_val = row['Rama / Tipo'].replace('\n', ' ').strip()
        name = row['Nombre del producto'].strip()
        slogan = row['Lema'].replace('\n', ' ').strip()
        desc = row['Descripción'].strip()
        status = row['Estado'].strip()
        if status.lower() == 'caído':
            status = 'En mantenimiento'
        demo_mode = row['Demo'].strip()
        app_url = row['Link App'].strip()
        if app_url.upper() == 'NA':
            app_url = None
        github_url = row['GitHub'].strip()
        if github_url.upper() == 'NA':
            github_url = None

        product_id = name.lower().replace(' ', '-').replace('(', '').replace(')', '').replace('_', '-')
        
        prod = {
            'id': product_id,
            'segment': segment,
            'type': type_val,
            'name': name,
            'slogan': slogan,
            'description': desc,
            'status': status,
            'appUrl': app_url,
            'githubUrl': github_url,
        }
        if demo_mode.lower() == 'hablar':
            prod['demoMode'] = 'solicitar'
            
        products.append(prod)

# Read app.js
with open(app_js_path, 'r', encoding='utf-8') as f:
    app_js_content = f.read()

# Generate the new PRODUCTS array in JS format
products_js = "const PRODUCTS = [\n"
for p in products:
    products_js += "    {\n"
    for k, v in p.items():
        if v is None:
            products_js += f"      {k}: null,\n"
        else:
            # Escape single quotes
            val = str(v).replace("'", "\\'")
            products_js += f"      {k}: '{val}',\n"
    products_js += "    },\n"
products_js += "];"

# Replace the PRODUCTS array in app.js
# It starts with "const PRODUCTS = [" and ends with "];" before "// Estado de los filtros"
app_js_content = re.sub(r'const PRODUCTS = \[.*?\];', products_js, app_js_content, flags=re.DOTALL)

# Replace 'Caído' with 'En mantenimiento' everywhere else in app.js
app_js_content = app_js_content.replace("'Caído'", "'En mantenimiento'")
app_js_content = app_js_content.replace('caído', 'en mantenimiento')

with open(app_js_path, 'w', encoding='utf-8') as f:
    f.write(app_js_content)

print("app.js updated successfully.")
