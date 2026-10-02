import React from 'react';
import { StudioTab } from '../types/index.ts';
import { 
  Laptop, 
  FileText, 
  Columns, 
  Tag, 
  Image as ImageIcon, 
  Download, 
  Github, 
  Sparkles,
  Zap
} from 'lucide-react';

interface HeaderProps {
  activeTab: StudioTab;
  onTabChange: (tab: StudioTab) => void;
  onDownloadReadme: () => void;
  onCopyReadme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  onDownloadReadme,
  onCopyReadme,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-3 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-base sm:text-lg text-white tracking-tight">
                README<span className="text-blue-400">Pro</span>
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono font-semibold">
                v2.4
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 hidden sm:block">
              Interactive 3D Mockup &amp; Documentation Studio
            </p>
          </div>
        </div>

        {/* Central Mode Switcher Tabs */}
        <nav className="flex items-center space-x-1 bg-zinc-900/90 border border-zinc-800/80 p-1 rounded-xl shadow-inner overflow-x-auto no-scrollbar">
          {[
            { id: 'mockup-studio', label: 'Pro Mockup', icon: Laptop },
            { id: 'readme-viewer', label: 'README.md', icon: FileText },
            { id: 'split-view', label: 'Split Studio', icon: Columns },
            { id: 'badge-creator', label: 'Badges', icon: Tag },
            { id: 'banner-generator', label: 'Banners', icon: ImageIcon },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id as StudioTab)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={onDownloadReadme}
            className="hidden md:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-semibold text-zinc-200 transition active:scale-95"
            title="Download formatted README.md"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            <span>Export README</span>
          </button>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition active:scale-95"
            title="GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
