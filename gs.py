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

OUTPUT_DIR = 'docs'

def main():
    # Загрузка конфигурации
    with open('config.yml', 'r', encoding='utf-8') as f:
        config = yaml.safe_load(f)
    
    # Создание выходной директории
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    # Генерация HTML
    theme_dir = os.path.join('themes', config['theme'])
    env = Environment(loader=FileSystemLoader(theme_dir))
    template = env.get_template('index.html')
    output_html = template.render(config=config)
    
    with open(os.path.join(OUTPUT_DIR, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(output_html)
    
    # Копирование assets
    assets_source = os.path.join(theme_dir, 'assets')
    assets_dest = os.path.join(OUTPUT_DIR, 'assets')
    if os.path.exists(assets_source):
        shutil.copytree(assets_source, assets_dest, dirs_exist_ok=True)
    
    print("Site generated successfully")

if __name__ == '__main__':
    main()