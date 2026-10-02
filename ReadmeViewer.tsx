import React, { useState, useEffect } from 'react';
import { README_TOC, TocItem } from '../data/readmeContent.ts';
import { 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  Search, 
  Code, 
  FileText, 
  Bookmark, 
  Layers, 
  Laptop, 
  Terminal, 
  CheckCircle2, 
  Circle,
  Sparkles,
  ChevronRight,
  Eye
} from 'lucide-react';

interface ReadmeViewerProps {
  markdownContent: string;
  onEditClick: () => void;
  onOpenMockupClick: () => void;
  onDownloadReadme: () => void;
}

export const ReadmeViewer: React.FC<ReadmeViewerProps> = ({
  markdownContent,
  onEditClick,
  onOpenMockupClick,
  onDownloadReadme,
}) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [activeTocId, setActiveTocId] = useState<string>('pro-mockup-gallery');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedAll, setCopiedAll] = useState(false);
  const [tasks, setTasks] = useState([
    { text: 'Set up Vite 8 + React 19 + Tailwind v4', done: true },
    { text: 'Integrate CSS-vector 3D Pro Mockup engine', done: true },
    { text: 'Build interactive real-time telemetry feed in mockup', done: true },
    { text: 'Add interactive badge creator and shields generator', done: true },
    { text: 'Enable 1-click Markdown copy and README.md download', done: true },
  ]);

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const handleCopyAll = () => {
    navigator.clipboard.writeText(markdownContent);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  const toggleTask = (index: number) => {
    setTasks(prev => {
      const copy = [...prev];
      copy[index].done = !copy[index].done;
      return copy;
    });
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6">
      {/* Sticky Table of Contents Sidebar */}
      <div className="w-full lg:w-64 shrink-0 space-y-4">
        <div className="sticky top-20 bg-zinc-900/90 border border-zinc-800/80 rounded-2xl p-4 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/70 text-xs font-semibold text-zinc-300">
            <span className="flex items-center space-x-1.5">
              <Bookmark className="w-3.5 h-3.5 text-blue-400" />
              <span>Table of Contents</span>
            </span>
            <span className="text-[10px] text-zinc-500 font-mono">README.md</span>
          </div>

          {/* Search within document */}
          <div className="relative my-3">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search sections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950/80 border border-zinc-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <nav className="space-y-1 text-xs max-h-[380px] overflow-y-auto no-scrollbar">
            {README_TOC
              .filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveTocId(item.id)}
                  className={`block px-2.5 py-1.5 rounded-lg transition truncate ${
                    activeTocId === item.id
                      ? 'bg-blue-600/15 text-blue-400 font-medium border-l-2 border-blue-500'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                  }`}
                >
                  {item.title}
                </a>
              ))}
          </nav>

          <div className="pt-3 mt-3 border-t border-zinc-800/70 space-y-2">
            <button
              onClick={onOpenMockupClick}
              className="w-full px-3 py-2 rounded-xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 hover:from-blue-600/30 hover:to-indigo-600/30 border border-blue-500/40 text-blue-300 text-xs font-semibold flex items-center justify-center space-x-2 transition"
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>View in 3D Mockup</span>
            </button>

            <button
              onClick={onDownloadReadme}
              className="w-full px-3 py-1.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700 text-zinc-300 text-xs font-medium flex items-center justify-center space-x-1.5 transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download README.md</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Document Body */}
      <div className="flex-1 bg-zinc-900/90 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-xl text-zinc-200 space-y-8">
        {/* Document Header & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold text-white tracking-tight">README.md</h1>
                <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700 font-mono">
                  Markdown v2.4
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Official repository documentation &amp; interactive mockup showcase
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyAll}
              className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 border border-zinc-700 flex items-center space-x-1.5 transition active:scale-95"
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedAll ? 'Copied' : 'Copy All'}</span>
            </button>

            <button
              onClick={onEditClick}
              className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-md shadow-blue-500/20 flex items-center space-x-1.5 transition active:scale-95"
            >
              <Code className="w-3.5 h-3.5" />
              <span>Edit Markdown</span>
            </button>
          </div>
        </div>

        {/* ASCII Art Terminal Hero Banner */}
        <div className="rounded-xl bg-[#090b10] border border-zinc-800 p-4 font-mono text-[11px] text-blue-400 overflow-x-auto shadow-inner leading-tight">
          <pre>{` ____________________________________________________________________________
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
                   \\________________________________/`}</pre>
        </div>

        {/* Badges Bar */}
        <div className="flex flex-wrap gap-2 pt-1">
          {[
            { label: 'release', val: 'v2.4.0', color: 'bg-blue-600' },
            { label: 'React', val: '19.0', color: 'bg-cyan-600' },
            { label: 'TypeScript', val: '5.7', color: 'bg-indigo-600' },
            { label: 'Tailwind CSS', val: 'v4', color: 'bg-sky-500' },
            { label: 'License', val: 'Apache 2.0', color: 'bg-emerald-600' },
            { label: 'Devices', val: 'MacBook | iPhone | Studio Display', color: 'bg-purple-600' },
          ].map((b, i) => (
            <div key={i} className="inline-flex rounded text-[11px] font-mono overflow-hidden border border-zinc-700 shadow-sm">
              <span className="bg-zinc-800 px-2 py-0.5 text-zinc-300 font-medium">{b.label}</span>
              <span className={`${b.color} px-2 py-0.5 text-white font-semibold`}>{b.val}</span>
            </div>
          ))}
        </div>

        {/* SECTION 1: PRO MOCKUP SHOWCASE CALLOUT */}
        <section id="pro-mockup-gallery" className="space-y-4 pt-4">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <span>📸 Pro Mockup Gallery</span>
            </h2>
            <button
              onClick={onOpenMockupClick}
              className="text-xs text-blue-400 hover:text-blue-300 flex items-center space-x-1"
            >
              <span>Launch Studio</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed">
            Every repository deserves a presentation that turns heads. README Pro provides authentic, zero-overhead CSS-vector device frames tailored for GitHub documentation and marketing sites:
          </p>

          {/* Interactive Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {[
              {
                title: 'MacBook Pro 16" Frame',
                desc: 'Precision camera notch, aluminum unibody, glass sheen reflection, keyboard lip, and soft floor shadow.',
                badge: '16:10 Liquid Retina XDR',
              },
              {
                title: 'iPhone 16 Pro Frame',
                desc: 'Grade-5 titanium finish, interactive Dynamic Island, curved OLED radius, and authentic status indicators.',
                badge: 'Super Retina XDR',
              },
              {
                title: 'Apple Studio Display 32"',
                desc: '32-inch 5K aspect ratio, brushed aluminum stand with cable management port, and clean desktop shadow.',
                badge: '5K Resolution',
              },
              {
                title: 'Safari / Arc Browser Window',
                desc: 'Traffic lights, clean tab strip, HTTPS address bar, and responsive window scaling.',
                badge: 'macOS Native',
              },
            ].map((card, i) => (
              <div 
                key={i} 
                onClick={onOpenMockupClick}
                className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 hover:border-blue-500/50 transition cursor-pointer group space-y-2"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-blue-400 transition">
                    {card.title}
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700 font-mono">
                    {card.badge}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Embed snippet box */}
          <div className="relative rounded-xl bg-zinc-950 border border-zinc-800 p-3.5">
            <div className="flex justify-between items-center text-xs text-zinc-400 mb-2 font-mono">
              <span>Embed Mockup in Markdown:</span>
              <button
                onClick={() => handleCopyCode('[![App Preview](https://readmepro.studio/mockup.png)](https://your-app-url.com)', 'embed-code')}
                className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
              >
                {copiedSection === 'embed-code' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedSection === 'embed-code' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <code className="text-xs text-emerald-400 font-mono break-all block">
              {`[![App Preview](https://readmepro.studio/api/mockup?device=macbook-pro&angle=isometric&theme=dark)](https://your-app-url.com)`}
            </code>
          </div>
        </section>

        {/* SECTION 2: HIGHLIGHTS & FEATURES */}
        <section id="highlights--features" className="space-y-4 pt-4">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <h2 className="text-lg font-bold text-white">✨ Highlights &amp; Features</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800 space-y-1.5">
              <div className="font-semibold text-zinc-200 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>Zero-Overhead Vector 3D Engine</span>
              </div>
              <p className="text-zinc-400">
                Lightweight CSS 3D transforms ensure lightning-fast rendering without draining GPU cycles or requiring heavy Three.js bundles.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800 space-y-1.5">
              <div className="font-semibold text-zinc-200 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Interactive Live Inner Dashboard</span>
              </div>
              <p className="text-zinc-400">
                Clickable tabs, telemetry pulse, active worker nodes, and live throughput simulator running directly inside device screens.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800 space-y-1.5">
              <div className="font-semibold text-zinc-200 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>Shields.io Badge Architect</span>
              </div>
              <p className="text-zinc-400">
                Visual generator for release versions, build status, coverage percentages, and tech stack tags ready to copy.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800 space-y-1.5">
              <div className="font-semibold text-zinc-200 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Live Markdown Editor with Split-Sync</span>
              </div>
              <p className="text-zinc-400">
                Real-time preview side-by-side with instantaneous syntax highlight rendering and one-click README export.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: ARCHITECTURE */}
        <section id="architecture--component-flow" className="space-y-4 pt-4">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <h2 className="text-lg font-bold text-white">🏗️ Architecture &amp; Component Flow</h2>
          </div>

          <div className="rounded-xl bg-zinc-950 border border-zinc-800 p-4 font-mono text-xs text-zinc-300 overflow-x-auto">
            <pre>{`┌───────────────────────────────────────────────────────────────┐
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
└───────────────────────────────────────────────────────────────┘`}</pre>
          </div>
        </section>

        {/* SECTION 4: QUICK START */}
        <section id="quick-start" className="space-y-4 pt-4">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <h2 className="text-lg font-bold text-white">🚀 Quick Start</h2>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl bg-zinc-950 border border-zinc-800 p-3.5 relative">
              <div className="flex justify-between items-center text-xs text-zinc-500 font-mono mb-2">
                <span>bash - Clone &amp; Run Dev Server</span>
                <button
                  onClick={() => handleCopyCode('git clone https://github.com/your-username/readme-pro-mockup-studio.git\ncd readme-pro-mockup-studio\nnpm install\nnpm run dev', 'install-code')}
                  className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
                >
                  {copiedSection === 'install-code' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedSection === 'install-code' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="font-mono text-xs text-zinc-200">
                <code>{`# Clone the repository
git clone https://github.com/your-username/readme-pro-mockup-studio.git

# Navigate into project directory
cd readme-pro-mockup-studio

# Install dependencies
npm install

# Start development server on port 3000
npm run dev`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* SECTION 5: TECH STACK MATRIX */}
        <section id="tech-stack" className="space-y-4 pt-4">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <h2 className="text-lg font-bold text-white">🛠️ Tech Stack Matrix</h2>
          </div>

          <div className="border border-zinc-800 rounded-xl overflow-hidden text-xs">
            <table className="w-full text-left">
              <thead className="bg-zinc-950/80 border-b border-zinc-800 text-zinc-400 font-semibold font-mono">
                <tr>
                  <th className="p-3">Layer</th>
                  <th className="p-3">Technology</th>
                  <th className="p-3">Purpose</th>
                  <th className="p-3">Version</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                <tr>
                  <td className="p-3 font-medium text-white">UI Framework</td>
                  <td className="p-3 font-mono text-blue-400">React 19</td>
                  <td className="p-3">Component structure &amp; state synchronization</td>
                  <td className="p-3 font-mono">^19.0.1</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-white">Build Tool</td>
                  <td className="p-3 font-mono text-purple-400">Vite 8</td>
                  <td className="p-3">Instant compilation &amp; zero-config bundle</td>
                  <td className="p-3 font-mono">^8.3.0</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-white">Styling</td>
                  <td className="p-3 font-mono text-cyan-400">Tailwind CSS v4</td>
                  <td className="p-3">Modern CSS variables &amp; responsive styling</td>
                  <td className="p-3 font-mono">^4.3.3</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-white">Icons</td>
                  <td className="p-3 font-mono text-emerald-400">Lucide React</td>
                  <td className="p-3">Consistent SVG iconography</td>
                  <td className="p-3 font-mono">^0.546.0</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-white">Motion</td>
                  <td className="p-3 font-mono text-amber-400">Motion 12</td>
                  <td className="p-3">Smooth spring physics &amp; perspective transitions</td>
                  <td className="p-3 font-mono">^12.23.24</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 6: REPOSITORY CHECKLIST */}
        <section className="space-y-3 pt-4 border-t border-zinc-800">
          <h3 className="text-sm font-semibold text-zinc-300">Project Verification Checklist</h3>
          <div className="space-y-2">
            {tasks.map((task, i) => (
              <div 
                key={i} 
                onClick={() => toggleTask(i)}
                className="flex items-center space-x-2.5 text-xs text-zinc-300 cursor-pointer select-none hover:text-white transition"
              >
                {task.done ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <Circle className="w-4 h-4 text-zinc-600 shrink-0" />
                )}
                <span className={task.done ? 'line-through text-zinc-500' : ''}>{task.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: LICENSE */}
        <section id="license" className="pt-4 border-t border-zinc-800 flex justify-between items-center text-xs text-zinc-500">
          <span>Released under the Apache-2.0 License.</span>
          <span className="font-mono">Copyright © 2026 README Pro Team</span>
        </section>
      </div>
    </div>
  );
};
