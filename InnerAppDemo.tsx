import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Server, 
  Cpu, 
  Zap, 
  ArrowUpRight, 
  Search, 
  Bell, 
  Play, 
  CheckCircle2, 
  Clock, 
  Copy, 
  Check, 
  RefreshCw,
  Sliders,
  Terminal,
  ShieldCheck,
  Layers,
  ChevronRight
} from 'lucide-react';

interface InnerAppDemoProps {
  isMobile?: boolean;
}

export const InnerAppDemo: React.FC<InnerAppDemoProps> = ({ isMobile = false }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'telemetry' | 'endpoints' | 'deployments'>('overview');
  const [timeframe, setTimeframe] = useState<'1h' | '24h' | '7d'>('24h');
  const [copiedKey, setCopiedKey] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [reqCount, setReqCount] = useState(2481920);
  const [latency, setLatency] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setReqCount(prev => prev + Math.floor(Math.random() * 8) + 1);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const handleSimulate = () => {
    setIsSimulating(true);
    setLatency(Math.floor(Math.random() * 15) + 18);
    setReqCount(prev => prev + 540);
    setTimeout(() => setIsSimulating(false), 600);
  };

  const handleCopyKey = () => {
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className={`w-full h-full bg-[#0a0c10] text-zinc-100 flex flex-col font-sans select-none overflow-y-auto ${isMobile ? 'text-xs' : 'text-sm'}`}>
      {/* Top Application Bar */}
      <div className="border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur px-4 py-2.5 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-2.5">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-md shadow-blue-500/20">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
          <div>
            <div className="font-semibold text-xs tracking-tight flex items-center space-x-1.5">
              <span>VertexCloud</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                v2.4
              </span>
            </div>
            {!isMobile && (
              <p className="text-[10px] text-zinc-400">Cluster: us-east-prod-1</p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {!isMobile && (
            <div className="relative">
              <Search className="w-3 h-3 absolute left-2 top-2 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Search telemetry..." 
                readOnly
                value=""
                className="bg-zinc-900 border border-zinc-800 rounded-md pl-7 pr-2 py-1 text-xs text-zinc-300 w-36 focus:outline-none placeholder-zinc-500 cursor-default"
              />
            </div>
          )}
          <button 
            onClick={handleSimulate}
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700/60 text-zinc-200 text-xs transition active:scale-95"
            title="Trigger telemetry pulse"
          >
            <RefreshCw className={`w-3 h-3 ${isSimulating ? 'animate-spin text-blue-400' : 'text-zinc-400'}`} />
            <span className="hidden sm:inline">Pulse</span>
          </button>
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow">
            JD
          </div>
        </div>
      </div>

      {/* Sub Navigation Bar */}
      <div className="border-b border-zinc-800/60 bg-zinc-900/40 px-3 flex items-center justify-between shrink-0 overflow-x-auto no-scrollbar">
        <div className="flex space-x-1">
          {[
            { id: 'overview', label: 'Overview', icon: Activity },
            { id: 'telemetry', label: 'Telemetry', icon: Server },
            { id: 'endpoints', label: 'Endpoints', icon: Terminal },
            { id: 'deployments', label: 'Deploys', icon: Layers },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-1.5 px-2.5 py-2 border-b-2 font-medium text-xs transition ${
                  isActive 
                    ? 'border-blue-500 text-blue-400 bg-blue-500/5' 
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {!isMobile && (
          <div className="flex items-center space-x-1 py-1">
            {(['1h', '24h', '7d'] as const).map(tf => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-2 py-0.5 text-[11px] rounded transition ${
                  timeframe === tf 
                    ? 'bg-zinc-800 text-zinc-100 font-medium' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="p-3 sm:p-4 flex-1 space-y-3 sm:space-y-4">
        {activeTab === 'overview' && (
          <>
            {/* Metric KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
              <div className="p-3 rounded-lg bg-zinc-900/70 border border-zinc-800/80 relative overflow-hidden">
                <div className="flex justify-between items-start text-zinc-400 mb-1">
                  <span className="text-[11px] font-medium">Throughput</span>
                  <Activity className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {(reqCount / 1000000).toFixed(2)}M
                </div>
                <div className="flex items-center text-[10px] text-emerald-400 mt-1 font-medium">
                  <ArrowUpRight className="w-3 h-3 mr-0.5" />
                  <span>+18.4% vs last period</span>
                </div>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-60" />
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/70 border border-zinc-800/80 relative overflow-hidden">
                <div className="flex justify-between items-start text-zinc-400 mb-1">
                  <span className="text-[11px] font-medium">P99 Latency</span>
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {latency}ms
                </div>
                <div className="flex items-center text-[10px] text-emerald-400 mt-1 font-medium">
                  <span>Optimal (&lt; 50ms SLA)</span>
                </div>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-emerald-500 opacity-60" />
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/70 border border-zinc-800/80 relative overflow-hidden">
                <div className="flex justify-between items-start text-zinc-400 mb-1">
                  <span className="text-[11px] font-medium">Uptime (30d)</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                  99.992%
                </div>
                <div className="flex items-center text-[10px] text-zinc-400 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                  <span>Zero incidents today</span>
                </div>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-500 opacity-60" />
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/70 border border-zinc-800/80 relative overflow-hidden">
                <div className="flex justify-between items-start text-zinc-400 mb-1">
                  <span className="text-[11px] font-medium">Active Pods</span>
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                  48 / 48
                </div>
                <div className="flex items-center text-[10px] text-purple-400 mt-1 font-medium">
                  <span>Auto-scaled (+6 pods)</span>
                </div>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-purple-500 opacity-60" />
              </div>
            </div>

            {/* Interactive Visual Graph Box */}
            <div className="p-3 sm:p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-zinc-100 flex items-center space-x-1.5">
                    <span>Edge Network Traffic Distribution</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </h4>
                  <p className="text-[10px] text-zinc-400">Live requests streamed across 32 worldwide edge nodes</p>
                </div>
                <div className="flex items-center space-x-2 text-[10px]">
                  <span className="flex items-center text-blue-400"><span className="w-2 h-2 rounded-full bg-blue-400 mr-1" /> HTTP/3</span>
                  <span className="flex items-center text-cyan-400"><span className="w-2 h-2 rounded-full bg-cyan-400 mr-1" /> gRPC</span>
                </div>
              </div>

              {/* Bar Sparkline Simulation */}
              <div className="h-20 sm:h-24 flex items-end justify-between gap-1 pt-4 pb-1 px-1 bg-zinc-950/50 rounded border border-zinc-800/40">
                {[45, 62, 58, 74, 90, 85, 78, 65, 88, 95, 72, 80, 92, 100, 84, 70, 89, 93, 85, 78, 92, 88, 96, 91].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative h-full justify-end">
                    <div 
                      style={{ height: `${val}%` }} 
                      className={`w-full rounded-t-sm transition-all duration-300 ${
                        idx === 13 ? 'bg-gradient-to-t from-cyan-500 to-blue-400' : 'bg-blue-600/70 group-hover:bg-blue-400'
                      }`}
                    />
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-6 bg-zinc-800 text-[9px] text-white px-1.5 py-0.5 rounded shadow pointer-events-none z-10 whitespace-nowrap">
                      {val * 120} req/s
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro Live Feed Table */}
            <div className="rounded-lg bg-zinc-900/60 border border-zinc-800/80 overflow-hidden">
              <div className="px-3 py-2 bg-zinc-900/90 border-b border-zinc-800/80 flex items-center justify-between text-[11px] font-medium text-zinc-300">
                <span>Recent Production Invocations</span>
                <span className="text-[10px] text-zinc-500 font-mono">Realtime Stream</span>
              </div>
              <div className="divide-y divide-zinc-800/50 text-[11px]">
                {[
                  { method: 'POST', endpoint: '/api/v1/mockups/generate', status: 200, time: '14ms', ip: '192.88.99.1' },
                  { method: 'GET', endpoint: '/api/v1/projects/schema', status: 200, time: '8ms', ip: '142.250.72.14' },
                  { method: 'POST', endpoint: '/api/v1/badges/render', status: 201, time: '21ms', ip: '35.190.247.9' },
                  { method: 'GET', endpoint: '/api/v1/healthcheck', status: 200, time: '3ms', ip: '127.0.0.1' },
                ].map((row, idx) => (
                  <div key={idx} className="px-3 py-1.5 flex items-center justify-between hover:bg-zinc-800/40 transition">
                    <div className="flex items-center space-x-2">
                      <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-bold ${
                        row.method === 'POST' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-emerald-500/20 text-emerald-400'
                      }`}>
                        {row.method}
                      </span>
                      <span className="font-mono text-zinc-200 truncate max-w-[140px] sm:max-w-xs">{row.endpoint}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-[10px]">
                      <span className="text-emerald-400 font-mono flex items-center">
                        <CheckCircle2 className="w-2.5 h-2.5 mr-1" />
                        {row.status}
                      </span>
                      <span className="text-zinc-400 font-mono">{row.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'telemetry' && (
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-zinc-900/70 border border-zinc-800/80">
              <h4 className="text-xs font-semibold text-zinc-100 mb-1">Live Worker Nodes</h4>
              <p className="text-[11px] text-zinc-400 mb-3">Instant cluster health across global regions</p>
              
              <div className="space-y-2">
                {[
                  { region: 'us-east-virginia', load: '34%', status: 'Healthy', ping: '12ms' },
                  { region: 'eu-west-frankfurt', load: '58%', status: 'Healthy', ping: '24ms' },
                  { region: 'ap-southeast-tokyo', load: '41%', status: 'Healthy', ping: '38ms' },
                  { region: 'sa-east-saopaulo', load: '19%', status: 'Healthy', ping: '64ms' },
                ].map((node, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded bg-zinc-950/40 border border-zinc-800/40 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="font-mono text-zinc-200">{node.region}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-[11px]">
                      <span className="text-zinc-400">Load: {node.load}</span>
                      <span className="text-blue-400 font-mono">{node.ping}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'endpoints' && (
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-zinc-900/70 border border-zinc-800/80">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-semibold text-zinc-100">API Authentication Key</h4>
                <button 
                  onClick={handleCopyKey}
                  className="flex items-center space-x-1 text-[11px] text-blue-400 hover:text-blue-300"
                >
                  {copiedKey ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedKey ? 'Copied' : 'Copy Key'}</span>
                </button>
              </div>
              <div className="p-2 rounded bg-zinc-950 font-mono text-[11px] text-zinc-300 border border-zinc-800/60 truncate">
                sk_live_9921_mockup_pro_prod_849204918230
              </div>
            </div>

            <div className="p-3 rounded-lg bg-zinc-900/70 border border-zinc-800/80 space-y-2">
              <h4 className="text-xs font-semibold text-zinc-100">Available Webhook Events</h4>
              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="p-1.5 rounded bg-zinc-950/60 border border-zinc-800/40 flex justify-between">
                  <span className="text-emerald-400">mockup.rendered.v2</span>
                  <span className="text-zinc-500">200ms latency</span>
                </div>
                <div className="p-1.5 rounded bg-zinc-950/60 border border-zinc-800/40 flex justify-between">
                  <span className="text-blue-400">readme.badge.generated</span>
                  <span className="text-zinc-500">45ms latency</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'deployments' && (
          <div className="space-y-2">
            {[
              { hash: 'e92fa1b', message: 'feat: add pro 3D macbook isometric mockup', author: 'Alex Chen', time: '14m ago', status: 'Live' },
              { hash: '7b80a42', message: 'perf: optimize vector SVG shadow rendering', author: 'Elena Rostov', time: '2h ago', status: 'Deployed' },
              { hash: '44c01d9', message: 'docs: update README with shield badges', author: 'Alex Chen', time: '5h ago', status: 'Deployed' },
            ].map((deploy, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-blue-400 font-semibold">{deploy.hash}</span>
                    <span className="text-zinc-200 font-medium">{deploy.message}</span>
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">
                    {deploy.author} · {deploy.time}
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  {deploy.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Status Bar */}
      <div className="border-t border-zinc-800/60 bg-zinc-950 px-3 py-1.5 flex items-center justify-between text-[10px] text-zinc-400 shrink-0">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>All Services Operational</span>
        </div>
        <div className="font-mono text-[9px] text-zinc-400">
          Engine: CSS-Vector 3D · 60 FPS
        </div>
      </div>
    </div>
  );
};
