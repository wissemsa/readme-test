export type DeviceType = 'macbook' | 'iphone' | 'studio-display' | 'browser' | 'ipad';

export type DeviceColor = 'space-black' | 'silver' | 'titanium-gold' | 'midnight';

export type ViewAngle = 'flat' | 'angle-left' | 'angle-right' | 'isometric' | 'hero';

export type BackdropType = 
  | 'midnight-glow' 
  | 'cyber-neon' 
  | 'deep-sunset' 
  | 'studio-slate' 
  | 'transparent' 
  | 'desk-wood';

export type ScreenContentType = 
  | 'live-dashboard' 
  | 'readme-preview' 
  | 'architecture' 
  | 'custom-url';

export type StudioTab = 
  | 'mockup-studio' 
  | 'readme-viewer' 
  | 'split-view' 
  | 'banner-generator' 
  | 'badge-creator';

export interface DeviceConfig {
  device: DeviceType;
  color: DeviceColor;
  angle: ViewAngle;
  backdrop: BackdropType;
  reflection: boolean;
  shadowIntensity: number; // 0 to 100
  zoom: number; // 50 to 150
  contentType: ScreenContentType;
  customUrl?: string;
  is3dInteractive: boolean;
}
