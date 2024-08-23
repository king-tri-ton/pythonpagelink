import os
import shutil
from jinja2 import Environment, FileSystemLoader
import yaml

# Загрузка конфигурации
with open('config.yml', 'r') as config_file:
    config = yaml.safe_load(config_file)

# Создание выходной директории
output_dir = 'docs'
os.makedirs(output_dir, exist_ok=True)

# Настройка Jinja2
env = Environment(loader=FileSystemLoader('themes/custom'))
template = env.get_template('index.html')

# Генерация HTML файла
output_html = template.render(config=config)
with open(os.path.join(output_dir, 'index.html'), 'w') as fh:
    fh.write(output_html)

# Копирование папки assets в выходной каталог
assets_source = os.path.join('themes', config['theme'], 'assets')
assets_dest = os.path.join(output_dir, 'assets')
if os.path.exists(assets_source):
    shutil.copytree(assets_source, assets_dest, dirs_exist_ok=True)

print("Site generated successfully.")
