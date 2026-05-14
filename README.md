# 東京備蓄ナビ (Tokyo Stockpile Navi)

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

An interactive web application to help you calculate your family's emergency stockpile needs, based on the official "Tokyo Stockpile Navi" by the Tokyo Metropolitan Government.

## Demos

- **Main Application:** [https://code4fukui.github.io/tokyobichikunavi/](https://code4fukui.github.io/tokyobichikunavi/)
- **Data View (備蓄ナビ):** [https://code4fukui.github.io/tokyobichikunavi/csv/](https://code4fukui.github.io/tokyobichikunavi/csv/)
- **Data Cards (備蓄推奨品カード):** [https://code4fukui.github.io/tokyobichikunavi/csv/card.html](https://code4fukui.github.io/tokyobichikunavi/csv/card.html)

## Features

- **Interactive Calculator:** A step-by-step tool to determine personalized stockpile recommendations based on family size, age, and gender.
- **Multilingual Support:** Full Japanese and English language support (i18n).
- **Static Site Generation:** Built with Nuxt.js for fast, static deployment.
- **Theme Customization:** Includes blue, yellow, and black color themes for accessibility.
- **Data Export:** Provides stockpile item data in CSV format.
- **Accessibility:** Features for adjusting font size and color contrast.

## Technology Stack

- **Framework:** [Nuxt.js](https://nuxtjs.org/) (v2)
- **UI:** [Vue.js](https://vuejs.org/)
- **Internationalization:** [nuxt-i18n](https://i18n.nuxtjs.org/)
- **Data Processing:** [Deno](https://deno.land/) for CSV generation
- **Styling:** PostCSS with CSS variables

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm (v6 or later)
- Deno (for running data scripts)

### Installation & Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/code4fukui/tokyobichikunavi.git
    cd tokyobichikunavi
    ```

2.  **Install dependencies:**
    ```bash
    npm ci
    ```

3.  **Run the development server:**
    ```bash
    # Serve with hot reload at http://localhost:3000
    npm run dev
    ```

### Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server (after building