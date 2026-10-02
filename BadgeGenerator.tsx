import React, { useState } from 'react';
import { POPULAR_BADGES, BadgePreset } from '../data/readmeContent.ts';
import { Sparkles, Copy, Check, Plus, Tag, Palette } from 'lucide-react';

export const BadgeGenerator: React.FC = () => {
  const [label, setLabel] = useState('Framework');
  const [message, setMessage] = useState('React 19');
  const [color, setColor] = useState('61dafb');
  const [logo, setLogo] = useState('react');
  const [style, setStyle] = useState<'for-the-badge' | 'flat' | 'flat-square'>('for-the-badge');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const badgeUrl = `https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(message)}-${color}?style=${style}${logo ? `&logo=${logo}` : ''}`;
  const markdownCode = `[![${label}](${badgeUrl})](https://github.com)`;

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const applyPreset = (preset: BadgePreset) => {
    setLabel(preset.label);
    setMessage(preset.message);
    setColor(preset.color);
    if (preset.logo) setLogo(preset.logo);
  };

  return (
    <div className="w-full bg-zinc-900/90 border border-zinc-800/80 rounded-2xl p-5 sm:p-7 shadow-xl space-y-6 text-zinc-200">
      <div>
        <h2 className="text-lg font-bold text-white flex items-center space-x-2">
          <Tag className="w-5 h-5 text-blue-400" />
          <span>Interactive Shields &amp; Badge Architect</span>
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          Create official GitHub-ready status badges and stack tags for your README.md in seconds.
        </p>
      </div>

      {/* Live Badge Preview Card */}
      <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col items-center justify-center space-y-3 shadow-inner">
        <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Live Preview</span>
        <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800/60 shadow-md">
          <img src={badgeUrl} alt={`${label} badge`} className="h-7" />
        </div>
        <div className="w-full max-w-xl flex items-center justify-between p-2 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
          <span className="truncate pr-2">{markdownCode}</span>
          <button
            onClick={() => handleCopy(markdownCode, 'custom-badge')}
            className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-sans font-semibold shrink-0 flex items-center space-x-1"
          >
            {copiedCode === 'custom-badge' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            <span>{copiedCode === 'custom-badge' ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Form Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="text-xs font-semibold text-zinc-400 block mb-1.5">Label (Left text)</label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="w-full px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-zinc-400 block mb-1.5">Message (Right text)</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-zinc-400 block mb-1.5">Color Hex</label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-blue-500 font-mono"
            />
            <span 
              className="w-7 h-7 rounded-lg border border-zinc-700 shrink-0" 
              style={{ backgroundColor: `#${color}` }} 
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-zinc-400 block mb-1.5">Badge Style</label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value as any)}
            className="w-full px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 focus:outline-none focus:border-blue-500"
          >
            <option value="for-the-badge">for-the-badge (Prominent)</option>
            <option value="flat">flat (Standard)</option>
            <option value="flat-square">flat-square (Minimal)</option>
          </select>
        </div>
      </div>

      {/* Preset Library */}
      <div className="space-y-3 pt-2">
        <label className="text-xs font-semibold text-zinc-400 block">Popular Pre-Built Badges (Click to apply &amp; copy)</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {POPULAR_BADGES.map((preset, idx) => {
            const presetUrl = `https://img.shields.io/badge/${encodeURIComponent(preset.label)}-${encodeURIComponent(preset.message)}-${preset.color}?style=for-the-badge${preset.logo ? `&logo=${preset.logo}` : ''}`;
            const presetMd = `[![${preset.label}](${presetUrl})](https://github.com)`;
            const isCopied = copiedCode === `preset-${idx}`;

            return (
              <div
                key={idx}
                onClick={() => applyPreset(preset)}
                className="p-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 transition cursor-pointer flex flex-col items-center justify-between space-y-2 group"
              >
                <img src={presetUrl} alt={preset.label} className="h-5" />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(presetMd, `preset-${idx}`);
                  }}
                  className="w-full py-1 rounded bg-zinc-900 hover:bg-blue-600 text-[10px] text-zinc-300 hover:text-white font-medium flex items-center justify-center space-x-1 transition"
                >
                  {isCopied ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5" />}
                  <span>{isCopied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
