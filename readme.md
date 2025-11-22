# Создайте свой собственный LinkTree (или TapLink) с помощью Python и GitHub Pages

Этот проект — простой способ собрать свою страницу в стиле LinkTree или Taplink. Вы можете сгенерировать статичный сайт, где будут ссылки на ваши соцсети и любые другие важные ресурсы. Всё создаётся через Python, а готовый результат удобно размещается на GitHub Pages.

![my analog of linktree using github page](https://github.com/user-attachments/assets/5713df1f-1161-4660-9efb-cdfd53685374)

## Что это такое

PythonPageLink — небольшой генератор статичной страницы. Он берёт настройки из файла, подставляет их в шаблон через Jinja2 и формирует готовую личную страницу со всеми вашими ссылками. После генерации всё можно сразу заливать в GitHub Pages.

## Возможности

* **Свои ссылки**: все ссылки и описания хранятся в YAML файле, который легко редактировать.
* **Персонализация**: можно поменять фото, описание, оформление и тему сайта.
* **Быстрый запуск**: GitHub Pages позволяет легко разместить сайт.

## Структура проекта

* **`config.yml`** — основные настройки сайта.
* **`generate_site.py`** — скрипт генерации.
* **`themes/custom/`** — кастомная тема, включая CSS, JS и HTML шаблон.
* **`docs/`** — сюда попадают готовые файлы сайта.

## Установка

1. **Клонировать репозиторий**

   ```bash
   git clone https://github.com/king-tri-ton/pythonpagelink.git
   cd pythonpagelink
   ```

2. **Установить зависимости**

   Убедись, что установлен Python 3 и pip.

   ```bash
   pip install jinja2 pyyaml
   ```

## Настройка

1. **Изменить конфигурацию**

   В файле `config.yml` указываешь свои данные. Пример:

   ```yaml
   name: "King Triton"
   picture: "assets/img/im.jpg"
   bio: "Programmer python and php/laravel"
   meta:
     lang: "en"
     description: "Programmer python and php/laravel"
     title: "King Triton"
     author: "King Triton"
     siteUrl: "https://king-tri-ton.github.io/pythonpagelink/"
   links:
     - name: "Github"
       url: "https://github.com/king-tri-ton"
     - name: "Dev.to"
       url: "https://dev.to/king_triton"
     - name: "Patreon"
       url: "https://www.patreon.com/king_triton"
     - name: "Telegram"
       url: "https://t.me/king_tri_ton"
     - name: "Instagram"
       url: "https://www.instagram.com/king_tri_ton"
   theme: "custom"
   ```

2. **Изменить оформление**

   * В **CSS** (`themes/custom/assets/css/styles.css`) меняешь внешний вид.
   * В **JavaScript** (`themes/custom/assets/js/script.js`) добавляешь логику.
   * В **HTML** (`themes/custom/index.html`) редактируешь структуру страницы.

## Генерация сайта

После правок запускаешь:

```bash
python generate_site.py
```

Скрипт создаст папку `docs` с полностью готовым сайтом.

## Публикация на GitHub Pages

![steps to create a github page](https://github.com/user-attachments/assets/1ce1a9c2-f2d5-4cec-9d4b-e5ba9453cefb)

1. Создай новый репозиторий.
2. Загрузите в него проект вместе с папкой `docs`.
3. Открой настройки репозитория.
4. В разделе Pages выбери ветку `master` и папку `/docs`.
5. Сохрани и подожди пару минут.

После этого сайт будет доступен по адресу:

```
https://<username>.github.io/<repository-name>/
```

Готовый пример можно посмотреть здесь:
[https://king-tri-ton.github.io/pythonpagelink/](https://king-tri-ton.github.io/pythonpagelink/)

## Лицензия

Проект распространяется по лицензии MIT.

## Контакты

Если есть вопросы или идеи — пиши в телеграм:
[https://t.me/king_tri_ton](https://t.me/king_tri_ton)
