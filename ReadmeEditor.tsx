import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Download, 
  RotateCcw, 
  Columns, 
  Eye, 
  Edit3, 
  Plus, 
  Code, 
  Laptop, 
  Wand2 
} from 'lucide-react';

interface ReadmeEditorProps {
  value: string;
  onChange: (val: string) => void;
  onReset: () => void;
  onDownload: () => void;
}

export const ReadmeEditor: React.FC<ReadmeEditorProps> = ({
  value,
  onChange,
  onReset,
  onDownload,
}) => {
  const [copied, setCopied] = useState(false);
  const [editorMode, setEditorMode] = useState<'split' | 'edit-only' | 'preview-only'>('split');

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInsertSnippet = (snippet: string) => {
    onChange(value + '\n\n' + snippet);
  };

  return (
    <div className="w-full bg-zinc-900/90 border border-zinc-800/80 rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col space-y-4">
      {/* Editor Toolbar */}
      <div className="flex flex-wrap items-center justify-between pb-3 border-b border-zinc-800 gap-3">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 bg-zinc-950 p-1 rounded-xl border border-zinc-800">
            <button
              onClick={() => setEditorMode('split')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition flex items-center space-x-1.5 ${
                editorMode === 'split' 
                  ? 'bg-blue-600 text-white shadow' 
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Columns className="w-3 h-3" />
              <span>Split View</span>
            </button>
            <button
              onClick={() => setEditorMode('edit-only')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition flex items-center space-x-1.5 ${
                editorMode === 'edit-only' 
                  ? 'bg-blue-600 text-white shadow' 
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Edit3 className="w-3 h-3" />
              <span>Editor Only</span>
            </button>
            <button
              onClick={() => setEditorMode('preview-only')}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition flex items-center space-x-1.5 ${
                editorMode === 'preview-only' 
                  ? 'bg-blue-600 text-white shadow' 
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Eye className="w-3 h-3" />
              <span>Preview</span>
            </button>
          </div>
        </div>

        {/* Quick Insert Snippets */}
        <div className="flex items-center space-x-1.5 overflow-x-auto text-xs">
          <button
            onClick={() => handleInsertSnippet('## 📸 Live Demo & Mockup\n\n[![Mockup Preview](https://readmepro.studio/api/mockup?device=macbook-pro&theme=dark)](https://your-app-url.com)')}
            className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 flex items-center space-x-1 transition text-[11px]"
          >
            <Laptop className="w-3 h-3 text-blue-400" />
            <span>+ Pro Mockup</span>
          </button>

          <button
            onClick={() => handleInsertSnippet('## 📦 Environment Variables\n\n```env\nAPI_KEY="your-api-key"\nPORT=3000\n```')}
            className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 flex items-center space-x-1 transition text-[11px]"
          >
            <Code className="w-3 h-3 text-emerald-400" />
            <span>+ Env Block</span>
          </button>

          <button
            onClick={onReset}
            className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 border border-zinc-700 flex items-center space-x-1 transition text-[11px]"
            title="Reset to default README content"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>

          <button
            onClick={handleCopy}
            className="px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium border border-zinc-700 flex items-center space-x-1 transition text-[11px]"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copied' : 'Copy Code'}</span>
          </button>

          <button
            onClick={onDownload}
            className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow flex items-center space-x-1 transition text-[11px]"
          >
            <Download className="w-3 h-3" />
            <span>Download</span>
          </button>
        </div>
      </div>

      {/* Editor & Preview Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[600px]">
        {/* Code Editor Area */}
        {(editorMode === 'split' || editorMode === 'edit-only') && (
          <div className="h-full flex flex-col rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden">
            <div className="px-3 py-1.5 bg-zinc-900 border-b border-zinc-800 flex justify-between items-center text-[11px] text-zinc-400 font-mono">
              <span>README.md — Raw Markdown</span>
              <span>{value.length} characters</span>
            </div>
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="flex-1 w-full p-4 bg-transparent text-zinc-200 font-mono text-xs leading-relaxed resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 overflow-y-auto"
              placeholder="Enter markdown content..."
              spellCheck={false}
            />
          </div>
        )}

        {/* Live Preview Area */}
        {(editorMode === 'split' || editorMode === 'preview-only') && (
          <div className="h-full flex flex-col rounded-xl bg-zinc-950/80 border border-zinc-800 overflow-hidden">
            <div className="px-3 py-1.5 bg-zinc-900 border-b border-zinc-800 flex justify-between items-center text-[11px] text-zinc-400 font-mono">
              <span>Live Synchronized Preview</span>
              <span className="text-emerald-400 flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse" /> Live</span>
            </div>
            <div className="flex-1 p-5 overflow-y-auto text-zinc-200 text-xs leading-relaxed space-y-4">
              <div className="whitespace-pre-wrap font-sans text-xs text-zinc-300">
                {value}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
