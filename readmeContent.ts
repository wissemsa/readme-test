export const DEFAULT_README_MARKDOWN = `# ⚡ README Pro & Device Mockup Studio

<div align="center">

\`\`\`
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
    \\____________________________________________________________________/
                   \\________________________________/
\`\`\`

[![Release](https://img.shields.io/badge/release-v2.4.0-3b82f6?style=for-the-badge&logo=github)](https://github.com)
[![React 19](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-CSS_v4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-Apache_2.0-22c55e?style=for-the-badge)](./LICENSE)
[![Device Mockups](https://img.shields.io/badge/Devices-MacBook_|_iPhone_|_Studio_Display-8b5cf6?style=for-the-badge)]()

**A developer-first suite for generating hyper-realistic 3D hardware device mockups, interactive project documentation, and publication-ready READMEs.**

[Explore Live Showcase](https://readmepro.studio) · [Report Bug](https://github.com) · [Request Feature](https://github.com)

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

\`\`\`markdown
# Embed a Pro Mockup directly into your markdown:
[![App Preview](https://readmepro.studio/api/mockup?device=macbook-pro&angle=isometric&theme=dark)](https://your-app-url.com)
\`\`\`

---

## ✨ Highlights & Features

- **🖥️ Realistic 3D Device Frames**: Built entirely in zero-lag vector CSS & SVG without heavy WebGL overhead.
- **🎨 Lighting Studio Backdrops**: Midnight Aurora, Cyberpunk Neon, Golden Sunset, Minimal Slate, and Transparent Studio.
- **🕹️ Live Interactive Inner App**: Test an analytics SaaS dashboard inside the mockup with working tabs, metrics, charts, and toggles.
- **📝 Real-time README Editor & Split Preview**: Edit markdown in real-time with instant syntax rendering and sync scrolling.
- **🏷️ Interactive Badge Builder**: Pick frameworks, cloud providers, and licenses to generate copy-paste GitHub shields.
- **⚡ One-Click Export**:
  - Export rendered mockup as SVG or PNG screenshot.
  - Download custom \`README.md\` file formatted to open-source excellence.
  - Copy ready-to-paste markdown code snippets.

---

## 🏗️ Architecture & Component Flow

\`\`\`text
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
\`\`\`

---

## 🚀 Quick Start

### Prerequisites
- Node.js \`>= 18.0.0\`
- npm, pnpm, or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/your-username/readme-pro-mockup-studio.git

# Navigate into project directory
cd readme-pro-mockup-studio

# Install dependencies
npm install

# Start development server on port 3000
npm run dev
\`\`\`

Visit \`http://localhost:3000\` to access the interactive web studio.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Motion](https://motion.dev/)
- **Language**: [TypeScript 5.7](https://www.typescriptlang.org/)

---

## ⚙️ Configuration & Environment

Configuration options are available via \`.env\`:

\`\`\`env
# Optional Gemini AI API key for automated documentation generation
GEMINI_API_KEY="your-gemini-key"

# Hosted Application URL
APP_URL="http://localhost:3000"
\`\`\`

---

## 📂 Repository Structure

\`\`\`text
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
\`\`\`

---

## 🤝 Contributing

Contributions are welcomed! Follow these steps:

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingDeviceMockup\`)
3. Commit your Changes (\`git commit -m 'Add ultra-wide curved monitor mockup'\`)
4. Push to the Branch (\`git push origin feature/AmazingDeviceMockup\`)
5. Open a Pull Request

---

## 📄 License

Distributed under the Apache-2.0 License. See \`LICENSE\` for more information.
`;

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

export const README_TOC: TocItem[] = [
  { id: 'pro-mockup-gallery', title: 'Pro Mockup Gallery', level: 2 },
  { id: 'highlights--features', title: 'Highlights & Features', level: 2 },
  { id: 'architecture--component-flow', title: 'Architecture & Flow', level: 2 },
  { id: 'quick-start', title: 'Quick Start', level: 2 },
  { id: 'tech-stack', title: 'Tech Stack', level: 2 },
  { id: 'configuration--environment', title: 'Configuration', level: 2 },
  { id: 'repository-structure', title: 'Repository Structure', level: 2 },
  { id: 'contributing', title: 'Contributing', level: 2 },
  { id: 'license', title: 'License', level: 2 },
];

export interface BadgePreset {
  label: string;
  message: string;
  color: string;
  logo?: string;
  category: 'build' | 'tech' | 'license' | 'social';
}

export const POPULAR_BADGES: BadgePreset[] = [
  { label: 'Release', message: 'v2.4.0', color: '3b82f6', logo: 'github', category: 'build' },
  { label: 'Build', message: 'passing', color: '22c55e', logo: 'githubactions', category: 'build' },
  { label: 'React', message: '19.0', color: '61dafb', logo: 'react', category: 'tech' },
  { label: 'TypeScript', message: '5.7', color: '3178c6', logo: 'typescript', category: 'tech' },
  { label: 'Tailwind CSS', message: 'v4', color: '38bdf8', logo: 'tailwindcss', category: 'tech' },
  { label: 'Vite', message: '8.3', color: '646cff', logo: 'vite', category: 'tech' },
  { label: 'Node.js', message: '>=18', color: '339933', logo: 'nodedotjs', category: 'tech' },
  { label: 'License', message: 'Apache-2.0', color: 'eab308', category: 'license' },
  { label: 'PRs', message: 'welcome', color: 'a855f7', category: 'social' },
  { label: 'Coverage', message: '98.5%', color: '10b981', category: 'build' },
];
