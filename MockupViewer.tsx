import React, { useState, useRef } from 'react';
import { 
  DeviceConfig, 
  DeviceType, 
  DeviceColor, 
  ViewAngle, 
  BackdropType 
} from '../types/index.ts';
import { InnerAppDemo } from './InnerAppDemo.tsx';
import { 
  Laptop, 
  Smartphone, 
  Monitor, 
  Globe, 
  Tablet, 
  RotateCw, 
  Sparkles, 
  Lock, 
  ShieldCheck, 
  Wifi, 
  Battery, 
  Volume2, 
  Music,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

interface MockupViewerProps {
  config: DeviceConfig;
  onConfigChange: (updated: Partial<DeviceConfig>) => void;
  onExportMarkdown: () => void;
  onDownloadImage: () => void;
}

export const MockupViewer: React.FC<MockupViewerProps> = ({
  config,
  onConfigChange,
  onExportMarkdown,
  onDownloadImage,
}) => {
  const [dynamicIslandExpanded, setDynamicIslandExpanded] = useState(false);
  const [tiltOffset, setTiltOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle interactive 3D mouse tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!config.is3dInteractive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTiltOffset({ x: x * 18, y: -y * 18 });
  };

  const handleMouseLeave = () => {
    setTiltOffset({ x: 0, y: 0 });
  };

  // Base 3D rotation transform based on view angle
  const getAngleTransform = (angle: ViewAngle) => {
    switch (angle) {
      case 'angle-left':
        return 'rotateY(-20deg) rotateX(10deg) rotateZ(3deg)';
      case 'angle-right':
        return 'rotateY(20deg) rotateX(10deg) rotateZ(-3deg)';
      case 'isometric':
        return 'rotateX(24deg) rotateY(-18deg) rotateZ(6deg)';
      case 'hero':
        return 'rotateX(12deg) rotateY(-8deg) rotateZ(1deg)';
      case 'flat':
      default:
        return 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
    }
  };

  // Device color styling
  const getColorClasses = (color: DeviceColor, device: DeviceType) => {
    switch (color) {
      case 'silver':
        return {
          chassis: 'bg-gradient-to-b from-[#e5e5ea] via-[#d1d1d6] to-[#b0b0b8] border-zinc-300',
          trim: 'bg-[#e5e5ea]',
          metalHighlight: 'rgba(255,255,255,0.4)',
        };
      case 'titanium-gold':
        return {
          chassis: 'bg-gradient-to-b from-[#3a352f] via-[#2f2b26] to-[#1e1c19] border-[#4a443c]',
          trim: 'bg-[#3a352f]',
          metalHighlight: 'rgba(212,175,55,0.2)',
        };
      case 'midnight':
        return {
          chassis: 'bg-gradient-to-b from-[#172033] via-[#0f172a] to-[#080d1a] border-blue-900/60',
          trim: 'bg-[#172033]',
          metalHighlight: 'rgba(96,165,250,0.2)',
        };
      case 'space-black':
      default:
        return {
          chassis: 'bg-gradient-to-b from-[#27272a] via-[#18181b] to-[#09090b] border-zinc-700/80',
          trim: 'bg-[#1c1c1f]',
          metalHighlight: 'rgba(255,255,255,0.15)',
        };
    }
  };

  // Backdrop background styling
  const getBackdropStyle = (backdrop: BackdropType) => {
    switch (backdrop) {
      case 'cyber-neon':
        return 'bg-[#090a12] [background-image:radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(168,85,247,0.22),rgba(59,130,246,0.12),transparent_70%)]';
      case 'deep-sunset':
        return 'bg-[#100a0e] [background-image:radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(244,63,94,0.2),rgba(234,88,12,0.14),transparent_70%)]';
      case 'studio-slate':
        return 'bg-[#121417] [background-image:radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.06),transparent_65%)]';
      case 'transparent':
        return 'bg-[repeating-conic-gradient(#18181b_0%_25%,#27272a_0%_50%)] bg-[length:24px_24px]';
      case 'desk-wood':
        return 'bg-gradient-to-b from-[#18120c] via-[#211812] to-[#120c08] border-zinc-800';
      case 'midnight-glow':
      default:
        return 'bg-[#08090d] [background-image:radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(59,130,246,0.18),rgba(14,165,233,0.08),transparent_70%)]';
    }
  };

  const colorStyles = getColorClasses(config.color, config.device);
  const baseRotation = getAngleTransform(config.angle);
  const activeTransform = config.is3dInteractive
    ? `${baseRotation} rotateY(${tiltOffset.x}deg) rotateX(${tiltOffset.y}deg)`
    : baseRotation;

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full min-h-[580px] rounded-2xl border border-zinc-800/80 overflow-hidden flex flex-col items-center justify-center p-4 sm:p-8 select-none transition-colors duration-500 ${getBackdropStyle(config.backdrop)}`}
      style={{ perspective: '1600px' }}
    >
      {/* Decorative Grid / Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Top Floating Badge Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-30 pointer-events-auto">
        <div className="flex items-center space-x-2 bg-zinc-900/90 backdrop-blur-md border border-zinc-800/80 px-3 py-1.5 rounded-full shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-zinc-300 capitalize">
            {config.device.replace('-', ' ')}
          </span>
          <span className="text-zinc-600">·</span>
          <span className="text-[11px] text-zinc-400 capitalize">
            {config.angle.replace('-', ' ')} View
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onConfigChange({ is3dInteractive: !config.is3dInteractive })}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border flex items-center space-x-1.5 transition ${
              config.is3dInteractive 
                ? 'bg-blue-600/20 border-blue-500/50 text-blue-300' 
                : 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-zinc-200'
            }`}
            title="Toggle cursor 3D gyroscope tracking"
          >
            <RotateCw className={`w-3.5 h-3.5 ${config.is3dInteractive ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">3D Gyro</span>
          </button>

          <button
            onClick={onExportMarkdown}
            className="px-3 py-1.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-xs font-medium text-zinc-200 border border-zinc-700/80 shadow flex items-center space-x-1 transition active:scale-95"
            title="Copy Markdown code to paste into README.md"
          >
            <span>Copy for README</span>
          </button>
        </div>
      </div>

      {/* 3D SCENE CONTAINER */}
      <div 
        className="w-full flex-1 flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `scale(${config.zoom / 100})`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div 
          className="relative transition-transform duration-500 ease-out flex items-center justify-center"
          style={{
            transform: activeTransform,
            transformStyle: 'preserve-3d',
          }}
        >

          {/* ========================================================= */}
          {/* DEVICE 1: MACBOOK PRO 16"                                */}
          {/* ========================================================= */}
          {config.device === 'macbook' && (
            <div className="relative flex flex-col items-center group">
              {/* Display Screen Lid */}
              <div 
                className={`relative w-[340px] sm:w-[620px] md:w-[740px] aspect-[16/10] rounded-2xl p-2.5 sm:p-3.5 ${colorStyles.chassis} shadow-2xl transition-all duration-300`}
                style={{
                  boxShadow: `0 35px 70px -15px rgba(0, 0, 0, ${config.shadowIntensity / 80}), 0 0 0 1px rgba(255,255,255,0.08)`,
                }}
              >
                {/* Metallic Inner Edge Rim */}
                <div className="w-full h-full bg-black rounded-xl overflow-hidden relative flex flex-col border border-zinc-800/80">
                  {/* Notch Bar */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-3.5 sm:h-4.5 bg-black rounded-b-xl z-30 flex items-center justify-center space-x-2 px-3">
                    {/* Camera Lens */}
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                      <div className="w-0.5 h-0.5 rounded-full bg-blue-500/80" />
                    </div>
                    {/* Sensor Dot */}
                    <div className="w-1 h-1 rounded-full bg-emerald-500/60" />
                  </div>

                  {/* Inner Screen Feed */}
                  <div className="w-full h-full relative overflow-hidden">
                    <InnerAppDemo />
                  </div>

                  {/* Glass Reflection Sheen */}
                  {config.reflection && (
                    <div 
                      className="absolute inset-0 pointer-events-none z-20 opacity-30"
                      style={{
                        background: 'linear-gradient(115deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 35%, transparent 60%)',
                      }}
                    />
                  )}
                </div>
              </div>

              {/* MacBook Bottom Base & Keyboard Deck */}
              <div 
                className={`relative -mt-0.5 w-[370px] sm:w-[680px] md:w-[810px] h-3 sm:h-4.5 rounded-b-2xl ${colorStyles.chassis} shadow-2xl border-t border-zinc-700/60 flex justify-center`}
                style={{
                  boxShadow: `0 25px 45px rgba(0,0,0,${config.shadowIntensity / 90})`,
                }}
              >
                {/* Center Lid Notch Opening Cutout */}
                <div className="w-14 sm:w-20 h-1.5 bg-zinc-950 rounded-b-md shadow-inner" />
              </div>

              {/* Soft Ground Contact Shadow */}
              <div 
                className="w-[360px] sm:w-[660px] md:w-[780px] h-5 bg-black/60 blur-md rounded-full mt-1"
                style={{ opacity: config.shadowIntensity / 100 }}
              />
            </div>
          )}

          {/* ========================================================= */}
          {/* DEVICE 2: IPHONE 16 PRO                                  */}
          {/* ========================================================= */}
          {config.device === 'iphone' && (
            <div className="relative flex flex-col items-center">
              {/* iPhone Frame */}
              <div 
                className={`relative w-[280px] sm:w-[320px] aspect-[9/19.5] rounded-[48px] p-3 sm:p-3.5 ${colorStyles.chassis} shadow-2xl transition-all duration-300`}
                style={{
                  boxShadow: `0 35px 70px -10px rgba(0, 0, 0, ${config.shadowIntensity / 70}), 0 0 0 1px rgba(255,255,255,0.12)`,
                }}
              >
                {/* Left Physical Buttons (Action button, Volume up/down) */}
                <div className="absolute -left-1 top-24 w-1 h-7 bg-zinc-700 rounded-l" />
                <div className="absolute -left-1 top-36 w-1 h-12 bg-zinc-700 rounded-l" />
                <div className="absolute -left-1 top-52 w-1 h-12 bg-zinc-700 rounded-l" />
                
                {/* Right Power Key */}
                <div className="absolute -right-1 top-32 w-1 h-16 bg-zinc-700 rounded-r" />

                {/* Inner OLED Screen */}
                <div className="w-full h-full bg-black rounded-[38px] overflow-hidden relative flex flex-col border border-zinc-900">
                  {/* Status Bar */}
                  <div className="w-full px-6 pt-2.5 pb-1 flex items-center justify-between z-30 text-[11px] font-semibold text-white">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1.5 text-zinc-300">
                      <Wifi className="w-3 h-3" />
                      <span className="text-[10px] font-mono">5G</span>
                      <Battery className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>

                  {/* Interactive Dynamic Island */}
                  <div className="w-full flex justify-center z-40 mb-1">
                    <div 
                      onClick={() => setDynamicIslandExpanded(!dynamicIslandExpanded)}
                      className={`bg-black rounded-full border border-zinc-800/80 transition-all duration-300 cursor-pointer shadow-lg flex items-center px-3 text-white ${
                        dynamicIslandExpanded 
                          ? 'w-64 h-10 justify-between' 
                          : 'w-24 sm:w-28 h-7 justify-center space-x-2'
                      }`}
                    >
                      {dynamicIslandExpanded ? (
                        <>
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center">
                              <Music className="w-3 h-3 text-white" />
                            </div>
                            <div className="text-[10px]">
                              <p className="font-semibold leading-tight">README Pro</p>
                              <p className="text-zinc-400 text-[8px]">Live Showcase Stream</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="w-1 h-3 bg-emerald-400 rounded-full animate-bounce" />
                            <span className="w-1 h-4 bg-emerald-400 rounded-full animate-bounce delay-75" />
                            <span className="w-1 h-2 bg-emerald-400 rounded-full animate-bounce delay-150" />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-800" />
                          <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
                        </>
                      )}
                    </div>
                  </div>

                  {/* Screen Feed */}
                  <div className="w-full flex-1 relative overflow-hidden">
                    <InnerAppDemo isMobile={true} />
                  </div>

                  {/* Bottom Home Indicator Bar */}
                  <div className="w-full py-1.5 flex justify-center bg-black/80 z-30">
                    <div className="w-28 h-1 bg-zinc-400/80 rounded-full" />
                  </div>

                  {/* Screen Glare Sheen */}
                  {config.reflection && (
                    <div 
                      className="absolute inset-0 pointer-events-none z-20 opacity-20"
                      style={{
                        background: 'linear-gradient(130deg, rgba(255,255,255,0.4) 0%, transparent 45%)',
                      }}
                    />
                  )}
                </div>
              </div>

              {/* iPhone Contact Shadow */}
              <div 
                className="w-48 sm:w-56 h-4 bg-black/60 blur-md rounded-full mt-3"
                style={{ opacity: config.shadowIntensity / 100 }}
              />
            </div>
          )}

          {/* ========================================================= */}
          {/* DEVICE 3: APPLE STUDIO DISPLAY 32"                        */}
          {/* ========================================================= */}
          {config.device === 'studio-display' && (
            <div className="relative flex flex-col items-center">
              {/* Display Bezel */}
              <div 
                className="relative w-[340px] sm:w-[640px] md:w-[780px] aspect-[16/9] rounded-xl p-3 bg-zinc-950 border border-zinc-800 shadow-2xl"
                style={{
                  boxShadow: `0 35px 70px -15px rgba(0, 0, 0, ${config.shadowIntensity / 80})`,
                }}
              >
                {/* Center Top Camera Dot */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-zinc-800 border border-zinc-700" />

                {/* Display Screen */}
                <div className="w-full h-full bg-black rounded-md overflow-hidden relative border border-zinc-900">
                  <InnerAppDemo />

                  {config.reflection && (
                    <div 
                      className="absolute inset-0 pointer-events-none z-20 opacity-20"
                      style={{
                        background: 'linear-gradient(110deg, rgba(255,255,255,0.3) 0%, transparent 50%)',
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Aluminum Stand Neck */}
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-b from-zinc-400 via-zinc-300 to-zinc-500 rounded-t-sm shadow-md flex items-center justify-center relative">
                {/* Cable Pass-Through Hole */}
                <div className="w-6 h-10 rounded-full bg-zinc-800/80 border border-zinc-700/60 shadow-inner" />
              </div>

              {/* Aluminum Stand Base Foot */}
              <div 
                className="w-48 sm:w-64 h-3 rounded-b-xl bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-400 shadow-lg border-t border-zinc-100/40"
              />

              {/* Desk Shadow */}
              <div 
                className="w-64 sm:w-80 h-3 bg-black/70 blur-md rounded-full -mt-0.5"
                style={{ opacity: config.shadowIntensity / 100 }}
              />
            </div>
          )}

          {/* ========================================================= */}
          {/* DEVICE 4: SAFARI BROWSER WINDOW                          */}
          {/* ========================================================= */}
          {config.device === 'browser' && (
            <div className="relative flex flex-col items-center">
              <div 
                className="relative w-[340px] sm:w-[640px] md:w-[780px] aspect-[16/10] rounded-xl bg-zinc-950 border border-zinc-800 shadow-2xl flex flex-col overflow-hidden"
                style={{
                  boxShadow: `0 35px 70px -15px rgba(0, 0, 0, ${config.shadowIntensity / 80})`,
                }}
              >
                {/* Browser Window Header Chrome */}
                <div className="px-3.5 py-2.5 bg-zinc-900/90 border-b border-zinc-800/80 flex items-center justify-between shrink-0">
                  {/* Traffic Lights */}
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/90 hover:opacity-80 transition cursor-pointer" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/90 hover:opacity-80 transition cursor-pointer" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/90 hover:opacity-80 transition cursor-pointer" />
                  </div>

                  {/* Browser URL Bar */}
                  <div className="flex items-center space-x-1.5 px-3 py-1 bg-zinc-950/80 border border-zinc-800/80 rounded-md w-60 sm:w-80 text-zinc-300 text-xs shadow-inner">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate font-mono text-[11px] text-zinc-300">
                      https://readmepro.studio/app
                    </span>
                  </div>

                  {/* Right Window Controls */}
                  <div className="flex items-center space-x-2 text-zinc-500 text-xs">
                    <span className="hidden sm:inline text-[11px]">Safari 18</span>
                  </div>
                </div>

                {/* Inner Browser Content */}
                <div className="w-full flex-1 relative overflow-hidden bg-black">
                  <InnerAppDemo />
                </div>
              </div>

              {/* Shadow */}
              <div 
                className="w-[330px] sm:w-[620px] md:w-[750px] h-4 bg-black/60 blur-md rounded-full mt-2"
                style={{ opacity: config.shadowIntensity / 100 }}
              />
            </div>
          )}

          {/* ========================================================= */}
          {/* DEVICE 5: IPAD PRO 13"                                   */}
          {/* ========================================================= */}
          {config.device === 'ipad' && (
            <div className="relative flex flex-col items-center">
              {/* Apple Pencil Dock on top */}
              <div className="w-36 h-1.5 bg-zinc-400 rounded-t-sm mb-0.5 opacity-80" />

              <div 
                className={`relative w-[320px] sm:w-[580px] md:w-[680px] aspect-[4/3] rounded-[30px] p-3 ${colorStyles.chassis} shadow-2xl`}
                style={{
                  boxShadow: `0 35px 70px -15px rgba(0, 0, 0, ${config.shadowIntensity / 80})`,
                }}
              >
                {/* Inner Screen */}
                <div className="w-full h-full bg-black rounded-[20px] overflow-hidden relative border border-zinc-900 flex flex-col">
                  {/* Subtle top bezel camera */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-zinc-800" />
                  
                  <div className="w-full h-full relative overflow-hidden">
                    <InnerAppDemo />
                  </div>

                  {config.reflection && (
                    <div 
                      className="absolute inset-0 pointer-events-none z-20 opacity-20"
                      style={{
                        background: 'linear-gradient(120deg, rgba(255,255,255,0.35) 0%, transparent 45%)',
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Tablet Shadow */}
              <div 
                className="w-[300px] sm:w-[550px] md:w-[640px] h-4 bg-black/60 blur-md rounded-full mt-2"
                style={{ opacity: config.shadowIntensity / 100 }}
              />
            </div>
          )}

        </div>
      </div>

      {/* Bottom Floating Control Bar */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-30 pointer-events-auto">
        <div className="flex items-center space-x-1.5 bg-zinc-900/90 backdrop-blur-md border border-zinc-800/80 px-2.5 py-1.5 rounded-full shadow-lg">
          {(['macbook', 'iphone', 'studio-display', 'browser', 'ipad'] as DeviceType[]).map((d) => (
            <button
              key={d}
              onClick={() => onConfigChange({ device: d })}
              className={`px-2.5 py-1 rounded-full text-xs font-medium transition ${
                config.device === d
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {d === 'macbook' && 'MacBook'}
              {d === 'iphone' && 'iPhone'}
              {d === 'studio-display' && 'Studio Display'}
              {d === 'browser' && 'Browser'}
              {d === 'ipad' && 'iPad'}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={onDownloadImage}
            className="px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 transition active:scale-95 flex items-center space-x-1.5"
          >
            <span>Download PNG Mockup</span>
          </button>
        </div>
      </div>
    </div>
  );
};
