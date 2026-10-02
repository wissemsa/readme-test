import React from 'react';
import { 
  DeviceConfig, 
  DeviceType, 
  DeviceColor, 
  ViewAngle, 
  BackdropType 
} from '../types/index.ts';
import { 
  Laptop, 
  Smartphone, 
  Monitor, 
  Globe, 
  Tablet, 
  Sparkles, 
  Sliders, 
  Sun, 
  ZoomIn, 
  Compass, 
  Palette,
  Layers,
  Wand2
} from 'lucide-react';

interface DeviceControlsProps {
  config: DeviceConfig;
  onChange: (updated: Partial<DeviceConfig>) => void;
  onApplyPreset: (preset: 'hero' | 'minimal' | 'mobile' | 'studio') => void;
}

export const DeviceControls: React.FC<DeviceControlsProps> = ({
  config,
  onChange,
  onApplyPreset,
}) => {
  return (
    <div className="w-full bg-zinc-900/90 border border-zinc-800/80 rounded-2xl p-4 sm:p-5 space-y-5 text-zinc-200">
      {/* Quick Studio Presets */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center space-x-1.5">
            <Wand2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Studio Presets</span>
          </label>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: 'hero', name: 'Hero Perspective', desc: '3D Angled + Aurora' },
            { id: 'minimal', name: 'Docs Clean', desc: 'Flat + Slate' },
            { id: 'mobile', name: 'Mobile Focus', desc: 'iPhone + Island' },
            { id: 'studio', name: 'Studio Desktop', desc: '32" 5K Monitor' },
          ].map((preset) => (
            <button
              key={preset.id}
              onClick={() => onApplyPreset(preset.id as any)}
              className="p-2 rounded-xl bg-zinc-950/70 hover:bg-zinc-800 border border-zinc-800/70 text-left transition active:scale-95 group"
            >
              <div className="text-xs font-semibold text-zinc-200 group-hover:text-blue-400">
                {preset.name}
              </div>
              <div className="text-[10px] text-zinc-500 mt-0.5">
                {preset.desc}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-zinc-800/60" />

      {/* Row 1: Hardware Device & Finish Color */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Device Selection */}
        <div>
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 block flex items-center space-x-1.5">
            <Laptop className="w-3.5 h-3.5 text-zinc-400" />
            <span>Hardware Device Frame</span>
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
            {[
              { id: 'macbook', label: 'MacBook', icon: Laptop },
              { id: 'iphone', label: 'iPhone', icon: Smartphone },
              { id: 'studio-display', label: 'Studio Display', icon: Monitor },
              { id: 'browser', label: 'Browser', icon: Globe },
              { id: 'ipad', label: 'iPad Pro', icon: Tablet },
            ].map((item) => {
              const Icon = item.icon;
              const isSelected = config.device === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onChange({ device: item.id as DeviceType })}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border text-xs transition ${
                    isSelected
                      ? 'bg-blue-600/15 border-blue-500/80 text-blue-300 shadow-sm'
                      : 'bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                  }`}
                >
                  <Icon className="w-4 h-4 mb-1" />
                  <span className="text-[11px] truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Chassis Metal Finish */}
        <div>
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 block flex items-center space-x-1.5">
            <Palette className="w-3.5 h-3.5 text-zinc-400" />
            <span>Chassis Metal Finish</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {[
              { id: 'space-black', name: 'Space Black', hex: '#18181b' },
              { id: 'silver', name: 'Natural Silver', hex: '#d4d4d8' },
              { id: 'titanium-gold', name: 'Titanium Gold', hex: '#3a352f' },
              { id: 'midnight', name: 'Midnight Blue', hex: '#0f172a' },
            ].map((c) => {
              const isSelected = config.color === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => onChange({ color: c.id as DeviceColor })}
                  className={`flex items-center space-x-2 p-2 rounded-xl border text-xs transition ${
                    isSelected
                      ? 'bg-blue-600/15 border-blue-500/80 text-blue-300'
                      : 'bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <span 
                    className="w-3.5 h-3.5 rounded-full border border-white/20 shrink-0" 
                    style={{ backgroundColor: c.hex }} 
                  />
                  <span className="text-[11px] truncate">{c.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="h-px bg-zinc-800/60" />

      {/* Row 2: 3D Camera Angle & Studio Lighting Backdrop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Camera Angle */}
        <div>
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 block flex items-center space-x-1.5">
            <Compass className="w-3.5 h-3.5 text-zinc-400" />
            <span>3D Camera Angle</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {[
              { id: 'flat', label: 'Flat Frontal' },
              { id: 'isometric', label: 'Isometric 3D' },
              { id: 'angle-left', label: 'Angle Left' },
              { id: 'angle-right', label: 'Angle Right' },
              { id: 'hero', label: 'Floating Hero' },
            ].map((angle) => {
              const isSelected = config.angle === angle.id;
              return (
                <button
                  key={angle.id}
                  onClick={() => onChange({ angle: angle.id as ViewAngle })}
                  className={`p-2 rounded-xl border text-xs font-medium transition text-center ${
                    isSelected
                      ? 'bg-blue-600/15 border-blue-500/80 text-blue-300'
                      : 'bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {angle.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Studio Lighting Backdrop */}
        <div>
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 block flex items-center space-x-1.5">
            <Sun className="w-3.5 h-3.5 text-zinc-400" />
            <span>Studio Lighting Backdrop</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {[
              { id: 'midnight-glow', name: 'Midnight Glow' },
              { id: 'cyber-neon', name: 'Cyber Neon' },
              { id: 'deep-sunset', name: 'Deep Sunset' },
              { id: 'studio-slate', name: 'Studio Slate' },
              { id: 'transparent', name: 'Transparent Grid' },
              { id: 'desk-wood', name: 'Walnut Desk' },
            ].map((b) => {
              const isSelected = config.backdrop === b.id;
              return (
                <button
                  key={b.id}
                  onClick={() => onChange({ backdrop: b.id as BackdropType })}
                  className={`p-2 rounded-xl border text-xs font-medium transition text-center truncate ${
                    isSelected
                      ? 'bg-blue-600/15 border-blue-500/80 text-blue-300'
                      : 'bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {b.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="h-px bg-zinc-800/60" />

      {/* Row 3: Sliders (Shadow, Zoom) and Glare Toggle */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
        {/* Shadow Intensity */}
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-zinc-400 font-medium">Ground Shadow</span>
            <span className="text-zinc-300 font-mono">{config.shadowIntensity}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={config.shadowIntensity}
            onChange={(e) => onChange({ shadowIntensity: Number(e.target.value) })}
            className="w-full accent-blue-500 bg-zinc-800 h-1.5 rounded-lg cursor-pointer"
          />
        </div>

        {/* Zoom Level */}
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-zinc-400 font-medium">Display Zoom</span>
            <span className="text-zinc-300 font-mono">{config.zoom}%</span>
          </div>
          <input
            type="range"
            min="50"
            max="130"
            value={config.zoom}
            onChange={(e) => onChange({ zoom: Number(e.target.value) })}
            className="w-full accent-blue-500 bg-zinc-800 h-1.5 rounded-lg cursor-pointer"
          />
        </div>

        {/* Glass Reflection Toggle */}
        <div className="flex items-center justify-between sm:justify-center space-x-3 pt-2">
          <span className="text-xs font-medium text-zinc-400">Glass Reflection:</span>
          <button
            onClick={() => onChange({ reflection: !config.reflection })}
            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition ${
              config.reflection
                ? 'bg-blue-600/20 border-blue-500/80 text-blue-300'
                : 'bg-zinc-950 border-zinc-800 text-zinc-500'
            }`}
          >
            {config.reflection ? 'Enabled' : 'Disabled'}
          </button>
        </div>
      </div>
    </div>
  );
};
