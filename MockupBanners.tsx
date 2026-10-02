import React, { useState } from 'react';
import { InnerAppDemo } from './InnerAppDemo.tsx';
import { Copy, Check, Download, Image as ImageIcon, Laptop, Smartphone, Monitor } from 'lucide-react';

export const MockupBanners: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownloadSVG = (bannerTitle: string) => {
    // Generate a downloadable SVG representation
    const svgData = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
      <defs>
        <radialGradient id="bg" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stop-color="#1e1b4b"/>
          <stop offset="60%" stop-color="#090a10"/>
          <stop offset="100%" stop-color="#030712"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)"/>
      <text x="600" y="240" font-family="system-ui, sans-serif" font-weight="800" font-size="52" fill="#ffffff" text-anchor="middle">README Pro Studio</text>
      <text x="600" y="300" font-family="system-ui, sans-serif" font-size="24" fill="#94a3b8" text-anchor="middle">Ultra-Crisp 3D Hardware Device Mockups</text>
      <rect x="350" y="360" width="500" height="200" rx="16" fill="#18181b" stroke="#3b82f6" stroke-width="2"/>
      <text x="600" y="470" font-family="monospace" font-size="18" fill="#38bdf8" text-anchor="middle">MacBook Pro 16" · iPhone 16 Pro · Studio Display</text>
    </svg>`;
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${bannerTitle.toLowerCase().replace(/\s+/g, '-')}-banner.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full bg-zinc-900/90 border border-zinc-800/80 rounded-2xl p-5 sm:p-7 shadow-xl space-y-6 text-zinc-200">
      <div>
        <h2 className="text-lg font-bold text-white flex items-center space-x-2">
          <ImageIcon className="w-5 h-5 text-blue-400" />
          <span>Publication-Ready GitHub README Banners</span>
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          High-impact header banners configured for open-source repositories, documentation, and product launches.
        </p>
      </div>

      <div className="space-y-8">
        {/* BANNER 1: FLAGSHIP HERO (MacBook + iPhone) */}
        <div className="rounded-2xl border border-zinc-800 bg-[#090b12] overflow-hidden shadow-2xl relative">
          <div className="p-6 sm:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden [background-image:radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(59,130,246,0.25),rgba(147,51,234,0.15),transparent_75%)]">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-4">
              <span>PRO HERO SHOWCASE</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl">
              Next-Generation Developer Telemetry Platform
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mt-2 mb-8">
              Engineered with React 19, TypeScript 5.7, and sub-20ms edge latency.
            </p>

            {/* Mockup Preview in Banner */}
            <div className="w-full max-w-2xl relative flex items-center justify-center">
              {/* MacBook Miniature */}
              <div className="w-[85%] aspect-[16/10] bg-zinc-950 rounded-xl p-2 border border-zinc-800 shadow-2xl relative z-10">
                <div className="w-full h-full bg-black rounded-lg overflow-hidden border border-zinc-900">
                  <InnerAppDemo />
                </div>
              </div>

              {/* iPhone Overlapping in Corner */}
              <div className="w-[30%] aspect-[9/19] bg-zinc-950 rounded-3xl p-1.5 border-2 border-zinc-700 shadow-2xl absolute -bottom-6 -right-2 z-20 hidden sm:block">
                <div className="w-full h-full bg-black rounded-2xl overflow-hidden">
                  <InnerAppDemo isMobile={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Banner Action Bar */}
          <div className="px-5 py-3 bg-zinc-950 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-mono text-zinc-400 text-[11px]">Flagship Hero Banner (1200 x 630 ratio)</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleCopy('<div align="center">\n  <img src="https://readmepro.studio/banners/hero.svg" alt="Project Banner" width="100%"/>\n</div>', 'banner-hero')}
                className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium flex items-center space-x-1.5 transition text-[11px]"
              >
                {copiedId === 'banner-hero' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId === 'banner-hero' ? 'Copied' : 'Copy Markdown'}</span>
              </button>
              <button
                onClick={() => handleDownloadSVG('Hero Flagship')}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center space-x-1.5 transition text-[11px]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download SVG Banner</span>
              </button>
            </div>
          </div>
        </div>

        {/* BANNER 2: MINIMAL CODE WINDOW (Browser Window) */}
        <div className="rounded-2xl border border-zinc-800 bg-[#0c0d12] overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 flex flex-col items-center justify-center [background-image:radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.12),transparent_70%)]">
            <div className="w-full max-w-xl aspect-[16/10] bg-zinc-950 rounded-xl border border-zinc-800 shadow-2xl flex flex-col overflow-hidden">
              <div className="px-3 py-2 bg-zinc-900 border-b border-zinc-800 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="font-mono text-[10px] text-zinc-400 ml-2">production-metrics.app</span>
              </div>
              <div className="w-full flex-1 overflow-hidden">
                <InnerAppDemo />
              </div>
            </div>
          </div>

          <div className="px-5 py-3 bg-zinc-950 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-mono text-zinc-400 text-[11px]">Developer Minimal Browser Banner</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleCopy('<div align="center">\n  <img src="https://readmepro.studio/banners/browser.svg" alt="Browser Mockup" width="100%"/>\n</div>', 'banner-browser')}
                className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium flex items-center space-x-1.5 transition text-[11px]"
              >
                {copiedId === 'banner-browser' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId === 'banner-browser' ? 'Copied' : 'Copy Markdown'}</span>
              </button>
              <button
                onClick={() => handleDownloadSVG('Browser Minimal')}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center space-x-1.5 transition text-[11px]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download SVG Banner</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
