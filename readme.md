# Build Your Own LinkTree with Python and GitHub Pages

This project provides a template and script for creating your own LinkTree (or Taplink) style landing page using Python and GitHub Pages. It allows you to generate a static webpage that displays links to your various social media profiles or other important sites.

## Overview

PythonPageLink is a static site generator that creates a personal link tree webpage. It uses Python and Jinja2 for generating HTML from a configuration file and can be easily deployed using GitHub Pages.

## Features

- **Customizable Links**: Define your links and their descriptions in a YAML file.
- **Personalization**: Customize your profile picture, bio, and site theme.
- **Easy Deployment**: Host your site on GitHub Pages with simple setup instructions.

## Project Structure

- **`config.yml`**: Configuration file for site details.
- **`generate_site.py`**: Python script to generate the static site.
- **`themes/custom/`**: Custom theme directory with assets, CSS, JavaScript, and the HTML template.
- **`docs/`**: Output directory for generated site files.

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/king-tri-ton/pythonpagelink.git
   cd pythonpagelink
   ```

2. **Install Dependencies**

   Make sure you have Python 3 and pip installed. Install the required Python packages:

   ```bash
   pip install jinja2 pyyaml
   ```

## Customization

1. **Configure Your Page**

   Edit `config.yml` to update your personal information and links. Example configuration:

   ```yaml
   name: "King Triton"
   picture: "assets/img/picture.jpg"
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
       url: "https://t.me/king_triton"
     - name: "Instagram"
       url: "https://www.instagram.com/king_tri_ton"
   theme: "custom"
   ```

2. **Customize Your Theme**

   - **CSS**: Modify `themes/custom/assets/css/styles.css` to adjust the styling of your site.
   - **JavaScript**: Update `themes/custom/assets/js/script.js` to add or change functionality.
   - **HTML Template**: Edit `themes/custom/index.html` for structural changes to your webpage.

## Generate Your Site

After customization, generate your static site by running:

```bash
python generate_site.py
```

This command will create the `docs` folder with the generated files.

## Deploying on GitHub Pages



1. Create a new repository on GitHub.
2. Upload all files, including the `docs` folder, to the repository.
3. Go to the repository’s Settings section.
4. In the Pages section, select the `master` branch and the `/docs` folder as the source.
5. Save changes and wait for GitHub Pages to deploy your site.

Your site will now be available at `https://<username>.github.io/<repository-name>/`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/king-tri-ton/pythonpagelink).