# Portfolio

Welcome to the source code repository of my personal website portfolio.  
This site showcases my background, skills, projects, and contact information, all built with plain HTML, CSS, and JavaScript.

## 📌 Features

- **Responsive design:** Compatible with screen sizes from phones to desktop.
- **Dark mode support:** Automatic based on user preferences.
- **Animated effects:** Confetti for birthday, hearts for Valentine's Day, snow in winter.
- **Automated deployment:** GitHub Actions build, Docker image creation, and publishing to GitHub Container Registry (GHCR).
- **VPS deployment:** Runs behind a reverse proxy for fast and secure access.
- **Static site:** No backend dependencies—easy to maintain and scale.

## 🛠️ Tech Stack

- **Frontend:**  
  - HTML5 and CSS3 (with custom styling and Google Fonts)  
  - Vanilla JavaScript for interactivity and animations  
  - Font Awesome for icons  
  - Lottie animations for 404 page

- **Build & Deployment:**  
  - Docker Compose  
  - GitHub Actions for CI/CD  
  - GitHub Container Registry (GHCR)  
  - VPS hosting with Caddy as reverse proxy

## 📖 Usage

To run the website locally using Docker Compose:

```yml
services:
  portfolio:
    image: ghcr.io/akeeller/portfolio
    container_name: portfolio
    restart: unless-stopped
    ports:
      - 3000:3000
```

Then open `http://localhost:3000` in your browser.

## 🌍 Live Website

The website is live and can be visited at: [amoruso.dev](https://amoruso.dev).

## 🤝 Contributing

This is a personal project, but feel free to open issues or pull requests for:

- Bug fixes
- Improvements in styling or accessibility
- Suggestions to enhance user experience

## 👋 Greetings

Thank you for visiting my repository!
