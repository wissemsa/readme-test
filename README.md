# ⚡ README Pro & Device Mockup Studio

<div align="center">

```
 ____________________________________________________________________________
|  ________________________________________________________________________  |
| |  ●  ●  ●   https://readmepro.studio/showcase                           | |
| |────────────────────────────────────────────────────────────────────────| |
| |                                                                        | |
| |   ██████╗ ███████╗ █████╗ ██████╗ ███╗   ███╗███████╗    ██████╗ ██████╗| |
| |   ██╔══██╗██╔════╝██╔══██╗██╔══██╗████╗ ████║██╔════╝    ██╔══██╗██╔══██| |
| |   ██████╔╝█████╗  ███████║██║  ██║██╔████╔██║█████╗      ██████╔╝██████╔| |
| |   ██╔══██╗██╔══╝  ██╔══██║██║  ██║██║╚██╔╝██║██╔══╝      ██╔═══╝ ██╔══██| |
| |   ██║  ██║███████╗██║  ██║██████╔╝██║ ╚═╝ ██║███████╗    ██║     ██║  ██| |
| |   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚═╝     ╚═╝╚══════╝    ╚═╝     ╚═╝  ██| |
| |                                                                        | |
| |          ⚡ Ultra-Crisp Pro Mockup Studio & Interactive README ⚡        | |
| |________________________________________________________________________| |
|____________________________________________________________________________|
    \____________________________________________________________________/
                   \________________________________/
```

[![Release](https://img.shields.io/badge/release-v2.4.0-3b82f6?style=for-the-badge&logo=github)](https://github.com)
[![React 19](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-CSS_v4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-Apache_2.0-22c55e?style=for-the-badge)](./LICENSE)
[![Device Mockups](https://img.shields.io/badge/Devices-MacBook_|_iPhone_|_Studio_Display-8b5cf6?style=for-the-badge)]()

**A developer-first suite for generating hyper-realistic 3D hardware device mockups, interactive project documentation, and publication-ready READMEs.**

[Explore Live Showcase](https://ais-dev-uq24skbcd5l7vm2ioie7vl-309100386716.europe-west2.run.app) · [Report Bug](https://github.com) · [Request Feature](https://github.com)

</div>

---

## 📸 Pro Mockup Gallery

Experience real-time interactive previews inside custom-engineered hardware frames:

| Device Frame | Features & Specifications | Supported Angles |
| :--- | :--- | :--- |
| **MacBook Pro 16"** | Notch display, aluminum unibody, glass sheen, keyboard lip | Flat Frontal, 3D Isometric Tilt (15°), Perspective Hero |
| **iPhone 16 Pro** | Titanium edge, Dynamic Island, OLED rounded corners, side keys | Portrait Flat, Floating 3D Angle, Landscape |
| **Apple Studio Display** | 32" 5K bezel ratio, aluminum desktop stand, desk shadow | Frontal Desk View, Elevated Standpoint |
| **Safari / Chrome Browser** | Traffic lights, clean tabs, SSL address bar, responsive width | Dark Mode Window, Light Glass, Borderless |
| **iPad Pro 13"** | Ultra-thin symmetrical bezel, Apple Pencil magnetic strip | Tablet Vertical & Horizontal |

```bash
# Embed a Pro Mockup directly into your markdown:
[![App Preview](https://readmepro.studio/api/mockup?device=macbook-pro&angle=isometric&theme=dark)](https://your-app-url.com)
```

---

## ✨ Highlights & Features

- **🖥️ Realistic 3D Device Frames**: Built entirely in zero-lag vector CSS & SVG without heavy WebGL overhead.
- **🎨 Lighting Studio Backdrops**: Midnight Aurora, Cyberpunk Neon, Golden Sunset, Minimal Slate, and Transparent Studio.
- **🕹️ Live Interactive Inner App**: Test an analytics SaaS dashboard inside the mockup with working tabs, metrics, charts, and toggles.
- **📝 Real-time README Editor & Split Preview**: Edit markdown in real-time with instant syntax rendering and sync scrolling.
- **🏷️ Interactive Badge Builder**: Pick frameworks, cloud providers, and licenses to generate copy-paste GitHub shields.
- **⚡ One-Click Export**:
  - Export rendered mockup as SVG or PNG screenshot.
  - Download custom `README.md` file formatted to open-source excellence.
  - Copy ready-to-paste markdown code snippets.

---

## 🏗️ Architecture & Component Flow

```text
┌───────────────────────────────────────────────────────────────┐
│                     README Pro Studio Core                    │
├───────────────────────────────┬───────────────────────────────┤
│        Pro Mockup Engine      │      Markdown & Doc Engine    │
│  - MacBook Pro 16" Frame      │  - GitHub-Flavored Renderer   │
│  - iPhone 16 Pro Frame        │  - Live Markdown Editor       │
│  - Studio Display Frame       │  - Active Scroll Spy TOC      │
│  - Safari Browser Chrome      │  - Dynamic Badge Generator    │
│  - 3D Isometric Transform     │  - Code Block Copy Engine     │
├───────────────────────────────┴───────────────────────────────┤
│                     Interactive Screen Feed                   │
│  - Live SaaS Dashboard (Clickable Tabs, Latency, Metrics)     │
│  - Architecture Blueprint View                                │
│  - Custom URL / Webview Sandbox                               │
└───────────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js `>= 18.0.0`
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/wissemsa/readme-pro-mockup-studio.git

# Navigate into project directory
cd readme-pro-mockup-studio

# Install dependencies
npm install

# Start development server on port 3000
npm run dev
```

Visit `http://localhost:3000` to access the interactive web studio.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Motion](https://motion.dev/)
- **Language**: [TypeScript 5.7](https://www.typescriptlang.org/)

---

## ⚙️ Configuration & Environment

Configuration options are available via `.env`:

```env
# Optional Gemini AI API key for automated documentation generation
GEMINI_API_KEY="your-gemini-key"

# Hosted Application URL
APP_URL="http://localhost:3000"
```

---

## 📂 Repository Structure

```text
.
├── README.md               # You are here! Complete documentation & mockup specs
├── index.html              # Entry HTML with OpenGraph social metadata
├── metadata.json           # Studio capabilities & app descriptors
├── package.json            # Project manifest & dependency declarations
├── vite.config.ts          # Vite build & Tailwind CSS 4 plugin configuration
├── tsconfig.json           # Strict TypeScript configuration
└── src/
    ├── main.tsx            # React root bootstrap
    ├── App.tsx             # Main Studio container & state management
    ├── index.css           # Global typography & Tailwind styling
    ├── components/
    │   ├── Header.tsx           # Global toolbar, mode switcher, export buttons
    │   ├── MockupViewer.tsx     # The 3D device mockup engine (MacBook, iPhone, etc.)
    │   ├── ReadmeViewer.tsx     # Rendered GitHub markdown viewer & TOC
    │   ├── ReadmeEditor.tsx     # Live Markdown editor with split view
    │   ├── InnerAppDemo.tsx     # Interactive SaaS application loaded in mockup
    │   ├── BadgeGenerator.tsx   # Visual shields.io badge creator
    │   ├── DeviceControls.tsx   # Controls for frame, angle, backdrop & finish
    │   └── MockupBanners.tsx    # Publication-ready banner preset cards
    ├── data/
    │   └── readmeContent.ts     # Default documentation source & presets
    └── types/
        └── index.ts             # Device & studio state type definitions
```

---

## 🤝 Contributing

Contributions are welcomed! Follow these steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingDeviceMockup`)
3. Commit your Changes (`git commit -m 'Add ultra-wide curved monitor mockup'`)
4. Push to the Branch (`git push origin feature/AmazingDeviceMockup`)
5. Open a Pull Request

---

## 📄 License

Distributed under the Apache-2.0 License. See `LICENSE` for more information.

---

<div align="center">
  <sub>Built with precision for developers, engineers, and open-source creators.</sub>
</div>
