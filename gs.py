#!/usr/bin/env python3
"""
gs.py - Site Generator
This script generates a static website.
Licensed under the MIT License.
"""

import os
import shutil
from jinja2 import Environment, FileSystemLoader
import yaml

# Константа для выходной директории
OUTPUT_DIR = 'docs'

# Загрузка конфигурации
with open('config.yml', 'r') as config_file:
    config = yaml.safe_load(config_file)

# Создание выходной директории
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Настройка Jinja2 с темой из config.yml
theme_dir = os.path.join('themes', config['theme'])
env = Environment(loader=FileSystemLoader(theme_dir))
template = env.get_template('index.html')

# Генерация HTML файла
output_html = template.render(config=config)
with open(os.path.join(OUTPUT_DIR, 'index.html'), 'w') as fh:
    fh.write(output_html)

# Копирование папки assets в выходной каталог
assets_source = os.path.join(theme_dir, 'assets')
assets_dest = os.path.join(OUTPUT_DIR, 'assets')
if os.path.exists(assets_source):
    shutil.copytree(assets_source, assets_dest, dirs_exist_ok=True)

print("Site generated successfully.")
